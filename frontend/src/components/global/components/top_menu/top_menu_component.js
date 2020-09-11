// ======================================
// This file contains the top menu component to be used globally in the application
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
import { Hamburger } from './hamburger';
import { SideMenu } from './side_menu';
import { resetErrorBoundary } from '../../../actions/actions';

// Local CSS Imports
import './top_menu.css';


// ===============
// TopMenu Component 
// ===============
export class TopMenuWrapper extends Component {

	_handleHomeClick = () => {

		this.props.resetErrorBoundary();
	}


  	// Method to handle a burger click
    _handleBurgerClick = () => {

		// Animate the hamburger bars 
		document.querySelector('#top-hamburger-bar').classList.toggle('isactive');
		document.querySelector('#middle-hamburger-bar').classList.toggle('isactive');
		document.querySelector('#bottom-hamburger-bar').classList.toggle('isactive');

		// Animate the side menu
		document.querySelector('#side-menu-container').classList.toggle('side-menu-active');

    }

	render() {

		let result = (

				<div className="nav-wrapper">

					<SideMenu />				
					<div className="top-menu-container background-dark top-menu-height">

						<Hamburger onClick={this._handleBurgerClick} />

						<Link className="react-link" to="/" onClick={this._handleHomeClick}>
							<p className="white-text heading-text logo">Pundits Review</p>
						</Link>

					</div>
					
				</div>
			

			);

		return result
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


export const TopMenu = connect(mapStateToProps, { resetErrorBoundary })(TopMenuWrapper);
