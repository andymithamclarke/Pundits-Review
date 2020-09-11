// ======================================
// This file tests for the components listed in the CLUBPAGE sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that ClubPage renders correctly
// 2. Check that ClubAgreeDisagree renders correctly
// 3. Check that ClubInfoContainer renders correctly
// 4. Check that ClubPlayerList renders correctly
// 5. Check that ClubPlayerListPlayerItem renders correctly

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
import { ClubPage } from '.././clubpage';
import { ClubAgreeDisagree } from '.././components/club_agree_disagree';
import { ClubInfoContainer } from '.././components/club_info_container';
import { ClubPlayerList } from '.././components/club_player_list';
import { ClubPlayerListPlayerItem } from '.././components/club_player_list_player_item';

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

describe('ClubPage Tests', () => {
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
	// TEST 1. Check that ClubPage renders correctly
	// ===========

	describe('ClubPage', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ClubPage/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 2. Check that ClubAgreeDisagree renders correctly
	// ===========

	describe('ClubAgreeDisagree', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ClubAgreeDisagree/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 3. Check that ClubInfoContainer renders correctly
	// ===========

	describe('ClubInfoContainer', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ClubInfoContainer/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 4. Check that ClubPlayerList renders correctly
	// ===========

	describe('ClubPlayerList', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ClubPlayerList/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 5. Check that ClubPlayerListPlayerItem renders correctly
	// ===========

	describe('ClubPlayerListPlayerItem', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ClubPlayerListPlayerItem/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



});
