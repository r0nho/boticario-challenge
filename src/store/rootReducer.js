import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';

import LoginReducer from './modules/auth';
import UserReducer from './modules/user';
import PurchasesReducer from './modules/purchases';

const rootReducer = combineReducers({
  auth: LoginReducer,
  user: UserReducer,
  purchases: PurchasesReducer,
  router: connectRouter(history),
});

export default rootReducer;
