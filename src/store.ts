import { createStore, applyMiddleware } from "redux";
import userReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas";
const saga = createSagaMiddleware();

const store = createStore(userReducer as any, applyMiddleware(saga));

saga.run(sagaWatcher);

export default store;
