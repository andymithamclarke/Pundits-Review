// ======================================
// Season Performance Container Component - renders title & Season Performance Graph - D3 Visualisation
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports
import { SeasonPerformanceGraph } from './season_performance/svg_container';


// CSS Import
import './season_performance_container.css';


// ===========
// Season Performance Container Component
// ===========


export class SeasonPerformanceContainer extends Component {

	render() {

		let result = (

			<div className="season-performance-wrapper">

				<p className="season-performance-title heading-text">Season Performance</p>

				<div id="season-performance-graph-canvas">
					<SeasonPerformanceGraph data={this.props.data} keyCode={this.props.keyCode}/>
				</div>

				<p className="graph-description-text body-text-light">* Data collection for the 2019/20 season ran from JUL 13 to JUL 27</p>

			</div>


			);

		return result;
	}
}