// ======================================
// Review Score Question Component - Contains review score circle and illustration 
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";


// Local JS Imports



// CSS Imports 
import './review_score_question.css';


// ===========
// Review Score Question Component 
// ===========

export class ReviewScoreQuestion extends Component {

	render() {

		let result = (

				<div className="review-score-question-wrapper">

					<span className="arrow-question-image"></span>

				</div> 


			);


		return result;
	}
}