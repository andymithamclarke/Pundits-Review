// ======================================
// Blog List Component - Will display a list of the currently available blog posts
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
import { Loading } from '../../global/components/loading';
import { BlogListItem } from './blog_list_item';

// CSS Imports
import './blog_list.css';


// ===========
// Blog List Component  
// ===========

export const BlogListWrapper = props => {


	// Display Loading screen until promise has resolved
	const { promiseInProgress } = usePromiseTracker();

	let result;

	if (promiseInProgress === false) {

		result = (

			<div className="blog-list-wrapper">

				{props.blogPostList.map((item, index) => {

					return <BlogListItem key={index} imageURL={item.header_image_url} headline={item.headline} date={item.date_text} description={item.thumbs_par} postName={item.post_name}/>


				})}

			</div>

			);


	} else {

		result = (

				<div className="blog-list-loading-container">

					<Loading />

				</div>

			);
	}


	return result;



}



// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		blogPostList: state.blogPostList

  	};
};


export const BlogList = connect(mapStateToProps)(BlogListWrapper);
