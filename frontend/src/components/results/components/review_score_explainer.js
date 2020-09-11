// ======================================
// Review Score Explainer Component - displays a key to show users what the review score circle represents 
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports 
import { ReviewScoreCircle } from './review_score_circle';

// CSS Imports 
import './review_score_explainer.css';


// ===========
// Review Score Explainer Component
// ===========


export class ReviewScoreExplainer extends Component {


	render() {

		let result = (	

				<div className="review-score-explainer-wrapper">

					<ReviewScoreCircle reviewScore={100}/>
					<p className="review-score-explainer-text body-text-light">THIS WEEKS PR SCORE </p>

				</div>

			);


		return result;
	}
}