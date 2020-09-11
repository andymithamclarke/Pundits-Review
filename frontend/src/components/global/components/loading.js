// ======================================
// LOADING SCREEN component - contains icon and text to show user that page is loading
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// CSS Imports
import './loading.css';

// ===========
// Loading Component 
// ===========

export class Loading extends Component {


	render() {

		let result = (

			 <div className="loading-screen-wrapper" >

			 	<p className="loading-screen-text body-text-light">LOADING</p>

			 </div>

			);


		return result;
	}
}