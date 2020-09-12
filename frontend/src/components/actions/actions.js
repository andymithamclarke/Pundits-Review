// ======================================
// Actions to pass to the redux reducer
// ======================================

// __Notes:__
//   - Actions return dispatch functions which set data in redux store
//   - Controls a significant amount of the projects API calls & other data setting functions
//   - Promise Tracker used in API calls to tell react hooks to render loading page until promise finishes
//   - Get requests handled with 'fetch' - 'put' requests handled with axios



// ===============
// ACTIONS INDEX
// ===============

// PLAYER / CLUB PAGE ACTIONS
// --------------------------
// 1. Set the Search Term
// 2. Retrieve players and clubs data - Searching by CLUB
// 3. Retrieve players and clubs data  - Searching by PLAYER
// 4. Clear the search results - New Search
// 5. Set the current PLAYER 
// 6. Set the current CLUB
// 7. Set the Agree Disagree Scores of a Player 
// 8. Locally update Agree Disagree Score - PLAYERS
// 9. Locally update Agree Disagree Score - CLUBS
// 10. Update the Agree Disagree Scores of a Player - Server PUT Request
// 11. Dispatcher for the newly updated playerAgreeDisagreeScore
// 12. Set the agree disagree scores of a Club 
// 13. Update the Agree Disagree Scores of a Club - Server PUT Request
// 14. Dispatcher for the newly updated clubAgreeDisagreeScore
// 15. Set This Week Everyone Toggle status

// INSIGHTS (Player Ranking) PAGE ACTIONS
// --------------------------
// 16. Toggle between grid and card views
// 17. Set filter active status
// 18. Toggle between top and bottom data view on insights page
// 19. Set the new insights category
// 20. Get player review scores array
// 21. Clear player review scores
// 22. Get player total reviews
// 23. Get player avg score
// 24. Add position filter to insights page
// 25. Remove position filter from insights page
// 26. Add club filter to insights page
// 27. Remove club filter from insights page
// 28. Add nationality filter to insights page
// 29. Remove nationality filter from insights page
// 30. Clear all Insights filters
// 31. Apply filters to player review scores array
// 32. Apply filter to player total scores
// 33. Apply filter to player avg scores

// OTHER (misc) ACTIONS
// --------------------------
// 34. Set list of blog posts 
// 35. Clear sources list 
// 36. Get sources list
// 37. Get array of crawl dates
// 38. Reset error boundary

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


// ======================================
// PLAYER / CLUB PAGE ACTIONS
// ======================================


// 1. Set the Search Term

export function defineSearchTerm(searchTerm) {

	return function(dispatch) {

		dispatch({type: DEFINE_SEARCH_TERM, payload: searchTerm})

	};
}




// 2. Retrieve players and clubs data - Searching by CLUB

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




// 3. Retrieve players and clubs data  - Searching by PLAYER

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



// 5. Set the current PLAYER

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

// 6. Set the current CLUB 

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


// 7. Set the Agree Disagree Scores of a Player 

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

// 8. Locally update Agree Disagree Score - PLAYERS
export function locallyUpdateAgreeDisagreeScore(newScoreObject) {

  return function(dispatch) {

    dispatch({type: AGREE_DISAGREE_LOCAL_UPDATE, payload: newScoreObject});

  }
}


// 9. Locally update Agree Disagree Score - CLUBS
export function locallyUpdateAgreeDisagreeScoreClubs(newScoreObject) {

  return function(dispatch) {

    dispatch({type: AGREE_DISAGREE_LOCAL_UPDATE_CLUBS, payload: newScoreObject});

  }
}


