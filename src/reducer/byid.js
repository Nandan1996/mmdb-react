import * as types from '../constants/actiontype.js';
import {combineReducers} from 'redux';

/* eslint no-case-declarations:"off" */
let byIds = (state ={},action) =>{
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

let ids = (state = [],action) =>{
	switch(action.type){
	case types.FETCH_MOVIES_SUCCESS:
		return action.movies.map(movie => movie.id);
	default:
		return state;
	}
};
const movies = combineReducers({
	byIds,
	ids
});
export default movies;

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