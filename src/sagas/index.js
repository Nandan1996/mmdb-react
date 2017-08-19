import { call, put, takeLatest,all } from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {receiveMovies} from '../actions';
import * as types from '../constants/actiontype';
import * as api from '../service';
import {watchDetailRequest,watchUpdateRequest} from './detail.saga.js';

function* fetchAllMovies(){
	try{
		let movies = yield call(api.getMovies);
		yield call(delay,2000);
		yield put(receiveMovies(movies));
	}catch(e){
		console.log(e);
	}
}

function* watchMoviesRequest(){
	yield takeLatest(types.FETCH_MOVIES_REQUEST,fetchAllMovies);
}
function* rootSaga(){
	yield all([
		watchMoviesRequest(),
		watchDetailRequest(),
		watchUpdateRequest()
	]);
}

export default rootSaga;