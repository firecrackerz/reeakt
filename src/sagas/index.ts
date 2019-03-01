import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_DEMO_REQUEST } from '@reducers/demo/types';
import { fetchDemo } from '@sagas/demo';

export default function* rootSaga() {
  yield all([takeEvery(FETCH_DEMO_REQUEST, fetchDemo)]);
}
