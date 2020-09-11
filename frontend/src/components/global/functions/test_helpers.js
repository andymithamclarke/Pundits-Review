// ======================================
// Helper Functions for test cases
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports
import React from 'react';
import { Provider } from "react-redux";


// Local JS Imports 
import store from '../../store/store';


// ===========
// Helper to wrap testable component in redux store
// ===========

export const WrapStore = props => {

	return (

		<Provider store={store}>
  			{props.children}
  		</Provider>

		);
}