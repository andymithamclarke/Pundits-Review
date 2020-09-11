// ======================================
// Insights GRID View Component - Renders the insights results as a carousel
// Will display data according to supplied props
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { usePromiseTracker } from "react-promise-tracker";

// Local JS Imports
import { GridTableHeader } from './grid_table_header';
import { GridItem } from './grid_item';
import { sortArray } from '../../global/functions/set_data_helpers';
import { Loading } from '../../global/components/loading';
import { insights_settings } from '../../constants/insights_settings';

// CSS Imports 
import './grid_view.css';


// ===========
// Card View Component
// ===========

export const InsightsGridWrapper = props => {


	let result;

	// Track promise request
	const { promiseInProgress } = usePromiseTracker();

	// Save reference to current insights array & variable name -- depending on the category chosen by the user
	let currentInsightsArray = props[insights_settings[props.insightsSettingsKey].stateArrayKey];
	let currentInsightsVariableName = insights_settings[props.insightsSettingsKey].scoreVariableName;
	let calculationVariable = insights_settings[props.insightsSettingsKey].calculationVariable;
	let currentScoreCategory = insights_settings[props.insightsSettingsKey].categoryName;

	// Check if the array has loaded from the API before rendering
	if (currentInsightsArray.length) {

		let sortedGridArray;
		let counter;

		if (props.topBottomInsights === "TOP") {

			sortedGridArray = sortArray(currentInsightsArray, currentInsightsVariableName, true);

			counter = 0

		} else {

			sortedGridArray = sortArray(currentInsightsArray, currentInsightsVariableName);

			// Start counter at length of array of distinct sentiment scores
			counter = [ ... new Set(currentInsightsArray.map(item => Math.round(item[currentInsightsVariableName] * calculationVariable)))].length + 1;

		}

		let previousScore;

		let currentRank;

		result = (

				<div className="grid-view-wrapper">

					<GridTableHeader scoreCategory={currentScoreCategory} />

					{sortedGridArray.map((player, index) => {
						
						let currentScore = Math.round(player[currentInsightsVariableName] * calculationVariable);

						if (currentScore === previousScore) {
							
							currentRank = counter.toString() + "=" 

						} else {
							
							if (props.topBottomInsights === "TOP") {
								counter ++
							} else {
								counter --
							}

							currentRank = counter.toString()

						}
						

						previousScore = currentScore

						return <GridItem key={index} index={index} rank={currentRank} playerName={player.player_name} clubName={player.club} score={currentScore}/>

					})}

				</div>

			);
	} else {

		result = <Loading/>
	}

	return result;
}


// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		playerReviewScores: state.playerReviewScores,
  		playerTotalReviews: state.playerTotalReviews,
  		playerAvgScores: state.playerAvgScores,
  		topBottomInsights: state.topBottomInsights,
  		insightsSettingsKey: state.insightsSettingsKey

  	};
};


export const InsightsGrid = connect(mapStateToProps)(InsightsGridWrapper);


