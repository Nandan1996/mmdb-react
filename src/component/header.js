import React from 'react';
import {NavLink} from 'react-router-dom';
export default class Header extends React.Component{
	render(){
		return (
			<header>
				<div className="nav">
					<div className="nav-brand">
						<span>My Movies</span>
					</div>
					<ul className="navbar">
						<li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
						<li><NavLink activeClassName="active" to = "/search">Search</NavLink></li>
						<li><NavLink activeClassName="active" to="#">Details</NavLink></li>
					</ul>
				</div>
			</header>
		);
	}
}