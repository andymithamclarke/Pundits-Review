// ======================================
// This file contains the top level INSIGHTS PAGE component that will wrap other elements on the landing page
// All other INSIGHTS PAGE components will be directed through this component
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';

// Local JS Imports 
import { TopBottomToggle } from './components/top_bottom_toggle';
import { CardGridToggle } from './components/card_grid_toggle';
import { getPlayerReviewScores, clearPlayerReviewScores, getPlayerTotalReviews, getPlayerAvgScore, setInsightsCategory, setTopBottomInsights, setGridCardView } from './../actions/actions';
import { InsightsResults } from './components/insights_results';
import { FilterPage } from './components/filterpage/filterpage';
import { Footer } from './../global/components/site_footer/footer';

// CSS Imports 
import './insightspage.css';

// ===========
// Insights Page Component
// ===========


export class InsightsPageWrapper extends Component {

	componentDidMount() {

	// Wait until page loads to make API Calls 
	const pageLoadTimer = setTimeout(() => {

		// Load the player review scores
	    this.props.getPlayerReviewScores();

	    // Load the player total reviews
	    this.props.getPlayerTotalReviews();

	    // Load the player total reviews
	    this.props.getPlayerAvgScore();


	}, 500);



	// Switch to top view
	this.props.setTopBottomInsights("TOP");

	// Switch to grid view
	this.props.setGridCardView("CARD");

	// Load the player review scores
    this.props.clearPlayerReviewScores();

    // Switch to review score category
	//this.props.setInsightsCategory("REVIEW SCORES");

  }


	render() {

		let result;

		if (this.props.filterActive === false) {

			result = (

				<div className="insights-page-wrapper">

					<Helmet>
				
						<title>Pundits Review - Player Rankings</title>
						<meta property="og:description" content="Premier League players ranked by their Pundits Review ratings"/>
						<meta property="og:url" content="https://www.punditsreview.com/playerrankings/"/>
			    		<meta property="og:type" content="football blog data"/>

			    	</Helmet>

					<p className="insights-page-title heading-text">Player Rankings</p>

					<TopBottomToggle />

					<CardGridToggle />

					<InsightsResults />

					<Footer />

				</div>


			);

		} else {

			result = (
				
				<div className="insights-page-wrapper">

					<Helmet>
				
						<title>Pundits Review - Filter Player Rankings</title>
						<meta property="og:description" content="Premier League players ranked by their Pundits Review ratings"/>
						<meta property="og:url" content="https://www.punditsreview.com/playerrankings/"/>
			    		<meta property="og:type" content="football blog data"/>

			    	</Helmet>

					<p className="insights-page-title heading-text">Player Rankings</p>

					<FilterPage />

				</div>


			);
		}

		return result;
	}
}


// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		playerReviewScores: state.playerReviewScores,
  		playerTotalReviews: state.playerTotalReviews,
  		playerAvgScores: state.playerAvgScores,
  		filterActive: state.filterActive


  	};
};


export const InsightsPage = connect(mapStateToProps, { getPlayerReviewScores, clearPlayerReviewScores, getPlayerTotalReviews, getPlayerAvgScore, setInsightsCategory, setTopBottomInsights, setGridCardView })(InsightsPageWrapper);