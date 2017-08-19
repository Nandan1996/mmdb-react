import {combineReducers} from 'redux';
import movies, * as fromById from './byid.js';

const rootReducer = combineReducers({
	movies,
	search
});

export default rootReducer;

export const getFilteredMovies =(state,filter) => {
	return fromById.getFilteredMovies(state.movies,filter);
};

export const getAllMovies = (state) => fromById.getAllMovies(state.movies);
export const getIsFetching = (state) => fromById.getIsFetching(state.movies);