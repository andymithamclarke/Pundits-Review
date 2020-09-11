// ======================================
// This file tests for the components listed in the GLOBAL sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that HowPage renders correctly
// 2. Check that HowPageBodyText renders correctly
// 3. Check that HowPageSubHeading renders correctly
// 4. Check that OurSourcesWrapper renders correctly
// 5. Check that ReviewScoreQuestion renders correctly
// 6. Check that SourceList renders correctly

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
import { HowPage } from '.././howpage';
import { HowPageBodyText } from '.././components/howpage_body_text';
import { HowPageSubHeading } from '.././components/howpage_subheading';
import { OurSourcesWrapper } from '.././components/our_sources_wrapper';
import { ReviewScoreQuestion } from '.././components/review_score_question';
import { SourceList } from '.././components/source_list';


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

describe('HowPage Component Tests', () => {
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
	// TEST 1. Check that HowPage renders correctly
	// ===========

	describe('HowPage', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><HowPage/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 2. Check that HowPageBodyText renders correctly
	// ===========

	describe('HowPageBodyText', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><HowPageBodyText/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 3. Check that HowPageSubHeading renders correctly
	// ===========

	describe('HowPageSubHeading', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><HowPageSubHeading/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 4. Check that OurSourcesWrapper renders correctly
	// ===========

	describe('OurSourcesWrapper', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><OurSourcesWrapper/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 5. Check that ReviewScoreQuestion renders correctly
	// ===========

	describe('ReviewScoreQuestion', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ReviewScoreQuestion/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 6. Check that SourceList renders correctly
	// ===========

	describe('SourceList', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><SourceList/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


});
