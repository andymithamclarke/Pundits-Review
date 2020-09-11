// ======================================
// Nationality Filter Element Component - Contains nationalities which the user can filter 
// Only rendered for nationalities that are present within the current playerReviewScore array (Redux state)
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { country_codes } from '../../../global/resources/ISO_COUNTRY_CODES';
import { addNationalityFilter, removeNationalityFilter } from '../../../actions/actions';

// CSS Imports 
import './nationality_filter.css';

// ===========
// Nationality Filter Element Component 
// ===========

export class NationalityFilterElementWrapper extends Component {

	_handleClick = () => {

		// Make the tick appear / disappear
		document.querySelector("#" + this.props.tickId).classList.toggle('filter-tick-active');

		// Add the club filter to the redux store - if it is not already in there / otherwise remove it
		if (this.props.nationalityFilters.includes(this.props.countryName)) {

			this.props.removeNationalityFilter(this.props.countryName);

		} else {

			this.props.addNationalityFilter(this.props.countryName)

		}
	}


	render() {

		let result = (

				<button className="nationality-filter-element" onClick={this._handleClick}>
					<div id={this.props.tickId} className="filter-tick-container">
						<i className="fa fa-check filter-tick" aria-hidden="true"></i>
					</div>
					<span className={this.props.flagClass + " nationality-filter-element-flag"}></span>
					<p className="nationality-filter-element-text body-text-light">{this.props.countryName}</p>
				</button>


			);


		return result;
	}
}



// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		nationalityFilters: state.nationalityFilters

  	};
};


export const NationalityFilterElement = connect(mapStateToProps, {addNationalityFilter, removeNationalityFilter})(NationalityFilterElementWrapper);

