import React from 'react';
import {Link} from 'react-router-dom';
class SearchBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			filter: ""
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.resetState = this.resetState.bind(this);
	}
	
	shouldComponentUpdate(nextProps,nextState){
		if(nextState === this.state)
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
	render(){
		return(
			<div className="sb-wrapper" style={{minWidth:'200px'}}>
				<form onSubmit = {(e)=>e.preventDefault()}>
					<button className="sbb" type="submit">
						<Link to = {`/search/${this.state.filter}`}>
							<span className="btnw sb">
								<svg focusable="false" xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24">
									<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
								</svg>
							</span>
						</Link>
					</button>
					<div className="fst-child">
						<button type="reset" className="sbb btn-reset" onClick={this.resetState}><span>X</span></button>
						<div className="sbib">
							<input type="text" name="filter" title="search"className="sbic" onChange = {this.onChangeHandler} required/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBox;