// ======================================
// Club Player List Individual Player Item Component - displays player name & review score
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Local JS Imports 
import { ReviewScoreCircle } from '../../results/components/review_score_circle';
import { setPlayer } from '../../actions/actions';

// CSS Imports 
import './club_player_list_player_item.css';

// ===========
// Club Player List Player Item Component
// ===========


export class ClubPlayerListPlayerItemWrapper extends Component {

	_handleClick(playerName) {

		this.props.setPlayer(this.props.playerName);

	}

	render() {

		let playerNameParam = "/players/" + encodeURIComponent(this.props.playerName);

		let result = (

				<Link to={playerNameParam} className="club-player-list-player-item-container react-link" onClick={() => this._handleClick(this.props.playerName)}>

					<p className="club-player-list-player-item-name body-text-light">{this.props.playerName}</p>

					<ReviewScoreCircle reviewScore={this.props.reviewScore} />

				</Link>

			);


		return result;
	}
}


// ===============
// Connect redux state container to ClubPlayerListPlayerItem component
// ===============


const mapStateToProps = state => {
  return { 

	  	playersViewed: state.playersViewed
  	};
};



// Export connected component
export const ClubPlayerListPlayerItem = connect(mapStateToProps, { setPlayer })(ClubPlayerListPlayerItemWrapper);