import React from 'react';
// import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBox from './searchbox.component.js';
import * as api from '../service/api.js';
import VisibleMovieList from '../container/visiblemovielist.container.js';
class Search extends React.Component{
	constructor(props){
		super(props);
		this.getData = this.getData.bind(this);
	}
	getData(){
		const {search} = this.props.location;
		return api.getMovies(search);
	}
	render(){
		return (
			<div>
				<div style={{maxWidth:'500px',margin:'auto',marginBottom:'20px'}}>
					<SearchBox/>
				</div>
				<VisibleMovieList getMovies={this.getData}/>
			</div>
		);
	}
}

Search.propTypes = {
	location: PropTypes.object
};
export default Search;