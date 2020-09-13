# ================
# Function to run the scraper - called by top level 'tasks.py' on Heroku server
# ================

# ================
# IMPORTS
# ================


import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.settings import Settings
import time


# Local imports - NEW
from .spiders.article_scraper import ArticleSpider
from . import settings

# Initialisation imports - NEW
from .populateplayerstable import populate_players_model
from .populateclubstable import populate_clubs_model


# ================
# The function that will initialise the scraping process
# ================

def crawl():

	# Populate the clubs model
	#populate_clubs_model()

	# Populate the players model
	#populate_players_model()

	# Start a timer
	#start = time.time()

	# Initialise the Crawler Process applying the settings declared in matchreportscraper/settings.py
	crawler_settings = Settings()
	crawler_settings.setmodule(settings)
	process = CrawlerProcess(settings=crawler_settings)
	# Direct the process to the Article Spider
	process.crawl(ArticleSpider)
	# Start the spider
	process.start()

	# Finish the timer
	end = time.time()
	# Print time taken
	#print("Time Taken:", end - start, "(seconds)")
