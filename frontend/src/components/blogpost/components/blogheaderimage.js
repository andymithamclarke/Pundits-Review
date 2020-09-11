// ======================================
// Blog Header Image Component - Displays the Header Image for each blog post 
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports


// CSS Imports 
import './blogheaderimage.css';


// ===========
// Blog Header Image Component 
// ===========

export const BlogHeaderImage = props => {

	let imageStyle = {

		backgroundImage: "url(" + props.imageURL + ")"

	}

	let result = (

			<span style={imageStyle} className="blog-header-image"></span>

		);


	return result;

}