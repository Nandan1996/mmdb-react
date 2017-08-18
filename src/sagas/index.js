import { call, put, takeLatest } from 'redux-saga/effects';

import * as types from '../constants/actiontype';
import * as api from '../service';

function* fetchAllMovies(){
	try{
		let movies = yield call(api.getMovies);
		yield put({
			type:types.FETCH_MOVIES_SUCCESS,
			movies
		});
	}catch(e){
		console.log(e);
	}
}

function* rootSaga(){
	yield takeLatest(types.LOAD_MOVIES,fetchAllMovies);
}

export default rootSaga;