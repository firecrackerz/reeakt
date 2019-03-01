import { createActions } from '@reducers/index';
import { FETCH_DEMO_REQUEST, FETCH_DEMO_SUCCESS, FETCH_DEMO_FAILURE } from '@reducers/demo/types';

interface InitialState {
  isLoading: boolean;
  error: any;
  data: object;
}

export const initialState: InitialState = {
  isLoading: false,
  error: null,
  data: {}
};

export default (state = initialState, action: any) => {
  return createActions(
    { state, action },
    {
      [FETCH_DEMO_REQUEST]: () => ({ ...state, isLoading: true }),
      [FETCH_DEMO_SUCCESS]: () => ({ ...state, isLoading: false, data: action.payload.data }),
      [FETCH_DEMO_FAILURE]: () => ({ ...state, isLoading: false, error: action.payload.error })
    }
  );
};
