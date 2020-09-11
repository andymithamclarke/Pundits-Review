// ======================================
// Actions to pass to the reducer
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import axios from 'axios';
import Cookies from 'js-cookie'
import { trackPromise } from 'react-promise-tracker';
import { useHistory } from "react-router-dom";

// Local JS Imports
import { DEFINE_SEARCH_TERM, CLUB_DATA_LOADED, PLAYER_DATA_LOADED, CLEAR_SEARCH_RESULTS, SET_PLAYER, SET_CLUB, PLAYER_DATA_LOADED_EVERYONE, SET_AGREE_DISAGREE_SCORES, SET_CLUB_AGREE_DISAGREE_SCORES, SET_GRID_CARD_VIEW, GET_PLAYER_REVIEW_SCORES, CLEAR_PLAYER_REVIEW_SCORES, SET_TOP_BOTTOM_INSIGHTS, SET_INSIGHTS_CATEGORY, GET_PLAYER_TOTAL_REVIEWS, GET_PLAYER_AVG_SCORE, SET_FILTER_ACTIVE_STATE, ADD_POSITION_FILTER, REMOVE_POSITION_FILTER, ADD_CLUB_FILTER, REMOVE_CLUB_FILTER, ADD_NATIONALITY_FILTER, REMOVE_NATIONALITY_FILTER, CLEAR_ALL_FILTERS, APPLY_REVIEW_SCORE_FILTER, APPLY_TOTAL_SCORES_FILTER, APPLY_AVG_SCORES_FILTER, SET_THISWEEK_EVERYONE_TOGGLE, GET_SOURCES_LIST, CLEAR_SOURCES_LIST, AGREE_DISAGREE_LOCAL_UPDATE, AGREE_DISAGREE_LOCAL_UPDATE_CLUBS, GET_ARRAY_CRAWL_DATES, GET_BLOGPOST_LIST, SET_ERROR_STATUS } from "../constants/action_types";
import { cleanSearchParam } from './clean_search_query';
import { agreeDisagreeDate, localCrawlDate } from '../constants/dates';
import { setFilter, getRootUrl, uniqueArrayOfObjects, calculateAvg, calculateSeasonScores, returnDateMatchArray } from '../global/functions/set_data_helpers';

// ===========
// ACTIONS 
// ===========

// 1. Set the Search Term

export function defineSearchTerm(searchTerm) {

	return function(dispatch) {

		dispatch({type: DEFINE_SEARCH_TERM, payload: searchTerm})

	};
}


// 2. Retrieve the data - Searching by CLUB

export function searchByClub(queryParam, everyone) {

  if (queryParam) {

    // Process the queryParam cleanSearchParam()
    const queryString = "/api/clubs/?clubname=" + cleanSearchParam(queryParam)

    return function(dispatch) {

      return trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            // Set players data array
            let players_data;

            // Sort the players from the clubs 
            json.forEach(function(item) {

              // Dispatch the players data
              if (everyone) {

                dispatch({ type: PLAYER_DATA_LOADED_EVERYONE, payload: item.players });

              } else {
  
                dispatch({ type: PLAYER_DATA_LOADED, payload: item.players });


              }
              

            })

            // Dispatch the clubs data
            dispatch({ type: CLUB_DATA_LOADED, payload: json });
        }))
        .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
    };

  };
}

// 3. Retrieve the data - Searching by PLAYER


export function searchByPlayer(queryParam, everyone) {

  if (queryParam) {


    // Process the queryParam cleanSearchParam()
    const queryString = "/api/players/?playername=" + cleanSearchParam(queryParam)

    return function(dispatch) {

      return trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            if (everyone) {

              dispatch({ type: PLAYER_DATA_LOADED_EVERYONE, payload: json });

            } else {

              dispatch({ type: PLAYER_DATA_LOADED, payload: json });

            }
            
        }))
        .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
    };

  };

}


// 4. Clear the search results - New Search

export function clearSearchResults() {

  return function(dispatch) {

    dispatch({type: CLEAR_SEARCH_RESULTS, payload: []});

  }
}



// 5. Set the PLAYER from a search results click

export function setPlayer(playerName) {

  // Declare the query string
  const queryString = "/api/players/?playername=" + encodeURI(playerName);

  return function(dispatch) {

      return trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {
            
            dispatch({type: SET_PLAYER, payload: json});

        }))
        .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
    };

}

// 5. Set the CLUB from a search results click

