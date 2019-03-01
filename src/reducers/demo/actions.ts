import { FETCH_DEMO_REQUEST, FETCH_DEMO_SUCCESS, FETCH_DEMO_FAILURE } from '@reducers/demo/types';

export const getDemo = () => {
  return {
    type: FETCH_DEMO_REQUEST
  };
};

export const getDemoSuccess = (data: object) => {
  return {
    type: FETCH_DEMO_SUCCESS,
    payload: { data }
  };
};

export const getDemoFailure = (error: any) => {
  return {
    type: FETCH_DEMO_FAILURE,
    payload: { error }
  };
};
