import React from 'react';
import PropTypes from 'prop-types';
import {MovieList} from '../component';
class Home extends React.PureComponent{
	render(){
		if(this.props.isFetching){
			return <div className="loader" />;
		}
		return (
			<MovieList movies = {this.props.movies}/>
		);
	}
}


Home.propTypes = {
	movies: PropTypes.array.isRequired,
	isFetching: PropTypes.bool
};
export default Home;