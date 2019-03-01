import { createStore, compose, Store } from 'redux';
import Reducers from '@reducers/index';

function enableHMR(store: Store) {
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('@reducers/index', () => {
      const nextReducer = require('@reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }
}

export default (initialState: object): Store => {
  const store = createStore(
    Reducers,
    initialState,
    compose(
      process.env.NODE_ENV === 'development' &&
        typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : (f: any) => f
    )
  );

  enableHMR(store);
  return store;
};
