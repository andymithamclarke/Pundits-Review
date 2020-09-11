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
import { resetErrorBoundary } from '../../actions/actions';

// CSS Imports 
import './no_results_found.css';

// ===========
// PageNotFound Component 
// ===========

export class ErrorPageWrapper extends Component {

	_handleClick = () => {

		this.props.resetErrorBoundary();

	}



	render() {

		let result = (

				<div className="empty-page-wrapper">

					<Helmet>
				
						<title>Pundits Review</title>
						<meta property="og:description" content="Error Page :("/>
						<meta property="og:url" content="https://www.punditsreview.com/"/>
			    		<meta property="og:type" content="football blog data"/>

			    	</Helmet>

					<p className="no-results-text body-text-light">SOMETHING HAS GONE WRONG AT OUR END ... FORGIVE US!</p>

					<DividingLine />

					<p className="no-results-sub-text body-text-light">'The error of one moment becomes the sorrow of a whole life' - Chinese Proverbs</p>

					<Link tabIndex="0" role="button" to="/" className="react-link empty-page-home-link body-text-light" onClick={this._handleClick}>
						HOME 
					</Link>

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
  		errorExists: state.errorExists
  	};
};


export const ErrorPage = connect(mapStateToProps, { resetErrorBoundary })(ErrorPageWrapper);
