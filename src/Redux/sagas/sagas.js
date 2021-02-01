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
  GET_QUIZZES_SAGA,
  GET_QUIZE_SAGA,
  AUTH_GET_EMAIL_PASSWORD_SAGA,
  AUTH_LOGIN_SAGA,
  AUTH_REGISTER_SAGA,
  AUTH_LOGOUT_SAGA,
  AUTH_AUTO_LOGOUT_SAGA,
  DELETE_QUIZ_SAGA,
} from '../actions/actions'
import {
  getQuizzes,
  getQuiz,
  toggleQuizzesIsLoading,
  authGetEmailPassword,
  authGetToken,
  authError,
  authLogout,
  authLogoutSaga,
  authGetUserId,
  authAutologoutSaga,
  getQuizzesSaga,
  cleanQuizCreator,
} from '../actioncreators/actioncreators'
import Api from '../../axios/axiosApi'
/// /Quizes sagas

function* getQuizzesWorker(action) {
  yield put(toggleQuizzesIsLoading())
  const data = yield call(Api.getQuizzes, action.payload)
  yield put(getQuizzes(data))
  yield put(toggleQuizzesIsLoading())
}
function* getQuizzesWatcher() {
  yield takeEvery(GET_QUIZZES_SAGA, getQuizzesWorker)
}
/// ////

// Quiz sagas

function* getQuizWorker(action) {
  const data = yield call(
    Api.getQuize,
    action.payload.id,
    action.payload.userId,
  )
  yield put(getQuiz(data))
}
function* getQuizWatcher() {
  yield takeEvery(GET_QUIZE_SAGA, getQuizWorker)
}
/// ////

/// CreateQuiz sagas

function* createQuizWorker(action) {
  yield call(Api.createQuiz, action.payload.quiz, action.payload.userId)

  yield put(cleanQuizCreator())
}
function* createquizWatcher() {
  yield takeEvery(CREATE_QUIZ_SAGA, createQuizWorker)
}
/// //
/// Delete Quiz

function* deleteQuizWorker(action) {
  const response = yield call(
    Api.deleteQuiz,
    action.payload.quizId,
    action.payload.userId,
  )
  if (response.status === 200) {
    yield put(getQuizzesSaga(action.payload.userId))
  }
}
function* deleteQuizWatcher() {
  yield takeEvery(DELETE_QUIZ_SAGA, deleteQuizWorker)
}
// Auth sagas

function* authGetEmailPasswordWorker(action) {
  yield put(authGetEmailPassword(action.payload))
}
function* authGetEmailPasswordWatcher() {
  yield takeEvery(AUTH_GET_EMAIL_PASSWORD_SAGA, authGetEmailPasswordWorker)
}
/// //// AuthLogin

function* authLoginWorker(action) {
  const response = yield call(Api.authLogin, action.payload)

  if (response.data) {
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
    yield put(authError('Email or password error'))
  }
}
function* authLoginWatcher() {
  yield takeEvery(AUTH_LOGIN_SAGA, authLoginWorker)
}
/// /// AuthRegister

function* authRegisterWorker(action) {
  const response = yield call(Api.authRegisterSaga, action.payload)
  if (response.data) {
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
    yield put(authError('Email or password error'))
  }
}
function* authRegisterWatcher() {
  yield takeLatest(AUTH_REGISTER_SAGA, authRegisterWorker)
}

/// // AuthLogout

function* authLogoutWorker() {
  localStorage.removeItem('tokenID')
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationDate')
  localStorage.removeItem('userEmail')
  yield put(authLogout())
}
function* authLogoutWatcher() {
  yield takeEvery(AUTH_LOGOUT_SAGA, authLogoutWorker)
}
/// / AuthAutoLogout
function* authAutoLogoutWorker(action) {
  yield delay(action.payload * 1000)
  yield put(authLogoutSaga())
}
function* authAutoLogoutWatcher() {
  yield takeLatest(AUTH_AUTO_LOGOUT_SAGA, authAutoLogoutWorker)
}

// Root
function* rootSaga() {
  yield all([
    getQuizzesWatcher(),
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
export default rootSaga
