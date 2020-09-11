// ======================================
// Apply Filter Component - button to trigger new filter action
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { applyFilterPlayerReviewScores, applyFilterPlayerTotalScores, applyFilterPlayerAvgScores, setFilterActive, setGridCardView } from '../../../actions/actions';

// CSS Imports 
import './apply_filter.css';

// ===========
// Apply Filter Component
// ===========


export class ApplyFilterButtonWrapper extends Component {

	_handleClick = () => {

		let filterSettings = {

			position: this.props.positionFilters,
			club: this.props.clubFilters,
			nationality: this.props.nationalityFilters

		}
		
		// Apply the filter to the current player review scores array
		this.props.applyFilterPlayerReviewScores(this.props.originalPlayerReviewScores, filterSettings);

		// Apply the filter to the player total reviews array
		this.props.applyFilterPlayerTotalScores(this.props.originalPlayerTotalReviews, filterSettings);

		// Apply the filter to the player avg scores array
		this.props.applyFilterPlayerAvgScores(this.props.originalPlayerAvgScores, filterSettings);

		// Deactivate the filter page
		this.props.setFilterActive(false)

		// Set Grid View - Insights page
		this.props.setGridCardView("CARD");

	}

	render() {

		let result = (

				<div className="apply-filter-button-wrapper">
					<button className="apply-filter-button body-text-light" onClick={this._handleClick}>
						APPLY FILTER
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


export const ApplyFilterButton = connect(mapStateToProps, { applyFilterPlayerReviewScores, applyFilterPlayerTotalScores, applyFilterPlayerAvgScores, setGridCardView, setFilterActive })(ApplyFilterButtonWrapper)