// 10. Update the Agree Disagree Scores of a Player - Server PUT Request
export function updatePlayersAgreeDisagreeScore(currentPlayer, agreeOrDisagree) {

      // Declare Player info
      let playerId = currentPlayer.id;
      let playerName = currentPlayer.player;
      let requestDateParam = agreeDisagreeDate;
      let agreeDisagreeId = currentPlayer.player_agree_disagree[currentPlayer.player_agree_disagree.length - 1].id;
      let agreeScore = currentPlayer.player_agree_disagree[currentPlayer.player_agree_disagree.length - 1].agree_score;
      let disagreeScore = currentPlayer.player_agree_disagree[currentPlayer.player_agree_disagree.length - 1].disagree_score;

      // Set query url
      let putRequestUrl = '/api/playeragreedisagree/' + agreeDisagreeId.toString() + '/'

      // Update either agree or disagree score
      if (agreeOrDisagree) {
        agreeScore += 1
      } else {
        disagreeScore += 1
      }

      // Get token & make request
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


// 11. Dispatcher for the newly updated playerAgreeDisagreeScore

export function dispatchUpdatedPlayerAgreeDisagreeScore(data) {

  return function(dispatch) {

      dispatch({type: SET_AGREE_DISAGREE_SCORES, payload: data});
  }

}



// 12. Set the agree disagree scores for CLUBS
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

// 13. Update the Agree Disagree Scores of a Club - Server PUT Request
export function updateClubsAgreeDisagreeScore(currentClub, agreeOrDisagree) {

      // Declare club info
      let clubId = currentClub.id;
      let clubName = currentClub.club;
      let requestDateParam = agreeDisagreeDate;
      let agreeDisagreeId = currentClub.club_agree_disagree[currentClub.club_agree_disagree.length - 1].id;
      let agreeScore = currentClub.club_agree_disagree[currentClub.club_agree_disagree.length - 1].agree_score;
      let disagreeScore = currentClub.club_agree_disagree[currentClub.club_agree_disagree.length - 1].disagree_score;

      // Set query url
      let putRequestUrl = '/api/clubagreedisagree/' + agreeDisagreeId.toString() + '/'

      // Update either agree or disagree score
      if (agreeOrDisagree) {
        agreeScore += 1
      } else {
        disagreeScore += 1
      }

      // Get token and make request
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


// 14. Dispatcher for the newly updated clubAgreeDisagreeScore
export function dispatchUpdatedClubAgreeDisagreeScore(data) {

  return function(dispatch) {

      dispatch({type: SET_CLUB_AGREE_DISAGREE_SCORES, payload: data});
  }

}


// 15. Set This Week Everyone Toggle status
export function setThisWeekEveryoneToggleStatus(choice) {

  return function(dispatch) {

      dispatch({type: SET_THISWEEK_EVERYONE_TOGGLE, payload: choice});
  }

}


// ======================================
// INSIGHTS ACTIONS
// ======================================

// 16. Toggle between grid and card views
export function setGridCardView(choice) {

  return function(dispatch) {

      dispatch({type: SET_GRID_CARD_VIEW, payload: choice})
  }
}

// 17. Set filter active status
export function setFilterActive(choice) {

  return function(dispatch) {

      dispatch({type: SET_FILTER_ACTIVE_STATE, payload: choice})
  }
}


// 18. Toggle between top and bottom data view on insights page
export function setTopBottomInsights(choice) {

  return function(dispatch) {

      dispatch({type: SET_TOP_BOTTOM_INSIGHTS, payload: choice})
  }
}

// 19. Set the new insights category
export function setInsightsCategory(choice) {

  return function(dispatch) {

      dispatch({type: SET_INSIGHTS_CATEGORY, payload: choice})
  }
}


// 20. Get player review scores array
export function getPlayerReviewScores() {

  // Declare the query string
  const queryString = "/api/scores/";

  return async function(dispatch) {

      return await trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            // Loop through response object
            json.forEach(function(item) {

                // Check that player score matches correct crawl date and reaches threshold of more than 5 positive + negative reviews
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


// 21. Clear player review scores
export function clearPlayerReviewScores() {

  return function(dispatch) {

    dispatch({type: CLEAR_PLAYER_REVIEW_SCORES, payload: []});

  }
}



// 22. Get player total reviews
export function getPlayerTotalReviews() {

  // Declare the query string
  const queryString = "/api/scores/";

  return async function(dispatch) {

      return await trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            // Loop through response
            json.forEach(function(item) {

                // Check that player score matches correct crawl date
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


// 23. Get player avg score
export function getPlayerAvgScore() {

  // Declare the query string
  const queryString = "/api/players/";

  return async function(dispatch) {

      return await trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            // Loop through response
            json.forEach(function(item) {

                if (item.scores.length) {

                  // Set Avg Score Object Manually - calculateAvg() && calculateSeasonScores()
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



// 24. Add position filter to insights page
export function addPositionFilter(position) {

  return function(dispatch) {

      dispatch({type: ADD_POSITION_FILTER, payload: position})
  }
}

// 25. Remove position filter from insights page
export function removePositionFilter(position) {

  return function(dispatch) {

      dispatch({type: REMOVE_POSITION_FILTER, payload: position})
  }
}


// 26. Add club filter to insights page
export function addClubFilter(club) {

  return function(dispatch) {

      dispatch({type: ADD_CLUB_FILTER, payload: club})
  }
}

// 27. Remove club filter from insights page
export function removeClubFilter(club) {

  return function(dispatch) {

      dispatch({type: REMOVE_CLUB_FILTER, payload: club})
  }
}

// 28. Add nationality filter to insights page
export function addNationalityFilter(nationality) {

  return function(dispatch) {

      dispatch({type: ADD_NATIONALITY_FILTER, payload: nationality})
  }
}

// 29. Remove nationality filter from insights page
export function removeNationalityFilter(nationality) {

  return function(dispatch) {

      dispatch({type: REMOVE_NATIONALITY_FILTER, payload: nationality})
  }
}


// 30. Clear all Insights filters
export function clearAllFilters() {

  return function(dispatch) {

      dispatch({type: CLEAR_ALL_FILTERS, payload: []})
  }
}

// 31. Apply filter to player review scores
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

// 32. Apply filter to player total scores
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



// 33. Apply filter to player avg scores
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
// OTHER ACTIONS 
// ==============================


// 34. Set list of blog posts 
export function getBlogPostList() {

  // Declare the query string
  const queryString = "/api/blogposts/";

  return function(dispatch) {

      return trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            dispatch({type: GET_BLOGPOST_LIST, payload: json})

        }))
        .catch(error => {

            // Dispatch error status
            dispatch({ type: SET_ERROR_STATUS, payload: true });

        });
    };

}


// 35. Clear sources list 
export function clearSourcesList() {

  return function(dispatch) {

      dispatch({type: CLEAR_SOURCES_LIST, payload: []})
  }
}


// 36. Get sources list
export function getSourcesList() {

  // Declare the query string
  const queryString = "/api/sentences/";

  return function(dispatch) {

      return trackPromise(fetch(queryString)
          .then(response => response.json())
          .then(json => {

            let sources_array = [];

            // Loop through response
            json.forEach(function(item) {
              
              // Push new source object to sources array & then dispatch all at once
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




// 37. Get array of crawl dates
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



// 38. Reset error boundary

export function resetErrorBoundary() {

  return function(dispatch) {

    dispatch({type: SET_ERROR_STATUS, payload: false});

  }
}

