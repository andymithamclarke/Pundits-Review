// ======================================
// Blog Date Component - Displays the Date of publication
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports


// CSS Imports 
import './blogdate.css';


// ===========
// Blog Header Image Component 
// ===========

export const BlogDate = props => {


	let result = (

			<div className="blog-date-wrapper">
				<p className="blog-date-text body-text-light">{props.date}</p>
			</div>

		);


	return result;

}