import {connect} from 'react-redux';

import Search from '../component/search.js';
import {getFilteredMovies,getIsFetching,getFetchingError} from '../reducer';
import {loadMovies} from '../actions';

const mapStateToProps = (state,{match}) =>{
	
	const filter = match.params.filter || "";
	return {
		movies: getFilteredMovies(state,filter),
		isFetching: getIsFetching(state),
		errorMessage: getFetchingError(state),
		filter
	};
};

export default connect(mapStateToProps,{loadMovies})(Search);