export function setClub(clubName) {

  // Declare the query string
  const queryString = "/api/clubs/?clubname=" + encodeURI(clubName);

  return function(dispatch) {

      return trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {
            
            dispatch({type: SET_CLUB, payload: json});

        }))
        .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
    };

}


// 5. Set the Agree Disagree Scores of a Player 

export function setPlayersAgreeDisagreeScore(playerName) {

  let queryString = "/api/playeragreedisagree/?playername=" + encodeURI(playerName) + "&date=" + agreeDisagreeDate;

  return function(dispatch) {

    return fetch(queryString)
    .then(response => response.json())
    .then(json => {
            
        dispatch({type: SET_AGREE_DISAGREE_SCORES, payload: json});

    })
    .catch(error => {

        // Dispatch error status
        dispatch({ type: SET_ERROR_STATUS, payload: true });

    });

  };
}

// Function to locally update Agree Disagree Score - PLAYERS
export function locallyUpdateAgreeDisagreeScore(newScoreObject) {

  return function(dispatch) {

    dispatch({type: AGREE_DISAGREE_LOCAL_UPDATE, payload: newScoreObject});

  }
}


// Function to locally update Agree Disagree Score - CLUBS
export function locallyUpdateAgreeDisagreeScoreClubs(newScoreObject) {

  return function(dispatch) {

    dispatch({type: AGREE_DISAGREE_LOCAL_UPDATE_CLUBS, payload: newScoreObject});

  }
}


// 5. Update the Agree Disagree Scores of a Player 
export function updatePlayersAgreeDisagreeScore(currentPlayer, agreeOrDisagree) {


      let playerId = currentPlayer.id;
      let playerName = currentPlayer.player;
      let requestDateParam = agreeDisagreeDate;
      let agreeDisagreeId = currentPlayer.player_agree_disagree[currentPlayer.player_agree_disagree.length - 1].id;
      let agreeScore = currentPlayer.player_agree_disagree[currentPlayer.player_agree_disagree.length - 1].agree_score;
      let disagreeScore = currentPlayer.player_agree_disagree[currentPlayer.player_agree_disagree.length - 1].disagree_score;

      let putRequestUrl = '/api/playeragreedisagree/' + agreeDisagreeId.toString() + '/'

      if (agreeOrDisagree) {
        agreeScore += 1
      } else {
        disagreeScore += 1
      }

      let csrftoken = Cookies.get("csrftoken");

      axios({

        method: 'put',
        url: putRequestUrl,
        data: {
          player: playerId,
          player_name: playerName,
          date: requestDateParam,
          disagree_score: disagreeScore,
          agree_score: agreeScore
        },
        headers: {
          "X-CSRFToken": csrftoken
        }

      })
      .then(function(response) {

          dispatchUpdatedPlayerAgreeDisagreeScore(response);
      })
      .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
};


// 5. Dispatcher for the newly updated playerAgreeDisagreeScore

export function dispatchUpdatedPlayerAgreeDisagreeScore(data) {

  return function(dispatch) {

      dispatch({type: SET_AGREE_DISAGREE_SCORES, payload: data});
  }

}



// 5. Set the agree disagree scores for CLUBS
export function setClubsAgreeDisagreeScore(clubName) {

  let queryString = "/api/clubagreedisagree/?clubname=" + encodeURI(clubName) + "&date=" + agreeDisagreeDate;

  return function(dispatch) {

    return fetch(queryString)
    .then(response => response.json())
    .then(json => {
            
        dispatch({type: SET_CLUB_AGREE_DISAGREE_SCORES, payload: json});

    })
    .catch(error => {

        // Dispatch error status
        dispatch({ type: SET_ERROR_STATUS, payload: true });

    });


  };
}

// 5. Update the agree disagree scores for CLUBS
export function updateClubsAgreeDisagreeScore(currentClub, agreeOrDisagree) {


      let clubId = currentClub.id;
      let clubName = currentClub.club;
      let requestDateParam = agreeDisagreeDate;
      let agreeDisagreeId = currentClub.club_agree_disagree[currentClub.club_agree_disagree.length - 1].id;
      let agreeScore = currentClub.club_agree_disagree[currentClub.club_agree_disagree.length - 1].agree_score;
      let disagreeScore = currentClub.club_agree_disagree[currentClub.club_agree_disagree.length - 1].disagree_score;

      let putRequestUrl = '/api/clubagreedisagree/' + agreeDisagreeId.toString() + '/'

      if (agreeOrDisagree) {
        agreeScore += 1
      } else {
        disagreeScore += 1
      }

      let csrftoken = Cookies.get("csrftoken");

      axios({

        method: 'put',
        url: putRequestUrl,
        data: {
          club: clubId,
          club_name: clubName,
          date: requestDateParam,
          disagree_score: disagreeScore,
          agree_score: agreeScore
        },
        headers: {
          "X-CSRFToken": csrftoken
        }

      })
      .then(function(response) {

          dispatchUpdatedClubAgreeDisagreeScore(response);
      })
      .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

      });
};


