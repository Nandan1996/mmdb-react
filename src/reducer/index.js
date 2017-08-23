import {combineReducers} from 'redux';
import movies, * as fromById from './byid.js';
import details, * as fromDetail from  './details.js';

const rootReducer = combineReducers({
	movies,
	details
});

export default rootReducer;

export const getFilteredMovies =(state,filter) => {
	return fromById.getFilteredMovies(state.movies,filter);
};

export const getAllMovies = (state) => fromById.getAllMovies(state.movies);
export const getIsFetching = (state) => fromById.getIsFetching(state.movies);
export const getFetchingError = (state) => fromById.getErrorMessage(state.movies);

export const getIsFetchingDetails = (state) => fromDetail.getIsFetchingDetails(state.details);
export const getDetails = (state) => fromDetail.getDetails(state.details);