// ======================================
// GRID ITEM component - Individual container for each player in the insights page
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

//Local JS Imports
import { club_badges } from '../../global/resources/club_badges';
import { setPlayer } from '../../actions/actions';

// CSS Imports 
import './grid_item.css';

// ===========
// Grid Item Component 
// ===========


export class GridItemWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {

			backgroundClass: this._setClassName(),
			rankClass: this._setRankBorderClass(),
			clubClass: this._setClubBorderClass(),
			badgeClass: this._setBadgeBackgroundClass()
		}
	}

	_setClassName() {

		if (this.props.index % 2 === 0) {

			return "react-link grid-item-wrapper grid-item-wrapper-grey";
		}

		return "react-link grid-item-wrapper grid-item-wrapper-white";
	}

	_setRankBorderClass() {

		if (this.props.index % 2 === 0) {

			return "body-text-light grid-item-text grid-item-rank grid-item-border-white";
		}

		return "body-text-light grid-item-text grid-item-rank grid-item-border-grey";
	}

	_setClubBorderClass() {

		if (this.props.index % 2 === 0) {

			return "body-text-light grid-item-text grid-item-clubname grid-item-border-white";
		}

		return "body-text-light grid-item-text grid-item-clubname grid-item-border-grey";
	}

	_setBadgeBackgroundClass() {

		if (this.props.index % 2 === 0) {

			return "-grey";
		}

		return "";

	}

	_handleClick() {

		this.props.setPlayer(this.props.playerName);

	}

	render() {

		let playerNameParam = "/players/" + encodeURIComponent(this.props.playerName);

		let result = (

				<Link role="button" to={playerNameParam} className={this.state.backgroundClass} onClick={() => this._handleClick()}>

					<p className={this.state.rankClass}>{this.props.rank}</p>
					<p className="body-text-light grid-item-text grid-item-playername">{this.props.playerName}</p>
					<div className={this.state.clubClass}>
						<span className={club_badges[this.props.clubName] + this.state.badgeClass + " club-badge grid-item-club-badge"}></span>
						<span>{this.props.clubName}</span>
					</div>
					<p className="body-text-light grid-item-text grid-item-score">{this.props.score}</p>

				</Link>

			);

		return result;
	}
}


// ===============
// Connect redux state container to Grid Item component
// ===============


const mapStateToProps = state => {
  return { 

	  	playersViewed: state.playersViewed
  	};
};



// Export connected component
export const GridItem = connect(mapStateToProps, { setPlayer })(GridItemWrapper);
