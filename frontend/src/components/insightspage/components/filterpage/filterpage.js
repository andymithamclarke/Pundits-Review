// ======================================
// This file contains the top level FILTER PAGE component that will wrap other elements on the FILTER page
// All other FILTER PAGE components will be directed through this component
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports 
import { PositionFilter } from './position_filter';
import { ClubFilter } from './club_filter'; 
import { NationalityFilter } from './nationality_filter';
import { ApplyFilterButton } from './apply_filter';
import { BackClearWrapper } from './back_clear_wrapper';

// CSS Imports 
import './filterpage.css';


// ===========
// Filter Page Component 
// ===========

export class FilterPage extends Component {

	render() {

		let result = (

				<div className="filter-page-wrapper">


					<BackClearWrapper />

					<PositionFilter />
					<ClubFilter />
					<NationalityFilter />

					<ApplyFilterButton />

				</div>


			);


		return result;
	}
}

