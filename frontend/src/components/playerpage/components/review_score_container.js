// ======================================
// Review Score Container Component for use within the player page - review score, positive, negative, total
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports
import { ReviewScoreCircle } from '../../results/components/review_score_circle';

// CSS Imports 
import './review_score_container.css';

// ===========
// Review Score Component
// ===========


export class ReviewScoreContainer extends Component {


	render() {


		let result = (

			<div className="review-score-container-wrapper">

				<p className="review-score-pundits-title heading-text">Pundits Review</p>
				<ReviewScoreCircle reviewScore={this.props.reviewScore} />

				<div className="review-score-positive-negative-total-grid">

					<p className="review-score-positive-text body-text-light">Positive Reviews</p>
					<p className="review-score-negative-text body-text-light">Negative Reviews</p>
					<p className="review-score-total-text body-text-light">Total Reviews</p>

					<p className="review-score-positive-number body-text-light">{this.props.positiveReviews}</p>
					<p className="review-score-negative-number body-text-light">{this.props.negativeReviews}</p>
					<p className="review-score-total-number body-text-light">{this.props.totalReviews}</p>

				</div>

				
			</div>


			);

		return result
	}
}