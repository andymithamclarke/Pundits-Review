// ======================================
// Insights Card View Component - Renders the insights results as a carousel
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

// Swiper Imports & config
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// Local JS Imports
import { sortArray } from '../../global/functions/set_data_helpers';
import { Loading } from '../../global/components/loading';
import { insights_settings } from '../../constants/insights_settings';
import { CardItem } from './card_item';


// CSS Imports 
import './card_view.css';


// ===========
// Card View Component
// ===========

export const InsightsCardsWrapper = props => {

	let result;

	// Track promise request
	const { promiseInProgress } = usePromiseTracker();

	// Save reference to current insights array & variable name -- depending on the category chosen by the user
	let currentInsightsArray = props[insights_settings[props.insightsSettingsKey].stateArrayKey];
	let currentInsightsVariableName = insights_settings[props.insightsSettingsKey].scoreVariableName;
	let calculationVariable = insights_settings[props.insightsSettingsKey].calculationVariable;
	let currentScoreCategory = insights_settings[props.insightsSettingsKey].categoryName;

	if (promiseInProgress === false) {

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

		result =  (

				<div className="card-view-wrapper">

					<Swiper
				      spaceBetween={0}
				      slidesPerView={1}
				      navigation
				      lazy={true}
				      loop={true}
				      >


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
						
						previousScore = currentScore;

						let gridTitle = "THIS WEEK";

						if (props.insightsSettingsKey === "SEASON AVG SCORE") {
							gridTitle = " ALL SEASON"
						}

						let carousel = (

							<SwiperSlide key={index}>
								<CardItem playerName={player.player_name} clubName={player.club} rank={currentRank} scoreCategory={currentScoreCategory} score={currentScore} gridTitle={gridTitle} positiveReviews={player.n_positive} negativeReviews={player.n_negative} totalReviews={player.total_reviews}/>
							</SwiperSlide>
						)

						return carousel;

					  })}

				      



				    </Swiper>


				</div>

			);

	} else {

		result = <Loading />
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


export const InsightsCards = connect(mapStateToProps)(InsightsCardsWrapper);