// 5. Dispatcher for the newly updated clubAgreeDisagreeScore
export function dispatchUpdatedClubAgreeDisagreeScore(data) {

  return function(dispatch) {

      dispatch({type: SET_CLUB_AGREE_DISAGREE_SCORES, payload: data});
  }

}


// Dispatcher to set This Week Everyone Toggle
export function setThisWeekEveryoneToggleStatus(choice) {

  return function(dispatch) {

      dispatch({type: SET_THISWEEK_EVERYONE_TOGGLE, payload: choice});
  }

}




// ======================================
// INSIGHTS ACTIONS
// ======================================

// Dispatcher to toggle between grid and card views
export function setGridCardView(choice) {

  return function(dispatch) {

      dispatch({type: SET_GRID_CARD_VIEW, payload: choice})
  }
}

// Dispatcher to set filter active state
export function setFilterActive(choice) {

  return function(dispatch) {

      dispatch({type: SET_FILTER_ACTIVE_STATE, payload: choice})
  }
}


// Dispatcher to toggle between top and bottom data on insights page
export function setTopBottomInsights(choice) {

  return function(dispatch) {

      dispatch({type: SET_TOP_BOTTOM_INSIGHTS, payload: choice})
  }
}

// Dispatcher to set the new insights category
export function setInsightsCategory(choice) {

  return function(dispatch) {

      dispatch({type: SET_INSIGHTS_CATEGORY, payload: choice})
  }
}


// Dispatcher to get player review scores
export function getPlayerReviewScores() {

  // Declare the query string
  const queryString = "/api/scores/";

  return async function(dispatch) {

      return await trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            json.forEach(function(item) {

                if (item.date == localCrawlDate && (item.n_negative + item.n_positive) > 5) {

                    dispatch({type: GET_PLAYER_REVIEW_SCORES, payload: item});

                }

            })

        }))
        .catch(error => {

              // Dispatch error status
              dispatch({ type: SET_ERROR_STATUS, payload: true });

          });
    };

}


// Dispatcher to clear player review scores
export function clearPlayerReviewScores() {

  return function(dispatch) {

    dispatch({type: CLEAR_PLAYER_REVIEW_SCORES, payload: []});

  }
}



// Dispatcher to get player total reviews
export function getPlayerTotalReviews() {

  // Declare the query string
  const queryString = "/api/scores/";

  return async function(dispatch) {

      return await trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            json.forEach(function(item) {

                if (item.date == localCrawlDate) {

                    dispatch({type: GET_PLAYER_TOTAL_REVIEWS, payload: item});

                }

            })

        }))
        .catch(error => {

              // Dispatch error status
              dispatch({ type: SET_ERROR_STATUS, payload: true });

          });
    };

}


// Dispatcher to get player avg score
export function getPlayerAvgScore() {

  // Declare the query string
  const queryString = "/api/players/";

  return async function(dispatch) {

      return await trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            json.forEach(function(item) {

                if (item.scores.length) {

                  let avgScoreObj = {"player_name": item.player, "club": item.club_name, "field_position": item.position, "nationality": item.nationality, "avg_score": calculateAvg(item.scores), "n_positive": calculateSeasonScores(item.scores)[0], "n_negative": calculateSeasonScores(item.scores)[1], "total_reviews": calculateSeasonScores(item.scores)[2]};

                  if (avgScoreObj["avg_score"] !== null) {

                      dispatch({type: GET_PLAYER_AVG_SCORE, payload: avgScoreObj});

                  }

                }

            })

        }))
        .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
    };

}



// Dispatcher to add position filter to insights page
export function addPositionFilter(position) {

  return function(dispatch) {

      dispatch({type: ADD_POSITION_FILTER, payload: position})
  }
}

