// ======================================
// Footer Component - Wraps other elements within the footer
// Site Footer appears on all pages except landing page & results page
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';

// Local JS Imports
import { MediaIconContainer } from './media_icon_container';

// CSS Imports 
import './footer.css';

// ===========
// Footer Component  
// ===========

export class Footer extends Component {

	render() {

		let result = (

				<div className="footer-wrapper">

					<p className="footer-title body-text-light">GET IN TOUCH</p>

					<div className="footer-logo-wrapper">
						
						<a target="_blank" className="react-link" href="https://twitter.com/AndyClarkeMedia"><i className="fa fa-twitter media-icon" aria-hidden="true"></i></a>
						<Link to="/" className="footer-logo heading-text react-link">PR</Link>
						<a target="_blank" className="react-link" href="mailto:clarkeAJ3@cardiff.ac.uk"><i className="fa fa-envelope media-icon" aria-hidden="true"></i></a>

					</div>

					

					<p className="footer-copyright-notice body-text-light">© Andy Clarke, 2020</p>


				</div> 


			);

		return result;
	}
}