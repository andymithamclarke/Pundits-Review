// ======================================
// This file contains the PLAYER/CLUB toggle menu that is rendered on the RESULTS PAGE
// Allows users to toggle between seeing results for players with review scores THIS WEEK and EVERYONE 
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { defineSearchTerm, searchByPlayer, searchByClub, clearSearchResults, setThisWeekEveryoneToggleStatus } from "../../actions/actions";

// CSS Imports 
import './thisweek_everyone_toggle.css';


// ===========
// ThisWeekEveryoneToggle Component 
// ===========

export class ThisWeekEveryoneToggleContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thisWeekClassName: this.setThisWeekEveryoneClass("THIS WEEK"),
			everyoneClassName: this.setThisWeekEveryoneClass("EVERYONE")
		}
	}


	setThisWeekEveryoneClass = (category) => {

		if (this.props.thisWeekEveryoneToggle === category) {

			return "this-week-everyone-button this-week-everyone-button-active body-text-light"

		} else {

			return "this-week-everyone-button body-text-light"
		}

	}

	_handleClick = (event) => {

		let searchTerm = this.props.searchTerms[this.props.searchTerms.length - 1];

		// Clear Previous Search Results
		this.props.clearSearchResults();

		if (event.target.id === "this-week-button") {

			// Search By Player
			this.props.searchByPlayer(searchTerm);

			// Search By Club
			this.props.searchByClub(searchTerm);

			// Set Redux store toggle status
			this.props.setThisWeekEveryoneToggleStatus("THIS WEEK")

		} 

		if (event.target.id === "everyone-button") {

			// Search By Player
			this.props.searchByPlayer(searchTerm, true);

			// Search By Club
			this.props.searchByClub(searchTerm, true);

			// Set Redux store toggle status
			this.props.setThisWeekEveryoneToggleStatus("EVERYONE")

		}

		// Set the new className for each button 
		this.setThisWeekEveryoneClass();
		
	}

	render() {

		let result = (


			<div className="this-week-everyone-toggle-wrapper">

				<div className="this-week-everyone-button-container">

					<button id="this-week-button" className={this.state.thisWeekClassName} onClick={(e) => this._handleClick(e)}>THIS WEEK</button>
					<button id="everyone-button" className={this.state.everyoneClassName} onClick={(e) => this._handleClick(e)}>ALL WEEKS</button>

				</div>

			</div>

			);

		return result
	}
}



// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return {
  		searchTerms: state.searchTerms,
  		searchDataClubs: state.searchDataClubs,
  		searchDataPlayers: state.searchDataPlayers,
  		thisWeekEveryoneToggle: state.thisWeekEveryoneToggle
  	};
};


export const ThisWeekEveryoneToggle = connect(mapStateToProps, { defineSearchTerm, searchByPlayer, searchByClub, clearSearchResults, setThisWeekEveryoneToggleStatus })(ThisWeekEveryoneToggleContainer);

