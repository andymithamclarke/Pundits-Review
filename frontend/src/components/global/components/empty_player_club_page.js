// ======================================
// Empty Player Club Page Component - Shows user that no results were found for their query
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

// Local JS Imports 
import { DividingLine } from './dividing_line';

// CSS Imports 
import './no_results_found.css';

// ===========
// No Results Component 
// ===========

export class EmptyPlayerClubPage extends Component {

	render() {

		let result = (

				<div className="empty-page-wrapper">

					<p className="no-results-text body-text-light">It looks like you haven't selected a {this.props.playerOrClub} </p>

					<DividingLine />

					<p className="no-results-sub-text body-text-light">Head back to the homepage to make a new search for a {this.props.playerOrClub}</p>

					<Link to="/" className="react-link empty-page-home-link body-text-light">
						HOME 
					</Link>

				</div>

			);


		return result;
	}
}
