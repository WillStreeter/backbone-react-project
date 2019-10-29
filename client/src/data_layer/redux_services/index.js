import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  testIpApiKey,
  fetchCountryOfIp
} from "./_ipapi_meta/ipApiEpics";

import { IpApiReducer } from "./_ipapi_meta/ipApiReducer"

const epics = combineEpics(testIpApiKey, fetchCountryOfIp);
const reducers = combineReducers({ ipApiReducer:IpApiReducer });

const epicMiddleware = createEpicMiddleware();


// if using router we would provide history as a param  configureStore = ( history )
const configureStore = ( ) =>createStore(
    reducers,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );


// if using router we would provide browse as a param  configureStore = ( browserHistory )
const store = configureStore();
epicMiddleware.run(epics);
export default store;
