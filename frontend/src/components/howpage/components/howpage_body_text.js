// ======================================
// How Page Body Text Component - contains text for the top par & text to explain each subheading
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// CSS Imports 
import './howpage_body_text.css';



// ===========
// How Page Body Text Component 
// ===========

export class HowPageBodyText extends Component {

	render() {

		let result = (

				<div className="how-page-body-text-wrapper">

					<p className="how-page-body-text body-text-light">{this.props.text}</p>

				</div>

			);


		return result;
	}
}