import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app.component.js';
class Root extends React.Component{
	render(){
		return (
			<Router forceRefresh>
				<App/>
			</Router>
		);
	}
}

export default Root;