import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import history from '../utils/history';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history)));

export default function() {
    const store = createStore(rootReducer, enhancer);

    store.subscribe(() => {
        // do something...
    });

    return store;
}
