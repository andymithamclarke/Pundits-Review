// ======================================
// Blog List Item Component - Displays One blog item - headline, image, & description
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';

// Local JS Imports
import { BlogListDot } from './blog_list_dot';

// CSS Imports 
import './blog_list_item.css';


// ===========
// Blog List Item Component 
// ===========


export class BlogListItem extends Component {


	render() {

		let itemStyle = {

			backgroundImage: "url(" + this.props.imageURL + ")",
		}

		let blogPostAddress = "/blogpost/" + this.props.postName; 

		let result = (

				<Link to={blogPostAddress} className="react-link">

					<div className="blog-list-item-wrapper">

						<span className="blog-list-item-image" style={itemStyle}></span>

						<p className="body-text-light blog-list-item-date">{this.props.date}</p>

						<p className="body-text-light blog-list-item-headline">{this.props.headline}</p>

						<BlogListDot />

						<p className="body-text-light blog-list-item-description">{this.props.description}</p>

					</div>

				</Link>

			);


		return result;
	}
}