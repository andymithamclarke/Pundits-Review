// ======================================
// Page Not Found Component - Displays text showing the user that a page was not found
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Local JS Imports 
import { DividingLine } from './dividing_line';

// CSS Imports 
import './no_results_found.css';

// ===========
// PageNotFound Component 
// ===========

export class PageNotFound extends Component {

	render() {

		let result = (

				<div className="empty-page-wrapper">

					<Helmet>
				
						<title>Pundits Review - Page Not Found</title>
						<meta property="og:description" content="Nothing to see here ..."/>
						<meta property="og:url" content="https://www.punditsreview.com/"/>
			    		<meta property="og:type" content="football blog data"/>

			    	</Helmet>

					<p className="no-results-text body-text-light">URMM ... NOTHING TO SEE HERE</p>

					<DividingLine />

					<p className="no-results-sub-text body-text-light">Tip: Use the filter on the <Link to="/playerrankings" className="react-link black-text opaque-link">player rankings page</Link> to filter players by club, nationality & position.</p>

					<Link to="/" className="react-link empty-page-home-link body-text-light">
						HOME 
					</Link>

				</div>

			);


		return result;
	}
}
