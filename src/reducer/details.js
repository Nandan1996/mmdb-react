import * as types from '../constants/actiontype.js';
import {combineReducers} from 'redux';

/* eslint no-case-declarations:"off" */
export const movie = (state ={},action) =>{
	switch(action.type){
	case types.FETCH_DETAILS_SUCCESS:
		return action.movie;
	case types.UPDATE_MOVIE_REQUEST:
	case types.UPDATE_MOVIE_FAILURE:
		const{movie} = action;
		return Object.assign({},state,movie);
	case types.FETCH_DETAIL_FAILURE:
		return {};
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
const details = combineReducers({
	movie,
	isFetching
});
export default details;

export const getDetails = (state) => state.movie;

export const getIsFetchingDetails = (state) => state.isFetching;