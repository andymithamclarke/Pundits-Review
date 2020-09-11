// ======================================
// Position Filter Component - allows users to filter players by position
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
import { PositionFilterElement } from './position_filter_element';

// CSS Imports 
import './filter_item.css';
import './position_filter.css';


// ===========
// Position Filter Component
// ===========

export class PositionFilter extends Component {

	_handlePlusMinusAnimation = () => {

		var bar = document.querySelector("#position-bar-plus-minus");

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

		document.querySelector(".position-filter-elements-wrapper").classList.toggle('filter-container-active');
	}

	render() {

		let result = (

			<div className="filter-item-wrapper">

				<button aria-required="true" className="filter-bar-dropdown position-filter-bar background-light" onClick={this._handlePlusMinusAnimation}>

					<PlusMinus containerId={"position-container-plus-minus"} barId={"position-bar-plus-minus"}/>
					<p className="filter-bar-title-text body-text-light">POSITION</p>
					

				</button>

				<div className="position-filter-elements-wrapper">

					<div className="position-filter-elements-container">

						<PositionFilterElement position={"GK"} tickId={"position-gk-tick"}/>
						<PositionFilterElement position={"DF"} tickId={"position-df-tick"}/>
							
					</div>

					<div className="position-filter-elements-container">

						<PositionFilterElement position={"MD"} tickId={"position-md-tick"}/>
						<PositionFilterElement position={"FWD"} tickId={"position-fwd-tick"}/>

					</div>

				</div>
					

			</div>

			);


		return result;
	}
}