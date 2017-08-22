import React from 'react';
import PropTypes from 'prop-types';
import {MovieModal, Error} from '../component';

class Detail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.onSave = this.onSave.bind(this);
		this.onClose = this.onClose.bind(this);
		this.loadData = this.loadData.bind(this);
	}
	componentDidMount(){
		this.loadData();
	}
	loadData(){
		this.props.requestDetails(this.props.id);
	}
	onClose(){
		this.setState({isOpen: false});
	}
	openModal(){
		this.setState({isOpen:true});
	}

	onSave(data){
		this.props.updateMovieDetail(data,this.props.movie);
		this.setState({isOpen:false});
	}
	render(){
		const {movie} = this.props;
		if(this.props.isFetching){
			return <div className="loader"/>;
		}
		if(Object.keys(movie).length === 0){
			return (
				<Error>
					<button onClick={this.loadData}>Retry</button>
				</Error>
			);
		}
		else if(movie.error){
			return (
				<Error title="Not Found" description={movie.message}/>
			);
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
					movie = {this.props.movie} 
					onClose = {this.onClose}
					onSave={this.onSave}/>
			</div>
		);
	}
}

Detail.propTypes = {
	id: PropTypes.string.isRequired,
	movie: PropTypes.object.isRequired,
	requestDetails: PropTypes.func.isRequired,
	isFetching: PropTypes.bool,
	updateMovieDetail: PropTypes.func.isRequired
};
export default Detail;

