// ======================================
// This file contains the CARD/GRID toggle menu
// Allows users to toggle between seeing insights in a grid or card view
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { setGridCardView } from '../../actions/actions';

// CSS Imports 
import './card_grid_toggle.css';

// ===========
// Card Grid Toggle Component 
// ===========


export class CardGridToggleWrapper extends Component {


	_handleClick(e) {

		if (e.target.id == "grid-button") {

			// Update the redux state with new choice
			this.props.setGridCardView("GRID");

			// Adjust the presentation
			document.querySelector('#grid-button').className = "body-text-light card-grid-button card-grid-button-active"
			document.querySelector('#card-button').className = "body-text-light card-grid-button "

		} else {

			// Update the redux state with new choice
			this.props.setGridCardView("CARD");

			// Adjust the presentation
			document.querySelector('#card-button').className = "body-text-light card-grid-button card-grid-button-active"
			document.querySelector('#grid-button').className = "body-text-light card-grid-button "

		}

	}

	render() {

		let result = (

			<div className="card-grid-toggle-wrapper">

				<div className="card-grid-button-container">

					<button id="card-button" className="body-text-light card-grid-button card-grid-button-active" onClick={(e) => this._handleClick(e)}>CARDS</button>
					<button id="grid-button" className="body-text-light card-grid-button " onClick={(e) => this._handleClick(e)}>GRID</button>

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

  		gridCardView: state.gridCardView

  	};
};


export const CardGridToggle = connect(mapStateToProps, {setGridCardView})(CardGridToggleWrapper);

