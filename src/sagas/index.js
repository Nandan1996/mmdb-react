import { call, put, takeLatest,all } from 'redux-saga/effects';

import {receiveMovies,fetchMoviesFailed} from '../actions';
import * as types from '../constants/actiontype';
import * as api from '../service';
import {watchDetailRequest,watchUpdateRequest} from './detail.js';

export function* fetchAllMovies(){
	try{
		let movies = yield call(api.getMovies);
		yield put(receiveMovies(movies));
	}catch(e){
		yield put(fetchMoviesFailed("Check your network connection."));
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