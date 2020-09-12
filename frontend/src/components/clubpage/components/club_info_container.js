// ======================================
// Club Info Container Component for use within the Club page - club_name, image & stadium
// ======================================



// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";

// Local JS Imports
import { badgeFinder } from "../../global/functions/set_data_helpers";
import { stadiumNames } from '../../global/resources/club_stadiums';

// CSS Import
import './club_info_container.css';


// ===========
// Club Info Component 
// ===========



export class ClubInfoContainer extends Component {

	render() {

		let result = (

				<div className="club-info-container-wrapper">

					<p className="club-page-club-info-name heading-text" >{this.props.clubData.club}</p>
					<span className={this.props.clubBadgeClassName} ></span>
					<p className="club-page-club-info-stadium body-text-light" >{stadiumNames[this.props.clubData.club]}</p>

				</div>

			);


		return result;
	}
}