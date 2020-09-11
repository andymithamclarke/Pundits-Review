// ======================================
// Club Filter Component - allows users to filter players by club
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
import { ClubFilterElement } from './club_filter_element';
import { club_badges } from '../../../global/resources/club_badges';
import { club_short_names } from '../../../global/resources/club_short_names';

// CSS Imports 
import './filter_item.css';
import './club_filter.css';

// ===========
// Position Filter Component
// ===========

export class ClubFilter extends Component {

	_handlePlusMinusAnimation = () => {

		var container = document.querySelector("#club-container-plus-minus");
		var bar = document.querySelector("#club-bar-plus-minus");

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

		document.querySelector(".club-filter-element-wrapper").classList.toggle('filter-container-active');
	}

	render() {

		let result = (

			<div className="filter-item-wrapper">

				<button aria-required="true" className="filter-bar-dropdown position-filter-bar background-light" onClick={this._handlePlusMinusAnimation}>

					<PlusMinus containerId={"club-container-plus-minus"} barId={"club-bar-plus-minus"}/>
					<p className="filter-bar-title-text body-text-light">CLUB</p>
					

				</button>

				<div className="club-filter-element-wrapper">

					{Object.keys(club_badges).map((club, index) => {

						return <ClubFilterElement key={index} tickId={club_badges[club] + "-club-tick"} clubName={club_short_names[club]} clubFullName={club}/>;

					})}


				</div>

			</div>

			);


		return result;
	}

}