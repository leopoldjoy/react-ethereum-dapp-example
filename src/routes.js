import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { App, Home, MetaCoin, NotFound } from './containers';
import { store, history } from './store';

export default () => (
  <Provider store={store}>
    {/* Outer App wrapper */}
    <App>
      {/* ConnectedRouter will use the store from Provider automatically */}
      <ConnectedRouter history={history}>
        <Switch>
          {/* Home (main) route */}
          <Route exact path="/" component={Home} />

          {/* Page routes */}
          <Route exact path="/metacoin" component={MetaCoin} />

          {/* Catch all route */}
          <Route component={NotFound} status={404} />
        </Switch>
      </ConnectedRouter>
    </App>
  </Provider>
);
