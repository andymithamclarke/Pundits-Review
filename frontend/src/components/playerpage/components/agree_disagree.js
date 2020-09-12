// ======================================
// PLAYERS Agree / Disagree Button Component allowing users to interact with player / club pages depending on their opinion
// Will 'put' to the DB with number of agrees / disagrees
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';
import { connect } from "react-redux";


// Local JS Imports 
import { updatePlayersAgreeDisagreeScore, setPlayersAgreeDisagreeScore, locallyUpdateAgreeDisagreeScore } from "../../actions/actions";
import { AgreeDisagreeScore } from './agree_disagree_score';

// CSS Imports 
import './agree_disagree.css';

// ===========
// Agree Disagree Component
// ===========

export class AgreeDisagreeContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
			buttonDisabled: false
		}
		this._handleClickAgree = this._handleClickAgree.bind(this);
		this._handleClickDisagree = this._handleClickDisagree.bind(this);
	}

	componentDidMount() {

		// Retrieve specific player agree & disagree scores
		this.props.setPlayersAgreeDisagreeScore(this.props.playerName)

	}

	_handleClickAgree(e) {

		// Select player info
		let currentPlayer = this.props.playersViewed[this.props.playersViewed.length - 1];

		// Put update to DB
		updatePlayersAgreeDisagreeScore(currentPlayer, true);

		// Locally update score object
		let newScoreObject = this.props.agreeDisagreeScores[this.props.agreeDisagreeScores.length -1];

		newScoreObject.agree_score += 1;

		// Update redux store with local update object
		this.props.locallyUpdateAgreeDisagreeScore(newScoreObject);

		// Disable the button
		this.setState({
			buttonDisabled: true
		})

	}

	_handleClickDisagree(e) {

		// Select player info
		let currentPlayer = this.props.playersViewed[this.props.playersViewed.length - 1];

		// Put update to DB
		updatePlayersAgreeDisagreeScore(currentPlayer, false);

		// Locally update score object
		let newScoreObject = this.props.agreeDisagreeScores[this.props.agreeDisagreeScores.length -1];

		newScoreObject.disagree_score += 1;

		// Update redux store with local update object
		this.props.locallyUpdateAgreeDisagreeScore(newScoreObject);

		// Disable the button
		this.setState({
			buttonDisabled: true
		})

	}

	render() {


		let result = (

			<div className="agree-disagree-wrapper">

				<div className="agree-disagree-button-container">

					<p className="agree-disagree-heading-text body-text-light">AGREE</p>
					<button id="agree-button" className="agree-disagree-button" disabled={this.state.buttonDisabled} onClick={(e) => this._handleClickAgree(e)}><span className="agree-disagree-icon fa fa-check"></span></button>
					<AgreeDisagreeScore choice={"agree_score"} clubOrPlayer={"player"}/>

				</div>

				<div className="agree-disagree-button-container">

					<p className="agree-disagree-heading-text body-text-light">DISAGREE</p>
					<button id="disagree-button" className="agree-disagree-button" disabled={this.state.buttonDisabled} onClick={(e) => this._handleClickDisagree(e)}><span className="agree-disagree-icon fa fa-times"></span></button>
					<AgreeDisagreeScore choice={"disagree_score"} clubOrPlayer={"player"}/>

				</div>

			</div>

			);

		return result;
	}
}


// ===============
// Connect redux state container to PlayerPage component
// ===============


const mapStateToProps = state => {
  return { 
  		playersViewed: state.playersViewed,
	  	agreeDisagreeScores: state.agreeDisagreeScores
  	};
};


export const AgreeDisagree = connect(mapStateToProps, { setPlayersAgreeDisagreeScore, locallyUpdateAgreeDisagreeScore })(AgreeDisagreeContainer);


