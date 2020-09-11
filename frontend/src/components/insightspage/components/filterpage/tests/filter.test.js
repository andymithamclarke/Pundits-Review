// ======================================
// This file tests for the components listed in the INSIGHTSPAGE / FILTER sub-directory
// ======================================


// ===========
// TEST COVERAGE
// ===========

// 1. Check that ApplyFilterButton renders correctly
// 2. Check that BackClearWrapper renders correctly
// 3. Check that ClearAllButton renders correctly
// 4. Check that ClubFilter renders correctly
// 5. Check that ClubFilterElement renders correctly
// 6. Check that FilterBackButton renders correctly
// 7. Check that FilterPage renders correctly
// 8. Check that NationalityFilter renders correctly
// 9. Check that NationalityFilterElement renders correctly
// 10. Check that PlusMinus renders correctly
// 11. Check that PositionFilter renders correctly
// 12. Check that PositionFilterElement renders correctly

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
import { ApplyFilterButton } from '.././apply_filter';
import { BackClearWrapper } from '.././back_clear_wrapper';
import { ClearAllButton } from '.././clear_all_button';
import { ClubFilter } from '.././club_filter';
import { ClubFilterElement } from '.././club_filter_element';
import { FilterBackButton } from '.././filter_back_button';
import { FilterPage } from '.././filterpage';
import { NationalityFilter } from '.././nationality_filter';
import { NationalityFilterElement } from '.././nationality_filter_element';
import { PlusMinus } from '.././plusminus';
import { PositionFilter } from '.././position_filter';
import { PositionFilterElement } from '.././position_filter_element';


import store from '../../../../store/store';

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

describe('Filter Page Component Tests', () => {
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
	// TEST 1. Check that ApplyFilterButton renders correctly
	// ===========

	describe('ApplyFilterButton', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ApplyFilterButton/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 2. Check that BackClearWrapper renders correctly
	// ===========

	describe('BackClearWrapper', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><BackClearWrapper/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 3. Check that ClearAllButton renders correctly
	// ===========

	describe('ClearAllButton', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ClearAllButton/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 4. Check that ClubFilter renders correctly
	// ===========

	describe('ClubFilter', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ClubFilter/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 5. Check that ClubFilterElement renders correctly
	// ===========

	describe('ClubFilterElement', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><ClubFilterElement/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 6. Check that FilterBackButton renders correctly
	// ===========

	describe('FilterBackButton', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><FilterBackButton/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 7. Check that FilterPage renders correctly
	// ===========

	describe('FilterPage', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><FilterPage/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 8. Check that NationalityFilter renders correctly
	// ===========

	describe('NationalityFilter', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><NationalityFilter/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = shallow(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})



	// ===========
	// TEST 9. Check that NationalityFilterElement renders correctly
	// ===========

	describe('NationalityFilterElement', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><NationalityFilterElement/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 10. Check that PlusMinus renders correctly
	// ===========

	describe('PlusMinus', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><PlusMinus/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 11. Check that PositionFilter renders correctly
	// ===========

	describe('PositionFilter', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><PositionFilter/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


	// ===========
	// TEST 12. Check that PositionFilterElement renders correctly
	// ===========

	describe('PositionFilterElement', () => {

	  	it('should render correctly', () => {

		  	// Declare component
		  	const component = (<BrowserRouter><Provider store={store}><PositionFilterElement/></Provider></BrowserRouter>);
			
			//
			// Simulate Component
		    const wrapper = render(component);

		    // Run Test Case
		    expect(toJson(wrapper)).toMatchSnapshot();

	  	});

	})


});
