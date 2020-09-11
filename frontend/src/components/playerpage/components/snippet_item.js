// ======================================
// Individual Snippet Item to be used inside the Carousel
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";

// Local JS Imports 


// Local CSS Imports
import './snippet_item.css';


// ===========
// Snippet Item Component
// ===========

export class SnippetItem extends Component {

	render() {

		let result = (

				<div className="snippet-item-wrapper background-light">

					<div className="snippet-item-header-container background-dark">

						<p className="snippet-item-media-source body-text-light white-text">{this.props.mediaSource}</p>
						<p className="snippet-item-published-date body-text-light white-text">{this.props.publishedDate}</p>


					</div>

					

						
					<p className="snippet-item-article-phrase body-text-light"><span className="snippet-item-quote-icon">&#8220;</span>{this.props.originalSentence}<span className="snippet-item-quote-icon">&#8221;</span></p>
						

					

					<div className="snippet-item-bottom-container">

						<a className="react-link" href={this.props.url} target="_blank">
							<button className="snippet-item-read-article-button body-text-light">
									READ THE ARTICLE
							</button>
						</a>

						

					</div>

				</div>

			);

		return result;
	}
}