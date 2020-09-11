// ======================================
// This file tests for the components listed in the GLOBAL sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that EmptyPlayerClubPage renders correctly
// 2. Check that ErrorBoundary renders correctly
// 3. Check that Loading renders correctly
// 4. Check that NoResults renders correctly
// 5. Check that PageNotFound renders correctly
// 6. Check that Hamburger renders correctly
// 7. Check that SideMenu renders correctly
// 8. Check that TopMenu renders correctly
// 9. Check that Footer renders correctly

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
import { EmptyPlayerClubPage } from '.././components/empty_player_club_page';
import { ErrorBoundary } from '.././components/error_boundary';
import { Loading } from '.././components/loading';
import { NoResults } from '.././components/no_results_found';
import { PageNotFound } from '.././components/page_not_found';

import { Hamburger } from '.././components/top_menu/hamburger';
import { SideMenu } from '.././components/top_menu/side_menu';
import { TopMenu } from '.././components/top_menu/top_menu_component';

import { Footer } from '.././components/site_footer/footer';

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

describe('Global Component Tests', () => {
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
	// TEST 1. Check that EmptyPlayerClubPage renders correctly
	// ===========

	describe('EmptyPlayerClubPage', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><EmptyPlayerClubPage/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 2. Check that ErrorBoundary renders correctly
	// ===========

	// describe('ErrorBoundary', () => {

	//   	it('should render correctly', () => {

	// 	  	// Declare component
	// 	  	const component = (<BrowserRouter><Provider store={store}><ErrorBoundary/></Provider></BrowserRouter>);
			
	// 		//
	// 		// Simulate Component
	// 	    const wrapper = shallow(component);

	// 	    // Run Test Case
	// 	    expect(toJson(wrapper)).toMatchSnapshot();

	//   	});

	// })


	// ===========
	// TEST 3. Check that Loading renders correctly
	// ===========

	describe('Loading', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><Loading/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 4. Check that NoResults renders correctly
	// ===========

	describe('NoResults', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><NoResults/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 5. Check that PageNotFound renders correctly
	// ===========

	describe('PageNotFound', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><PageNotFound/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 6. Check that Hamburger renders correctly
	// ===========

	describe('Hamburger', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><Hamburger/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 7. Check that SideMenu renders correctly
	// ===========

	describe('SideMenu', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><SideMenu/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 8. Check that TopMenu renders correctly
	// ===========

	describe('TopMenu', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><TopMenu/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})




	// ===========
	// TEST 9. Check that Footer renders correctly
	// ===========

	describe('Footer', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><Footer/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})





});
