// ======================================
// This file contains the TOP/BOTTOM toggle menu that is rendered on the INSIGHTS PAGE
// Allows users to toggle between seeing top and bottom scores for players between categories
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports 
import { setInsightsCategory } from '../../actions/actions';

// CSS Imports
import './category_dropdown.css';


// ===========
// Category Dropdown Component
// ===========

export class CategoryDropdownWrapper extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentCategory: "REVIEW SCORE"
		}

		this._handleMenuOpen = this._handleMenuOpen.bind(this);
	}


	_handleMenuOpen(e) {

		document.querySelector('.custom-options').classList.toggle('open');
		document.querySelector('.category-dropdown-menu-wrapper').classList.toggle('open');

	}

	_handleMenuClick(e) {

		let newCategory = e.target.innerText;

		this.props.setInsightsCategory(newCategory)

		this._handleMenuOpen();

	}

	_handleKeyDownMenuOpen(e) {

		// Trigger Open on Enter
  		if (e.key == "Enter") {					
  			this._handleMenuOpen(e);
  			
  		}
	}

	_handleKeyDownSelect(e) {

		// Trigger Open on Enter
  		if (e.key == "Enter") {					
  			this._handleMenuClick(e);
  			
  		}
	}

	render() {

		let result = (

				<div className="category-dropdown-container background-dark">

					<div className="category-key-container">

						<p className="category-key-text body-text-light white-text">CATEGORY:</p>

					</div>

					<div className="category-dropdown-menu-wrapper white-text body-text-light">

				        <ul className="custom-select__trigger" onClick={this._handleMenuOpen} onKeyDown={(e) => this._handleKeyDownMenuOpen(e)}>

				        	<li tabIndex="0" role="button" id="current-category" className="body-text-light current-select-option">{this.props.insightsSettingsKey}</li>
				            <div className="arrow"></div>

				        </ul>

				        <ul className="custom-options" role="list">

				            <li tabIndex="0" id="review-score-dropdown" role="button" className="custom-option background-dark" onClick={(e) => this._handleMenuClick(e)} onKeyDown={(e) => this._handleKeyDownSelect(e)}>
				            	<span className="body-text-light select-option" >REVIEW SCORE</span>
				            </li>

				            <li tabIndex="0" id="season-avg-score-dropdown" role="button" className="custom-option background-dark " onClick={(e) => this._handleMenuClick(e)} onKeyDown={(e) => this._handleKeyDownSelect(e)}>
				            	<span className="body-text-light select-option" >SEASON AVG SCORE</span>
				            </li>

				            <li tabIndex="0" id="mentions-dropdown" role="button" className="custom-option background-dark " onClick={(e) => this._handleMenuClick(e)} onKeyDown={(e) => this._handleKeyDownSelect(e)}>
				            	<span className="body-text-light select-option" >MENTIONS</span>
				            </li>

				            <li tabIndex="0" id="positive-score-dropdown" role="button" className="custom-option background-dark " onClick={(e) => this._handleMenuClick(e)} onKeyDown={(e) => this._handleKeyDownSelect(e)}>
				            	<span className="body-text-light select-option" >POSITIVE REVIEWS</span>
				            </li>

				            <li tabIndex="0" id="negative-score-dropdown" role="button" className="custom-option background-dark " onClick={(e) => this._handleMenuClick(e)} onKeyDown={(e) => this._handleKeyDownSelect(e)}>
				            	<span className="body-text-light select-option" >NEGATIVE REVIEWS</span>
				            </li>

				        </ul>
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

  		insightsSettingsKey: state.insightsSettingsKey

  	};
};


export const CategoryDropdown = connect(mapStateToProps, { setInsightsCategory })(CategoryDropdownWrapper);


