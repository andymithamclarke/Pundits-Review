// ======================================
// Club Result Item Component - Contains info on each club returned from the API & links to individual club pages
// ======================================


// ===========
// IMPORTS 
// ===========

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


// Local JS Imports
import { ReviewScoreCircle } from './review_score_circle';
import { badgeFinder } from '../../global/functions/set_data_helpers';
import { stadiumNames } from '../../global/resources/club_stadiums';
import { setClub } from '../../actions/actions';

// CSS Imports
import './result_item.css';

// ===========
// Player Result Container
// ===========


export class ClubResult extends Component {

	_handleClick(clubName) {

		this.props.setClub(this.props.clubName);
	}

	render() {

		let clubNameParam = "/clubs/" + encodeURIComponent(this.props.clubName);

		let result = (

				<Link to={clubNameParam} className="club-results-item-wrapper react-link" onClick={() => this._handleClick(this.props.clubName)}>

					<p className="club-result-club-name heading-text"> {this.props.clubName} </p>
					<span className={"club-badge-clubs-result-page " + badgeFinder(this.props.clubName)}></span>
					<p className="club-result-club-stadium body-text-light"> {stadiumNames[this.props.clubName]} </p>
					<ReviewScoreCircle reviewScore={this.props.reviewScore}/>
					<p className="club-result-view-club body-text-light black-text">VIEW CLUB</p>
					<i className="arrow-club-result-item fa fa-long-arrow-right" aria-hidden="true"></i>

				</Link>
			);

		return result;
	}
}



// ===============
// Connect redux state container to Club Result component
// ===============


const mapStateToProps = state => {
  return { 

	  	clubsViewed: state.clubsViewed
  	};
};



// Export connected component
export const ClubResultContainer = connect(mapStateToProps, { setClub })(ClubResult);