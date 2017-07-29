import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import auth from './modules/auth';
import notifs from './modules/notifs';
import info from './modules/info';
import blockchain from './modules/blockchain';
import metaCoin from './modules/metaCoin';

export default function createReducers(asyncReducers) {
  return {
    routing: routerReducer,
    reduxAsyncConnect,
    online: (v = true) => v,
    notifs,
    auth,
    info,
    blockchain,
    metaCoin,
    ...asyncReducers
  };
}
