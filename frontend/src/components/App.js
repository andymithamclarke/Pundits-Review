// ======================================
// This file contains the core React component that will load onto the HTML template
// All other components will be directed through this page
// ======================================

// ===========
// IMPORTS 
// ===========

// General Imports 
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";

// Local JS Imports 
import { TopMenu } from "./global/components/top_menu/top_menu_component";
import { getPlayerReviewScores, clearPlayerReviewScores, getPlayerTotalReviews, getPlayerAvgScore, setInsightsCategory, setTopBottomInsights, setGridCardView } from './actions/actions';
import { LandingPage } from "./landingpage/landingpage";
import { ResultsPage } from './results/resultspage';
import { SetPlayerPage } from './playerpage/set_player_page';
import { SetClubPage } from './clubpage/set_club_page';
import { InsightsPage } from './insightspage/insightspage';
import { HowPage } from './howpage/howpage';
import { BlogHome } from './blog/blog';
import { LoadBlogPost } from './blogpost/loadblogpost';
import { PageNotFound } from './global/components/page_not_found';
import { ErrorBoundary } from "./global/components/error_boundary";
import { ErrorPage } from "./global/components/error_page";
import ScrollToTop from "./global/components/scroll_to_top";

// Redux Imports
import store from './store/store';
import index from "./index";

// Local CSS Imports
import './top_level_css/settings.css';
import './top_level_css/variables.css';
import './top_level_css/club_badges.css';
import './top_level_css/club_shirts.css';
import './top_level_css/club_colors.css';

// Swiper Framework - SCSS Imports
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';



// ===============
// App Component 
// ===============


class App extends Component {

  // Router function to direct url towards specific blog post
  renderBlogPost = (routerProps) => {

    let postName = routerProps.match.params.post_name;

    return <LoadBlogPost postName={postName}/>

  }

  // Router function to direct url towards specific player page
  renderPlayerPage = (routerProps) => {

    let playerName = routerProps.match.params.player_name;

    return <SetPlayerPage playerName={playerName}/>

  }

  // Router function to direct url towards specific club page
  renderClubPage = (routerProps) => {

    let clubName = routerProps.match.params.club_name;

    return <SetClubPage clubName={clubName}/>

  }


  render() {
    return (

        <div>

            <ErrorBoundary>

              <TopMenu />
              <Switch>

                <Route path="/" component={LandingPage} exact />
                <Route path="/results" component={ResultsPage} />
                <Route path="/players/:player_name" render={ routerProps => this.renderPlayerPage(routerProps)} />
                <Route path="/clubs/:club_name" render={ routerProps => this.renderClubPage(routerProps)} />
                <Route path="/playerrankings" component={InsightsPage} />
                <Route path="/howitworks" component={HowPage} />
                <Route path="/blog" component={BlogHome} />
                <Route path="/blogpost/:post_name" render={ routerProps => this.renderBlogPost(routerProps)}/>
                <Route path="/error" component={ErrorPage} />
                <Route component={PageNotFound} />


              </Switch>

            </ErrorBoundary>

        </div>

    );
  }
}

export default App;

// Find template container in 'index.html'
const container = document.getElementById("app");


// Wrap App Component in BrowserRouter & Redux Store Provider before rendering
render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>

, container);