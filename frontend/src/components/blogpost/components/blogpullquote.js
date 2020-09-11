// ======================================
// Blog Pull Quote Component - Displays pull quote text as supplied by props
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports


// CSS Imports 
import './blogpullquote.css';


// ===========
// Blog Header Image Component 
// ===========

export const BlogPullQuote = props => {


	let result;


	if (props.text !== '""') {

		result = (

			<p className="blog-pull-quote-text body-text-light">{props.text}</p>

		);


	} else {

		result = <span></span>
	}


	return result;

}