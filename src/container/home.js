import {connect} from 'react-redux';

import Home from '../component/home.js';
import {getAllMovies,getIsFetching} from '../reducer';

const mapStateToProps = (state) =>({
	movies: getAllMovies(state),
	isFetching: getIsFetching(state)
});
console.log("Home container=======");
export default connect(mapStateToProps)(Home);