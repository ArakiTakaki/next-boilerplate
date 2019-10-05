import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import initialState from './state';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, initialState, applyMiddleware(
  sagaMiddleware,
  logger
));
sagaMiddleware.run(sagas);

export default store;
