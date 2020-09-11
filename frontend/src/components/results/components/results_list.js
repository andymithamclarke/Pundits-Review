// ======================================
// Results List Component to access data from Redux State
// Renders a result item for every player or club returned from the API - depending on the view selected
// ======================================


// ===========
// IMPORTS 
// ===========

import React, { Component } from "react";
import { connect } from "react-redux";

// Local JS Imports
import { searchByClub, searchByPlayer } from "../../actions/actions";
import { PlayerResultContainer } from './player_result_item';
import { ClubResultContainer } from './club_result_item';
import { DividingLine } from  "../../global/components/dividing_line";
import { setReviewScore } from "../../global/functions/set_data_helpers";
import { NoResults } from '../../global/components/no_results_found';
import { ReviewScoreExplainer } from './review_score_explainer';

// CSS Imports
import './result_list.css';

// ===========
// Results Component 
// ===========

export class Results extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
      		playerViewSelected: true,
   		};

   		this._handleUpdate = this._handleUpdate.bind(this);
  	}

  	componentDidUpdate() {
    	
    	this._handleUpdate();

  	}

  	_handleUpdate() {

  		// Toggle the playerViewSelected state
  		if (this.props.playerViewSelected !== this.state.playerViewSelected) {

  			this.setState(prevState => ({
				playerViewSelected: this.props.playerViewSelected
			}));

  		}
  	}

    _setReviewScore(el, clubOrPlayer) {

      return setReviewScore(el, clubOrPlayer)[0];
    }

  	render() {

  		let result;

  			// PLAYER VIEW 
  			if (this.props.playerViewSelected) {

          if (this.props.searchDataPlayers.length) {

              result = (

              <div className="results-list-wrapper">

                <ReviewScoreExplainer />

                {this.props.searchDataPlayers.map((el, index) => {


                    let playerItem = (

                        <div key={index} className="item-and-line-wrapper">

                          <PlayerResultContainer playerName={el.player} playerPosition={el.position} playerClub={el.club_name} reviewScore={this._setReviewScore(el, false)}/>
                          <DividingLine/>

                        </div>

                      );

                    return playerItem;

                })}

            </div>

            );

          } else {

              result = (

                  <div className="results-list-wrapper">

                    <NoResults playerOrClub={"players"} searchQuery={this.props.searchTerms[this.props.searchTerms.length -1]}/>

                  </div>  

                )

          }

			// CLUB VIEW 
  			} else {

          if (this.props.searchDataClubs.length) {

              result = (

                  <div className="results-list-wrapper">

                    <ReviewScoreExplainer />

                    {this.props.searchDataClubs.map((el, index) => {

                      let clubItem = (

                            <div key={index} className="item-and-line-wrapper">

                              <ClubResultContainer clubName={el.club} reviewScore={this._setReviewScore(el, true)}/>
                              <DividingLine/>
                              
                            </div>

                        );
                        
                        return clubItem;

                    })}

                </div>

                );

          } else {

              result = (

                  <div className="results-list-wrapper">

                    <NoResults playerOrClub={"clubs"} searchQuery={this.props.searchTerms[this.props.searchTerms.length -1]}/>

                  </div>  

                )

          }


  			}

  		return result;
  	}


}

// ===============
// Connect redux state container to Results component
// ===============

const mapStateToProps = state => {
  return { 
  		searchDataClubs: state.searchDataClubs,
  		searchDataPlayers: state.searchDataPlayers,
      searchTerms: state.searchTerms
  	};
};



export const ResultsList = connect(mapStateToProps)(Results);
