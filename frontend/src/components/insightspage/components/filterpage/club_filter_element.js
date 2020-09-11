// ======================================
// Club Filter Element Component - Contains clubs which the user can filter
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { club_badges } from '../../../global/resources/club_badges';
import { club_colors } from '../../../global/resources/club_colors';
import { addClubFilter, removeClubFilter } from '../../../actions/actions';


// CSS Imports 
import './club_filter.css';



// ===========
// Club Filter Element Component
// ===========

export class ClubFilterElementWrapper extends Component {

	_handleClick = () => {

		// Make the tick appear / disappear
		document.querySelector("#" + this.props.tickId).classList.toggle('filter-tick-active');

		// Add the club filter to the redux store - if it is not already in there / otherwise remove it
		if (this.props.clubFilters.includes(this.props.clubFullName)) {

			this.props.removeClubFilter(this.props.clubFullName);

		} else {

			this.props.addClubFilter(this.props.clubFullName)

		}
	}

	render() {

		let result = (

				<button className="club-filter-element" onClick={this._handleClick}>
					<div id={this.props.tickId} className="filter-tick-container">
						<i className="fa fa-check filter-tick" aria-hidden="true"></i>
					</div>
					<span className={club_badges[this.props.clubFullName] + " club-badge club-filter-element-club-badge"}></span>
					<p className={"club-filter-element-text body-text-light " + club_colors[this.props.clubFullName]}>{this.props.clubName}</p>
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

  		clubFilters: state.clubFilters

  	};
};


export const ClubFilterElement = connect(mapStateToProps, {addClubFilter, removeClubFilter})(ClubFilterElementWrapper);
