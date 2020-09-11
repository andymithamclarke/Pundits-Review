// ======================================
// Our Sources Wrapper Component - contains elements displaying the sources used in pundits review system
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { OurSourcesBackground } from './our_sources_background_image';
import { getSourcesList, clearSourcesList } from '../../actions/actions';
import { SourceList } from './source_list';

// CSS Imports 
import './our_sources.css';

// ===========
// Our Sources Wrapper Component 
// ===========

export class OurSources extends Component {

	componentDidMount = () => {

		this.props.getSourcesList();

	}

	_handleClick = () => {

		document.querySelector('.source-list-wrapper').style.display = "flex";
	}


	render() {

		let result = (

				<div className="our-sources-wrapper">


					<p className="body-text-light our-sources-title">OUR SOURCES</p>

					<p className="body-text-light our-sources-subtitle">Our information is collected from digital football media publishers. We avoid fansites, blogs and official club pages where possible but are always open to new suggestions.</p>

					<button className="view-sources-button body-text-light" onClick={this._handleClick}>
						VIEW OUR SOURCES
					</button>

					<SourceList />

				</div>

			);

		return result;
	}
}


// ===============
// Connect redux state container to search component
// ===============

const mapStateToProps = state => {
  return { 
	  	sourcesList: state.sourcesList,
  	};
};


// Export connected component
export const OurSourcesWrapper = connect(mapStateToProps, { getSourcesList, clearSourcesList })(OurSources);


