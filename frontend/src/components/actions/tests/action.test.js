// ======================================
// This file tests for REDUX ACTIONS listed in the ACTIONS sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that defineSearchTerm sends correct data to the store
// 2. Check that defineSearchTerm matches Snapshot
// 3. Check that clearSearchResults clears search results in store
// 4. Check that locallyUpdateAgreeDisagreeScore correctly updates agree disagree scores in store
// 5. Check that locallyUpdateAgreeDisagreeScoreClubs correctly updates agree disagree scores in store
// 6. Check that dispatchUpdatedPlayerAgreeDisagreeScore correctly updates agree disagree scores in store
// 7. Check that dispatchUpdatedClubAgreeDisagreeScore correctly updates agree disagree scores in store
// 8. Check that setThisWeekEveryoneToggleStatus updates this week everyone toggle status in store
// 9. Check that setGridCardView updates grid / card view status in store
// 10. Check that setFilterActive updates filter active status in store
// 11. Check that setTopBottomInsights updates top bottom insights status in store
// 12. Check that setInsightsCategory updates insights category status in store
// 13. Check that clearPlayerReviewScores clear players review score state in store
// 14. Check that addPositionFilter add position filter to store
// 15. Check that removePositionFilter removes position filter from store
// 16. Check that addClubFilter adds club filter to store
// 17. Check that removeClubFilter removes club filter from store
// 18. Check that addNationalityFilter adds club filter to store
// 19. Check that removeNationalityFilter removes club filter from store
// 20. Check that clearAllFilters removes all filters from store
// 21. Check that applyFilterPlayerReviewScores removes players not matching filter from review score array
// 22. Check that applyFilterPlayerTotalScores removes players not matching filter from total scores array
// 23. Check that applyFilterPlayerAvgScores removes players not matching filter from AVG scores array
// 24. Check that clearSourcesList clears sources list in store
// 25. Check that resetErrorBoundary resets the error status store

// ===========
// IMPORTS 
// ===========


// General Imports
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

// Local JS Imports
import { defineSearchTerm, searchByClub, clearSearchResults, locallyUpdateAgreeDisagreeScore, locallyUpdateAgreeDisagreeScoreClubs, dispatchUpdatedPlayerAgreeDisagreeScore, dispatchUpdatedClubAgreeDisagreeScore, setThisWeekEveryoneToggleStatus, setGridCardView, setFilterActive, setTopBottomInsights, setInsightsCategory, clearPlayerReviewScores, addPositionFilter, removePositionFilter, addClubFilter, removeClubFilter, addNationalityFilter, removeNationalityFilter, clearAllFilters, applyFilterPlayerReviewScores, applyFilterPlayerTotalScores, applyFilterPlayerAvgScores, clearSourcesList, resetErrorBoundary } from '.././actions';
import { DEFINE_SEARCH_TERM, CLUB_DATA_LOADED, CLEAR_SEARCH_RESULTS, AGREE_DISAGREE_LOCAL_UPDATE, AGREE_DISAGREE_LOCAL_UPDATE_CLUBS, SET_AGREE_DISAGREE_SCORES, SET_CLUB_AGREE_DISAGREE_SCORES, SET_THISWEEK_EVERYONE_TOGGLE, SET_GRID_CARD_VIEW, SET_FILTER_ACTIVE_STATE, SET_TOP_BOTTOM_INSIGHTS, SET_INSIGHTS_CATEGORY, CLEAR_PLAYER_REVIEW_SCORES, ADD_POSITION_FILTER, REMOVE_POSITION_FILTER, ADD_CLUB_FILTER, REMOVE_CLUB_FILTER, ADD_NATIONALITY_FILTER, REMOVE_NATIONALITY_FILTER, CLEAR_ALL_FILTERS, APPLY_REVIEW_SCORE_FILTER, APPLY_TOTAL_SCORES_FILTER, APPLY_AVG_SCORES_FILTER, CLEAR_SOURCES_LIST, SET_ERROR_STATUS  } from '../../constants/action_types';


