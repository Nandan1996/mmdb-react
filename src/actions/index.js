import * as types from '../constants/actiontype.js';

export const loadMovies = () => {
	return {
		type: types.FETCH_MOVIES_REQUEST
	};
};
export const receiveMovies = (movies) =>({
	type: types.FETCH_MOVIES_SUCCESS,
	movies
});
export const fetchMoviesFailed = (message) => ({
	type: types.FETCH_MOVIES_FAILURE,
	message
});
export const requestDetails = (id) => ({
	type: types.FETCH_DETAIL_REQUEST,
	id
});

export const receiveDetails = (movie) => ({
	type: types.FETCH_DETAILS_SUCCESS,
	movie
});

export const updateMovieDetail = (movie,old) => ({
	type:types.UPDATE_MOVIE_REQUEST,
	movie,
	old
});

export const updateMovieSuccess = (movie) => ({
	type: types.UPDATE_MOVIE_SUCCESS,
	movie
});

export const undoMovieDetail = (movie) => ({
	type: types.UPDATE_MOVIE_FAILURE,
	movie
});