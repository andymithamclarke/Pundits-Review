// ======================================
// Nationality Filter Component - allows users to filter players by nationality
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { PlusMinus } from './plusminus';
import { NationalityFilterElement } from './nationality_filter_element';
import { country_codes } from '../../../global/resources/ISO_COUNTRY_CODES';
import { flagFinder } from '../../../global/functions/set_data_helpers';

// CSS Imports 
import './filter_item.css';
import './nationality_filter.css';


// ===========
// Position Filter Component
// ===========

export class NationalityFilterWrapper extends Component {

	_handlePlusMinusAnimation = () => {

		var container = document.querySelector("#nationality-container-plus-minus");
		var bar = document.querySelector("#nationality-bar-plus-minus");

		if (bar.classList.contains('plus')) {
			bar.classList.remove('plus')	
			bar.classList.add('minus')
		} else {
			bar.classList.remove('minus')	
			bar.classList.add('plus')
		}

		this._toggleActiveDisplay();

	}

	_toggleActiveDisplay() {

		document.querySelector(".nationality-filter-element-wrapper").classList.toggle('filter-container-active');
	}

	render() {

		// Get array of nationalities currently present in playerReviewScores
		let playerNationalities = this.props.originalPlayerTotalReviews.map(player => player.nationality);

		let result = (

			<div className="filter-item-wrapper">

				<button aria-required="true" className="filter-bar-dropdown position-filter-bar background-light" onClick={this._handlePlusMinusAnimation}>

					<PlusMinus containerId={"nationality-container-plus-minus"} barId={"nationality-bar-plus-minus"}/>
					<p className="filter-bar-title-text body-text-light">NATIONALITY</p>
					

				</button>

				<div className="nationality-filter-element-wrapper">

					{country_codes.map((country, index) => {


						if (playerNationalities.includes(country.name)) {

							let flagClassName = flagFinder(country.name);

							return <NationalityFilterElement key={index} countryName={country.name} flagClass={flagClassName} tickId={country.name.split(" ")[0] + "tick"}/>
						}

					})}

				</div>

			</div>

			);


		return result;
	}

}


// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		playerReviewScores: state.playerReviewScores,
  		originalPlayerReviewScores: state.originalPlayerReviewScores,
  		playerTotalReviews: state.playerTotalReviews,
  		originalPlayerTotalReviews: state.originalPlayerTotalReviews,

  	};
};


export const NationalityFilter = connect(mapStateToProps)(NationalityFilterWrapper);