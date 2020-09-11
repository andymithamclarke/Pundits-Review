// ======================================
// This file tests for the components listed in the PLAYERPAGE sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that PlayerPage renders correctly
// 2. Check that AgreeDisagree renders correctly
// 3. Check that AgreeDisagreeScore renders correctly
// 4. Check that PlayerInfoContainer renders correctly
// 5. Check that ReviewScoreContainer renders correctly
// 6. Check that SeasonPerformanceContainer renders correctly
// 7. Check that SnippetItem renders correctly
// 8. Check that SnippetsContainer renders correctly
// 9. Check that SeasonPerformanceGraphWrapper renders correctly

// ===========
// IMPORTS 
// ===========


// General Imports
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';

// Local JS Imports
import { PlayerPage } from '.././playerpage';
import { AgreeDisagree } from '.././components/agree_disagree';
import { AgreeDisagreeScore } from '.././components/agree_disagree_score';
import { PlayerInfoContainer } from '.././components/player_info_container';
import { ReviewScoreContainer } from '.././components/review_score_container';
import { SeasonPerformanceContainer } from '.././components/season_performance_container';
import { SnippetItem } from '.././components/snippet_item';
import { SnippetsContainer } from '.././components/snippets_container';
import { SeasonPerformanceGraphWrapper } from '.././components/season_performance/svg_container';

import store from '../../store/store';

// Configurations
Enzyme.configure({ adapter: new Adapter() })

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

describe('Player Page Component Tests', () => {
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
	// TEST 1. Check that PlayerPage renders correctly
	// ===========

	describe('PlayerPage', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><PlayerPage/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 2. Check that AgreeDisagree renders correctly
	// ===========

	describe('AgreeDisagree', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><AgreeDisagree/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 3. Check that AgreeDisagreeScore renders correctly
	// ===========

	describe('AgreeDisagreeScore', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><AgreeDisagreeScore/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 4. Check that PlayerInfoContainer renders correctly
	// ===========

	describe('PlayerInfoContainer', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><PlayerInfoContainer/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 5. Check that ReviewScoreContainer renders correctly
	// ===========

	describe('ReviewScoreContainer', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ReviewScoreContainer/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 6. Check that SeasonPerformanceContainer renders correctly
	// ===========

	describe('SeasonPerformanceContainer', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><SeasonPerformanceContainer/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 7. Check that SnippetItem renders correctly
	// ===========

	describe('SnippetItem', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><SnippetItem/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 8. Check that SnippetsContainer renders correctly
	// ===========

	describe('SnippetsContainer', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><SnippetsContainer/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 9. Check that SeasonPerformanceGraphWrapper renders correctly
	// ===========

	describe('SeasonPerformanceGraphWrapper', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><SeasonPerformanceGraphWrapper/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


});
