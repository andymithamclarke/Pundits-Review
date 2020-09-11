// ======================================
// This file contains the top level RESULTS PAGE component that will wrap other elements on the RESULTS PAGE
// All other RESULTS PAGE components will be directed through this component
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { usePromiseTracker } from "react-promise-tracker";
import { Helmet } from 'react-helmet';

// Local JS Imports 
import { SearchBar } from "./../landingpage/components/search";
import { PlayerClubToggle } from "./components/playerclubtoggle";
import { Loading } from './../global/components/loading';


// Local CSS Imports
import './resultspage.css';


export const ResultsPageWrapper = props => {

	const { promiseInProgress } = usePromiseTracker();

	let result;

	if (promiseInProgress === false) {

		result = (

			

			<div className="results-page-wrapper">

				<Helmet>
		            <title>Pundits Review - Search Results</title>
		            <meta property="og:description" content="Pundits Review Search Results"/>
		            <meta property="og:url" content="https://www.punditsreview.com/results"/>
		            <meta property="og:type" content="football blog data"/>
		         </Helmet>

				<div className="search-bar-results-wrapper side-margin">

					<SearchBar/>

					<p className="results-info-text body-text-light">{props.searchDataClubs.length + props.searchDataPlayers.length} results found for "{props.searchTerms[props.searchTerms.length - 1]}"</p>

				</div>

				<PlayerClubToggle />

			</div>

		

		);


	} else {

		result = (

			<div className="results-page-wrapper">

				<Helmet>
		            <title>Pundits Review - Search Results</title>
		            <meta property="og:description" content="Pundits Review Search Results"/>
		            <meta property="og:url" content="https://www.punditsreview.com/results"/>
		            <meta property="og:type" content="football blog data"/>
		         </Helmet>

				<div className="search-bar-results-wrapper side-margin">

					<SearchBar/>

					<p className="results-info-text body-text-light">Fetching search results for "{props.searchTerms[props.searchTerms.length - 1]}"</p>

				</div>

				<Loading />

			</div>

		);


	}

	return result;
}

// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 
  		searchTerms: state.searchTerms,
  		searchDataClubs: state.searchDataClubs,
  		searchDataPlayers: state.searchDataPlayers,
  		searchRequestFinished: state.searchRequestFinished
  	};
};


export const ResultsPage = connect(mapStateToProps)(ResultsPageWrapper);



