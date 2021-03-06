import React from 'react';
import {Route} from 'react-router-dom';

import {Home,Search,Detail} from '../container';
import {Header} from '../component';
import '../styles/index.css';
const App = () =>{
	return(<div>
		<Header/>
		<div className="container">
			<Route exact path="/" component={Home}/>
			<Route path="/search/:filter?" component={Search}/>
			<Route path="/movie/:id" component={Detail}/>
		</div>
	</div>
	);
};
export default App;

