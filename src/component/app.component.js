import React from 'react';
import {Route} from 'react-router-dom';

import Home from './home.component.js';
import Search from './search.component.js';
import Detail from './details.component.js';
import Header from './header.component.js';
import '../styles/index.css';
export default class App extends React.Component{
	render(){
		return(<div>
			<Header/>
			<div className="container">
				<Route exact path="/" component={Home}/>
				<Route path="/search" component={Search}/>
				<Route path="/movie/:id" component={Detail}/>
			</div>
		</div>
		);
	}
}

