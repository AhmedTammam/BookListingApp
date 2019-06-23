import { combineReducers } from 'redux';

import uiReducer from './uiReducer';
import entitiesReducer from './entitiesReducer';

const rootReducers = combineReducers({
	uiReducer,
	entitiesReducer
});

export default rootReducers;