// Dispatcher to remove position filter from insights page
export function removePositionFilter(position) {

  return function(dispatch) {

      dispatch({type: REMOVE_POSITION_FILTER, payload: position})
  }
}


// Dispatcher to add club filter to insights page
export function addClubFilter(club) {

  return function(dispatch) {

      dispatch({type: ADD_CLUB_FILTER, payload: club})
  }
}

// Dispatcher to remove club filter from insights page
export function removeClubFilter(club) {

  return function(dispatch) {

      dispatch({type: REMOVE_CLUB_FILTER, payload: club})
  }
}

// Dispatcher to add nationality filter to insights page
export function addNationalityFilter(nationality) {

  return function(dispatch) {

      dispatch({type: ADD_NATIONALITY_FILTER, payload: nationality})
  }
}

// Dispatcher to remove nationality filter from insights page
export function removeNationalityFilter(nationality) {

  return function(dispatch) {

      dispatch({type: REMOVE_NATIONALITY_FILTER, payload: nationality})
  }
}


// Dispatcher to remove nationality filter from insights page
export function clearAllFilters() {

  return function(dispatch) {

      dispatch({type: CLEAR_ALL_FILTERS, payload: []})
  }
}

// Dispatcher to apply filter to player review scores
export function applyFilterPlayerReviewScores(originalReviewScoreArray, filterSettings) {

  return function(dispatch) {

      let filteredReviewScores = []

      originalReviewScoreArray.forEach(function(player) {

        if (setFilter(player, filterSettings)) {
  
            filteredReviewScores.push(player);    

        }

      })

      dispatch({type: APPLY_REVIEW_SCORE_FILTER, payload: filteredReviewScores}) 
  }
}

// Dispatcher to apply filter to player review scores
export function applyFilterPlayerTotalScores(originalTotalScoreArray, filterSettings) {

  return function(dispatch) {

      let filteredTotalScores = []

      originalTotalScoreArray.forEach(function(player) {

        if (setFilter(player, filterSettings)) {
  
            filteredTotalScores.push(player);    

        }

      })

      dispatch({type: APPLY_TOTAL_SCORES_FILTER, payload: filteredTotalScores}) 
  }
}



// Dispatcher to apply filter to player review scores
export function applyFilterPlayerAvgScores(originalAvgScoreArray, filterSettings) {

  return function(dispatch) {

      let filteredAvgScores = []

      originalAvgScoreArray.forEach(function(player) {

        if (setFilter(player, filterSettings)) {
  
            filteredAvgScores.push(player);    

        }

      })

      dispatch({type: APPLY_AVG_SCORES_FILTER, payload: filteredAvgScores}) 
  }
}



// ==============================
// BLOG ACTIONS 
// ==============================

// Dispatcher to set list of blog posts 
export function getBlogPostList() {

  // Declare the query string
  const queryString = "/api/blogposts/";

  return function(dispatch) {

      return trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            console.log(json)

            dispatch({type: GET_BLOGPOST_LIST, payload: json})

        }))
        .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
    };

}


// ==============================
// OTHER ACTIONS 
// ==============================


// Dispatcher to clear sources list 
export function clearSourcesList() {

  return function(dispatch) {

      dispatch({type: CLEAR_SOURCES_LIST, payload: []})
  }
}


// Dispatcher to get sources list
export function getSourcesList() {

  // Declare the query string
  const queryString = "/api/sentences/";

  return function(dispatch) {

      return trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            let sources_array = [];

            json.forEach(function(item) {
              
              sources_array.push({"media_source": item.media_source, "url": getRootUrl(item.url)})

            });

            dispatch({type: GET_SOURCES_LIST, payload: uniqueArrayOfObjects(sources_array)})

        }))
        .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
    };

}




// Dispatcher to get array of crawl dates
export function getCrawlDates() {

  // Declare the query string
  const queryString = "/api/scores/";

  return function(dispatch) {

      return fetch(queryString)
          .then(response => response.json())
          .then(json => {

            let date_array = [];

            json.forEach(function(item) {
              
              date_array.push({"date": item.date})

            });

            dispatch({type: GET_ARRAY_CRAWL_DATES, payload: uniqueArrayOfObjects(date_array)})

        })
          .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
    };

}



// Dispatcher to reset error boundary

export function resetErrorBoundary() {

  return function(dispatch) {

    dispatch({type: SET_ERROR_STATUS, payload: false});

  }
}

