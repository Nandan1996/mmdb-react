import {combineReducers} from 'redux';

import {createSelector} from '../helper/reselect.js';
import movies, * as fromById from './byid.js';
import details, * as fromDetail from  './details.js';

const rootReducer = combineReducers({
	movies,
	details
});

export default rootReducer;

const getIds = state => state.movies.ids;
const getByIds = state => state.movies.byIds;
const getFilter = (state,props) => props.filter;
export const getFilteredData = (ids,byIds,filter) => {
	let retVal = [];
	ids.forEach(id =>{
		if(byIds[id]["title"].toLowerCase().search(filter.toLowerCase()) >= 0)
			retVal.push(byIds[id]);
	});
	return retVal;
};
export const getFilteredMovies = createSelector([getIds,getByIds,getFilter],getFilteredData);
export const getAllMovies = (state) => getFilteredMovies(state,{filter:""});
export const getIsFetching = (state) => fromById.getIsFetching(state.movies);
export const getFetchingError = (state) => fromById.getErrorMessage(state.movies);

export const getIsFetchingDetails = (state) => fromDetail.getIsFetchingDetails(state.details);
export const getDetails = (state) => fromDetail.getDetails(state.details);
export const getDetailsMessage = (state) => fromDetail.getDetailsMessage(state.details);