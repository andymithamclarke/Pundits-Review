// ======================================
// Blog Post Component - Will wait for content to load then display the Blog Post Content Component 
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { usePromiseTracker } from "react-promise-tracker";

// Local JS Imports
import { Loading } from './../global/components/loading';
import { BlogPostContent } from './components/blogpostcontent';

// CSS Imports 
import './blogpost.css';


// ===========
// Blog Post Component 
// ===========

export const BlogPost = props => {

	// Display loading screen until Promise resolved & blog post content has loaded
	const { promiseInProgress } = usePromiseTracker();

	let result;

	if (promiseInProgress === false) {

		result = (

				<BlogPostContent postName={props.postName}/>

			);


	} else {

		result = (

				<div className="blog-loading-container">

					<Loading />

				</div>

			);
	}


	return result;


}