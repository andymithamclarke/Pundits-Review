// ======================================
// This file contains the top level PLAYER PAGE  component that will wrap other elements on the PLAYER PAGE 
// All other PLAYER PAGE components will be directed through this component
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';

// Local JS Imports 
import { InfoBar } from './components/infobar';
import { PlayerInfoContainer } from './components/player_info_container';
import { DividingLine } from  "./../global/components/dividing_line";
import { ReviewScoreContainer } from './components/review_score_container';
import { SeasonPerformanceContainer } from './components/season_performance_container';
import { SnippetsContainer } from './components/snippets_container';
import { setReviewScore, setReviewSentences, flagFinder, badgeFinder } from "./../global/functions/set_data_helpers";
import { setPlayersAgreeDisagreeScore, getCrawlDates } from './../actions/actions';
import { AgreeDisagree } from './components/agree_disagree';
import { EmptyPlayerClubPage } from './../global/components/empty_player_club_page';
import { Footer } from './../global/components/site_footer/footer';

// Local CSS Imports
import './playerpage.css';



// ===========
// Player Page Component
// ===========


export class PlayerPageWrapper extends Component {

	constructor(props) {
    super(props);
    this.state = {
    		playerData: [],
    		reviewScore: -100,
    		positiveReviews: 0,
    		negativeReviews: 0,
    		totalReviews: 0,
    		snippets: [],
    		nationalityClassName: "",
    		clubBadgeClassName: "",
    		agreeScore: 1, 
    		disagreeScore: 1,
    		loading: true
    	};

    this.componentDidUpdate = this.componentDidUpdate.bind(this);

  	}

  	componentDidMount() {

  		this.componentDidUpdate();

  	}


	componentDidUpdate() {

		// Set the new player

		if (this.props.playersViewed.length && this.props.playersViewed[this.props.playersViewed.length - 1] !== this.state.playerData) {

			this.props.getCrawlDates();
			
			this.setState({ 
				playerData: this.props.playersViewed[this.props.playersViewed.length - 1],
				reviewScore: setReviewScore(this.props.playersViewed[this.props.playersViewed.length - 1])[0],
				positiveReviews: setReviewScore(this.props.playersViewed[this.props.playersViewed.length - 1])[1],
				negativeReviews: setReviewScore(this.props.playersViewed[this.props.playersViewed.length - 1])[2],
				totalReviews: setReviewScore(this.props.playersViewed[this.props.playersViewed.length - 1])[3],
				snippets: setReviewSentences(this.props.playersViewed[this.props.playersViewed.length - 1]),
				nationalityClassName: flagFinder(this.props.playersViewed[this.props.playersViewed.length - 1].nationality),
				clubBadgeClassName: badgeFinder(this.props.playersViewed[this.props.playersViewed.length - 1].club_name),
				loading: false
			});

		}

		

	}



	render() {

		let result = <EmptyPlayerClubPage playerOrClub={"player"}/>

		if (this.state.loading === false) {

			result = (

			<div className="player-club-page-wrapper">

				<Helmet>
				
					<title>{this.state.playerData.player + " - Pundits Review"}</title>
					<meta property="og:description" content={this.state.playerData.player + "'s Pundits Review"}/>
					<meta property="og:url" content={"https://www.punditsreview.com/" + encodeURIComponent(this.state.playerData.player) }/>
		    		<meta property="og:type" content="football blog data"/>

		    	</Helmet>



				<InfoBar clubSpecified={false} playerData={this.state.playerData} playerClubBadgeClassName={"infobar-badge " + this.state.clubBadgeClassName}/>
				
				<PlayerInfoContainer playerData={this.state.playerData} playerNationalityClassName={this.state.nationalityClassName} playerClubBadgeClassName={"club-badge-player-page-info-container " + this.state.clubBadgeClassName}/>

				<DividingLine />

				<ReviewScoreContainer playerData={this.state.playerData} reviewScore={this.state.reviewScore} positiveReviews={this.state.positiveReviews} negativeReviews={this.state.negativeReviews} totalReviews={this.state.totalReviews} playerName={this.state.playerData.player}/>

				<AgreeDisagree playerName={this.state.playerData.player}/>

				<DividingLine />

				<SeasonPerformanceContainer data={this.state.playerData} keyCode={"scores"}/>

				<DividingLine />

				<p id="snippets-title" className="snippets-title heading-text">Snippets</p>

				<SnippetsContainer playerData={this.state.playerData} snippets={this.state.snippets}/>

				<Footer/>

			</div>

			);


		}

		return result;
	}
}


// ===============
// Connect redux state container to PlayerPage component
// ===============


const mapStateToProps = state => {
  return { 
	  	playersViewed: state.playersViewed
  	};
};


export const PlayerPage = connect(mapStateToProps, { setPlayersAgreeDisagreeScore, getCrawlDates })(PlayerPageWrapper);