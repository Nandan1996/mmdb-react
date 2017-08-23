import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from '../component';

export default class MovieModal extends React.Component{
	constructor(props)    {
		super(props);
		this.state = this.props.movie;
		this.changeHandler = this.changeHandler.bind(this);
		this.onSave = this.onSave.bind(this);
	}
	changeHandler(e){
		let key = e.target.name;
		let value = e.target.value;
		this.setState(prevState =>{
			return Object.assign({},prevState,{[key]:value});
		});
	}
	onSave(e){
		e.preventDefault();
		this.props.onSave(this.state);
	}
	render(){
		const {isOpen,onClose} = this.props;
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
					<input type="hidden" defaultValue={this.state.id}/>
					<div className="form-group">
						<label htmlFor="" className="control-label">Title: </label>
						<div className="input-control">
							<input type="text" name="title" value={this.state.title} onChange = {this.changeHandler}/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="" className="control-label" >Overview: </label>
						<div className="input-control">
							<textarea type="text" name="overview" value={this.state.overview} onChange = {this.changeHandler}/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="" className="control-label" >Rating: </label>
						<div className="input-control">
							<input type="number" step="0.1" name="vote_average" value={this.state["vote_average"]} onChange = {this.changeHandler}/>
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