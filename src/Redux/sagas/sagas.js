import { all, takeEvery, call, put } from 'redux-saga/effects';
import { GET_QUIZES_SAGA, GET_QUIZE_SAGA } from '../actions/actions';
import {
  getQuizes,
  getQuiz,
  toggleQuizesIsLoading,
} from '../actioncreators/actioncreators';
import { Api } from '../../axios/axiosApi';
////Quizes sagas
function* getQuizesWatcher() {
  yield takeEvery(GET_QUIZES_SAGA, getQuizesWorker);
}
function* getQuizesWorker(action) {
  yield put(toggleQuizesIsLoading());
  const data = yield call(Api.getQuizes);
  yield put(getQuizes(data));
  yield put(toggleQuizesIsLoading());
}
///////

///Quiz sagas
function* getQuizWatcher() {
  yield takeEvery(GET_QUIZE_SAGA, getQuizWorker);
}
function* getQuizWorker(action) {
  const data = yield call(Api.getQuize, action.payload);
  yield put(getQuiz(data));
}
///////
export function* rootSaga() {
  yield all([getQuizesWatcher(), getQuizWatcher()]);
}
