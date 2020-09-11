// ======================================
// Blog Post Inner Content Component - Acts as a wrapper for the inner content within a blog post
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// Local JS Imports
import { BlogHeaderImage } from './blogheaderimage';
import { BlogHeadline } from './blogpostheadline';
import { BlogDate } from './blogdate';
import { BlogParagraph } from './blogparagraph';
import { BlogPullQuote } from './blogpullquote';
import { BlogSnippets } from './blogsnippets';
import { BlogPlayerCard } from './blogplayercard';
import { BlogListDot } from '../../blog/components/blog_list_dot';
import { Footer } from '../../global/components/site_footer/footer';

// CSS Imports 
import './blogpostcontent.css';


// ===========
// Blog Post Content Component 
// ===========


export class BlogPostContentWrapper extends Component {


	render() {

		// Save the post name
		let postName = this.props.postName

		// Find the matching post
		let postContent = this.props.blogPostList.filter(function(post) { return post.post_name === postName })


		// Set the data for each element of the post
		let headerUrl;
		let headline;
		let blogDate;
		let parOne;
		let parTwo;
		let parThree;
		let parFour;
		let parFive;
		let parSix;
		let parSeven;
		let parEight;
		let pullOne;
		let pullTwo;
		let pullThree;
		let playerOneName;
		let specificCrawlDate;
		let playerOneRank;
		let thumbsPar;


		if (postContent.length) {

			headerUrl = postContent[0].header_image_url;
			headline = postContent[0].headline;
			blogDate = postContent[0].date_text;
			parOne = postContent[0].par_one;
			parTwo = postContent[0].par_two;
			parThree = postContent[0].par_three;
			parFour = postContent[0].par_four;
			parFive = postContent[0].par_five;
			parSix = postContent[0].par_six;
			parSeven = postContent[0].par_seven;
			parEight = postContent[0].par_eight;
			pullOne = postContent[0].pull_quote_one;
			pullTwo = postContent[0].pull_quote_two;
			pullThree = postContent[0].pull_quote_three;
			playerOneName = postContent[0].player_one_name;
			playerOneRank = postContent[0].player_one_rank;
			specificCrawlDate = postContent[0].crawl_date;
			thumbsPar = postContent[0].thumbs_par;


		}


		let result = (


				<div className='blog-post-content-wrapper'>

					<Helmet>
				
						<title>{"Pundits Review - " + headline}</title>
						<meta property="og:description" content={thumbsPar}/>
						<meta property="og:url" content={"https://www.punditsreview.com/" + postName}/>
			    		<meta property="og:type" content="football blog data"/>
			    		<meta property="og:image" content={headerUrl}/>

			    	</Helmet>

					<BlogHeadline headline={headline} />

					<BlogHeaderImage imageURL={headerUrl} />

					<BlogDate date={blogDate} />

					<BlogListDot />

					<BlogParagraph text={parOne} />

					<BlogPlayerCard playerName={playerOneName} specificDate={specificCrawlDate} playerRank={playerOneRank}/>

					<BlogParagraph text={parTwo} />

					<BlogPullQuote text={pullOne} />

					<BlogParagraph text={parThree} />

					<BlogSnippets playerName={playerOneName} specificDate={specificCrawlDate} />

					<BlogParagraph text={parFour} />

					<BlogPullQuote text={pullTwo} />

					<BlogParagraph text={parFive} />

					<BlogPullQuote text={pullThree} />

					<BlogParagraph text={parSix} />

					<BlogParagraph text={parSeven} />

					<BlogParagraph text={parEight} />

					<Footer />



				</div>


			);


		return result;
	}
}



// ===========
// Connect component to redux store
// ===========
const mapStateToProps = state => {
  return { 

  		blogPostList: state.blogPostList

  	};
};


export const BlogPostContent = connect(mapStateToProps)(BlogPostContentWrapper);