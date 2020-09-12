// ======================================
// Functional Component to Await API call before Club Page is loaded
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { usePromiseTracker } from "react-promise-tracker";

// Local JS Imports 
import { ClubPage } from "./clubpage";
import { Loading } from './../global/components/loading';

// CSS Imports 
import './../playerpage/playerpage.css';


export const ClubPageLoader = props => {

	// Display loading screen whilst promise is being resolved
	const { promiseInProgress } = usePromiseTracker();

	let result;

	if (promiseInProgress === false) {

		result = (

				<ClubPage />

			);


	} else {

		result = (

				<div className="playerpage-loading-container">

					<Loading />

				</div>

			);
	}


	return result;

}