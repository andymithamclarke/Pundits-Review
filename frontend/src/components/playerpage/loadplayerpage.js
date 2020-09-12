// ======================================
// Functional Component to Await API call before Player Page is loaded
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
import { PlayerPage } from "./playerpage";
import { Loading } from './../global/components/loading';

// CSS Imports 
import './playerpage.css';


export const PlayerPageLoader = props => {

	// Display loading component until promise has resolved
	const { promiseInProgress } = usePromiseTracker();

	let result;

	if (promiseInProgress === false) {

		result = (

				<PlayerPage />

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