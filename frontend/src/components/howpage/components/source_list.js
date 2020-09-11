// ======================================
// Source List Component - displays the list of sources used in Pundits Review
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
import { Loading } from '../../global/components/loading';
import { DividingLine } from '../../global/components/dividing_line';

// CSS Imports 
import './source_list.css';


// ===========
// Source List Component 
// ===========


export const  SourceListWrapper = props => {

	const { promiseInProgress } = usePromiseTracker();

	let result;

	if (props.sourcesList.length) {

		if (promiseInProgress === false) {

			result = (

					<div className="source-list-wrapper">

						{props.sourcesList.map((source, index) => {

							return (

								<div key={index} className="source-item-wrapper">
									<a href={source.url} target="_blank" className="how-page-source-item body-text-light react-link">{source.media_source.toUpperCase()}</a>
									<DividingLine />
								</div>

								);

						})}

					</div>

				);

		} else {

			result = (

					<div className="playerpage-loading-container">

						<Loading />

					</div>

				);
		}

	} else {
	
		result = (
			
			<span></span>
	
		);


	}


	return result;
 

};


// ===============
// Connect redux state container to search component
// ===============

const mapStateToProps = state => {
  return { 
	  	sourcesList: state.sourcesList
  	}
};


// Export connected component
export const SourceList = connect(mapStateToProps)(SourceListWrapper);