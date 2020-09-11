// ======================================
// Reducers to produce the application state
// ======================================

// ===========
// IMPORTS 
// ===========

import { DEFINE_SEARCH_TERM, CLUB_DATA_LOADED, PLAYER_DATA_LOADED, CLEAR_SEARCH_RESULTS, SET_PLAYER, SET_CLUB, PLAYER_DATA_LOADED_EVERYONE, SET_AGREE_DISAGREE_SCORES, SET_CLUB_AGREE_DISAGREE_SCORES, SET_GRID_CARD_VIEW, GET_PLAYER_REVIEW_SCORES, CLEAR_PLAYER_REVIEW_SCORES, SET_TOP_BOTTOM_INSIGHTS, SET_INSIGHTS_CATEGORY, GET_PLAYER_TOTAL_REVIEWS, GET_PLAYER_AVG_SCORE, SET_FILTER_ACTIVE_STATE, ADD_POSITION_FILTER, REMOVE_POSITION_FILTER, ADD_CLUB_FILTER, REMOVE_CLUB_FILTER, ADD_NATIONALITY_FILTER, REMOVE_NATIONALITY_FILTER, CLEAR_ALL_FILTERS, APPLY_REVIEW_SCORE_FILTER, APPLY_TOTAL_SCORES_FILTER, APPLY_AVG_SCORES_FILTER, SET_THISWEEK_EVERYONE_TOGGLE, GET_SOURCES_LIST, CLEAR_SOURCES_LIST, AGREE_DISAGREE_LOCAL_UPDATE,AGREE_DISAGREE_LOCAL_UPDATE_CLUBS, GET_ARRAY_CRAWL_DATES, GET_BLOGPOST_LIST, SET_ERROR_STATUS } from "../constants/action_types";
import { deleteItemFromArray, returnDateMatchArray } from './../global/functions/set_data_helpers';

// ===========
// Set the initial state
// ===========


export const initialState = {

  searchTerms: [],
  searchDataPlayers: [],
  searchDataClubs: [],
  thisWeekEveryoneToggle: "THIS WEEK",
  playersViewed: [],
  clubsViewed: [],
  agreeDisagreeScores: [],
  clubAgreeDisagreeScores: [],
  gridCardView: "CARD",
  topBottomInsights: "TOP",
  originalPlayerReviewScores: [],
  playerReviewScores: [],
  originalPlayerTotalReviews: [],
  playerTotalReviews: [],
  originalPlayerAvgScores: [],
  playerAvgScores: [],
  insightsSettingsKey: "REVIEW SCORE",
  filterActive: false,
  positionFilters: [],
  clubFilters: [],
  nationalityFilters: [],
  sourcesList: [],
  crawlDates: [],
  blogPostList: [],
  errorExists: false,
  
};


// ===========
// Configure the reducer
// ===========

