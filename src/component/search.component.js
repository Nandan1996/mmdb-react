import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from './searchbox.component.js';
import MovieList from './movielist.component.js';

class Search extends React.Component{
	shouldComponentUpdate(nextProps){
		if(nextProps.filter === this.props.filter){
			return false;
		}
		return true;
	}
	componentWillUnmount(){
		this.props.resetFilter();
	}
	render(){
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
	filter: PropTypes.string
};
Search.defaultProps = {
	filter: ""
};
export default Search;