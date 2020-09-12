// ======================================
// Blog Snippets Component - Displays snippets associated with a player
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

// Local JS Imports
import { SnippetsContainer } from '../../playerpage/components/snippets_container';
import { setReviewSentencesSpecificDate } from "../../global/functions/set_data_helpers";
import { setPlayer } from "../../actions/actions";

// CSS Imports 
import './blogsnippets.css';


// ===========
// Blog Snippets Component 
// ===========

export class BlogSnippetsWrapper extends Component {

	// Set player in redux store according to player named in blog post DB entry
	componentDidMount = () => {

		if (this.props.playersViewed.length === 0) {

			this.props.setPlayer(this.props.playerName);

		} else {

			if (this.props.playersViewed[this.props.playersViewed.length - 1].player !== this.props.playerName) {

				this.props.setPlayer(this.props.playerName);

			}

		}

		

	}


	render() {

		let result;

		if (this.props.playersViewed.length) {

			// Return the player db record associated with the specific date of the blog post
			let snippets = setReviewSentencesSpecificDate(this.props.playersViewed[this.props.playersViewed.length - 1], this.props.specificDate);

			// Render empty span if player name not supplied 
			if (this.props.playerName !== '""') {

				result = (

					<SnippetsContainer snippets={snippets} />

				);


			} else {

				result = <span></span>
			}

		} else {

			result = <span></span>
		}

		


		return result;
	}

}





// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		playersViewed: state.playersViewed

  	};
};


export const BlogSnippets = connect(mapStateToProps, { setPlayer })(BlogSnippetsWrapper);


