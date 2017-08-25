import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from '../component';

export default class MovieModal extends React.Component{
	constructor(props)    {
		super(props);
		this.state = {
			movie: this.props.movie
		};
		this.changeHandler = this.changeHandler.bind(this);
		this.onSave = this.onSave.bind(this);
	}
	changeHandler(e){
		let {name,value} = e.target;
		this.setState(prevState =>{
			return {
				movie: Object.assign({},prevState.movie,{[name]:value})
			};
		});
	}
	onSave(e){
		e.preventDefault();
		this.props.onSave(this.state.movie);
	}
	render(){
		const {isOpen,onClose} = this.props;
		const {movie} = this.state;
		if(!isOpen){
			return null;
		}
		return (<Modal
			className="movie-modal" isOpen={isOpen} onClose={onClose}>
			<div className="modal-header">
				<h3>Edit your movie</h3>
			</div>
			<div className="modal-body">
				<form id="movie-form" onSubmit={this.onSave}>
					<div className="form-group">
						<label htmlFor="" className="control-label">Title: </label>
						<div className="input-control">
							<input type="text" name="title" value={movie.title} onChange = {this.changeHandler}/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="" className="control-label" >Overview: </label>
						<div className="input-control">
							<textarea type="text" name="overview" value={movie.overview} onChange = {this.changeHandler}/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="" className="control-label" >Rating: </label>
						<div className="input-control">
							<input type="number" step="0.1" name="vote_average" value={movie["vote_average"]} onChange = {this.changeHandler}/>
						</div>
					</div>
				</form>
			</div>
			<div className="modal-footer">
				<button className="btn" onClick={onClose}>cancel</button>
				<button className="btn"type="submit" form="movie-form">Save</button>
			</div>
		</Modal>);
	}
}
MovieModal.propTypes = {
	movie: PropTypes.object,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};