// ======================================
// This file contains the side menu component to be used within the top menu component
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Local JS Imports
import { resetErrorBoundary } from '../../../actions/actions';

// CSS Imports  
import './side_menu.css';


// ===========
// SideMenu Component 
// ===========


export class SideMenuWrapper extends Component {

	_handleLinkClick = () => {

		// Animate the hamburger bars 
		document.querySelector('#top-hamburger-bar').classList.toggle('isactive');
		document.querySelector('#middle-hamburger-bar').classList.toggle('isactive');
		document.querySelector('#bottom-hamburger-bar').classList.toggle('isactive');

		// Animate the side menu
		document.querySelector('#side-menu-container').classList.toggle('side-menu-active');

		// Reset Error Boundary if required
		this.props.resetErrorBoundary();
	}

	render() {

		let result = (

				<div id="side-menu-container" className="background-dark">

					<div className="side-menu-text-container">

						<Link to="/" className="body-text-light side-menu-text white-text react-link" onClick={this._handleLinkClick} >HOME</Link>
						<Link to="/playerrankings" className="body-text-light side-menu-text white-text react-link" onClick={this._handleLinkClick}>PLAYER RANKINGS</Link>
						<Link to="/howitworks" className="body-text-light side-menu-text white-text react-link" onClick={this._handleLinkClick}>HOW IT WORKS</Link>
						<Link to="/blog" className="body-text-light side-menu-text white-text react-link" onClick={this._handleLinkClick} >PUNDITS REVIEW BLOG</Link>

					</div>

					<div className="side-menu-logo-container">

						
						<Link to="/" className="heading-text side-menu-logo white-text react-link" onClick={this._handleLinkClick}>PR</Link>

					</div>

				</div>

			);

		return result;
	}
}





// ===========
// Connect component to redux store
// ===========

const mapStateToProps = state => {
  return { 
  		errorExists: state.errorExists
  	};
};


export const SideMenu = connect(mapStateToProps, { resetErrorBoundary })(SideMenuWrapper);

