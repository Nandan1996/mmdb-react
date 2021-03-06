import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
class SearchBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			filter: this.props.filter
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.resetState = this.resetState.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	shouldComponentUpdate(nextProps,nextState){
		if(nextState.filter === this.state.filter)
			return false;
		return true;
	}
	onChangeHandler(e){
		this.setState({
			filter: e.target.value
		});
	}
	resetState(){
		this.setState({
			filter: ""
		});
		return true;
	}
	onSubmit(e){
		e.preventDefault();
		this.props.history.push(`/search/${this.state.filter}`);
	}
	render(){
		return(
			<div className="sb-wrapper" style={{minWidth:'200px'}}>
				<form onSubmit = {this.onSubmit}>
					<button className="sbb" type="submit">
						<span className="btnw sb">
							<svg focusable="false" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
							</svg>
						</span>
					</button>
					<div className="fst-child">
						<button type="reset" className="sbb btn-reset" onClick={this.resetState}><span>X</span></button>
						<div className="sbib">
							<input type="text" name="filter" title="search"className="sbic" value={this.state.filter} onChange = {this.onChangeHandler} required/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

SearchBox.propTypes = {
	filter: PropTypes.string,
	history: PropTypes.object
};
SearchBox.defaultProps = {
	filter: ""
};

export default withRouter(SearchBox);