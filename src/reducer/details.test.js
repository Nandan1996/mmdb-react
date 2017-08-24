import * as fromAction from '../actions';
import * as fromDetail from './details.js';
import * as types from '../constants/actiontype.js';
describe('details reducers and selectors',() =>{
	describe('isFetching reducer',() => {
		it('should return the initial state',() => {
			expect(fromDetail.isFetching(undefined,{})).toEqual(false);
		});

		it('should return the same state',() => {
			expect(fromDetail.isFetching(true,{})).toBe(true);
		});
		it('should return true on FETCH_DETAIL_REQUEST',() =>{
			expect(fromDetail.isFetching(false,{type: 'FETCH_DETAIL_REQUEST'})).toBe(true);
		});
		it('should reset state to false on FETCH_DETAIL_SUCCESS type action',() =>{
			expect(fromDetail.isFetching(true,fromAction.receiveDetails({}))).toBe(false);
		});
		it('should reset state to false on FETCH_DETAIL_FAILURE type action',() =>{
			expect(fromDetail.isFetching(true,{type: 'FETCH_DETAIL_FAILURE'})).toBe(false);
		});
	});

	describe('movie reducer',() =>{
		it('should return the initial state',() => {
			expect(fromDetail.movie(undefined,{})).toEqual({});
		});

		it('should return the same state',() => {
			const movie = {"id":2, title:"x-men",rating:9.2};
			expect(fromDetail.movie(movie,{})).toBe(movie);
		});

		it('should return a dispatched response object on FETCH_DETAIL_SUCCESS',() =>{
			const movie = {"id":2, title:"x-men",rating:9.2};
			expect(fromDetail.movie({},fromAction.receiveDetails(movie))).toEqual(movie);
		});

		it('should update the state on UPDATE_MOVIE_SUCCESS',() => {
			const before = {"id":2, title:"x-men",rating:9.2};
			const expected =   {"id":2, title:"x-men",rating:9.3};
			expect(fromDetail.movie(before,fromAction.updateMovieSuccess(expected))).toEqual(expected);
		});
	});

	describe('message reducer',()=>{
		it('should return the initial state',() => {
			expect(fromDetail.message(undefined,{})).toEqual(null);
		});

		it('should return the same state',() => {
			expect(fromDetail.message("random message",{})).toBe("random message");
		});
		it('should return initial state on FETCH_DETAIL_REQUEST',()=>{
			expect(fromDetail.message("random message",{type: types.FETCH_DETAIL_REQUEST})).toBe(null);
		});

		it('should return initial state on UPDATE_MOVIE_SUCCESS',()=>{
			expect(fromDetail.message("random message",{type: types.UPDATE_MOVIE_SUCCESS})).toBe(null);
		});
		it('should return "updating..." on UPDATE_MOVIE_REQUEST',()=>{
			expect(fromDetail.message("random message",{type: types.UPDATE_MOVIE_REQUEST})).toBe("updating...");
		});
		it('should return dispatched message on FETCH_DETAIL_FAILURE',()=>{
			expect(fromDetail.message("random message",fromAction.fetchDetailFailed("fetch failed"))).toBe("fetch failed");
		});
		it('should return dispatched message on UPDATE_MOVIE_FAILURE',()=>{
			expect(fromDetail.message("random message",fromAction.updateMovieFailed("fetch failed"))).toBe("fetch failed");
		});
	});
});