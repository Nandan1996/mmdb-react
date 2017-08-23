import React from 'react';
import PropTypes from 'prop-types';
import {MovieList,Error} from '../component';
class Home extends React.PureComponent{
	render(){
		if(this.props.isFetching){
			return <div className="loader" />;
		}
		else if(this.props.errorMessage){
			return <Error 
				title="Could not load your Movies" 
				description={this.props.errorMessage}>
				<button onClick={this.props.loadMovies}>Retry</button>
			</Error>;
		}
		else if(this.props.movies.length === 0){
			return <Error title="No Movies Available" description="Please try after sometime."/>;
		}
		return (
			<MovieList movies = {this.props.movies}/>
		);
	}
}


Home.propTypes = {
	movies: PropTypes.array.isRequired,
	isFetching: PropTypes.bool,
	loadMovies: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
export default Home;