import { call, put, takeLatest } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as actions from '../actions';
import * as types from '../constants/actiontype';
import * as api from '../service';

function* getMovieById({id}){
	try{
		let response = yield call(api.getMovieById,id);
		yield put(actions.receiveDetails(response));
	}catch(e){
		yield put(actions.fetchDetailFailed("Check your network connection."));
	}
}
function* updateMovie({movie}){
	try{
		yield call(delay,1000);
		let a = 2;
		if(a>1){
			throw {};
		}
		let response = yield call(api.postMovie,movie);
		yield put(actions.updateMovieSuccess(response));
	}catch(e){
		yield put(actions.updateMovieFailed("Update Failed!, may be due to network connection."));
	}
}

function* watchUpdateRequest(){
	yield takeLatest(types.UPDATE_MOVIE_REQUEST,updateMovie);  
}
function* watchDetailRequest(){
	yield takeLatest(types.FETCH_DETAIL_REQUEST,getMovieById);
}

export {watchDetailRequest,watchUpdateRequest,updateMovie,getMovieById};