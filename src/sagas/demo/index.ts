import { put, call } from 'redux-saga/effects';
import { getDemoSuccess, getDemoFailure } from '@reducers/demo/actions';
// import { getDemoEndpoint } from "~services/Api";

export function* fetchDemo() {
  try {
    // const tests = yield call(getDemoEndpoint);2
    yield put(getDemoSuccess({ lololo: 123 }));
  } catch (error) {
    yield put(getDemoFailure(error));
  }
}
