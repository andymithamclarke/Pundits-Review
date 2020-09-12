// ======================================
// Set Club Page Functional Component - Ensures that the correct club has been specified before loading the club page
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { setClub } from "./../actions/actions";
import { ClubPageLoader } from './loadclubpage';

// CSS Imports 



// ===========
// BlogPost Component  
// ===========

export class SetPlayerPageWrapper extends Component {


	componentDidMount() {

		// Decode the club_name URL parameter & set club in redux store if not already set
		let decodedClubName = decodeURIComponent(this.props.clubName);

		if (this.props.clubsViewed.length === 0) {

			this.props.setClub(decodedClubName);

		} else {

			if (this.props.clubsViewed[this.props.clubsViewed.length -1].club !== decodedClubName) {

				this.props.setClub(decodedClubName);
				
			}

		}

	}

	render() {

		let result = (


				<ClubPageLoader />


			);

		return result;

	}
}




// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		clubsViewed: state.clubsViewed

  	};
};


export const SetClubPage = connect(mapStateToProps, { setClub })(SetPlayerPageWrapper);

