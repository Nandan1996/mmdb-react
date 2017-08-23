import { call, put, takeLatest } from 'redux-saga/effects';

import {receiveDetails,updateMovieSuccess,undoMovieDetail} from '../actions';
import * as types from '../constants/actiontype';
import * as api from '../service';

function* getMovieById({id}){
	try{
		let response = yield call(api.getMovieById,id);
		yield put(receiveDetails(response));
	}catch(e){
		yield put({type: types.FETCH_DETAIL_FAILURE});
	}
}
function* updateMovie({old,movie}){
	try{
		let response = yield call(api.postMovie,movie);
		yield put(updateMovieSuccess(response));
	}catch(e){
		yield put(undoMovieDetail(old));
	}
}

function* watchUpdateRequest(){
	yield takeLatest(types.UPDATE_MOVIE_REQUEST,updateMovie);  
}
function* watchDetailRequest(){
	yield takeLatest(types.FETCH_DETAIL_REQUEST,getMovieById);
}

export {watchDetailRequest,watchUpdateRequest,updateMovie,getMovieById};