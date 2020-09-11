// ======================================
// Plus Minus Icon Animation Component - Will Turn from plus to minus on click
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// CSS Imports 
import './plusminus.css';


// ===========
// Plus Minus Component
// ===========

export class PlusMinus extends Component {


	render() {

		let result = (

				<div id={this.props.containerId} className="plus-minus-container">
					<div className="plus-minus-bar plus-minus-bar--vertical"></div>
					<div id={this.props.barId} className="plus-minus-bar plus-minus-bar--horizontal plus"></div>
				</div>

			);


		return result;
	}
}