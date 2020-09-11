// ======================================
// This file tests for the components listed in the blogpost sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that BlogPost renders correctly
// 2. Check that BlogDate renders correctly
// 3. Check that BlogHeaderImage renders correctly
// 4. Check that BlogParagraph renders correctly
// 5. Check that BlogPlayerCard renders correctly
// 6. Check that BlogPostContent renders correctly
// 7. Check that BlogPostHeadline renders correctly
// 8. Check that BlogPullQuote renders correctly
// 9. Check that BlogSnippets renders correctly

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
import { BlogPost } from '.././blogpost';
import { BlogDate } from '.././components/blogdate';
import { BlogHeaderImage } from '.././components/blogheaderimage';
import { BlogParagraph } from '.././components/blogparagraph';
import { BlogPlayerCard } from '.././components/blogplayercard';
import { BlogPostContent } from '.././components/blogpostcontent';
import { BlogPostHeadline } from '.././components/blogpostheadline';
import { BlogPullQuote } from '.././components/blogpullquote';
import { BlogSnippets } from '.././components/blogsnippets';

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

describe('Blog Post Tests', () => {
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
	// TEST 1. Check that BlogPost renders correctly
	// ===========

	describe('BlogPost', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><BlogPost/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 2. Check that BlogDate renders correctly
	// ===========

	describe('BlogDate', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><BlogDate/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 3. Check that BlogHeaderImage renders correctly
	// ===========

	describe('BlogHeaderImage', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><BlogHeaderImage/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 4. Check that BlogParagraph renders correctly
	// ===========

	describe('BlogParagraph', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><BlogParagraph/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 5. Check that BlogPlayerCard renders correctly
	// ===========

	describe('BlogPlayerCard', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><BlogPlayerCard/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 6. Check that BlogPostContent renders correctly
	// ===========

	describe('BlogPostContent', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><BlogPostContent/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 7. Check that BlogPostHeadline renders correctly
	// ===========

	describe('BlogPostHeadline', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<Provider store={store}><BlogPostHeadline/></Provider>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 8. Check that BlogPullQuote renders correctly
	// ===========

	describe('BlogPullQuote', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><BlogPullQuote/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 9. Check that BlogSnippets renders correctly
	// ===========

	describe('BlogSnippets', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><BlogSnippets/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


});
