import {connect} from 'react-redux';

import {Search} from '../component';
import {getFilteredMovies,getIsFetching} from '../reducer';

const mapStateToProps = (state,{match}) =>{
	
	const filter = match.params.filter || "";
	return {
		movies: getFilteredMovies(state,filter),
		isFetching: getIsFetching(state),
		filter
	};
};

export default connect(mapStateToProps)(Search);