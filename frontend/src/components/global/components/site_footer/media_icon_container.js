// ======================================
// Media Icon Container - Displays buttons which users can click to contact or follow Pundits Review
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";


// CSS Imports 
import './footer.css';


// ===========
// Media Icon Container Component
// ===========

export class MediaIconContainer extends Component {

	render() {

		let result = (

				<div className="media-icon-wrapper">

					<i className="fa fa-envelope-o media-icon email-icon" aria-hidden="true"></i>

				</div>

			);


		return result;
	}
}

