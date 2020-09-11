// ======================================
// Functional Component to make sure page scrolls to top on new page load  
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// ===========
// Scroll To Top Component
// ===========

// Code to force page to scroll to top on new page load 
// Adapted from post by Mark Thomas Miller on Jan 28' 2019
// https://mtm.dev/react-router-scroll-to-top/
// Accessed Aug 16 2020

class ScrollToTop extends Component {


	componentDidUpdate(prevProps) {

		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {

		return <React.Fragment />
	}
}

export default withRouter(ScrollToTop);

// End of referenced code