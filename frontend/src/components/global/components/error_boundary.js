// ======================================
// Error Boundary Component - Redirects Users to Error Page if error is caught
// Wraps components making API calls 
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { resetErrorBoundary } from '../../actions/actions';


// Local JS Imports 



// ===========
// Error Boundary Component 
// ===========


export class ErrorBoundaryWrapper extends Component {

	componentDidUpdate() {

		if (this.props.errorExists && this.props.history.location.pathname !== "/error") {

			this.props.history.push("/error");

			// Reset Error Boundary
			this.props.resetErrorBoundary();
		}

	}

	render() {

		return <span>{this.props.children}</span>;
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


export const ErrorBoundary = withRouter(connect(mapStateToProps, { resetErrorBoundary } )(ErrorBoundaryWrapper));

