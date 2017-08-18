/* global process */
import { createStore,applyMiddleware } from 'redux';
import {default as logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './sagas';
import {loadMovies} from './actions';
const congigureStore = () =>{
	const sagaMiddleware = createSagaMiddleware();

	//order in which action propogates through middlewares.
	const middlewares = [sagaMiddleware];
	if(process.env.NODE_ENV !== 'production'){
		middlewares.push(logger);
	}
	const store = createStore(rootReducer,applyMiddleware(...middlewares));
	sagaMiddleware.run(rootSaga);
	store.dispatch(loadMovies());
	return store;
};

export default congigureStore;