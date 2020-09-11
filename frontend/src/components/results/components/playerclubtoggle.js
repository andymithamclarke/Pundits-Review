// ======================================
// This file contains the PLAYER/CLUB toggle menu that is rendered on the RESULTS PAGE
// Allows users to toggle between seeing results for players and for clubs
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports 
import { ResultsList } from "./results_list";
import { ThisWeekEveryoneToggle } from './thisweek_everyone_toggle';

// Local CSS Imports
import './playerclubtoggle.css';


export class PlayerClubToggleComponent extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
      		playerViewSelected: true,
   		};
   		this._handleToggle = this._handleToggle.bind(this);
  	}

	_handleToggle() {

		// Toggle the playerViewSelected state
    	this.setState(prevState => ({
			playerViewSelected: !prevState.playerViewSelected
		}));

		// Animate the change - MENU TEXT & BORDER
		document.querySelector('#player-toggle').classList.toggle('toggle-active');
		document.querySelector('#club-toggle').classList.toggle('toggle-active');

		// Animate the change - NUMBER BOX
		document.querySelector('#player-number-box').classList.toggle('number-box-active');
		document.querySelector('#club-number-box').classList.toggle('number-box-active');
		
	}

	render() {

		let result = (

				<div className="results-menu-wrapper">

					<div className="player-club-toggle-wrapper">

						<div id="player-toggle" role="button" className="player-club-toggle-player-inner-container toggle-inner-container toggle-active" onClick={this._handleToggle}>

							<p className="player-club-menu-text heading-text">Players</p>

							<div id="player-number-box" className="results-number-box number-box-active">
								<p className="results-number-text body-text">{this.props.searchDataPlayers.length}</p>
							</div>

						</div>

						<div id="club-toggle" role="button" className="player-club-toggle-club-inner-container toggle-inner-container" onClick={this._handleToggle}>

							<p className="player-club-menu-text heading-text">Clubs</p>

							<div id="club-number-box" className="results-number-box">
								<p className="results-number-text body-text">{this.props.searchDataClubs.length}</p>
							</div>

						</div>

					</div>

					<ThisWeekEveryoneToggle />

					<ResultsList playerViewSelected={this.state.playerViewSelected}/>


				</div>

			);

		return result;
	}
}



// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 
  		searchDataClubs: state.searchDataClubs,
  		searchDataPlayers: state.searchDataPlayers
  	};
};


export const PlayerClubToggle = connect(mapStateToProps)(PlayerClubToggleComponent);