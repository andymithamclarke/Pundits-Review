// ======================================
// Blog Player Card Component - Displays player card belonging to player supplied by props 
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { CardItem } from '../../insightspage/components/card_item';
import { setReviewSentences, returnSpecificDateMatchArray } from "../../global/functions/set_data_helpers";
import { setPlayer } from "../../actions/actions";

// CSS Imports 
import './blogplayercard.css';


// ===========
// Blog Player Card Component  
// ===========


export class BlogPlayerCardWrapper extends Component {

	// Set player in redux store according to player named in blog post DB entry
	componentDidMount = () => {

		if (this.props.playersViewed.length === 0) {

			this.props.setPlayer(this.props.playerName);

		} else {

			if (this.props.playersViewed[this.props.playersViewed.length - 1].player !== this.props.playerName) {

				this.props.setPlayer(this.props.playerName);

			}

		}

		

	}


	render() {

		let result;


		if (this.props.playersViewed.length) {

			// Render empty span if player name not supplied 
			if (this.props.playerName !== '""') {

				// Return the player db record associated with the specific date of the blog post
				let scoresArray = returnSpecificDateMatchArray(this.props.playersViewed[this.props.playersViewed.length - 1].scores, this.props.specificDate)

				result = (

					<div className="blog-card-item-wrapper" >

						<CardItem clubName={this.props.playersViewed[this.props.playersViewed.length - 1].club_name} playerName={this.props.playerName} scoreCategory={"PR SCORE"} score={10} gridTitle={this.props.specificDate} rank={this.props.playerRank} score={Math.round(scoresArray[0].sentiment_score * 100)} positiveReviews={scoresArray[0].n_positive} negativeReviews={scoresArray[0].n_negative} totalReviews={scoresArray[0].total_reviews}/>

					</div>
				);


			} else {

				result = <span></span>
			}

		} else {

			result = <span></span>
		}

		


		return result;
	}

}





// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		playersViewed: state.playersViewed

  	};
};


export const BlogPlayerCard = connect(mapStateToProps, { setPlayer })(BlogPlayerCardWrapper);


