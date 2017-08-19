import {connect} from 'react-redux';

import {Home} from '../component';
import {getAllMovies,getIsFetching} from '../reducer';

const mapStateToProps = (state) =>({
	movies: getAllMovies(state),
	isFetching: getIsFetching(state)
});

export default connect(mapStateToProps)(Home);