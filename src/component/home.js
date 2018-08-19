import React from 'react';
import PropTypes from 'prop-types';
import {MovieList,Error} from '../component';
class Home extends React.PureComponent{
	render(){
		const {isFetching,errorMessage,loadMovies,movies} = this.props;
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
		else if(movies.length === 0){
			return <Error title="No Movies Available" description="Please try after sometime."/>;
		}
		return (
			<MovieList movies = {movies}/>
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