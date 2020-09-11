// ======================================
// GRID Table Header Component - Contains Table column headings for grid view on insights page
// Columns - Rank, Player, Club, PR Score, Form
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// CSS Imports 
import './grid_table_header.css';

// ===========
// Grid Table Header Component 
// ===========

export class GridTableHeader extends Component {

	render() {

		let result = (

				<div className="grid-table-header-wrapper body-text-light white-text">

					<p className="grid-table-column-headers rank-header">RANK</p>
					<p className="grid-table-column-headers player-header">PLAYER</p>
					<p className="grid-table-column-headers club-header">CLUB</p>
					<p className="grid-table-column-headers score-header">{this.props.scoreCategory}</p>

				</div>

			);

		return result;
	}
}