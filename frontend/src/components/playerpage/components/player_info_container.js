// ======================================
// Player Info Container Component for use within the player page - name, image, position, club and country
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Local JS Imports
import { country_codes } from '../../global/resources/ISO_COUNTRY_CODES';
import { flagFinder } from "../../global/functions/set_data_helpers";
import { setClub } from '../../actions/actions';
import { club_shirts } from '../../global/resources/club_shirts';

// CSS Import
import './player_info_container.css';



// ===========
// Player Info Container
// ===========

export class PlayerInfo extends Component {

	// Set the club - on link click
	_handleClubClick(clubName) {

		this.props.setClub(this.props.playerData.club_name);
	}


	render() {

		// Set specific club URL
		let clubNameParam = "/clubs/" + encodeURIComponent(this.props.playerData.club_name);

		let result = (

			<div className="player-info-container-wrapper">

				<span className={"club-shirt player-page-player-shirt " + club_shirts[this.props.playerData.club_name]} ></span>
				<p className="player-page-player-info-name heading-text" >{this.props.playerData.player}</p>
				<p className="player-page-player-info-position body-text-light" >{this.props.playerData.position}</p>
				<Link to={clubNameParam} className="player-page-player-info-club-text body-text-light react-link" onClick={() => this._handleClubClick()}>{this.props.playerData.club_name}</Link>
				<p className="player-page-player-info-nationality-text body-text-light" >{this.props.playerData.nationality}</p>

				<span className={this.props.playerNationalityClassName}></span>
				<Link to={clubNameParam} onClick={() => this._handleClubClick()} className={this.props.playerClubBadgeClassName}></Link>

			</div>

			);

		return result;
	}
}


// ===============
// Connect redux state container to Player Info component
// ===============


const mapStateToProps = state => {
  return { 

	  	clubsViewed: state.clubsViewed
  	};
};



// Export connected component
export const PlayerInfoContainer = connect(mapStateToProps, { setClub })(PlayerInfo);
