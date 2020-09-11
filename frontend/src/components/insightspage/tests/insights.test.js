// ======================================
// This file tests for the components listed in the INSIGHTS sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that InsightsPage renders correctly
// 2. Check that CardGridToggle renders correctly
// 3. Check that CardItem renders correctly
// 4. Check that InsightsCards renders correctly
// 5. Check that Filter renders correctly
// 6. Check that GridItem renders correctly
// 7. Check that GridTableHeader renders correctly
// 8. Check that InsightsGrid renders correctly
// 9. Check that InsightsResults renders correctly
// 10. Check that TopBottomToggle renders correctly
// 11. Check that CategoryDropdown renders correctly

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
import { InsightsPage } from '.././insightspage';
import { CardGridToggle } from '.././components/card_grid_toggle';
import { CardItem } from '.././components/card_item';
import { InsightsCards } from '.././components/card_view';
import { CategoryDropdown } from '.././components/category_dropdown';
import { Filter } from '.././components/filter';
import { GridItem } from '.././components/grid_item';
import { GridTableHeader } from '.././components/grid_table_header';
import { InsightsGrid } from '.././components/grid_view';
import { InsightsResults } from '.././components/insights_results';
import { TopBottomToggle } from '.././components/top_bottom_toggle';

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

describe('Insights Page Component Tests', () => {
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
	// TEST 1. Check that InsightsPage renders correctly
	// ===========

	describe('InsightsPage', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><InsightsPage/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 2. Check that CardGridToggle renders correctly
	// ===========

	describe('CardGridToggle', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><CardGridToggle/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 3. Check that CardItem renders correctly
	// ===========

	describe('CardItem', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><CardItem/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 4. Check that InsightsCards renders correctly
	// ===========

	describe('InsightsCards', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><InsightsCards/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 5. Check that Filter renders correctly
	// ===========

	describe('Filter', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><Filter/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 6. Check that GridItem renders correctly
	// ===========

	describe('GridItem', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><GridItem/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 7. Check that GridTableHeader renders correctly
	// ===========

	describe('GridTableHeader', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><GridTableHeader/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 8. Check that InsightsGrid renders correctly
	// ===========

	describe('InsightsGrid', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><InsightsGrid/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 9. Check that InsightsResults renders correctly
	// ===========

	describe('InsightsResults', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><InsightsResults/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 10. Check that TopBottomToggle renders correctly
	// ===========

	describe('TopBottomToggle', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><TopBottomToggle/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 11. Check that InsightsCards renders correctly
	// ===========

	describe('CategoryDropdown', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><CategoryDropdown/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


});
