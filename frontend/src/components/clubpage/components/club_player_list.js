// ======================================
// Player List Component - Displays list of players & review scores belonging to current club
// ======================================



// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports
import { ClubPlayerListPlayerItem } from './club_player_list_player_item';
import { setReviewScore, returnDateMatchArray } from '../../global/functions/set_data_helpers';

// CSS Imports 
import './club_player_list.css';

// ===========
// Club Player List Component
// ===========


export class ClubPlayerList extends Component {

	render() {

		let result = <span></span>;

		if (this.props.players) {

			result = (

				<div className="club-player-list-wrapper">

					<p className="club-player-list-title heading-text">{this.props.clubName + " Players"}</p>

					{this.props.players.map((player, index) => {

						let dateArray = returnDateMatchArray(player.scores);

						if (dateArray.length) {

							let playerReviewScore = dateArray[0].sentiment_score;
							let playerPositive = dateArray[0].n_positive;
							let playerNegative = dateArray[0].n_negative;

							if ((playerPositive + playerNegative) > 3) {

								return <ClubPlayerListPlayerItem key={index} playerName={player.player} reviewScore={Math.round(playerReviewScore * 100)} />

							}

						}

					})}


				</div>


			);


		}


		return result;
	}
}