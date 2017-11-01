import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { App, Home, MetaCoin, NotFound } from './containers';
import { store, history } from './reducers';

export default () => (
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {/* Home (main) route */}
          <Route exact path="/" component={Home} />

          {/* Page routes */}
          <Route exact path="/metacoin" component={MetaCoin} />

          {/* Catch all route */}
          <Route component={NotFound} status={404} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
);
