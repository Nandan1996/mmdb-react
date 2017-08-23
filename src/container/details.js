import {connect} from 'react-redux';

import {requestDetails,updateMovieDetail} from '../actions';
import Detail from '../component/details.js';
import {getDetails,getIsFetchingDetails,getDetailsMessage} from '../reducer';

const mapStateToProps = (state,{match}) =>({
	movie: getDetails(state),
	isFetching: getIsFetchingDetails(state),
	id: match.params.id,
	message: getDetailsMessage(state)
});

export default connect(mapStateToProps,{requestDetails,updateMovieDetail})(Detail);