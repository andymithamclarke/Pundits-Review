// ======================================
// CLUBS - Agree / Disagree Button Component allowing users to interact with club pages depending on their opinion
// Will post to the DB with number of agrees / disagrees
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
import { updateClubsAgreeDisagreeScore, setClubsAgreeDisagreeScore, locallyUpdateAgreeDisagreeScoreClubs} from "../../actions/actions";
import { AgreeDisagreeScore } from '../../playerpage/components/agree_disagree_score';

// CSS Imports 
import '../../playerpage/components/agree_disagree.css';

// ===========
// Agree Disagree Component
// ===========

export class ClubAgreeDisagreeContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {

			buttonDisabled: false
		}

		this._handleClickAgree = this._handleClickAgree.bind(this);
		this._handleClickDisagree = this._handleClickDisagree.bind(this);
	}

	componentDidMount() {


		this.props.setClubsAgreeDisagreeScore(this.props.clubName)

	}

	_handleClickAgree(e) {

		let currentClub = this.props.clubsViewed[this.props.clubsViewed.length - 1];

		updateClubsAgreeDisagreeScore(currentClub, true);

		let newScoreObject = this.props.clubAgreeDisagreeScores[this.props.clubAgreeDisagreeScores.length -1];

		newScoreObject.agree_score += 1;

		this.props.locallyUpdateAgreeDisagreeScoreClubs(newScoreObject);

		// Disable the button
		this.setState({
			buttonDisabled: true
		})

	}

	_handleClickDisagree(e) {

		let currentClub = this.props.clubsViewed[this.props.clubsViewed.length - 1];

		updateClubsAgreeDisagreeScore(currentClub, false);

		let newScoreObject = this.props.clubAgreeDisagreeScores[this.props.clubAgreeDisagreeScores.length -1];

		newScoreObject.disagree_score += 1;

		this.props.locallyUpdateAgreeDisagreeScoreClubs(newScoreObject);

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
					<AgreeDisagreeScore choice={"agree_score"} clubOrPlayer={"club"}/>

				</div>

				<div className="agree-disagree-button-container">

					<p className="agree-disagree-heading-text body-text-light">DISAGREE</p>
					<button id="disagree-button" className="agree-disagree-button" disabled={this.state.buttonDisabled} onClick={(e) => this._handleClickDisagree(e)}><span className="agree-disagree-icon fa fa-times"></span></button>
					<AgreeDisagreeScore choice={"disagree_score"} clubOrPlayer={"club"}/>

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
  		clubsViewed: state.clubsViewed,
	  	clubAgreeDisagreeScores: state.clubAgreeDisagreeScores
  	};
};


export const ClubAgreeDisagree = connect(mapStateToProps, { setClubsAgreeDisagreeScore, locallyUpdateAgreeDisagreeScoreClubs })(ClubAgreeDisagreeContainer);

