// ======================================
// Filter Back Button Component - Allows users to exit the filter and return to the insights page
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";


// Local JS Imports 
import { setFilterActive, clearAllFilters, setGridCardView } from '../../../actions/actions';

// CSS Imports 
import './filter_back_button.css';

// ===========
// Filter Back Button Component 
// ===========

export class FilterBackButtonWrapper extends Component {

	_handleClick = () => {

		// Deactivate the filter page
		this.props.setFilterActive(false)

		// Set Grid View - Insights page
		this.props.setGridCardView("CARD");

		// Reset the filters
		this.props.clearAllFilters();

	}

	render() {

		let result = (

				<button className="filter-back-button-container" onClick={this._handleClick}>

					<i className="fa fa-angle-left filter-back-button-icon" aria-hidden="true"></i>
					<p className="filter-back-button-text body-text-light">BACK</p>

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

  		filterActive: state.filterActive
  	};
};


export const FilterBackButton = connect(mapStateToProps, { setFilterActive, clearAllFilters, setGridCardView })(FilterBackButtonWrapper);