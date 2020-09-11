// ======================================
// Blog Headline Component - Displays the Headline
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports


// CSS Imports 
import './blogpostheadline.css';


// ===========
// Blog Header Image Component 
// ===========

export const BlogHeadline = props => {

	let headlineText = props.headline;

	if (headlineText) {
		headlineText = headlineText.toUpperCase();
	}


	let result = (

			<p className="blog-headline-text body-text-light">{headlineText}</p>

		);


	return result;

}