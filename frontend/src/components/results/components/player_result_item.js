// ======================================
// Player Result Item Component - Contains info on each player returned from the API & links to individual player pages
// ======================================


// ===========
// IMPORTS 
// ===========

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Local JS Imports 
import { ReviewScoreCircle } from './review_score_circle';
import { setPlayer } from "../../actions/actions";
import { club_shirts } from '../../global/resources/club_shirts';

// CSS Imports
import './result_item.css';

// ===========
// Player Result Container
// ===========


export class PlayerResult extends Component {

	_handleClick(playerName) {

		this.props.setPlayer(this.props.playerName);

	}

	render() {

		let playerNameParam = "/players/" + encodeURIComponent(this.props.playerName);

		let result = (

				<Link to={playerNameParam} className="player-results-item-wrapper react-link" onClick={() => this._handleClick(this.props.playerName)} >

					<span className={"club-shirt player-result-player-shirt " + club_shirts[this.props.playerClub]}> </span>
					<p className="player-result-player-name heading-text black-text"> {this.props.playerName} </p>
					<p className="player-result-player-position body-text-light black-text"> {this.props.playerPosition} </p>
					<p className="player-result-player-club body-text-light black-text"> {this.props.playerClub} </p>
					<ReviewScoreCircle reviewScore={this.props.reviewScore}/>
					<p className="player-result-view-player body-text-light black-text">VIEW PLAYER</p>
					<i className="arrow-player-result-item fa fa-long-arrow-right" aria-hidden="true"></i>

				</Link>
			);

		return result;
	}
}


// ===============
// Connect redux state container to PlayerResult component
// ===============


const mapStateToProps = state => {
  return { 

	  	playersViewed: state.playersViewed
  	};
};



// Export connected component
export const PlayerResultContainer = connect(mapStateToProps, { setPlayer })(PlayerResult);



