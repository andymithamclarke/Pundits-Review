// ======================================
// This file contains the top level LANDING PAGE component that will wrap other elements on the landing page
// All other LANDING PAGE components will be directed through this component
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports 
import { LandingBackground } from './components/landingbackground';
import { SearchBar } from './components/search';

// Local CSS Imports
import './landingpage.css';

// ===============
// LandingPage Component 
// ===============


export class LandingPage extends Component {

	render() {

		let result = (

			<div className="landing-page-wrapper">

				<LandingBackground />

				<div className="landing-page-text-inner-wrapper">

					<p className="landing-logo-text heading-text white-text">PR</p>

					<p className="landing-site-name-text heading-text white-text">Pundits Review</p>

					<p className="landing-description-text body-text-light white-text side-margin">The scoring system that shows you how Premier League players and teams were reviewed by the media</p>

				</div>

				<div className="landing-page-search-inner-wrapper side-margin">
					<SearchBar />
				</div>

			</div>

			);

		return result;
	}
}