# =========================
# This file contains a scrapy spider class used to return text from match reports
# =========================

# Steps:

	# 1. The spider will loop through the landing urls stored in the sources dictionary
	# 2. It will extract the article urls that match the specific landing_characteristics described in the sources dictionary
	# 3. It will then return a list of article dictionaries with the new article urls available from the corresponding source url - if that article url has not already been accessed
	# 4. Next each new article url is crawled
	# 5. The text is gathered from each article - according to specific article_characteristics described in the sources dictionary
	# 6. The text is then processed -- (cleaned, stopwords removed, teams identified, lemmatized and split into phrases)
	# 7. The output is a dataframe for each article with the structure outlined below
	# 8. Before returning, the dataframes are concatenated


# Output ---->  pd.DataFrame ----> 'date' | 'lemmatized_no_stopwords_phrase' | 'media_source' | 'original_sentence' | 'phrase' | 'teams' | 'time' | 'url'


# =============
#  IMPORTS 
# =============

import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.settings import Settings
import logging
import datetime


# Settings 
from .. import settings


# Local Imports - NEW
from ..modules import target_identifier as target_identifier
from ..modules import sources_dictionary as sources_dictionary
from ..modules import clean_text as clean_text
from ..modules import items as items
from ..modules import match_info as match_info
from ..modules import phrases as phrases
from ..modules.items import VisitedURLItem as VisitedURLItem


# Local Imports - OLD
#import modules.target_identifier as target_identifier
#import modules.sources_dictionary as sources_dictionary
#import modules.clean_text as clean_text
#import modules.items as items
#import modules.match_info as match_info
#import modules.phrases as phrases
#from modules.items import VisitedURLItem

# Accessing top level - main.models
import sys
sys.path.append("..")
from main.models import VisitedURL


# ================
# Function to check if url exists in DB Model VisitedURLs - Prevents URL from being visisted twice
# ================

def filter(parsed_response):

	# Declare new list of unaccessed_urls
	unaccessed_urls = []

	# Iterate through the individual urls in parsed_response
	for item in parsed_response:

		# Check if url is entry in DB ----> VisitedURL model 
		if VisitedURL.objects.filter(url=item).exists():
			continue
		# If item is not in previously_accessed_articles ----> append the item to previously_accessed_articles & add it to unaccessed_url list
		else:
			unaccessed_urls.append(item)
			# Enter Url into DB
			new_url_item = VisitedURLItem()
			new_url_item['url'] = item
			new_url_item['date_visited'] = datetime.datetime.now().date()
			
			# Save the new_url_item
			new_url_item.save()


	return unaccessed_urls



# ================
# The Spider class which will return article links from each of the sources listed in the source dictionary
# ================

class ArticleSpider(scrapy.Spider):


	def __init__(self):
		self.name="ArticleSpider"



	# Function will be called automatically when spider crawls
	def start_requests(self):

		# Iterate through the sources_dictionary
		for key, value in sources_dictionary.sources_dictionary.items():

			# Iterate through the landing urls for each source
			for item in value['landing_urls']:

				# Make the request and pass the response to be parsed
				source_request = scrapy.Request(url=item, callback=self.parse_source)

				# Add the source name to the parse keywords parameter
				source_request.cb_kwargs['key'] = key

				# Process the response
				yield source_request


	# Callback function to return a dictionary of the new article urls for each source listed in the sources dictionary	
	def parse_source(self, response, key):

		parse_source_result = {

			"source": key,
			"article_urls": filter(list(dict.fromkeys(response.xpath(sources_dictionary.sources_dictionary[key]["landing_characteristics"]).extract()))),
			"characteristics": sources_dictionary.sources_dictionary[key]["article_characteristics"],
			"prefix": sources_dictionary.sources_dictionary[key]["article_url_prefix"],
			
		}

		# Iterate through the article_urls in parse_source_result
		for url in parse_source_result['article_urls']:

			# Prefix url - where required
			url_prefix = str(parse_source_result['prefix'] + url)

			# Make the request and pass the response to the callback function ----> self.parse_article
			article_request = scrapy.Request(url=url_prefix, callback=self.parse_article)

			# Add the source name to the parse keywords parameter
			article_request.cb_kwargs['media_source'] = parse_source_result['source']

			# Add the article characteristics to the parse keywords parameter
			article_request.cb_kwargs['characteristics'] = parse_source_result['characteristics']

			# Add the article url to the parse keywords parameter
			article_request.cb_kwargs['url'] = url_prefix

			# Process the response
			yield article_request

	

	# Callback function to parse the text in the article urls returned from parse_source
	# Function will return a list of dataframes after having processed and cleaned the text
	def parse_article(self, response, media_source, characteristics, url):

		# Clean the response object
		full_text = clean_text.clean_text(response.xpath(characteristics).extract())

		# Identify the teams in the match report
		teams = match_info.identify_teams(full_text)

		# Append the df_list with the result of the phrases.phraseify() function ---> Output is a dataframe for each of the articles in the same format as described in this documents header
		item_list = phrases.phraseify(full_text, teams, url, media_source)

		for item in item_list:
			
			# Call the module to identify the target player and add it to the items dictionary
			target_dictionary = target_identifier.target_identifier(item)

			# Only return the item (pass it through to the pipeline) if there is a target identified
			if len(target_dictionary['targets']) != 0:
				yield target_dictionary
			else:
				pass
			

