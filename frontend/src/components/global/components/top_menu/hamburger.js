// ======================================
// This file contains the hamburger menu component to be used within the top menu component
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local Imports
import './hamburger.css';


// ===========
// Hamburger class
// ===========
export class Hamburger extends Component {

	_handleKeyDown(e) {

		// Trigger Open on Enter
  		if (e.key == "Enter") {
  			this.props.onClick();
  			
  		}

    }


	render() {

		let result = (

				

					<div tabIndex="0" className="hamburger-container" role="button" onClick={this.props.onClick} onKeyDown={(e) => this._handleKeyDown(e)}>

		
						<span id="top-hamburger-bar" className="hamburger-bar background-light"></span>
						<span id="middle-hamburger-bar" className="hamburger-bar background-light"></span>
						<span id="bottom-hamburger-bar" className="hamburger-bar background-light"></span>

						
					</div>
				
			);

		return result;
	}
}