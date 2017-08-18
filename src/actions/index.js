import * as types from '../constants/actiontype.js';

export const loadMovies = () => {
	return {
		type: types.LOAD_MOVIES
	};
};

export const resetFilter = (filter="") => {
	return {
		type: types.RESET_FILTER,
		filter
	};
};