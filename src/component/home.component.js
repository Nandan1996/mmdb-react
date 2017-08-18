import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './movielist.component.js';
class Home extends React.PureComponent{
	render(){
		return (
			<MovieList movies = {this.props.movies}/>
		);
	}
}


Home.propTypes = {
	movies: PropTypes.array.isRequired
};
export default Home;