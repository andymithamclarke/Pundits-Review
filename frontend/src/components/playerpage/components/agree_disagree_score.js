// ======================================
// Agree / Disagree Score Component - Diplays the score number for a player / club & is updated with put request response
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { usePromiseTracker } from "react-promise-tracker";

// Local JS Imports


// CSS Imports 
import './agree_disagree.css';


// ===========
// Agree / Disagree Score Component
// ===========


export class AgreeDisagreeScoreWrapper extends Component {


	render() {

		let arrayChoice;

		if (this.props.clubOrPlayer === 'club') {
			arrayChoice = this.props.clubAgreeDisagreeScores;
		} 

		if (this.props.clubOrPlayer === 'player') {
			arrayChoice = this.props.agreeDisagreeScores;
		} 

		let result;

		if (arrayChoice.length) {

			result = (

				<p className="agree-disagree-database-score body-text-light">{arrayChoice[arrayChoice.length -1][this.props.choice]}</p>

			);

		} else {
	

			result = (

				<span></span>

			);


		}


		return result;
	
	}

	
}




// ===============
// Connect redux state container to PlayerPage component
// ===============


const mapStateToProps = state => {
  return { 
  		
	  	agreeDisagreeScores: state.agreeDisagreeScores,
	  	clubAgreeDisagreeScores: state.clubAgreeDisagreeScores
  	};
};


export const AgreeDisagreeScore = connect(mapStateToProps)(AgreeDisagreeScoreWrapper);