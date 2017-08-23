import {connect} from 'react-redux';

import Home from '../component/home.js';
import {getAllMovies,getIsFetching,getFetchingError} from '../reducer';
import {loadMovies} from '../actions';

const mapStateToProps = (state) =>({
	movies: getAllMovies(state),
	isFetching: getIsFetching(state),
	errorMessage: getFetchingError(state)
});
export default connect(mapStateToProps,{loadMovies})(Home);