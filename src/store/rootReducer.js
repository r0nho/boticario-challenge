import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';

import LoginReducer from './modules/login';

const rootReducer = combineReducers({
  user: LoginReducer,
  router: connectRouter(history),
});

export default rootReducer;
