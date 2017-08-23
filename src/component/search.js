import React from 'react';
import PropTypes from 'prop-types';

import {SearchBox,MovieList} from '../component';

class Search extends React.PureComponent{
	render(){
		console.log(this);
		if(this.props.isFetching){
			return <div className="loader" />;
		}
		return (
			<div>
				<div style={{maxWidth:'500px',margin:'auto',marginBottom:'20px'}}>
					<SearchBox/>
				</div>
				<MovieList movies = {this.props.movies}/>
			</div>
		);
	}
}

Search.propTypes = {
	movies: PropTypes.array.isRequired,
	filter: PropTypes.string,
	isFetching: PropTypes.bool
};
Search.defaultProps = {
	filter: ""
};
export default Search;