import React from 'react';
import {default as PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

import {Image} from '../component';

class MovieList extends React.PureComponent{
	render(){
		const {movies} = this.props;
		return (
			<div className="movie-list">
				{movies.map(movie => <Link key={movie.id} to={`/movie/${movie.id}`}><Image movie={movie}/></Link>)}
			</div>
		);
	}
}
MovieList.defaultProps = {
	movies: []
};
MovieList.propTypes = {
	movies: PropTypes.array
};
export default MovieList;