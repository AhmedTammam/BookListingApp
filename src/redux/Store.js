import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const Store = createStore(rootReducers, composeEnhancers(applyMiddleware(ReduxThunk)));

export default Store;
