import * as types from '../constants/actiontype.js';

export const loadMovies = () => {
	return {
		type: types.FETCH_MOVIES_REQUEST
	};
};
export const receiveMovies = (movies) =>({
	type: types.FETCH_MOVIES_SUCCESS,
	movies
})