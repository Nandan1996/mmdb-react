import {connect} from 'react-redux';

import {Home} from '../component';
import {getAllMovies} from '../reducer';

const mapStateToProps = (state) =>({
	movies: getAllMovies(state)
});

export default connect(mapStateToProps)(Home);