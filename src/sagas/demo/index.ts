import { put, call } from 'redux-saga/effects';
import { getDemoSuccess, getDemoFailure } from '@reducers/demo/actions';
import { getDemoEndpoint } from '@services/API';

export function* fetchDemo() {
  try {
    const demo = yield call(getDemoEndpoint);
    yield put(getDemoSuccess(demo.data));
  } catch (error) {
    yield put(getDemoFailure(error));
  }
}
