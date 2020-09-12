// ======================================
// Set Player Page Functional Component - Ensures that the correct player has been specified before loading the player page
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { setPlayer } from "./../actions/actions";
import { PlayerPageLoader } from './loadplayerpage';

// CSS Imports 



// ===========
// BlogPost Component  
// ===========

export class SetPlayerPageWrapper extends Component {


	componentDidMount() {

		// Retrieve player_name param from URL & set player in redux store if not already
		let decodedPlayerName = decodeURIComponent(this.props.playerName);

		if (this.props.playersViewed.length === 0) {

			this.props.setPlayer(decodedPlayerName);

		} else {

			if (this.props.playersViewed[this.props.playersViewed.length -1].player !== decodedPlayerName) {

				this.props.setPlayer(decodedPlayerName);
				
			}

		}

	}

	render() {

		let result = (


				<PlayerPageLoader />


			);

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


export const SetPlayerPage = connect(mapStateToProps, { setPlayer })(SetPlayerPageWrapper);

