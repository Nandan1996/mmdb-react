import * as fromAction from '../actions';
import * as fromById from './byid.js';

describe('ById reducers and selectors',function(){
	const state = {
		byIds:{
			1:{id:1,title:"Spider-man",rating:8.4},
			2:{id:2,title:"x-men",rating:9.2}
		},
		ids:[1,2],
		isFetching: false
	};
	describe('byIds reducer',() => {
		it('should return the initial state',() => {
			expect(fromById.byIds(undefined,{})).toEqual({});
		});

		it('should return the same state',() => {
			expect(fromById.byIds(state.byIds,{})).toBe(state.byIds);
		});

		it('should return a state with only new movies',() =>{
			const expected =   {2:{"id":2, title:"x-men",rating:9.2}};
			const movies = [{id:2,title:"x-men",rating:9.2}];
			expect(fromById.byIds(state.byIds,fromAction.receiveMovies(movies))).toEqual(expected);
		});

		it('should update a movie & return new refrence',() => {
			const before = {2:{"id":2, title:"x-men",rating:9.2}};
			const expected =   {2:{"id":2, title:"x-men",rating:9.3}};
			const movie = {id:2,title:"x-men",rating:9.3};
			expect(fromById.byIds(before,fromAction.updateMovieSuccess(movie))).toEqual(expected);
			expect(fromById.byIds(before,fromAction.updateMovieSuccess(movie))).not.toBe(before);
		});

	});

	describe('ids reducer',() =>{
		it('should return the initial state',() => {
			expect(fromById.ids(undefined,{})).toEqual([]);
		});

		it('should return the same state',() => {
			expect(fromById.ids(state.ids,{})).toBe(state.ids);
		});

		it('should form an array of new ids from array of object with id.',() => {
			const movies = [{id:2,title:"x-men",rating:9.2}];
			expect(fromById.ids([1,2,3],fromAction.receiveMovies(movies))).toEqual([2]);
		});
	});

	describe('isFetching reducer',() => {
		it('should return the initial state',() => {
			expect(fromById.isFetching(undefined,{})).toEqual(false);
		});

		it('should return the same state',() => {
			expect(fromById.isFetching(true,{})).toBe(true);
		});
		it('should return true on FETCH_MOVIES_REQUEST',() => {
			expect(fromById.isFetching(false,fromAction.loadMovies())).toBe(true);
		});
		it('should reset state to false on FETCH_MOVIES_SUCCESS type action',() =>{
			expect(fromById.isFetching(true,fromAction.receiveMovies([]))).toBe(false);
		});
		it('should return false on FETCH_MOVIES_FAILURE',() => {
			expect(fromById.isFetching(true,fromAction.fetchMoviesFailed(""))).toBe(false);
		});
	});
});