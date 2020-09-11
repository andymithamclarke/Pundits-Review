// ======================================
// This file tests for the components listed in the LANDINGPAGE sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that LandingPage renders correctly
// 2. Check that LandingBackground renders correctly
// 3. Check that Search renders correctly
// 4. Check that SearchDropdown renders correctly

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
import { LandingPage } from '.././landingpage';
import { LandingBackground } from '.././components/landingbackground';
import { Search } from '.././components/search';
import { SearchDropdown } from '.././components/search_dropdown';

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

describe('Landing Page Component Tests', () => {
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
	// TEST 1. Check that LandingPage renders correctly
	// ===========

	describe('LandingPage', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><LandingPage/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 2. Check that LandingBackground renders correctly
	// ===========

	describe('LandingBackground', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><LandingBackground/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 3. Check that Search renders correctly
	// ===========

	describe('Search', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><Search/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 4. Check that SearchDropdown renders correctly
	// ===========

	describe('SearchDropdown', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><SearchDropdown/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


});
