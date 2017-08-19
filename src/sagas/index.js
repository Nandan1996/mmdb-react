import { call, put, takeLatest } from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {receiveMovies} from '../actions';
import * as types from '../constants/actiontype';
import * as api from '../service';

function* fetchAllMovies(){
	try{
		let movies = yield call(api.getMovies);
		yield call(delay,2000);
		yield put(receiveMovies(movies));
	}catch(e){
		console.log(e);
	}
}

function* rootSaga(){
	yield takeLatest(types.FETCH_MOVIES_REQUEST,fetchAllMovies);
}

export default rootSaga;