import React from 'react';
import PropTypes from 'prop-types';

import {SearchBox,MovieList,Error} from '../component';

class Search extends React.PureComponent{
	render(){
		const {isFetching,errorMessage,movies,loadMovies,filter} = this.props;
		if(isFetching){
			return <div className="loader" />;
		}
		else if(errorMessage){
			return <Error 
				title="Could not load your Movies" 
				description={errorMessage}>
				<button onClick={loadMovies}>Retry</button>
			</Error>;
		}
		return (
			<div>
				<div style={{maxWidth:'500px',margin:'auto',marginBottom:'20px'}}>
					<SearchBox filter = {filter}/>
				</div>
				{movies.length === 0?<Error title="Not Found!" description="Nothing match your query, Try something else."/>:""}
				<MovieList movies = {this.props.movies}/>
			</div>
		);
	}
}

Search.propTypes = {
	movies: PropTypes.array.isRequired,
	filter: PropTypes.string,
	isFetching: PropTypes.bool,
	errorMessage: PropTypes.string,
	loadMovies: PropTypes.func.isRequired
};
Search.defaultProps = {
	filter: ""
};
export default Search;