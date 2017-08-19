import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './searchbox.component.js';
import MovieList from './movielist.component.js';

class Search extends React.PureComponent{
	render(){
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
	resetFilter: PropTypes.func.isRequired,
	filter: PropTypes.string,
	isFetching: PropTypes.bool
};
Search.defaultProps = {
	filter: ""
};
export default Search;