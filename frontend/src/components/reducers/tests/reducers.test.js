// ======================================
// This file tests for REDUX REDUCERS listed in the REDUCERS sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that reducer defines a new search term
// 2. Check that reducer updates This Week Everyone Toggle
// 3. Check that reducer stores player data correctly
// 4. Check that reducer stores club data correctly
// 5. Check that reducer stores player data  - EVERYONE - correctly
// 6. Check that reducer stores player data  - EVERYONE - correctly
// 7. Check that reducer correctly sets current player
// 8. Check that reducer correctly sets current club
// 9. Check that reducer correctly sets current agree disagree scores - players
// 10. Check that reducer correctly sets current agree disagree scores - clubs
// 11. Check that reducer correctly sets local update agree disagree scores - players
// 12. Check that reducer correctly sets local update agree disagree scores - clubs
// 13. Check that reducer correctly sets grid card view status
// 14. Check that reducer correctly sets filterActive state
// 15. Check that reducer correctly sets topBottomInsights state
// 16. Check that reducer correctly stores player review scores
// 17. Check that reducer correctly stores player total review array
// 18. Check that reducer correctly stores player avg score array
// 19. Check that reducer correctly clears player review score arrays 
// 20. Check that reducer correctly sets Insights Category
// 21. Check that reducer correctly adds a position filter
// 22. Check that reducer correctly removes a position filter
// 23. Check that reducer correctly adds a club filter
// 24. Check that reducer correctly removes a club filter
// 25. Check that reducer correctly adds a nationality filter
// 26. Check that reducer correctly removes a nationality filter
// 27. Check that reducer correctly clears all filters
// 28. Check that reducer correctly applies review score filter
// 29. Check that reducer correctly applies review score filter
// 30. Check that reducer correctly applies avg score filter
// 31. Check that reducer correctly stores blog post list
// 32. Check that reducer correctly stores sources list
// 33. Check that reducer correctly clears sources list
// 34. Check that reducer correctly stores list of crawl dates
// 35. Check that reducer correctly sets error status 


// ===========
// IMPORTS 
// ===========

// Local JS Imports
import { rootReducer, initialState } from './../reducers';
import { DEFINE_SEARCH_TERM, SET_THISWEEK_EVERYONE_TOGGLE, PLAYER_DATA_LOADED, CLUB_DATA_LOADED, PLAYER_DATA_LOADED_EVERYONE, CLEAR_SEARCH_RESULTS, SET_PLAYER, SET_CLUB, SET_AGREE_DISAGREE_SCORES, SET_CLUB_AGREE_DISAGREE_SCORES, AGREE_DISAGREE_LOCAL_UPDATE, AGREE_DISAGREE_LOCAL_UPDATE_CLUBS, SET_GRID_CARD_VIEW, SET_FILTER_ACTIVE_STATE, SET_TOP_BOTTOM_INSIGHTS, GET_PLAYER_REVIEW_SCORES, GET_PLAYER_TOTAL_REVIEWS, GET_PLAYER_AVG_SCORE, CLEAR_PLAYER_REVIEW_SCORES, SET_INSIGHTS_CATEGORY, ADD_POSITION_FILTER, REMOVE_POSITION_FILTER, ADD_CLUB_FILTER, REMOVE_CLUB_FILTER, ADD_NATIONALITY_FILTER, REMOVE_NATIONALITY_FILTER, CLEAR_ALL_FILTERS, APPLY_REVIEW_SCORE_FILTER, APPLY_TOTAL_SCORES_FILTER, APPLY_AVG_SCORES_FILTER, GET_BLOGPOST_LIST, GET_SOURCES_LIST, CLEAR_SOURCES_LIST, GET_ARRAY_CRAWL_DATES, SET_ERROR_STATUS } from '../../constants/action_types';

