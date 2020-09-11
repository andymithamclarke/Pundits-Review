// ======================================
// Blog Paragraph Component - Displays paragraph text as supplied by props
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports


// CSS Imports 
import './blogparagraph.css';


// ===========
// Blog Header Image Component 
// ===========

export const BlogParagraph = props => {


	let result;


	if (props.text !== '""') {

		result = (

			<p className="blog-paragraph-text body-text-light">{props.text}</p>

		);


	} else {

		result = <span></span>
	}


	return result;

}