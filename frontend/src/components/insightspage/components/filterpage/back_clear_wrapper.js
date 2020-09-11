// ======================================
// Back & Clear Wrapper Element - contains back and clear buttons on filter page
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { FilterBackButton } from './filter_back_button';
import { ClearAllButton } from './clear_all_button';


// CSS Imports
import './back_clear_wrapper.css';



// ===========
// Back Clear Wrapper Component 
// ===========


export class BackClearWrapper extends Component {

	render() {

		let result = (

				<div className="filter-page-back-clear-wrapper">

					<FilterBackButton />
					<ClearAllButton />

				</div>

			);


		return result;
	}
}