import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { App, Home, MetaCoin, NotFound } from './containers';
import { store, history } from './reducers';

export default () => (
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <App>
        {/* Home (main) route */}
        <Route exact path="/" component={Home} />

        {/* Page routes */}
        <Route path="/metacoin" component={MetaCoin} />

        {/* Catch all route */}
        <Route path="*" component={NotFound} status={404} />
      </App>
    </ConnectedRouter>
  </Provider>
);
