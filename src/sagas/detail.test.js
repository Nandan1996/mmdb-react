import { call, put, takeLatest } from 'redux-saga/effects';

import * as fromAction from '../actions';
import * as types from '../constants/actiontype';
import * as api from '../service';
import * as fromDetail from './detail.js';

describe('Details fetching and updating',() =>{
	describe('getMovieById',() =>{
		const gen = fromDetail.getMovieById({id:2});
		const response = {id:2,title:"x-men",rating:9.2};
		it('should call api.getMovieById',() =>{
			expect(gen.next().value).toEqual(call(api.getMovieById,2));
		});

		it('should dispatch receiveDetails action',() =>{
			expect(gen.next(response).value).toEqual(put(fromAction.receiveDetails(response)));
		});
		test('throwing error dispatch FETCH_DETAIL_FAILURE action',() =>{
			expect(gen.throw().value).toEqual(put(fromAction.fetchDetailFailed("Check your network connection.")));
		});
		it('should end here',() =>{
			expect(gen.next().done).toBe(true);
		});
	});

	describe('updateMovie',() =>{        
		const movie = {id:2,title:"x-men",rating:9.3};
		const gen = fromDetail.updateMovie({movie});
		it('should call api.postMovie with the movie data',() =>{
			expect(gen.next().value).toEqual(call(api.postMovie,movie));
		});

		it('should dispatch updateMovieSuccess action',() =>{
			expect(gen.next(movie).value).toEqual(put(fromAction.updateMovieSuccess(movie)));
		});
		test('throwing error dispatch updateMovieFailed action',() =>{
			expect(gen.throw().value).toEqual(put(fromAction.updateMovieFailed("Update Failed! May be due to network connection.")));
		});
		it('should end here',() =>{
			expect(gen.next().done).toBe(true);
		});
	});
	describe('watchUpdateRequest',() =>{        
		it('Should watch UPDATE_MOVIE_REQUEST and call updateMovie',() =>{
			let gen = fromDetail.watchUpdateRequest();
			expect(gen.next().value).toEqual(takeLatest(types.UPDATE_MOVIE_REQUEST,fromDetail.updateMovie));
		});
	});
	describe('watchDetailRequest',() =>{        
		it('Should watch FETCH_DETAIL_REQUEST and call getMovieById',() =>{
			let gen = fromDetail.watchDetailRequest();
			expect(gen.next().value).toEqual(takeLatest(types.FETCH_DETAIL_REQUEST,fromDetail.getMovieById));
		});
	});
});