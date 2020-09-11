// ======================================
// No Results Component - Shows user that no results were found for their query
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Local JS Imports 
import { DividingLine } from './dividing_line';

// CSS Imports 
import './no_results_found.css';

// ===========
// No Results Component 
// ===========

export const NoResultsWrapper = props => {

	let searchQueryText;

	if (props.searchQuery) {
		searchQueryText = props.searchQuery
	} else {
		searchQueryText = " "
	}

	let subText = "Although we are always trying to collect more reviews, it is worth remembering that we don't always have data on some " + props.playerOrClub + "."

	if (props.thisWeekEveryoneToggle === "THIS WEEK") {

		subText = "It doesn't look like we have data this week for '" + searchQueryText + "'. Try looking under 'ALL WEEKS' to see if we have older results matching your search."
	}

	let result = (

			<div className="no-results-wrapper">

				<p className="no-results-text body-text-light">We couldn't find any {props.playerOrClub} matching "{searchQueryText}"</p>

				<DividingLine />

				<p className="no-results-sub-text body-text-light">{subText}</p>

			</div>

		);


	return result;
}


// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 
  		thisWeekEveryoneToggle: state.thisWeekEveryoneToggle,
  		
  	};
};


export const NoResults = connect(mapStateToProps)(NoResultsWrapper);
