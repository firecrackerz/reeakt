import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from '@components/core/layout';

ReactDOM.render(
  <Provider store={createStore(combineReducers({}), { test: {} })}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
