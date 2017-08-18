import * as types from '../constants/actiontype.js';
import {combineReducers} from 'redux';
const filter = (state="",action) => {
	switch(action.type){
	case types.FILTER_MOVIES:
		return action.filter;
	default:
		return state;
	}
};
const search = combineReducers({
	filter
});
export default search;

export const getSearchString = (state) => state.filter;