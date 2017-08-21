import * as fromAction from '../actions';
import * as fromDetail from './details.js';
describe('details reducers and selectors',() =>{
    describe('isFetching reducer',() => {
        it('should return the initial state',() => {
            expect(fromDetail.isFetching(undefined,{})).toEqual(false);
        });

        it('should return the same state',() => {
            expect(fromDetail.isFetching(true,{})).toBe(true);
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
            const movie = {"id":2, title:"x-men",rating:9.2}
            expect(fromDetail.movie(movie,{})).toBe(movie);
        });

        it('should return a dispatched response object',() =>{
            const movie = {"id":2, title:"x-men",rating:9.2}
            expect(fromDetail.movie({},fromAction.receiveDetails(movie))).toEqual(movie);
        });

        it('should undo the state on UPDATE_MOVIE_FAILURE',() => {
            const before = {"id":2, title:"x-men",rating:9.2}
            const expected =   {"id":2, title:"x-men",rating:9.3};
            const old = {id:2,title:"x-men",rating:9.2};
            expect(fromDetail.movie(expected,fromAction.undoMovieDetail(old))).toEqual(before);
        });
        it('should return an empty object on FETCH_DETAIL_FAILURE',() => {
            const before = {"id":2, title:"x-men",rating:9.2}
            const expected =   {"id":2, title:"x-men",rating:9.3};
            const movie = {id:2,title:"x-men",rating:9.3};
            expect(fromDetail.movie(before,{type:'FETCH_DETAIL_FAILURE'})).toEqual({});
        });
        it('should update a movie undo the state on UPDATE_MOVIE_FAILURE',() => {
            const before = {"id":2, title:"x-men",rating:9.2}
            const expected =   {"id":2, title:"x-men",rating:9.3};
            const old = {id:2,title:"x-men",rating:9.2};
            const movie = {"id":2, title:"x-men",rating:9.3};
            expect(fromDetail.movie(before,fromAction.updateMovieDetail(movie,old))).toEqual(expected);
        });
    })
})