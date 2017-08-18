import {combineReducers} from 'redux';
import movies, * as fromById from './byid.js';
import search,* as fromSearch from './search.js';

const rootReducer = combineReducers({
	movies,
	search
});

export default rootReducer;

export const getSearchString = (state) => {
	return fromSearch.getSearchString(state.search);
};
export const getFilteredMovies =(state,filter) => {
	return fromById.getFilteredMovies(state.movies,filter);
};

export const getAllMovies = (state) => fromById.getAllMovies(state.movies);