<img src="https://i.ibb.co/ZXVNVY5/pr-logo-plain-opauq.png" width="7.5%" height="7.5%">

# Pundits-Review
11/09/2020 - Complete directory for Pundits Review web application. https://www.punditsreview.com/

> Pundits Review scrapes and processes news articles about the Premier League in order to give players and teams a review score each week. Each Monday, the project collects articles, divides them into phrases, identifies the player or club being referred to and then predicts the sentiment of the phrase. See more on how it works <a href="https://www.punditsreview.com/howitworks">here</a>!

### <a href="https://www.youtube.com/watch?v=q8o1yvzkMKY" target="_blank">Site Walkthrough Video</a>
### <a href="https://andyclarkemedia.github.io/Pundits-Review/" target="_blank">Project File Structure Map</a>
##

## About this repository
This repository holds the directory used to deploy the Pundits Review project on Heroku. Intended as a legacy repository as part of my contribution to the MSc Computational and Data Journalism at Cardiff University, the files inside represent the front and backend of the website as presented in the walkthrough video - 10/09/2020

## Contents

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/">TOP LEVEL</a>
Project configuration files alongside 'tasks.py' - used to run scheduled tasks on Heroku

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/__mocks__">Mocks</a>
Used to stop Jest incorporating non JS files into testing

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/frontend">Frontend</a>
Frontend of site - React/Redux app configured with webpack & babel. Components, functions and resources used within website.

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/main">Main</a>
Django models & API configuration - Defines models, views, serializers & url patterns to store and access data

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper">Match Report Scraper</a>
Scrapy Pipeline - used to collect & process incoming data each week. Contains spider, pipelines, prediction model & entity extraction module 

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/premierleaguematchreports">Premier League Match Reports</a>
Project Settings - deployment & local use settings for project


## Associated Repositories

##### <a href="https://github.com/andyclarkemedia/Pundits-Review-Resources">Resources</a> - Data, images & Python dictionary of Premier League players & teams
##### <a href="https://github.com/andyclarkemedia/Pundits-Review-Scraping">Scraping</a> - Development of the scraping process used to collect data
##### <a href="https://github.com/andyclarkemedia/Pundits-Review-Entity-Extraction">Entity Extraction</a> - Development of the process used to recognise Premier League player & club entities within a news article
##### <a href="https://github.com/andyclarkemedia/Pundits-Review-Sentiment-Prediction">Sentiment Prediction</a> - Development of the prediction model used to predict the sentiment in football news articles 

##
#### Any Questions ... <a target="_blank" href="mailto:clarkeAJ3@cardiff.ac.uk">Send me an email!</a>
