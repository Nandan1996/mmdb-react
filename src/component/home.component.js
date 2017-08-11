import React from 'react';
// import {withRouter} from 'react-router-dom';
import {default as VisibleMovieList} from '../container/visiblemovielist.container.js';
import * as api from '../service/api.js';
class Home extends React.Component{
	render(){
		return (
			<VisibleMovieList getMovies = {api.getMovies}/>
		);
	}
}

export default Home;