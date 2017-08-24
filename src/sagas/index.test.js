import { call, put, takeLatest } from 'redux-saga/effects';

import * as fromAction from '../actions';
import * as types from '../constants/actiontype';
import * as api from '../service';
import * as fromIndex from './index.js';

describe('fetching all movies or initialize application.',() =>{
	describe('fetchAllMovies saga',() =>{
		const gen = fromIndex.fetchAllMovies();
		const movies = [{id:1,title:"Spider-man",rating:8.4},{id:2,title:"x-men",rating:9.2}];
		it('should call api.getMovies with no argument',() =>{
			expect(gen.next().value).toEqual(call(api.getMovies));
		});

		it('should dispatch receiveMovies action',() =>{
			expect(gen.next(movies).value).toEqual(put(fromAction.receiveMovies(movies)));
		});
		test('throwing error should dispatch fetchMoviesFailed action',() =>{
			expect(gen.throw().value).toEqual(put(fromAction.fetchMoviesFailed("Check your network connection.")));
		});
		it('should end here',() =>{
			expect(gen.next().done).toBe(true);
		});
	});

   
});