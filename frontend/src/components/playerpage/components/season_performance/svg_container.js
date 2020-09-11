// ======================================
// SeasonPerformanceGraph Component - Contains the SVG to contol the season performance visualisation
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux"; 
import * as d3 from "d3";

// Local JS Imports 
import { margins, months } from './graph_settings';

// CSS Imports 
import './svg_container.css';



export class SeasonPerformanceGraphWrapper extends Component {

	componentDidUpdate() {

		// Clear the graph first
		var svg = d3.select("svg");
		svg.selectAll("*").remove();

		// Draw the Graph
		this.drawGraph();

	}


	drawGraph() {


		let height = document.querySelector('#performance-graph-svg-container').getBoundingClientRect().height;
		let width = document.querySelector('#performance-graph-svg-container').getBoundingClientRect().width;

		// ============
		// DRAW X AXIS
		// ============

		// Save the SVG
		const svg = d3.select("#performance-graph-svg-container");

		// Add X Axis
		var x = d3.scalePoint()
					.domain(Object.values(this.props.crawlDates).map(function(d) { 

						let parsedDate = d3.timeParse("%Y-%m-%d")(d.date)	
						
						let month = months[parsedDate.getMonth()];
						let day = parsedDate.getDate();


						return day.toString() + " " + month.toString();


					}))
					.range([0, width])

		// Append 'g' element
		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));

		// ============
		// DRAW Y AXIS
		// ============

		var y = d3.scaleLinear()
					.domain([0, 100])
					.range([height, 0]);

		// Append 'g' element
		svg.append("g")
			.call(d3.axisLeft(y).ticks(4));


		// ============
		// ADD GRIDLINES
		// ============

		// Code to add gridlines adapted from d3 block by d3noob on Nov 2, 2017
		// "Simple graph with grid lines in v4"
		// https://bl.ocks.org/d3noob/c506ac45617cf9ed39337f99f8511218
		// Accessed 01 Sept, 2020


		// gridlines in x axis function
		function make_x_gridlines() {		
		    return d3.axisBottom(x)
		        .ticks(5)
		}

		// gridlines in y axis function
		function make_y_gridlines() {		
		    return d3.axisLeft(y)
		        .ticks(5)
		}

		// add the X gridlines
		  svg.append("g")			
		      .attr("class", "grid")
		      .attr("transform", "translate(0," + height + ")")
		      .call(make_x_gridlines()
		          .tickSize(-height)
		          .tickFormat("")
		      )

		  // add the Y gridlines
		  svg.append("g")			
		      .attr("class", "grid")
		      .call(make_y_gridlines()
		          .tickSize(-width)
		          .tickFormat("")
		      )

		 // End of referenced code

		// ============
		// PLOT DATA POINTS 
		// ============

		svg
			.append('g')
			.selectAll('dot')
			.data(this.props.data[this.props.keyCode])
			.enter()
			.append("circle")
				.attr("cx", function(d) {

					let parsedDate = d3.timeParse("%Y-%m-%d")(d.date);
					let month = months[parsedDate.getMonth()];
					let day = parsedDate.getDate();

					return x(day.toString() + " " + month.toString());

				})
				.attr("cy", function(d) {

					if (d.n_positive + d.n_negative > 3) {

						let score = Math.round(d.sentiment_score * 100);

						return y(score);

					}

				})
				.attr("r", function(d) {

					if (d.n_positive + d.n_negative > 3) {

						return 5;
					} else {
						return 0;
					}
				})
        		.attr("fill", function(d) {

        			if (Math.round(d.sentiment_score * 100) >= 70 && Math.round(d.sentiment_score * 100) < 101) {

        				return "#006f3c";

        			} 
        			if (Math.round(d.sentiment_score * 100) >= 40 && Math.round(d.sentiment_score * 100) < 70) {

        				return "#f9a73e";

        			} 
        			if (Math.round(d.sentiment_score * 100) >= 0 && Math.round(d.sentiment_score * 100) < 40) {

        				return "#bf212f";
        			}

        		});

	        // ============
			// ADD Y LABEL
			// ============

			svg.append("text")
			    .attr("text-anchor", "middle") 
			    .attr("transform", "translate(-40," + (height / 2) + ")rotate(-90)")
			    .text("PR SCORE");
		
	}



	render() {

		let result = (

				<svg id="performance-graph-svg-container" className="body-text-light">

					

				</svg>


			);



		return result;


	}
}




// ===============
// Connect redux state container to PlayerPage component
// ===============


const mapStateToProps = state => {
  return { 
	  	crawlDates: state.crawlDates
  	};
};


export const SeasonPerformanceGraph = connect(mapStateToProps)(SeasonPerformanceGraphWrapper);



