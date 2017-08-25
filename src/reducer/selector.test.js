import {getFilteredMovies,getFilteredData} from './index.js';
const state = {
    movies:{
        byIds:{
            1:{id:1,title:"Spider-man",rating:8.4},
            2:{id:2,title:"x-men",rating:9.2},
            3:{id:3,title:"The hitman's guard",rating: 7.5}
        },
        ids:[1,2,3],
        isFetching: false,
        errorMessage: null
    },
    details:{
        movies: {id:1,title:"Spider-man",rating:8.4},
        message:null,
        isFetching: false
    }
};
describe('selectors',() =>{
    describe('getFilteredData',()=>{
        it('should return empty array if ids array is empty',()=>{
            expect(getFilteredData([],{},"")).toEqual([]);
        })
        it('should return all movies with empty filter string',()=>{
            const expected = [{id:1,title:"Spider-man",rating:8.4},
                             {id:2,title:"x-men",rating:9.2},{id:3,title:"The hitman's guard",rating: 7.5}];
            const {ids,byIds} = state.movies;
            expect(getFilteredData(ids,byIds,"")).toEqual(expected);
        });
        it('should return a subset of passed movies',()=>{
            const expected = [{id:1,title:"Spider-man",rating:8.4},
                             {id:3,title:"The hitman's guard",rating: 7.5}];
            const {ids,byIds} = state.movies;
            expect(getFilteredData(ids,byIds,"man")).toEqual(expected);
        })
    });
    describe('getFilteredMovies',()=>{        
        it('should compute initially..',()=>{
            let prevReComp = getFilteredMovies.recomputations();
            getFilteredMovies(state,{filter:""});
            expect(getFilteredMovies.recomputations()).toBe(prevReComp+1);
        });
        it('should not compute again',()=>{
            let newState = Object.assign({},state);
            let prevReComp = getFilteredMovies.recomputations();
            getFilteredMovies(newState,{filter:""});
            expect(getFilteredMovies.recomputations()).toBe(prevReComp);
        });
        it('should compute on change in interested branch of state',()=>{
            let newState = JSON.parse(JSON.stringify(state));
            let prevReComp = getFilteredMovies.recomputations();
            getFilteredMovies(newState,{filter:""});
            expect(getFilteredMovies.recomputations()).toBe(prevReComp+1);
        })
        
    });
});