import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';

import shipmentsReducer from './modules/shipments';

const rootReducer = combineReducers({
    shipments: shipmentsReducer,
    router: connectRouter(history),
});

export default rootReducer;
