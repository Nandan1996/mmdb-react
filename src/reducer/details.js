import * as types from '../constants/actiontype.js';
import {combineReducers} from 'redux';

/* eslint no-case-declarations:"off" */
export const movie = (state ={},action) =>{
	switch(action.type){
	case types.FETCH_DETAILS_SUCCESS:
		return action.movie;
	case types.UPDATE_MOVIE_SUCCESS:
		const{movie} = action;
		return Object.assign({},state,movie);
	default:
		return state;
	}
};

export const isFetching = (state=false,action) => {
	switch(action.type){
	case types.FETCH_DETAIL_REQUEST:
		return true;
	case types.FETCH_DETAILS_SUCCESS:
	case types.FETCH_DETAIL_FAILURE:
		return false;
	default:
		return state;
	}
};
export const message = (state = null,action) => {
	switch(action.type){
	case types.FETCH_DETAIL_REQUEST:
	case types.UPDATE_MOVIE_SUCCESS:
		return null;
	case types.UPDATE_MOVIE_REQUEST:
		return "updating...";
	case types.FETCH_DETAIL_FAILURE:
	case types.UPDATE_MOVIE_FAILURE:
		return action.message;
	default:
		return state;
	}
};
const details = combineReducers({
	movie,
	isFetching,
	message
});
export default details;

export const getDetails = (state) => state.movie;

export const getIsFetchingDetails = (state) => state.isFetching;

export const getDetailsMessage = state => state.message;