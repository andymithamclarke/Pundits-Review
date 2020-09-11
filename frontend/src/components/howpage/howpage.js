// ======================================
// This file contains the top level HOW IT WORKS PAGE component that will wrap other elements on the HOW IT WORKS PAGE
// All other  HOW IT WORKS PAGE components will be directed through this component
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
import { InfoBar } from './../playerpage/components/infobar';
import { HowPageBodyText } from './components/howpage_body_text';
import { ReviewScoreQuestion } from './components/review_score_question';
import { HowPageSubHeading } from './components/howpage_subheading';
import { DividingLine } from './../global/components/dividing_line';
import { ReviewScoreCircle } from './../results/components/review_score_circle';
import { OurSourcesWrapper } from './components/our_sources_wrapper';
import { Footer } from './../global/components/site_footer/footer';

// CSS Imports
import './howpage.css';
import './howpage_image.css';



// ===========
// How Page Component 
// ===========


export class HowPage extends Component {

	render() {

		let result = (

				<div className="how-page-wrapper">

					<Helmet>
				
						<title>Pundits Review - How It Works</title>
						<meta property="og:description" content="How we collect and process our football data"/>
						<meta property="og:url" content="https://www.punditsreview.com/howitworks"/>
			    		<meta property="og:type" content="football blog data"/>

			    	</Helmet>

					<p className="how-page-title heading-text">How It Works</p>

					<HowPageBodyText text={"Every week, Pundits Review collects articles about the Premier League, analyses them and then gives a score to players and clubs based on how they were reviewed within them."}/>

					<ReviewScoreQuestion />

					<div className="how-section-wrapper">

						<HowPageSubHeading text={"Collecting Content"}/>

						<HowPageBodyText text={"Our system makes weekly visits to over 60 football websites and finds new articles about the Premier League."}/>

						<div className="how-page-image-container">
							<span className="article-outline-image howpage-image"></span>
						</div>

					</div>

					<DividingLine />

					<div className="how-section-wrapper">

						<HowPageSubHeading text={"Picking Out Phrases"}/>

						<HowPageBodyText text={"We collect the text from each new article we find, then divide it into short phrases."}/>

						<div className="how-page-image-container">
							<span className="article-phrases-image howpage-image"></span>
						</div>

					</div>

					<DividingLine />

					<div className="how-section-wrapper">

						<HowPageSubHeading text={"Identifying Targets"}/>

						<HowPageBodyText text={"We process the article phrases one at a time, firstly looking out for which player or club is being written about."}/>

						<div className="how-page-image-container-short">
							<span className="target-identifier-image howpage-image"></span>
						</div>

					</div>

					<DividingLine />

					<div className="how-section-wrapper">

						<HowPageSubHeading text={"Predicting Sentiment"}/>

						<HowPageBodyText text={"Based on the other words in the phrase, our model predicts whether it is a positive, negative or neutral review. You might not always agree with our predictions!"}/>

						<div className="how-page-image-container">
							<span className="predict-sentiment-image howpage-image"></span>
						</div>

					</div>

					<DividingLine />

					<div className="how-section-wrapper">

						<HowPageSubHeading text={"Calculating Review Scores"}/>

						<HowPageBodyText text={"After every phrase has been processed, we calculate review scores for players and clubs."}/>


						<div className="how-page-image-container">
							<span className="calculate-score-image howpage-image"></span>
						</div>

					</div>

					<DividingLine />

					<OurSourcesWrapper />

					<Footer />

				</div>

			);


		return result;
	}
}