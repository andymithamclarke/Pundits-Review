// ======================================
// Search bar component allowing users to enter a player/club search query
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';

// Local JS Imports 
import { defineSearchTerm, searchByPlayer, searchByClub, clearSearchResults, setThisWeekEveryoneToggleStatus } from "../../actions/actions";
import { SearchDropdownWrapper } from './search_dropdown';
import { makeSearch } from './cancel_requests';  

// Local CSS Imports
import './search.css';

// ===============
// Search Component 
// ===============

export class Search extends Component {

	constructor(props) {
    super(props);
    this.state = {
    		searchTerm: "",
    		loading: false,
    		liveSearchResultsPlayers: null,
    		liveSearchResultsClubs: null,
    	};

    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.liveSearch = this.liveSearch.bind(this);

  	}

  	// Keep search term inside search input box on results page
  	componentDidMount = () => {

  		if (this.props.searchTerms.length && this.props.history.location.pathname === "/results") {

  			// Set the state to the previous search's value
  			this.setState({ searchTerm: this.props.searchTerms[this.props.searchTerms.length -1]});

  		}

  	}


  	// Predictive search ---> updates search options when search term changes
  	liveSearch = async val => {

  		// Set the state to loading
  		this.setState({ loading: true });

  		// Make the async request
  		const resPlayers = await makeSearch(
	      `/api/plainplayers/?search=${val}`
	    )

	    const resClubs = await makeSearch(
	      `/api/plainclubs/?search=${val}`
	    )

  		// Wait for the search to complete
  		const liveSearchResultsPlayers = await resPlayers;
  		const liveSearchResultsClubs = await resClubs;

  		// Set the state to not loading
	    this.setState({ 
	    	liveSearchResultsPlayers,
			liveSearchResultsClubs,
	    	loading: false 
	    });
  	}

  	_handleKeyDown(e) {

  		// Trigger Search on Enter
  		if (e.key == "Enter") {
  			this._handleClick();
  			this.props.history.push('/results');
  		}
  	}


  	_handleChange = async searchTerm => {

  		// Ensure that dropdown menu appears 
  		let dropdown = document.querySelector('.search-dropdown-wrapper');

  		if (dropdown) {
  			dropdown.style.display = "flex";
  		}

		// Trigger a live search with the search term
		this.liveSearch(searchTerm);

		// Update the state with the search term
		this.setState({searchTerm: searchTerm})

  		
  	}

	_handleClick() {
		
		// Set redux state 	

		// Clear the previous search results
		this.props.clearSearchResults();

		// Define the search term
		this.props.defineSearchTerm(this.state.searchTerm);

		// Search By Player
		this.props.searchByPlayer(this.state.searchTerm);

		// Search By Club
		this.props.searchByClub(this.state.searchTerm);

		// Set This Week Everyone toggle to this week
		this.props.setThisWeekEveryoneToggleStatus("THIS WEEK")


		// Ensure that dropdown menu disappears 
  		let dropdown = document.querySelector('.search-dropdown-wrapper');

  		if (dropdown) {
  			dropdown.style.display = "none";
  		}

	}


	get renderSearchResults() {

		let searchDropdown;

		if (this.state.searchTerm !== "") {

			// Set the search dropdown to display results
			searchDropdown = <SearchDropdownWrapper playerResults={this.state.liveSearchResultsPlayers} clubResults={this.state.liveSearchResultsClubs}/>
		} else {
			// Set the search dropdown to display an empty span
			searchDropdown = <span></span>;
		}

		return searchDropdown;
	}

	render() {

		let result = (

				<div className="search-bar-wrapper background-light">

			      	<input value={this.state.searchTerm} aria-label="Search for a player or a club" aria-required="true" type="text" name="Search input to search for Premier League players or clubs." id="search-bar-input" autoComplete="off" className="search-box body-text-light" placeholder="Search for a player or a club ..." onChange={(e) => this._handleChange(e.target.value)} onKeyDown={(e) => this._handleKeyDown(e)}/>
			      	<Link className="react-link" to="/results">
			      		<button type="submit" id="search-button" className="search-button" onClick={this._handleClick} >
			        		<i className="fa fa-search"></i>
			        	</button>
			     	</Link>
					{this.renderSearchResults}
				</div>
			);

		return result;
	}
}


// ===============
// Connect redux state container to search component
// ===============

const mapStateToProps = state => {
  return { 
	  	searchTerms: state.searchTerms,
	  	searchDataPlayers: state.searchDataPlayers,
	  	searchDataClubs: state.searchDataClubs
  	};
};


// Export connected component
export const SearchBar = connect(mapStateToProps, { defineSearchTerm, searchByPlayer, searchByClub, clearSearchResults, setThisWeekEveryoneToggleStatus })(withRouter(Search));

