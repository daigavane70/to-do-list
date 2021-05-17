import list1 from './list1';
import list2 from './list2';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( combineReducers( { list1, list2 } ), composeEnhancers(applyMiddleware(thunk)));

export default store;
