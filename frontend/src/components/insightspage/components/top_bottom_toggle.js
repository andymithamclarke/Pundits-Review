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
import { CategoryDropdown } from './category_dropdown';
import { Filter } from './filter';
import { CardGridToggle } from './card_grid_toggle';
import { setTopBottomInsights } from '../../actions/actions';

// Local CSS Imports
import './top_bottom_toggle.css';


export class TopBottomToggleWrapper extends Component {

	componentDidMount() {
		// Initially set the top bottom view to ---> TOP
    	this.props.setTopBottomInsights("TOP");
	}


  	_handleToggle = () => {
  		
  		if (this.props.topBottomInsights === "TOP") {

  			// Toggle the topViewSelected state
    		this.props.setTopBottomInsights("BOTTOM");
  		} else {
  			// Toggle the topViewSelected state
    		this.props.setTopBottomInsights("TOP");
  		}
  		

		// Animate the change - MENU TEXT & BORDER
		document.querySelector('#top-toggle').classList.toggle('insights-toggle-active');
		document.querySelector('#bottom-toggle').classList.toggle('insights-toggle-active');
  	}

	render() {

		let result = (

				<div className="insights-top-bottom-control-wrapper">

					<div className="top-bottom-toggle-wrapper">

						<div tabIndex="0" id="top-toggle" aria-required="true" role="button" className="top-bottom-inner-container insights-toggle-active" onClick={this._handleToggle}>

							<p className="top-bottom-menu-text heading-text">Top</p>

						</div>


						<div tabIndex="0" id="bottom-toggle" aria-required="true" role="button" className="top-bottom-inner-container" onClick={this._handleToggle}>

							<p className="top-bottom-menu-text heading-text">Bottom</p>

						</div>

					</div>


					<CategoryDropdown />

					<Filter />

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

  		topBottomInsights: state.topBottomInsights

  	};
};


export const TopBottomToggle = connect(mapStateToProps, { setTopBottomInsights })(TopBottomToggleWrapper);


