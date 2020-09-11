// ======================================
// Blog Post Loading Component - Ensures that the blog post list has loaded before rendering the correct blog post
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { getBlogPostList } from './../actions/actions';
import { BlogPost } from './blogpost';

// CSS Imports 
import './blogpost.css';


// ===========
// BlogPost Component  
// ===========

export class LoadBlogPostWrapper extends Component {


	componentDidMount() {

		if (this.props.blogPostList.length === 0) {

			this.props.getBlogPostList();

		}

	}

	render() {

		let result = (


				<div className='blog-post-wrapper'>

					<BlogPost postName={this.props.postName}/>

				</div>


			);

		return result;

	}
}




// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		blogPostList: state.blogPostList

  	};
};


export const LoadBlogPost = connect(mapStateToProps, {getBlogPostList})(LoadBlogPostWrapper);

