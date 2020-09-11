// ======================================
// How Page Sub Heading Component - contains subheading text
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// CSS Imports 
import './howpage_subheading.css';


// ===========
// How Page SubHeading Component 
// ===========


export class HowPageSubHeading extends Component {

	render() {

		let result = (

				<div className="how-page-subheading-wrapper">

					<p className="how-page-subheading-text heading-text">{this.props.text}</p>

				</div>

			);


		return result;
	}
}