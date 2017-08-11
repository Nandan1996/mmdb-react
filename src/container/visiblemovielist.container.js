import React from 'react';

import MovieList from '../component/movielist.component.js';
import {default as PropTypes} from 'prop-types';

export default class VisibleMovieList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			movies:[]
		};
	}
	componentWillMount(){
		this.props.getMovies().then(movies => this.setState({movies}));
	}
	render(){
		if(this.state.movies.length === 0){
			return (
				<div className="not-found">
					<h2>No Result Found.</h2>
					<span>Please try again...</span>
				</div>
			);
		}
		return (
			<MovieList movies = {this.state.movies}/>
		);
	}
}
VisibleMovieList.propTypes = {
	getMovies: PropTypes.func.isRequired
};