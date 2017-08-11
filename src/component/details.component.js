import React from 'react';
import PropTypes from 'prop-types';
// import {withRouter} from 'react-router-dom';
import MovieModal from './movie.modal.js';
import * as api from '../service/api.js';

class Detail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			movie: {}
		};
		this.openModal = this.openModal.bind(this);
		this.onSave = this.onSave.bind(this);
		this.onClose = this.onClose.bind(this);
	}
	componentWillMount(){
		const {id} = this.props.match.params;
		api.getMovieById(id).then(data => {
			this.setState({
				movie:data.movie,
				isOpen: false
			});
		});
	}
	onClose(){
		this.setState({isOpen: false});
	}
	openModal(){
		this.setState({isOpen:true});
	}

	onSave(data){
		api.postMovie(data).then(res => this.setState({movie:res.movie}));
		this.setState({isOpen:false});
	}
	render(){
		const {movie} = this.state;
		if(Object.keys(movie).length === 0){
			return null;
		}
		return (
			<div className="details-wrapper">
				<h3>{movie.title}</h3>
				<div className="avatar">
					<img src={`${movie.url}/${"w500"}${movie["backdrop_path"]}`} alt={`${movie.title} avatar`}/>
				</div>
				<div className="details">
					<p>{movie.overview}</p>
					<p>Release date: {movie["release_date"]}</p>
					<strong>Rating: {movie["vote_average"]}</strong>
					<button style={{float:'right'}} onClick={this.openModal} className="btn">Edit</button>
				</div>
				<MovieModal {...this.state} 
					onClose = {this.onClose}
					onSave={this.onSave}/>
			</div>
		);
	}
}

Detail.propTypes = {
	match: PropTypes.object.isRequired
};
export default Detail;

