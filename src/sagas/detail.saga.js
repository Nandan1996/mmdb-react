import { call, put, takeLatest } from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {receiveDetails,updateMovieSuccess,undoMovieDetail} from '../actions';
import * as types from '../constants/actiontype';
import * as api from '../service';

function* getMovieById({id}){
	try{
		let response = yield call(api.getMovieById,id);
		yield call(delay,1000);
		if(response.error){
			throw response;
		}
		else{
			yield put(receiveDetails(response.movie));
		}
	}catch(e){
		yield put({type: types.FETCH_DETAIL_FAILURE});
	}
}
function* updateMovie({movie}){
	let response = yield call(api.postMovie,movie);
	try{
		if(response.error){
			throw response;
		}
		else{
			yield put(updateMovieSuccess(response.movie));
		}
	}catch(e){
		yield put(undoMovieDetail(movie));
	}
}

function* watchUpdateRequest(){
	yield takeLatest(types.UPDATE_MOVIE_REQUEST,updateMovie);  
}
function* watchDetailRequest(){
	yield takeLatest(types.FETCH_DETAIL_REQUEST,getMovieById);
}

export {watchDetailRequest,watchUpdateRequest};