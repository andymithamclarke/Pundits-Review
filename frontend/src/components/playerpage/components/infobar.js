// ======================================
// Info Bar Component to show current player and club logo in top menu when user scrolls past info container
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";

// CSS Imports 
import './infobar.css';


// ===========
// Info Bar Component 
// ===========


export class InfoBar extends Component {

	componentDidMount() {

		window.addEventListener('scroll', this.onScroll);

	}

	componentWillUnmount() {

		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {

		const reviewContainer = document.querySelector('.review-score-container-wrapper').getBoundingClientRect();

		const infoBarElement = document.querySelector('.info-bar-wrapper');

		if (reviewContainer.top < 50) {

			infoBarElement.style.top = "50px";

		} else {

			infoBarElement.style.top = "-50px";
		}

	}

	render() {

		let playerClubVariable;

		if (this.props.clubSpecified) {
			playerClubVariable = this.props.clubData.club;
		} else {
			playerClubVariable = this.props.playerData.player;
		}

		let result = (

				<div className="info-bar-wrapper">

					<p className="info-bar-player-name heading-text">{playerClubVariable}</p>

					<span className={this.props.playerClubBadgeClassName}></span>

				</div>


			);

		return result;
	}
}


