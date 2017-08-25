import React from 'react';
import {default as PropTypes} from 'prop-types';
class Image extends React.Component{
	render(){
		const {movie} = this.props;
		const src = `${movie.url}/${"w342"}${movie.backdrop_path}`;
		return (
			<div className="card-container" title="click for detail">
				<figure className="card">
					<img src={src} alt={movie.original_title} className="img-responsive"/>
					<figcaption className="card-footer">
						<div>
							<h3 className="movie-title">{movie.title}</h3>
							<p className="movie-overview">{movie.overview.substring(0,100)}...</p>
							<span className="rating">{movie.vote_average}</span>
						</div>
					</figcaption>
				</figure>
			</div>
		);
	}
}

Image.propTypes = {
	movie:PropTypes.object.isRequired,
	url: PropTypes.string
};
export default Image;