export function rootReducer(state = initialState, action) {

	// Logic to set the search term
  	if (action.type === DEFINE_SEARCH_TERM) {

    	return Object.assign({}, state, {
      		searchTerms: state.searchTerms.concat(action.payload)
    	});

  	}

    // Logic to set search request status
    if (action.type === SET_THISWEEK_EVERYONE_TOGGLE) {

      return Object.assign({}, state, {
          thisWeekEveryoneToggle: action.payload
      });

    }

  	// Logic to set the loaded PLAYERS data for THIS WEEK
  	if (action.type === PLAYER_DATA_LOADED) {

        let player_data = [];

        action.payload.forEach(function(player) {

            let dateArray = returnDateMatchArray(player.scores);

            if (dateArray.length) {

              if (dateArray[0].n_negative + dateArray[0].n_positive > 3) {

                  player_data.push(player);

              }

              

            }
        })

        return Object.assign({}, state, {
          searchDataPlayers: state.searchDataPlayers.concat(player_data)
      });


  	}

    // Logic to set the loaded PLAYERS data for EVERYONE 

    if (action.type === PLAYER_DATA_LOADED_EVERYONE) {

      // Filter to receive players that have at least one score logged in the DB
      let playerDataEveryone = action.payload.filter(function(player) {

        return player.scores.length;

      })

      return Object.assign({}, state, {
          searchDataPlayers: state.searchDataPlayers.concat(playerDataEveryone)
      });

    }

  	// Logic to set the loaded CLUBS data
  	if (action.type === CLUB_DATA_LOADED) {

    	return Object.assign({}, state, {
      		searchDataClubs: state.searchDataClubs.concat(action.payload)
    	});

  	} 

    // Logic to clear the search results upon a new search
    if (action.type === CLEAR_SEARCH_RESULTS) {

      return Object.assign({}, state, {
          searchDataClubs: action.payload,
          searchDataPlayers: action.payload
      });

    }

    // Logic to set the player from a search result click
    if (action.type === SET_PLAYER) {
      
      return Object.assign({}, state, {
          playersViewed: state.playersViewed.concat(action.payload)
      });
    }

    // Logic to set the club from a search result click
    if (action.type === SET_CLUB) {

      return Object.assign({}, state, {
          clubsViewed: state.clubsViewed.concat(action.payload)
      });
    }

    // Logic to set the agree disagree scores
    if (action.type === SET_AGREE_DISAGREE_SCORES) {

      if (typeof(action.payload) !== undefined ) {

          return Object.assign({}, state, {
            agreeDisagreeScores: state.agreeDisagreeScores.concat(action.payload)
        });

      }

    }

    // Logic to set the CLUBS agree disagree scores
    if (action.type === SET_CLUB_AGREE_DISAGREE_SCORES) {

      if (typeof(action.payload) !== undefined ) {

          return Object.assign({}, state, {
            clubAgreeDisagreeScores: state.clubAgreeDisagreeScores.concat(action.payload)
        });

      }

    }


    // Logic to locally update agree disagree scores
    if (action.type === AGREE_DISAGREE_LOCAL_UPDATE) {
      
      return Object.assign({}, state, {
          agreeDisagreeScores: state.agreeDisagreeScores.concat(action.payload)
      });
    }


    // Logic to locally update agree disagree scores
    if (action.type === AGREE_DISAGREE_LOCAL_UPDATE_CLUBS) {
      
      return Object.assign({}, state, {
          clubAgreeDisagreeScores: state.clubAgreeDisagreeScores.concat(action.payload)
      });
    }

    // INSIGHTS ACTIONS
    // Logic to set either a grid or a card view
    if (action.type === SET_GRID_CARD_VIEW) {

      return Object.assign({}, state, {
          gridCardView: action.payload
      });

    }

    // Logic to activate/deactivate the insights filter
    if (action.type === SET_FILTER_ACTIVE_STATE) {

      return Object.assign({}, state, {
          filterActive: action.payload
      });

    }

    // Logic to set top or bottom data to be displayed on insights page
    if (action.type === SET_TOP_BOTTOM_INSIGHTS) {

      return Object.assign({}, state, {
          topBottomInsights: action.payload,
      });

    }

    // Logic to set the review scores for players with over 10 reviews
    if (action.type === GET_PLAYER_REVIEW_SCORES) {

      return Object.assign({}, state, {
          playerReviewScores: state.playerReviewScores.concat(action.payload),
          originalPlayerReviewScores: state.playerReviewScores.concat(action.payload),
      });

    }

    // Logic to set the number of reviews for players
    if (action.type === GET_PLAYER_TOTAL_REVIEWS) {

      return Object.assign({}, state, {
          playerTotalReviews: state.playerTotalReviews.concat(action.payload),
          originalPlayerTotalReviews: state.originalPlayerTotalReviews.concat(action.payload)
      });

    }

    // Logic to set the avg review scores for each player
    if (action.type === GET_PLAYER_AVG_SCORE) {

      return Object.assign({}, state, {
          playerAvgScores: state.playerAvgScores.concat(action.payload),
          originalPlayerAvgScores: state.originalPlayerAvgScores.concat(action.payload)
      });

    }

    // Logic to clear the player review scores
    if (action.type === CLEAR_PLAYER_REVIEW_SCORES) {

      return Object.assign({}, state, {
          playerReviewScores: action.payload,
          originalPlayerReviewScores: action.payload,
          playerTotalReviews: action.payload,
          originalPlayerTotalReviews: action.payload,
          playerAvgScores: action.payload,
          originalPlayerAvgScores: action.payload
      });

    }

    // Logic to clear the player review scores
    if (action.type === SET_INSIGHTS_CATEGORY) {

      return Object.assign({}, state, {
          insightsSettingsKey: action.payload,
      });

    }

    // FILTER ACTIONS
    // Logic to add a position filter
    if (action.type === ADD_POSITION_FILTER) {

      return Object.assign({}, state, {
          positionFilters: state.positionFilters.concat(action.payload),
      });

    }

    // Logic to remove a position filter
    if (action.type === REMOVE_POSITION_FILTER) {

      return Object.assign({}, state, {
          positionFilters: deleteItemFromArray(state.positionFilters, action.payload),
      });

    }

    // Logic to add a club filter
    if (action.type === ADD_CLUB_FILTER) {

      return Object.assign({}, state, {
          clubFilters: state.clubFilters.concat(action.payload),
      });

    }

    // Logic to remove a club filter
    if (action.type === REMOVE_CLUB_FILTER) {

      return Object.assign({}, state, {
          clubFilters: deleteItemFromArray(state.clubFilters, action.payload),
      });

    }

    // Logic to add a nationality filter
    if (action.type === ADD_NATIONALITY_FILTER) {

      return Object.assign({}, state, {
          nationalityFilters: state.nationalityFilters.concat(action.payload),
      });

    }

    // Logic to remove a nationality filter
    if (action.type === REMOVE_NATIONALITY_FILTER) {

      return Object.assign({}, state, {
          nationalityFilters: deleteItemFromArray(state.nationalityFilters, action.payload),
      });

    }

    // Logic to clear all filters
    if (action.type === CLEAR_ALL_FILTERS) {

      return Object.assign({}, state, {
          nationalityFilters: action.payload,
          clubFilters: action.payload,
          positionFilters: action.payload
      });

    }

    // Logic to apply filter to player review score array
    if (action.type === APPLY_REVIEW_SCORE_FILTER) {

      return Object.assign({}, state, {
          playerReviewScores: action.payload,
      });

    }

    // Logic to apply filter to player total reviews array
    if (action.type === APPLY_TOTAL_SCORES_FILTER) {

      return Object.assign({}, state, {
          playerTotalReviews: action.payload,
      });

    }

    // Logic to apply filter to player avg review scores array
    if (action.type === APPLY_AVG_SCORES_FILTER) {

      return Object.assign({}, state, {
          playerAvgScores: action.payload,
      });

    }

    // ==============
    // BLOG ACTIONS
    // ==============

    if (action.type === GET_BLOGPOST_LIST) {

      return Object.assign({}, state, {
          blogPostList: action.payload,
      });

    }



    // ==============
    // OTHER ACTIONS
    // ==============

    // Logic to set sources list
    if (action.type === GET_SOURCES_LIST) {

      return Object.assign({}, state, {
          sourcesList: action.payload,
      });

    }

    // Logic to clear sources list
    if (action.type === CLEAR_SOURCES_LIST) {

      return Object.assign({}, state, {
          sourcesList: action.payload,
      });

    }


    // Logic to set crawl array
    if (action.type === GET_ARRAY_CRAWL_DATES) {

      return Object.assign({}, state, {
          crawlDates: action.payload,
      });

    }


    // Logic to set crawl array
    if (action.type === SET_ERROR_STATUS) {

      return Object.assign({}, state, {
          errorExists: action.payload,
      });

    }



  return state;
}

export default rootReducer;