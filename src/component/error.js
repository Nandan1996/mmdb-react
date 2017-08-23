import React from 'react';
import PropTypes from 'prop-types';
class Error extends React.PureComponent{
	render(){
		return (
			<div className="not-found">
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
				{this.props.children}
			</div>
		);
	}
}

Error.defaultProps = {
	title: "Something went wrong.",
	description: "please try after sometime."
};

Error.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.any
};
export default Error;