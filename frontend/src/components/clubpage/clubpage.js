// ======================================
// This file contains the top level CLUB PAGE component that will wrap other elements on the CLUB PAGE 
// All other CLUB PAGE components will be directed through this component
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
import { ClubInfoContainer } from './components/club_info_container';
import { setReviewScore, setReviewSentences, badgeFinder } from "./../global/functions/set_data_helpers";
import { getCrawlDates } from './../actions/actions';  
import { DividingLine } from  "./../global/components/dividing_line";
import { InfoBar } from './../playerpage/components/infobar';
import { ReviewScoreContainer } from './../playerpage/components/review_score_container';
import { SeasonPerformanceContainer } from './../playerpage/components/season_performance_container';
import { SnippetsContainer } from './../playerpage/components/snippets_container';
import { ClubAgreeDisagree } from './components/club_agree_disagree';
import { ClubPlayerList } from './components/club_player_list';
import { EmptyPlayerClubPage } from './../global/components/empty_player_club_page';
import { Footer } from './../global/components/site_footer/footer';

// Local CSS Imports
import './../playerpage/playerpage.css';



// ===========
// Club Page Component
// ===========


export class ClubPageWrapper extends Component {

	constructor(props) {
    super(props);
    this.state = {
    		clubData: [],
    		reviewScore: -100,
    		positiveReviews: 0,
    		negativeReviews: 0,
    		totalReviews: 0,
    		snippets: [],
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


  		// Set the new CLUB

		if (this.props.clubsViewed.length && this.props.clubsViewed[this.props.clubsViewed.length - 1] !== this.state.clubData) {

			this.props.getCrawlDates();

			this.setState({ 
				clubData: this.props.clubsViewed[this.props.clubsViewed.length - 1],
				reviewScore: setReviewScore(this.props.clubsViewed[this.props.clubsViewed.length - 1], true)[0],
				positiveReviews: setReviewScore(this.props.clubsViewed[this.props.clubsViewed.length - 1], true)[1],
				negativeReviews: setReviewScore(this.props.clubsViewed[this.props.clubsViewed.length - 1], true)[2],
				totalReviews: setReviewScore(this.props.clubsViewed[this.props.clubsViewed.length - 1], true)[3],
				snippets: setReviewSentences(this.props.clubsViewed[this.props.clubsViewed.length - 1], true),
				clubBadgeClassName: badgeFinder(this.props.clubsViewed[this.props.clubsViewed.length - 1].club),
				loading: false
			});

		}
  	}


	render() {

		let result = <EmptyPlayerClubPage playerOrClub={"club"} />

		if (this.state.loading === false) {

			result = (

				<div className="player-club-page-wrapper">

					<Helmet>
				
						<title>{this.state.clubData.club + " - Pundits Review"}</title>
						<meta property="og:description" content={this.state.clubData.club + "'s Pundits Review"}/>
						<meta property="og:url" content={"https://www.punditsreview.com/" + encodeURIComponent(this.state.clubData.club) }/>
			    		<meta property="og:type" content="football blog data"/>

			    	</Helmet>

					<InfoBar clubSpecified={true} clubData={this.state.clubData} playerClubBadgeClassName={"infobar-badge " + this.state.clubBadgeClassName}/>
					
					<ClubInfoContainer id="club-info-container" clubData={this.state.clubData} clubBadgeClassName={"club-badge-club-page-info-container " + this.state.clubBadgeClassName}/>

					<DividingLine />

					<ReviewScoreContainer reviewScore={this.state.reviewScore} positiveReviews={this.state.positiveReviews} negativeReviews={this.state.negativeReviews} totalReviews={this.state.totalReviews} />

					<ClubAgreeDisagree clubName={this.state.clubData.club}/>

					<DividingLine />

					<SeasonPerformanceContainer data={this.state.clubData} keyCode={"club_scores"}/>

					<DividingLine />

					<p id="snippets-title" className="snippets-title heading-text">Snippets</p>

					<SnippetsContainer snippets={this.state.snippets}/>

					<DividingLine />

					<ClubPlayerList clubName={this.state.clubData.club} players={this.state.clubData.players}/>

					<Footer />

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
	  	clubsViewed: state.clubsViewed
  	};
};


export const ClubPage = connect(mapStateToProps, { getCrawlDates })(ClubPageWrapper);

