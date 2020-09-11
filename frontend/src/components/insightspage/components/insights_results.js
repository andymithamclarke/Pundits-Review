// ======================================
// Functional Component to control what is rendered on the Insights page
// Will display data according to category & filter in either card or grid view
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";


// Local JS Imports 
import { InsightsCards } from './card_view';
import { InsightsGrid } from './grid_view';


// ===========
// Insights Results Component 
// ===========

export class InsightsResultsWrapper extends Component {

	render() {

		if (this.props.gridCardView === "CARD") {

			return <InsightsCards />

		} else {

			return <InsightsGrid />
		}
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


export const InsightsResults = connect(mapStateToProps)(InsightsResultsWrapper);