// ======================================
// Review Score Circle Component - Contains colored circle with review score
// ======================================


// ===========
// IMPORTS 
// ===========

import React, { Component } from "react";

// Local JS Imports 

// CSS Imports
import './review_score_circle.css';




export class ReviewScoreCircle extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
      		backgroundClass: " background-light",
   		};

   		this._handleBackgroundSet = this._handleBackgroundSet.bind(this);
  	}

  	componentDidMount() {

  		this._handleBackgroundSet();
  	}

    componentDidUpdate() {

      if (this.state.backgroundClass !== this._setBackground()) {
        this._handleBackgroundSet();
      }
    }

    _handleBackgroundSet() {

      this.setState(prevState => ({
          backgroundClass: this._setBackground()
      }));

    }

  	_setBackground() {

      if (this.props.reviewScore !== "N/A") {

          if (this.props.reviewScore >= 70 && this.props.reviewScore < 101) {
          return ' green-circle';
        } 

          if (this.props.reviewScore >= 40  && this.props.reviewScore < 70) {
            return ' yellow-circle';
          } 

          if (this.props.reviewScore >= 0  && this.props.reviewScore < 40) {
            return ' red-circle';
          }

      } else {

        return ' black-circle';

      }

  	}


	render() {

		let result = <div className={"review-score-circle body-text-light white-text" + this.state.backgroundClass}>{this.props.reviewScore}</div>

		return result;
	}
}

