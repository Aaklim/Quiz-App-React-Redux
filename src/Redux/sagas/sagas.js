import { all, takeEvery, call, put } from 'redux-saga/effects';
import { GET_QUIZES_SAGA } from '../actions/actions';
import {
  getQuizes,
  toggleQuizesIsLoading,
} from '../actioncreators/actioncreators';
import { Api } from '../../axios/axiosApi';

function* getQuizesWatcher() {
  yield takeEvery(GET_QUIZES_SAGA, getQuizesWorker);
}
function* getQuizesWorker(action) {
  yield put(toggleQuizesIsLoading());
  const data = yield call(Api.getQuizes);
  yield put(getQuizes(data));
  yield put(toggleQuizesIsLoading());
}

export function* rootSaga() {
  yield all([getQuizesWatcher()]);
}
