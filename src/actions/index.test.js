import * as fromIndex from './index.js';
import * as types from '../constants/actiontype.js';

describe('action object generator',() => {
    test('loadMovies',() => {
        const action = {
            type: types.FETCH_MOVIES_REQUEST
        };
        expect(fromIndex.loadMovies()).toEqual(action);
    });

    test('receiveMovies',()=>{
        const movies = [{title:"spiderman",release_date:"2017-08-09"}];
        const action = {
            type: types.FETCH_MOVIES_SUCCESS,
            movies
        };
        expect(fromIndex.receiveMovies([{
                title:"spiderman",
                release_date:"2017-08-09"
            }])).toEqual(action);
    });

    test('requestDetails',() => {
        const action = {
            type: types.FETCH_DETAIL_REQUEST,
            id:5
        }
        expect(fromIndex.requestDetails(5)).toEqual(action);
    });

    test('receiveDetails',() => {
        const action = {
            type: types.FETCH_DETAILS_SUCCESS,
            movie: {
                title:"spiderman",
                release_date:"2017-08-09"
            }
        }
        expect(fromIndex.receiveDetails({
                title:"spiderman",
                release_date:"2017-08-09"
            })).toEqual(action);
    });

    test('updateMovieDetail',() => {
        const action = {
            type: types.UPDATE_MOVIE_REQUEST,
            movie: {
                title:"spiderman",
                release_date:"2017-08-09"
            }
        }
        expect(fromIndex.updateMovieDetail({
                title:"spiderman",
                release_date:"2017-08-09"
            })).toEqual(action);
    });
    test('updateMovieSuccess',() => {
        const action = {
            type: types.UPDATE_MOVIE_SUCCESS,
            movie: {
                title:"spiderman",
                release_date:"2017-08-09"
            }
        }
        expect(fromIndex.updateMovieSuccess({
                title:"spiderman",
                release_date:"2017-08-09"
            })).toEqual(action);
    });
    test('undoMovieDetail',() => {
        const action = {
            type: types.UPDATE_MOVIE_FAILURE,
            movie: {
                title:"spiderman",
                release_date:"2017-08-09"
            }
        }
        expect(fromIndex.undoMovieDetail({
                title:"spiderman",
                release_date:"2017-08-09"
            })).toEqual(action);
    });
})