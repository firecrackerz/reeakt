import { combineReducers } from 'redux';
import demoReducer from '@reducers/demo';

export const createActions = ({ state, action }: any, actions: any) => {
  const cases = actions[action.type];
  return cases ? cases() : state;
};

const rootReducer = combineReducers({
  demo: demoReducer
});

export default rootReducer;