// ===========
// Suppression of SSL Warning 
//
// Code adapted from comment from sketchbuch on GitHub issues post 'Warning: useLayoutEffect does nothing on the server #1373' on 12 Oct 2019
// https://github.com/reduxjs/react-redux/issues/1373
// Accessed 09 Sep 2020
//
// __Note__:
//	
//		- Jest produces "Warning: useLayoutEffect does nothing on the server" & 'Warning: React.createElement: type is invalid -- expected a string (for built-in components)' - warning which confuses test cases 
// 		- Wrapper test suppresses that warning for clear test reports
// ===========

describe('Reducer Tests', () => {
  	const originalConsoleError = console.error;

  	beforeEach(() => {

    	console.error = jest.fn((msg) => {
	      	if (msg.includes('Warning: useLayoutEffect does nothing on the server') || msg.includes('Warning: React.createElement: type is invalid -- expected a string (for built-in components)')) {
	       		return null;
	      	} else {
	        	originalConsoleError(msg);
	      	}
    	});
  	});

  afterEach(() => {
    console.error = originalConsoleError;
  });


// End of referenced code

  	// ===========
	// TEST 1. Check that reducer defines a new search term
	// ===========

	describe('Search Term', () => {

	  	it('should correctly add a new search term to the state', () => {


	  		let state = {searchTerms: ["Chelsea"]}

	  		expect(rootReducer({searchTerms: []}, {

	  			type: DEFINE_SEARCH_TERM,
	  			payload: "Chelsea"

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 2. Check that reducer updates This Week Everyone Toggle
	// ===========

	describe('This Week Everyone Toggle', () => {

	  	it('should correctly updates this week everyone toggle', () => {


	  		let state = {thisWeekEveryoneToggle: "THIS WEEK"}

	  		expect(rootReducer({thisWeekEveryoneToggle: ""}, {

	  			type: SET_THISWEEK_EVERYONE_TOGGLE,
	  			payload: "THIS WEEK"

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 3. Check that reducer stores player data correctly
	// ===========

	describe('Player Data', () => {

	  	it('should store player data correctly', () => {


	  		let state = {searchDataPlayers: []}

	  		expect(rootReducer({searchDataPlayers: []}, {

	  			type: PLAYER_DATA_LOADED,
	  			payload: [{player: "Andy", scores: [{date: "2020-08-08"}]}]

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 4. Check that reducer stores club data correctly
	// ===========

	describe('Club Data', () => {

	  	it('should store club data correctly', () => {


	  		let state = {searchDataClubs: [{club: "Andy", scores: [{date: "2020-08-08"}]}]}

	  		expect(rootReducer({searchDataClubs: []}, {

	  			type: CLUB_DATA_LOADED,
	  			payload: [{club: "Andy", scores: [{date: "2020-08-08"}]}]

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 5. Check that reducer stores player data  - EVERYONE - correctly
	// ===========

	describe('Player Data Everyone', () => {

	  	it('should store player data correctly', () => {


	  		let state = {searchDataPlayers: [{player: "Andy", scores: [{date: "2020-08-08"}]}]}

	  		expect(rootReducer({searchDataPlayers: []}, {

	  			type: PLAYER_DATA_LOADED_EVERYONE,
	  			payload: [{player: "Andy", scores: [{date: "2020-08-08"}]}]

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 6. Check that reducer stores player data  - EVERYONE - correctly
	// ===========

	describe('Clear Search Data', () => {

	  	it('should clear store of search data', () => {


	  		let state = {searchDataPlayers: [], searchDataClubs: []}

	  		expect(rootReducer({searchDataPlayers: [{player: "Andy", scores: [{date: "2020-08-08"}]}], searchDataClubs: [{club: "Andy", scores: [{date: "2020-08-08"}]}]}, {

	  			type: CLEAR_SEARCH_RESULTS,
	  			payload: []

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 7. Check that reducer correctly sets current player
	// ===========

	describe('Set Currrent Player', () => {

	  	it('should correctly set current player', () => {


	  		let state = {playersViewed: ["andy"]}

	  		expect(rootReducer({playersViewed: []}, {

	  			type: SET_PLAYER,
	  			payload: "andy"

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 8. Check that reducer correctly sets current club
	// ===========

	describe('Set Current Club', () => {

	  	it('should correctly set current club', () => {


	  		let state = {clubsViewed: ["andy"]}

	  		expect(rootReducer({clubsViewed: []}, {

	  			type: SET_CLUB,
	  			payload: "andy"

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 9. Check that reducer correctly sets current agree disagree scores - players
	// ===========

	describe('Set Agree Disagree Score', () => {

	  	it('should correctly set agree disagree score', () => {


	  		let state = {agreeDisagreeScores: [{agree: 1, disagree: 1}]}

	  		expect(rootReducer({agreeDisagreeScores: []}, {

	  			type: SET_AGREE_DISAGREE_SCORES,
	  			payload: {agree: 1, disagree: 1}

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 10. Check that reducer correctly sets current agree disagree scores - clubs
	// ===========

	describe('Set Agree Disagree Score - Clubs', () => {

	  	it('should correctly set agree disagree score - clubs', () => {


	  		let state = {clubAgreeDisagreeScores: [{agree: 1, disagree: 1}]}

	  		expect(rootReducer({clubAgreeDisagreeScores: []}, {

	  			type: SET_CLUB_AGREE_DISAGREE_SCORES,
	  			payload: {agree: 1, disagree: 1}

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 11. Check that reducer correctly sets local update agree disagree scores - players
	// ===========

	describe('Set Local Agree Disagree Score - Players', () => {

	  	it('should correctly set local agree disagree score - players', () => {


	  		let state = {agreeDisagreeScores: [{agree: 1, disagree: 1}]}

	  		expect(rootReducer({agreeDisagreeScores: []}, {

	  			type: AGREE_DISAGREE_LOCAL_UPDATE,
	  			payload: {agree: 1, disagree: 1}

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 12. Check that reducer correctly sets local update agree disagree scores - clubs
	// ===========

	describe('Set Local Agree Disagree Score - clubs', () => {

	  	it('should correctly set local agree disagree score - clubs', () => {


	  		let state = {clubAgreeDisagreeScores: [{agree: 1, disagree: 1}]}

	  		expect(rootReducer({clubAgreeDisagreeScores: []}, {

	  			type: AGREE_DISAGREE_LOCAL_UPDATE_CLUBS,
	  			payload: {agree: 1, disagree: 1}

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 13. Check that reducer correctly sets grid card view status
	// ===========

	describe('Set Grid Card View Status', () => {

	  	it('should correctly sets grid card view status', () => {


	  		let state = {gridCardView: "GRID"}

	  		expect(rootReducer({gridCardView: ""}, {

	  			type: SET_GRID_CARD_VIEW,
	  			payload: "GRID"

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 14. Check that reducer correctly sets filterActive state
	// ===========

	describe('Set Filter Active Status', () => {

	  	it('should correctly sets filter active status', () => {


	  		let state = {filterActive: true}

	  		expect(rootReducer({filterActive: false}, {

	  			type: SET_FILTER_ACTIVE_STATE,
	  			payload: true

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 15. Check that reducer correctly sets topBottomInsights state
	// ===========

	describe('Set Top Bottom Insights Status', () => {

	  	it('should correctly set top bottom insights status', () => {


	  		let state = {topBottomInsights: "TOP"}

	  		expect(rootReducer({topBottomInsights: "BOTTOM"}, {

	  			type: SET_TOP_BOTTOM_INSIGHTS,
	  			payload: "TOP"

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 16. Check that reducer correctly stores player review scores
	// ===========

	describe('Set player review scores arrays', () => {

	  	it('should correctly set player review score arrays', () => {


	  		let state = {playerReviewScores: [1, 2, 3], originalPlayerReviewScores: [1, 2, 3]}

	  		expect(rootReducer({playerReviewScores: [1], originalPlayerReviewScores: [1]}, {

	  			type: GET_PLAYER_REVIEW_SCORES,
	  			payload: [2, 3]

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 17. Check that reducer correctly stores player total review array
	// ===========

	describe('Set player total scores arrays', () => {

	  	it('should correctly set player total score arrays', () => {


	  		let state = {playerTotalReviews: [1, 2, 3], originalPlayerTotalReviews: [1, 2, 3]}

	  		expect(rootReducer({playerTotalReviews: [1], originalPlayerTotalReviews: [1]}, {

	  			type: GET_PLAYER_TOTAL_REVIEWS,
	  			payload: [2, 3]

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 18. Check that reducer correctly stores player avg score array
	// ===========

	describe('Set player avg scores arrays', () => {

	  	it('should correctly set player avg score arrays', () => {


	  		let state = {playerAvgScores: [1, 2, 3], originalPlayerAvgScores: [1, 2, 3]}

	  		expect(rootReducer({playerAvgScores: [1], originalPlayerAvgScores: [1]}, {

	  			type: GET_PLAYER_AVG_SCORE,
	  			payload: [2, 3]

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 19. Check that reducer correctly clears player review score arrays 
	// ===========

	describe('Clear Player review score arrays ', () => {

	  	it('should correctly clear player review score arrays ', () => {


	  		let state = {playerTotalReviews: [], originalPlayerTotalReviews: [], playerAvgScores: [], originalPlayerAvgScores: [], playerReviewScores: [], originalPlayerReviewScores: []}

	  		expect(rootReducer({playerTotalReviews: [1, 2, 3], originalPlayerTotalReviews: [1, 2, 3], playerAvgScores: [1, 2, 3], originalPlayerAvgScores: [1, 2, 3], playerReviewScores: [1, 2, 3], originalPlayerReviewScores: [1, 2, 3]}, {

	  			type: CLEAR_PLAYER_REVIEW_SCORES,
	  			payload: []

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 20. Check that reducer correctly sets Insights Category
	// ===========

	describe('Set Insights Category', () => {

	  	it('should correctly set insights category', () => {


	  		let state = {insightsSettingsKey: "REVIEW SCORES"}

	  		expect(rootReducer({insightsSettingsKey: "MENTIONS"}, {

	  			type: SET_INSIGHTS_CATEGORY,
	  			payload: "REVIEW SCORES"

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 21. Check that reducer correctly adds a position filter
	// ===========

	describe('Adds position filter', () => {

	  	it('should correctly add position filter', () => {


	  		let state = {positionFilters: ["MD"]}

	  		expect(rootReducer({positionFilters: []}, {

	  			type: ADD_POSITION_FILTER,
	  			payload: "MD"

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 22. Check that reducer correctly removes a position filter
	// ===========

	describe('Remove position filter', () => {

	  	it('should correctly remove position filter', () => {


	  		let state = {positionFilters: []}

	  		expect(rootReducer({positionFilters: ["MD"]}, {

	  			type: REMOVE_POSITION_FILTER,
	  			payload: "MD"

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 23. Check that reducer correctly adds a club filter
	// ===========

	describe('Adds club filter', () => {

	  	it('should correctly add club filter', () => {


	  		let state = {clubFilters: ["Chelsea"]}

	  		expect(rootReducer({clubFilters: []}, {

	  			type: ADD_CLUB_FILTER,
	  			payload: "Chelsea"

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 24. Check that reducer correctly removes a club filter
	// ===========

	describe('Remove club filter', () => {

	  	it('should correctly remove club filter', () => {


	  		let state = {clubFilters: []}

	  		expect(rootReducer({clubFilters: ["Chelsea"]}, {

	  			type: REMOVE_CLUB_FILTER,
	  			payload: "Chelsea"

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 25. Check that reducer correctly adds a nationality filter
	// ===========

	describe('Adds nationality filter', () => {

	  	it('should correctly add nationality filter', () => {


	  		let state = {nationalityFilters: ["England"]}

	  		expect(rootReducer({nationalityFilters: []}, {

	  			type: ADD_NATIONALITY_FILTER,
	  			payload: "England"

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 26. Check that reducer correctly removes a nationality filter
	// ===========

	describe('Remove nationality filter', () => {

	  	it('should correctly remove nationality filter', () => {


	  		let state = {nationalityFilters: []}

	  		expect(rootReducer({nationalityFilters: ["England"]}, {

	  			type: REMOVE_NATIONALITY_FILTER,
	  			payload: "England"

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 27. Check that reducer correctly clears all filters
	// ===========

	describe('Clear All Filters', () => {

	  	it('should correctly clear all filters', () => {


	  		let state = {nationalityFilters: [], clubFilters: [], positionFilters: []}

	  		expect(rootReducer({nationalityFilters: ["England"], clubFilters: ["Chelsea"], positionFilters: ["MD"]}, {

	  			type: CLEAR_ALL_FILTERS,
	  			payload: []

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 28. Check that reducer correctly applies review score filter
	// ===========

	describe('Applies Review Score Filter', () => {

	  	it('should correctly apply filters to review score array', () => {


	  		let state = {playerReviewScores: [1, 2, 3]}

	  		expect(rootReducer({playerReviewScores: [1, 2, 3, 4, 5]}, {

	  			type: APPLY_REVIEW_SCORE_FILTER,
	  			payload: [1, 2, 3]

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 29. Check that reducer correctly applies review score filter
	// ===========

	describe('Applies Total Score Filter', () => {

	  	it('should correctly apply filters to total score array', () => {


	  		let state = {playerTotalReviews: [1, 2, 3]}

	  		expect(rootReducer({playerTotalReviews: [1, 2, 3, 4, 5]}, {

	  			type: APPLY_TOTAL_SCORES_FILTER,
	  			payload: [1, 2, 3]

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 30. Check that reducer correctly applies avg score filter
	// ===========

	describe('Applies AVG Score Filter', () => {

	  	it('should correctly apply filters to avg score array', () => {


	  		let state = {playerAvgScores: [1, 2, 3]}

	  		expect(rootReducer({playerAvgScores: [1, 2, 3, 4, 5]}, {

	  			type: APPLY_AVG_SCORES_FILTER,
	  			payload: [1, 2, 3]

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 31. Check that reducer correctly stores blog post list
	// ===========

	describe('Stores blog post list', () => {

	  	it('should correctly store a list of blog posts', () => {


	  		let state = {blogPostList: ["A Blog Post", "Another Blog Post"]}

	  		expect(rootReducer({blogPostList: []}, {

	  			type: GET_BLOGPOST_LIST,
	  			payload: ["A Blog Post", "Another Blog Post"]

	  		})).toEqual(state)

	  	});

	})



	// ===========
	// TEST 32. Check that reducer correctly stores sources list
	// ===========

	describe('Stores sources list', () => {

	  	it('should correctly store a list of source items', () => {


	  		let state = {sourcesList: ["A Source Item", "Another Source Item"]}

	  		expect(rootReducer({sourcesList: []}, {

	  			type: GET_SOURCES_LIST,
	  			payload: ["A Source Item", "Another Source Item"]

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 33. Check that reducer correctly clears sources list
	// ===========

	describe('Stores sources list', () => {

	  	it('should correctly clear a list of source items', () => {


	  		let state = {sourcesList: []}

	  		expect(rootReducer({sourcesList: ["A Source Item", "Another Source Item"]}, {

	  			type: GET_SOURCES_LIST,
	  			payload: []

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 34. Check that reducer correctly stores list of crawl dates
	// ===========

	describe('Stores crawl date list', () => {

	  	it('should correctly stores crawl dates list', () => {


	  		let state = {crawlDates: ["2020-02-01"]}

	  		expect(rootReducer({crawlDates: []}, {

	  			type: GET_ARRAY_CRAWL_DATES,
	  			payload: ["2020-02-01"]

	  		})).toEqual(state)

	  	});

	})


	// ===========
	// TEST 35. Check that reducer correctly sets error status 
	// ===========

	describe('Sets Error Status', () => {

	  	it('should correctly set error status', () => {


	  		let state = {errorExists: false}

	  		expect(rootReducer({errorExists: true}, {

	  			type: SET_ERROR_STATUS,
	  			payload: false

	  		})).toEqual(state)

	  	});

	})


});
