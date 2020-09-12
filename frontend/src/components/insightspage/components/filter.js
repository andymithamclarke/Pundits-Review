// ======================================
// This file contains the FILTER component - button to activate filter component
// Allows users to filter players on the insights page by nationality, position and club
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports 
import { setFilterActive, applyFilterPlayerReviewScores, applyFilterPlayerTotalScores, applyFilterPlayerAvgScores } from '../../actions/actions';


// CSS Imports 
import './filter.css';


// ===========
// Filter Component 
// ===========

export class FilterWrapper extends Component {


	_handleClick = () => {
		

		// Activate the filter page
		this.props.setFilterActive(true);

		// Reset filter settings 
		let filterSettings = {

			position: [],
			club: [],
			nationality: []

		}
		
		// Apply the filter to the current player review scores array
		this.props.applyFilterPlayerReviewScores(this.props.originalPlayerReviewScores, filterSettings);

		// Apply the filter to the player total reviews array
		this.props.applyFilterPlayerTotalScores(this.props.originalPlayerTotalReviews, filterSettings);

		// Apply the filter to the player avg scores array
		this.props.applyFilterPlayerAvgScores(this.props.originalPlayerAvgScores, filterSettings);
	}


	render() {

		let result = (

				<div className="filter-button-container">

					<button className="filter-button body-text-light" onClick={this._handleClick}>
						FILTER
					</button>

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

  		filterActive: state.filterActive,
  		originalPlayerReviewScores: state.originalPlayerReviewScores,
  		playerReviewScores: state.playerReviewScores,
  		originalPlayerTotalReviews: state.originalPlayerTotalReviews,
  		playerTotalReviews: state.playerTotalReviews,
  		originalPlayerAvgScores: state.originalPlayerAvgScores,
  		playerAvgScores: state.playerAvgScores,
  		filterActive: state.filterActive,
  		positionFilters: state.positionFilters,
		clubFilters: state.clubFilters,
		nationalityFilters: state.nationalityFilters
  	};
};


export const Filter = connect(mapStateToProps, { setFilterActive, applyFilterPlayerReviewScores, applyFilterPlayerTotalScores, applyFilterPlayerAvgScores })(FilterWrapper);