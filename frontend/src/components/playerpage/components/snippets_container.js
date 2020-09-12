// ======================================
// Snippets Container Component to be used as a carousel allowing users to flick through individual reviews
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";

// Import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// Local JS Imports 
import { SnippetItem } from './snippet_item';
import { shuffleArray } from '../../global/functions/set_data_helpers';

// Local CSS Imports
import './snippets_container.css';
import './snippets-swiper.css';


// ===========
// Snippets Container Component
// ===========

export class SnippetsContainer extends Component {

	render() {

		// Shuffle the snippets array
		let shuffledSnippetsArray = shuffleArray(this.props.snippets);

		let result;

		if (this.props.snippets.length) {

			result = (

				<div className="snippets-container-wrapper">

					<Swiper
					      spaceBetween={0}
					      slidesPerView={1}
					      navigation 
					      loop={true}
					    >


						  {shuffledSnippetsArray.map((sentence, index) => {

							let carousel = (

								<SwiperSlide key={index}>
									<SnippetItem mediaSource={sentence.media_source} publishedDate={sentence.date} originalSentence={sentence.original_sentence} url={sentence.url}/>
								</SwiperSlide>
							);

							return carousel;

						  })}

					      



					    </Swiper>

					

				</div>

			);


		} else {

			result = (
				
				<div className="no-snippets-container-wrapper">

					
					<p className="no-snippets-text body-text-light">NO SNIPPETS THIS WEEK</p>	
					

				</div>
		
			)

		}

		return result
	}
}