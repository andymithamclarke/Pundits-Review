// ======================================
// Position Filter Element Component - Contains positions which the user can filter
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { addPositionFilter, removePositionFilter } from '../../../actions/actions';

// CSS Imports 
import './position_filter.css';

// ===========
// Position Filter Element Component
// ===========


export class PositionFilterElementWrapper extends Component {

	_handleClick = () => {
		
		// Make the tick appear / disappear
		document.querySelector("#" + this.props.tickId).classList.toggle('filter-tick-active');

		// Add the position filter to the redux store - if it is not already in there / otherwise remove it
		if (this.props.positionFilters.includes(this.props.position)) {

			this.props.removePositionFilter(this.props.position);

		} else {

			this.props.addPositionFilter(this.props.position)

		}
		

	}

	render() {

		let result = (

				<button className="position-filter-element" onClick={this._handleClick}>
					<p className="position-filter-element-text body-text-light">{this.props.position}</p>
					<div id={this.props.tickId} className="filter-tick-container">
						<i className="fa fa-check filter-tick" aria-hidden="true"></i>
					</div>
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

  		positionFilters: state.positionFilters

  	};
};


export const PositionFilterElement = connect(mapStateToProps, {addPositionFilter, removePositionFilter})(PositionFilterElementWrapper);