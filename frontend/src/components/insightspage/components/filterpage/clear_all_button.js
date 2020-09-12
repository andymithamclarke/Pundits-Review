// ======================================
// Clear All Button Component - Allows user to clear all previously specified filters
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports 
import { clearAllFilters } from '../../../actions/actions';

// CSS Imports
import './clear_all_button.css';


// ===========
// Clear All Button Component 
// ===========

export class ClearAllButtonWrapper extends Component {

	_handleClick = () => {

		// Clear all filters
		this.props.clearAllFilters();

		// Remove display of all ticks 
		document.querySelectorAll('.filter-tick-container').forEach(function(element) {
			element.className = "filter-tick-container";
		})

	}

	render() {

		let result = (

				<button className="clear-all-button body-text-light" onClick={this._handleClick}>
					CLEAR ALL
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

  		nationalityFilters: state.nationalityFilters,
  		clubFilters: state.clubFilters,
  		positionFilters: state.positionFilters

  	};
};


export const ClearAllButton = connect(mapStateToProps, {clearAllFilters})(ClearAllButtonWrapper);