// Configurations
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store = mockStore();


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

describe('Redux Action Tests', () => {
  	const originalConsoleError = console.error;

  	beforeEach(() => {

  		store.clearActions();

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
    fetchMock.restore();
  });


// End of referenced code

  	// ===========
	// TEST 1. Check that defineSearchTerm sends correct data to the store
	// ===========

	describe('defineSearchTerm', () => {

	  	it('should correctly define a search term in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: DEFINE_SEARCH_TERM,
		  		payload: 'Liverpool'
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(defineSearchTerm('Liverpool'));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 2. Check that defineSearchTerm matches Snapshot
	// ===========

	describe('defineSearchTerm', () => {

	  	it('should match snapshot', () => {

	  		// Define Store
	  		store = mockStore();

			// Simulate dispatch in Mock Store
		    store.dispatch(defineSearchTerm('Liverpool'));

		    // Run Test Case
		    expect(store.getActions()).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 3. Check that clearSearchResults clears search results in store
	// ===========

	describe('clearSearchResults', () => {

	  	it('should clear search results in redux store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: CLEAR_SEARCH_RESULTS,
		  		payload: []
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(clearSearchResults());

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


	// ===========
	// TEST 4. Check that locallyUpdateAgreeDisagreeScore correctly updates agree disagree scores in store
	// ===========

	describe('locallyUpdateAgreeDisagreeScore', () => {

	  	it('should update agree disagree scores in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: AGREE_DISAGREE_LOCAL_UPDATE,
		  		payload: {
		  			agree_score: 0,
					date: "2020-08-11",
					disagree_score: 1,
					id: 785,
					player: 13766,
					player_name: "Andreas Christensen",
				}
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(locallyUpdateAgreeDisagreeScore({
		  			agree_score: 0,
					date: "2020-08-11",
					disagree_score: 1,
					id: 785,
					player: 13766,
					player_name: "Andreas Christensen",
				}));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 5. Check that locallyUpdateAgreeDisagreeScoreClubs correctly updates agree disagree scores in store
	// ===========

	describe('locallyUpdateAgreeDisagreeScoreClubs', () => {

	  	it('should update agree disagree scores in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: AGREE_DISAGREE_LOCAL_UPDATE_CLUBS,
		  		payload: {
		  			agree_score: 0,
					date: "2020-08-11",
					disagree_score: 1,
					id: 785,
					club: 13766,
					club_name: "Andreas Christensen",
				}
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(locallyUpdateAgreeDisagreeScoreClubs({
		  			agree_score: 0,
					date: "2020-08-11",
					disagree_score: 1,
					id: 785,
					club: 13766,
					club_name: "Andreas Christensen",
				}));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 6. Check that dispatchUpdatedPlayerAgreeDisagreeScore correctly updates agree disagree scores in store
	// ===========

	describe('dispatchUpdatedPlayerAgreeDisagreeScore', () => {

	  	it('should update agree disagree scores in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: SET_AGREE_DISAGREE_SCORES,
		  		payload: {
		  			agree_score: 0,
					date: "2020-08-11",
					disagree_score: 1,
					id: 785,
					player: 13766,
					player_name: "Andreas Christensen",
				}
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(dispatchUpdatedPlayerAgreeDisagreeScore({
		  			agree_score: 0,
					date: "2020-08-11",
					disagree_score: 1,
					id: 785,
					player: 13766,
					player_name: "Andreas Christensen",
				}));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


	// ===========
	// TEST 7. Check that dispatchUpdatedClubAgreeDisagreeScore correctly updates agree disagree scores in store
	// ===========

	describe('dispatchUpdatedClubAgreeDisagreeScore', () => {

	  	it('should update agree disagree scores in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: SET_CLUB_AGREE_DISAGREE_SCORES,
		  		payload: {
		  			agree_score: 0,
					date: "2020-08-11",
					disagree_score: 1,
					id: 785,
					club: 13766,
					club_name: "Andreas Christensen",
				}
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(dispatchUpdatedClubAgreeDisagreeScore({
		  			agree_score: 0,
					date: "2020-08-11",
					disagree_score: 1,
					id: 785,
					club: 13766,
					club_name: "Andreas Christensen",
				}));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 8. Check that setThisWeekEveryoneToggleStatus updates this week everyone toggle status in store
	// ===========

	describe('setThisWeekEveryoneToggleStatus', () => {

	  	it('should update this week everyone toggle in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: SET_THISWEEK_EVERYONE_TOGGLE,
		  		payload: "THIS WEEK"
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(setThisWeekEveryoneToggleStatus("THIS WEEK"));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 9. Check that setGridCardView updates grid / card view status in store
	// ===========

	describe('setGridCardView', () => {

	  	it('should update grid / card view status in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: SET_GRID_CARD_VIEW,
		  		payload: "GRID"
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(setGridCardView("GRID"));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 10. Check that setFilterActive updates filter active status in store
	// ===========

	describe('setFilterActive', () => {

	  	it('should update filter active status in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: SET_FILTER_ACTIVE_STATE,
		  		payload: true
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(setFilterActive(true));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 11. Check that setTopBottomInsights updates top bottom insights status in store
	// ===========

	describe('setTopBottomInsights', () => {

	  	it('should update top bottom insights status in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: SET_TOP_BOTTOM_INSIGHTS,
		  		payload: true
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(setTopBottomInsights(true));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


	// ===========
	// TEST 12. Check that setInsightsCategory updates insights category status in store
	// ===========

	describe('setInsightsCategory', () => {

	  	it('should update insights category in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: SET_INSIGHTS_CATEGORY,
		  		payload: "REVIEW SCORE"
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(setInsightsCategory("REVIEW SCORE"));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 13. Check that clearPlayerReviewScores clear players review score state in store
	// ===========

	describe('clearPlayerReviewScores', () => {

	  	it('should clear players review score state in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: CLEAR_PLAYER_REVIEW_SCORES,
		  		payload: []
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(clearPlayerReviewScores());

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


	// ===========
	// TEST 14. Check that addPositionFilter add position filter to store
	// ===========

	describe('addPositionFilter', () => {

	  	it('should add a position filter to store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: ADD_POSITION_FILTER,
		  		payload: "GK"
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(addPositionFilter("GK"));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 15. Check that removePositionFilter removes position filter from store
	// ===========

	describe('removePositionFilter', () => {

	  	it('should remove a position filter from store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: REMOVE_POSITION_FILTER,
		  		payload: "GK"
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(removePositionFilter("GK"));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


	// ===========
	// TEST 16. Check that addClubFilter adds club filter to store
	// ===========

	describe('addClubFilter', () => {

	  	it('should add club filter to store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: ADD_CLUB_FILTER,
		  		payload: "Chelsea"
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(addClubFilter("Chelsea"));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


	// ===========
	// TEST 17. Check that removeClubFilter removes club filter from store
	// ===========

	describe('removeClubFilter', () => {

	  	it('should remove club filter from store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: REMOVE_CLUB_FILTER,
		  		payload: "Chelsea"
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(removeClubFilter("Chelsea"));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 18. Check that addNationalityFilter adds club filter to store
	// ===========

	describe('addNationalityFilter', () => {

	  	it('should add club filter to store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: ADD_NATIONALITY_FILTER,
		  		payload: "England"
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(addNationalityFilter("England"));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


	// ===========
	// TEST 19. Check that removeNationalityFilter removes club filter from store
	// ===========

	describe('removeNationalityFilter', () => {

	  	it('should remove club filter from store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: REMOVE_NATIONALITY_FILTER,
		  		payload: "England"
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(removeNationalityFilter("England"));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 20. Check that clearAllFilters removes all filters from store
	// ===========

	describe('clearAllFilters', () => {

	  	it('should remove club filter from store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: CLEAR_ALL_FILTERS,
		  		payload: []
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(clearAllFilters());

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


	// ===========
	// TEST 21. Check that applyFilterPlayerReviewScores removes players not matching filter from review score array
	// ===========

	describe('applyFilterPlayerReviewScores', () => {

	  	it('should remove players not matching filter from original array', () => {

	  		// Define store
	  		store = mockStore();


	  		// Define Filter settings
	  		let filterSettings = {

				position: [],
				club: ["Everton"],
				nationality: []

			}

		  	// Declare search term param
		  	const actionBody = [{
		  		type: APPLY_REVIEW_SCORE_FILTER,
		  		payload: []
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(applyFilterPlayerReviewScores([{
		    	club: "Chelsea",
				date: "2020-07-27",
				field_position: "MD",
				n_negative: 0,
				n_neutral: 79,
				n_positive: 30,
				nationality: "England",
				player: 180,
				player_name: "Mason Mount",
				sentiment_score: 1,
				total_reviews: 109}], filterSettings));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 22. Check that applyFilterPlayerTotalScores removes players not matching filter from total scores array
	// ===========

	describe('applyFilterPlayerTotalScores', () => {

	  	it('should remove players not matching filter from original array', () => {

	  		// Define store
	  		store = mockStore();


	  		// Define Filter settings
	  		let filterSettings = {

				position: [],
				club: ["Everton"],
				nationality: []

			}

		  	// Declare search term param
		  	const actionBody = [{
		  		type: APPLY_TOTAL_SCORES_FILTER,
		  		payload: []
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(applyFilterPlayerTotalScores([{
		    	club: "Chelsea",
				date: "2020-07-27",
				field_position: "MD",
				n_negative: 0,
				n_neutral: 79,
				n_positive: 30,
				nationality: "England",
				player: 180,
				player_name: "Mason Mount",
				sentiment_score: 1,
				total_reviews: 109}], filterSettings));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 23. Check that applyFilterPlayerAvgScores removes players not matching filter from AVG scores array
	// ===========

	describe('applyFilterPlayerAvgScores', () => {

	  	it('should remove players not matching filter from original array', () => {

	  		// Define store
	  		store = mockStore();


	  		// Define Filter settings
	  		let filterSettings = {

				position: [],
				club: ["Everton"],
				nationality: []

			}

		  	// Declare search term param
		  	const actionBody = [{
		  		type: APPLY_AVG_SCORES_FILTER,
		  		payload: []
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(applyFilterPlayerAvgScores([{
		    	club: "Chelsea",
				date: "2020-07-27",
				field_position: "MD",
				n_negative: 0,
				n_neutral: 79,
				n_positive: 30,
				nationality: "England",
				player: 180,
				player_name: "Mason Mount",
				sentiment_score: 1,
				total_reviews: 109}], filterSettings));

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})



	// ===========
	// TEST 24. Check that clearSourcesList clears sources list in store
	// ===========

	describe('clearSourcesList', () => {

	  	it('should clear sources list in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: CLEAR_SOURCES_LIST,
		  		payload: []
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(clearSourcesList());

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


	// ===========
	// TEST 25. Check that resetErrorBoundary resets the error status in store
	// ===========

	describe('resetErrorBoundary', () => {

	  	it('should reset error status in store', () => {

	  		// Define store
	  		store = mockStore();

		  	// Declare search term param
		  	const actionBody = [{
		  		type: SET_ERROR_STATUS,
		  		payload: false
		  	}] 
			
			//
			// Simulate dispatch in Mock Store
		    store.dispatch(resetErrorBoundary());

		    // Run Test Case
		    expect(store.getActions()).toEqual(actionBody);

	  	});

	})


});
