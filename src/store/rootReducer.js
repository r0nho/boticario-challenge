import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';

import LoginReducer from './modules/auth';

const rootReducer = combineReducers({
  auth: LoginReducer,
  router: connectRouter(history),
});

export default rootReducer;
