// ======================================
// Search Dropdown component - Rendered when Live Search is triggered
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

// Local JS Imports
import { defineSearchTerm, searchByPlayer, searchByClub, clearSearchResults, setThisWeekEveryoneToggleStatus } from "../../actions/actions";


// CSS Imports
import './search_dropdown.css';

// ===========
// Search Dropdown Component
// ===========


export class SearchDropdown extends Component {

	_handleClick(e) {

		let targetClicked = e.target.innerText

		// Set redux state 	

		// Clear the previous search results
		this.props.clearSearchResults();

		// Define the search term
		this.props.defineSearchTerm(targetClicked);

		// Search By Player
		this.props.searchByPlayer(targetClicked)

		// Search By Club
		this.props.searchByClub(targetClicked)

		// Reset this week everyone toggle
		this.props.setThisWeekEveryoneToggleStatus("THIS WEEK")
		
		// Hide the dropdown menu & reset input menu value to empty string
		document.querySelector('.search-dropdown-wrapper').style.display = "none";
		document.querySelector('#search-bar-input').value = ""

	}



	render() {

		let result = (

				<div className="search-dropdown-wrapper background-light">

					{this.props.playerResults ? this.props.playerResults.data.map((searchResult, index) => {

						let innerDropdownContainer = (

								<Link key={index} to="/results" className="inner-dropdown-container react-link" onClick={(e) => this._handleClick(e)}>
									<p className="search-dropdown-text body-text-light">{searchResult.player}</p>
								</Link>

							) 

						return innerDropdownContainer;

					}): <span></span>}

					{this.props.clubResults ? this.props.clubResults.data.map((searchResult, index) => {

						let innerDropdownContainer = (

								<Link key={index} to="/results" className="inner-dropdown-container react-link" onClick={(e) => this._handleClick(e)}>
									<p className="search-dropdown-text body-text-light">{searchResult.club}</p>
								</Link>

							) 

						return innerDropdownContainer;

					}): <span></span>}


				</div>

			);

		return result; 

	}
}



// ===============
// Connect redux state container to search dropdown component
// ===============

const mapStateToProps = state => {
  return { 
	  	searchTerms: state.searchTerms,
	  	searchDataPlayers: state.searchDataPlayers,
	  	searchDataClubs: state.searchDataClubs
  	};
};


// Export connected component
export const SearchDropdownWrapper = connect(mapStateToProps, { defineSearchTerm, searchByPlayer, searchByClub, clearSearchResults, setThisWeekEveryoneToggleStatus })(SearchDropdown);