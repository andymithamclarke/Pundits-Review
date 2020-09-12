// ======================================
// This file tests for the components listed in the blog sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that BlogHome renders correctly
// 2. Check that BlogHome has 2 p elements
// 3. Check that BlogList renders correctly
// 4. Check that BlogList renders no blog posts without API call
// 5. Check that BlogListItem renders correctly

// ===========
// IMPORTS 
// ===========


// General Imports
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import toJson from 'enzyme-to-json';

// Local JS Imports
import { BlogHome } from '.././blog';
import { BlogList } from '.././components/blog_list';
import { BlogListItem } from '.././components/blog_list_item';

import { getBlogPostList } from '../../actions/actions';
import store from '../../store/store';
import { WrapStore } from '../../global/functions/test_helpers';


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
//		- Jest produces "Warning: useLayoutEffect does nothing on the server" - warning which confuses test cases 
// 		- Wrapper test suppresses that warning for clear test reports
// ===========

describe('Blog Tests', () => {
  	const originalConsoleError = console.error;

  	beforeEach(() => {
    	console.error = jest.fn((msg) => {
	      	if (msg.includes('Warning: useLayoutEffect does nothing on the server')) {
	       		return null;
	      	} else {
	        	originalConsoleError(msg);
	      	}
    	});
  	});

  afterEach(() => {
    console.error = originalConsoleError;
  });




  	// ===========
	// TEST 1. Check that BlogHome renders correctly
	// ===========

	describe('BlogHome', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<Provider store={store}><BlogHome/></Provider>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})




	// ===========
	// TEST 2. Check that BlogHome has 2 p elements
	// ===========

	describe('BlogHome', () => {

	  	it('should render 2 p elements', () => {

		  	// Declare component
		  	const component = (<Provider store={store}><BlogHome/></Provider>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    const paragraphs = wrapper.find('p');
		    expect(paragraphs).toHaveLength(2);
		    expect(paragraphs).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 3. Check that BlogList renders correctly
	// ===========

	describe('BlogList', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<Provider store={store}><BlogList/></Provider>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 4. Check that BlogList renders no blog posts without API call
	// ===========

	describe('BlogList', () => {

	  	it('should render 0 Blog Posts without API Call', () => {

		  	// Declare component
		  	const component = (<Provider store={store}><BlogList/></Provider>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    const blog_list_items = wrapper.find(BlogListItem);
		    expect(blog_list_items).toHaveLength(0);

	  	});

	})


	// ===========
	// TEST 5. Check that BlogListItem renders correctly
	// ===========

	describe('BlogListItem', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BlogListItem/>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})

	


});
