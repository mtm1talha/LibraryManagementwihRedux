
//import {createStore} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import promise from 'redux-promise';
//import createLogger from 'redux-logger';
import allReducers from '../reducers';
//import initialState from '../API/index';
//const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);
export default store;