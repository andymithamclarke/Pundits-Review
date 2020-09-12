// ======================================
// CARD ITEM component - Individual container for each player in the insights page
// Rendered within Swiper carousel
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

// Local JS Imports
import { club_badges } from '../../global/resources/club_badges';
import { club_shirts } from '../../global/resources/club_shirts';
import { club_colors } from '../../global/resources/club_colors';
import { setPlayer } from '../../actions/actions';

// CSS Imports 
import './card_item.css';

// ===========
// Card Item Component
// ===========

export class CardItemWrapper extends Component {

	// Set player in redux store on button click
	_handleLinkClick = () => {

		this.props.setPlayer(this.props.playerName)

	}

	render() {

		// Declare specific player page url
		let playerNameParam = "/players/" + encodeURIComponent(this.props.playerName);

		let result = (

				<div className="insights-card-item-wrapper background-light">

					<div className={"insights-card-item-header-container " + club_colors[this.props.clubName]}>

						<p className="insights-card-item-player-name-header body-text-light white-text">{this.props.playerName.toUpperCase()}</p>
						<p className="insights-card-item-rank-header body-text-light white-text">{"RANK: " + this.props.rank}</p>

					</div>

					<div className="insights-card-item-player-image-container">

						<span className={"insights-card-club-badge club-badge " + club_badges[this.props.clubName]}></span>
						<span className={"insights-card-player-shirt club-shirt " + club_shirts[this.props.clubName]}></span>
						<p className="insights-card-player-name-inner body-text">{this.props.playerName.toUpperCase()}</p>
						<p className="insights-card-club-name body-text-light white-text">{this.props.clubName.toUpperCase()}</p>


					</div>

					<div className="insights-card-item-review-score-container background-light">

						<p className="insights-card-item-score-category body-text-light">{this.props.scoreCategory.toUpperCase()}</p>
						<p className="insights-card-item-score-category-score body-text">{this.props.score}</p>

						<div className="insights-card-item-positive-negative-neutral-grid-container body-text-light">

							<p className="insights-card-grid-title">{this.props.gridTitle}</p>

							<p className="insights-card-positive-score">{this.props.positiveReviews}</p>
							<p className="insights-card-negative-score">{this.props.negativeReviews}</p>
							<p className="insights-card-total-score">{this.props.totalReviews}</p>

							<p className="insights-card-positive-text">Positive Reviews</p>
							<p className="insights-card-negative-text">Negative Reviews</p>
							<p className="insights-card-total-text">Total Reviews</p>

						</div> 

					</div>

					<div className="insights-card-item-button-container background-light"> 

						<Link to={playerNameParam} className="insights-card-item-view-player-button body-text-light background-light react-link" onClick={this._handleLinkClick}>
							VIEW PLAYER PAGE
						</Link>

					</div>

				</div>

			);

		return result;
	}
}



// ===============
// Connect redux state container to Grid Item component
// ===============


const mapStateToProps = state => {
  return { 

	  	playersViewed: state.playersViewed
  	};
};



// Export connected component
export const CardItem = connect(mapStateToProps, { setPlayer })(CardItemWrapper);