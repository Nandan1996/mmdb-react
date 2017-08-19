import {connect} from 'react-redux';

import {requestDetails,updateMovieDetail} from '../actions';
import {Detail} from '../component';
import {getDetails,getIsFetchingDetails} from '../reducer';

const mapStateToProps = (state,{match}) =>({
	movie: getDetails(state),
	isFetching: getIsFetchingDetails(state),
	id: match.params.id
});

export default connect(mapStateToProps,{requestDetails,updateMovieDetail})(Detail);