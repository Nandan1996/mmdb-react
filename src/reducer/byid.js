import * as types from '../constants/actiontype.js';
import {combineReducers} from 'redux';

/* eslint no-case-declarations:"off" */
export const byIds = (state ={},action) =>{
	switch(action.type){
	case types.FETCH_MOVIES_SUCCESS:
		let nextState = {};
		action.movies.forEach(movie => nextState[movie.id] = movie);
		return nextState;
	case types.UPDATE_MOVIE_SUCCESS:
		const{movie} = action;
		return Object.assign({},state,{[movie.id]:movie});
	default:
		return state;
	}
};

export const ids = (state = [],action) =>{
	switch(action.type){
	case types.FETCH_MOVIES_SUCCESS:
		return action.movies.map(movie => movie.id);
	default:
		return state;
	}
};

export const isFetching = (state=false,action) => {
	switch(action.type){
	case types.FETCH_MOVIES_REQUEST:
		return true;
	case types.FETCH_MOVIES_SUCCESS:
	case types.FETCH_MOVIES_FAILURE:
		return false;
	default:
		return state;
	}
};
export const errorMessage = (state = null,action) => {
	switch(action.type){
	case types.FETCH_MOVIES_SUCCESS:
	case types.FETCH_MOVIES_REQUEST:
		return null;
	case types.FETCH_MOVIES_FAILURE:
		return action.message;
	default:
		return state;
	}
};
const movies = combineReducers({
	byIds,
	ids,
	isFetching,
	errorMessage
});
export default movies;

//selectors
export const getAllMovies = (state) => {
	return state.ids.map(id => state.byIds[id]);
};

export const getFilteredMovies = (state,filter) => {
	if(filter == ""){
		return getAllMovies(state);
	}
	const retVal = [];
	const byIds = state.byIds;
	state.ids.forEach(id =>{
		if(byIds[id]["title"].toLowerCase().search(filter.toLowerCase()) >= 0)
			retVal.push(byIds[id]);
	});
	return retVal;
};

export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;