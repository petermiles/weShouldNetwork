import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import profileReducer from './user/reducer';
import linkReducer from './links/reducer';
import favoritesReducer from './favorites/reducer';

export default createStore(
	combineReducers({ profileReducer, linkReducer, favoritesReducer }),
	composeWithDevTools(applyMiddleware(promiseMiddleware()))
);
