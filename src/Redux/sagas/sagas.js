import {
  all,
  takeLatest,
  takeEvery,
  call,
  put,
  delay,
} from 'redux-saga/effects'
import {
  CREATE_QUIZ_SAGA,
  GET_QUIZES_SAGA,
  GET_QUIZE_SAGA,
  AUTH_GET_EMAIL_PASSWORD_SAGA,
  AUTH_LOGIN_SAGA,
  AUTH_REGISTER_SAGA,
  AUTH_LOGOUT_SAGA,
  AUTH_AUTO_LOGOUT_SAGA,
  DELETE_QUIZ_SAGA,
} from '../actions/actions'
import {
  getQuizes,
  getQuiz,
  toggleQuizesIsLoading,
  authGetEmailPassword,
  authGetToken,
  authError,
  authLogout,
  authLogoutSaga,
  authGetUserId,
  authAutologoutSaga,
  getQuizesSaga,
  cleanQuizCreator,
} from '../actioncreators/actioncreators'
import { Api } from '../../axios/axiosApi'
////Quizes sagas
function* getQuizesWatcher() {
  yield takeEvery(GET_QUIZES_SAGA, getQuizesWorker)
}
function* getQuizesWorker(action) {
  console.log('GetQizesAction', action)
  yield put(toggleQuizesIsLoading())
  const data = yield call(Api.getQuizes, action.payload)
  yield put(getQuizes(data))
  yield put(toggleQuizesIsLoading())
}
///////

// Quiz sagas
function* getQuizWatcher() {
  yield takeEvery(GET_QUIZE_SAGA, getQuizWorker)
}
function* getQuizWorker(action) {
  console.log('GetQuiz-action', action)
  const data = yield call(
    Api.getQuize,
    action.payload.id,
    action.payload.userId,
  )
  yield put(getQuiz(data))
}
///////

///CreateQuiz sagas
function* createquizWatcher() {
  yield takeEvery(CREATE_QUIZ_SAGA, createQuizWorker)
}
function* createQuizWorker(action) {
  const response = yield call(
    Api.createQuiz,
    action.payload.quiz,
    action.payload.userId,
  )
  console.log('Creator-Response', response)
  yield put(cleanQuizCreator())
}
/////
///Delete Quiz
function* deleteQuizWatcher() {
  yield takeEvery(DELETE_QUIZ_SAGA, deleteQuizWorker)
}
function* deleteQuizWorker(action) {
  const response = yield call(
    Api.deleteQuiz,
    action.payload.quizId,
    action.payload.userId,
  )
  console.log('DeleteedResponse', response.status)
  if (response.status === 200) {
    console.log('Deleted OK')
    yield put(getQuizesSaga(action.payload.userId))
  }
}
// Auth sagas
function* authGetEmailPasswordWatcher() {
  yield takeEvery(AUTH_GET_EMAIL_PASSWORD_SAGA, authGetEmailPasswordWorker)
}
function* authGetEmailPasswordWorker(action) {
  console.log('AUTHSAGA--------EM-PASSW', action)
  yield put(authGetEmailPassword(action.payload))
}
/////// AuthLogin
function* authLoginWatcher() {
  yield takeEvery(AUTH_LOGIN_SAGA, authLoginWorker)
}
function* authLoginWorker(action) {
  const response = yield call(Api.authLogin, action.payload)

  if (response.data) {
    console.log('Logined', response.data)
    const { idToken, localId, expiresIn, email } = response.data
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    localStorage.setItem('tokenID', idToken)
    localStorage.setItem('userId', localId)
    localStorage.setItem('userEmail', email)
    localStorage.setItem('expirationDate', expirationDate)
    yield put(authGetToken(idToken))
    yield put(authGetUserId(localId))
    yield put(authError(null))
    yield put(authAutologoutSaga(expiresIn))
  } else {
    console.log('No-User', response)
    yield put(authError('Email or password error'))
  }
}
////// AuthRegister

function* authRegisterWatcher() {
  yield takeLatest(AUTH_REGISTER_SAGA, authRegisterWorker)
}
function* authRegisterWorker(action) {
  const response = yield call(Api.authRegisterSaga, action.payload)
  console.log('AuthRegister-Respnse', response)
  if (response.data) {
    console.log('REgistered', response.data)
    const { idToken, localId, expiresIn } = response.data
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    localStorage.setItem('tokenID', idToken)
    localStorage.setItem('userId', localId)
    localStorage.setItem('expirationDate', expirationDate)
    yield put(authGetToken(idToken))
    yield put(authGetUserId(localId))
    yield put(authError(null))
    yield put(authAutologoutSaga(expiresIn))
  } else {
    console.log('REgister Problem', response)
    yield put(authError('Email or password error'))
  }
}

///// AuthLogout

function* authLogoutWatcher() {
  yield takeEvery(AUTH_LOGOUT_SAGA, authLogoutWorker)
}
function* authLogoutWorker() {
  localStorage.removeItem('tokenID')
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationDate')
  localStorage.removeItem('userEmail')
  yield put(authLogout())
}

//// AuthAutoLogout

function* authAutoLogoutWatcher() {
  yield takeLatest(AUTH_AUTO_LOGOUT_SAGA, authAutoLogoutWorker)
}
function* authAutoLogoutWorker(action) {
  yield delay(action.payload * 1000)
  yield put(authLogoutSaga())
}

// Root
export function* rootSaga() {
  yield all([
    getQuizesWatcher(),
    getQuizWatcher(),
    createquizWatcher(),
    authGetEmailPasswordWatcher(),
    authLoginWatcher(),
    authRegisterWatcher(),
    authLogoutWatcher(),
    authAutoLogoutWatcher(),
    deleteQuizWatcher(),
  ])
}
