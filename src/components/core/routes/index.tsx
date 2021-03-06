import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './ui';

import HomeScreen from '@pages/home';
import NotFoundScreen from '@pages/not-found';

export const routesConfig: Array<RoutesType> = [
  { path: '/', exact: true, component: HomeScreen },
  { component: NotFoundScreen }
];

export default (routesList: Array<RoutesType>) => {
  const list = routesList ? (
    <React.Fragment>
      <GlobalStyle />

      <Switch>
        {routesList.map((route, i) => (
          <Route
            key={`route-${i}`}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => <route.component {...props} route={route} />}
          />
        ))}
      </Switch>
    </React.Fragment>
  ) : null;
  return list;
};
