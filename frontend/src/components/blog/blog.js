// ======================================
// Blog Home Component - Wrapper component for all elements on the blog page
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// Local JS Imports
import { getBlogPostList } from './../actions/actions';
import { BlogList } from './components/blog_list';

// CSS Imports 
import './blog.css';




// ===========
// Blog Home Component 
// ===========


export class BlogHomeWrapper extends Component {


	componentDidMount() {

		this.props.getBlogPostList();
	}


	render() {


		let result = (


				<div className="blog-page-wrapper">

					<Helmet>
				
						<title>Pundits Review Blog</title>
						<meta property="og:description" content="The Latest Stories from Pundits' Review"/>
						<meta property="og:url" content="https://www.punditsreview.com/blog"/>
			    		<meta property="og:type" content="football blog data"/>

			    	</Helmet>

					<p className="heading-text blog-page-title">Pundits Review Blog</p>

					<p className="body-text-light blog-page-description">LATEST STORIES</p>

					<BlogList />

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


export const BlogHome = connect(mapStateToProps, {getBlogPostList})(BlogHomeWrapper);
