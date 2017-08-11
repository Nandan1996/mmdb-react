import React from 'react';
import {default as PropTypes} from 'prop-types';
export default class Modal extends React.Component {
	constructor(props){
		super(props);
		this.close = this.close.bind(this);
	}
	close(e) {
		e.preventDefault();

		if (this.props.onClose) {
			this.props.onClose();
		}
	}
	render() {
		if (this.props.isOpen === false)
			return null;

		let modalStyle = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			zIndex: '9999',
			background: '#fff'
		};

		if (this.props.width && this.props.height) {
			modalStyle.width = this.props.width + 'px';
			modalStyle.height = this.props.height + 'px';
			modalStyle.marginLeft = (- this.props.width / 2) + 'px',
			modalStyle.marginTop = (-this.props.height / 2) + 'px',
			modalStyle.transform = null;
		}

		let backdropStyle = {
			position: 'absolute',
			width: '100%',
			height: '100%',
			top: '0px',
			left: '0px',
			zIndex: '9998',
			background: 'rgba(0, 0, 0, 0.3)'
		};

		return (
			<div className={this.props.containerClassName}>
				<div className={this.props.className} style={modalStyle}>
					{this.props.children}
				</div>
				<div style={backdropStyle}
					onClick={this.close}/>
			</div>
		);
	}
}
Modal.defaultProps = {
	width: 350,
	height: 370
};
Modal.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	containerClassName: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.any
};
