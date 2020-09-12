# ================
# File contains tasks to be scheduled on Heroku Server
# ================

# SCHEDULED TASKS:
# ---------------
# This file is scheduled to run daily on the Heroku server
# It will first check the day of the week and ONLY RUN it's tasks on a MONDAY


# TASK 1: Call the spider to crawl - store the results in the database
# TASK 2: Check for VisitedURLs older than 100 days and delete them from the database
# TASK 3: Add new weekly agree / disagree scores for every player & club

# =============
#  IMPORTS 
# =============

import datetime

# Local imports 
from matchreportscraper import crawl, populate_weekly_agreedisagree_scores
from main.models import VisitedURL



# =======================================
# CHECK DAY OF THE WEEK (MONDAY = 0)
# =======================================

# Crawler temporarily paused
if datetime.datetime.today().weekday() == 0:

	# =============
	#  TASK 1 - crawl
	# =============
	crawl.crawl()


	# =============
	#  TASK 2 - Delete old URLs
	# =============

	# Code to access old DB records 
	# Adapted from Stack Overflow answer by Jonathan on May 13 '14
	# https://stackoverflow.com/questions/23622501/datetimefield-get-all-objects-older-than-48-hours?lq=1
	today = datetime.datetime.now().date()
	date_threshold = today - datetime.timedelta(days=100)
	# End of referenced code
	VisitedURL.objects.filter(date_visited__lte=date_threshold).delete()

	# =============
	#  TASK 3 - Add new Agree Disagree Scores for each club & player in the DB
	# =============
	# Players
	populate_weekly_agreedisagree_scores.add_weekly_agree_disagree_scores_players()
	# Clubs
	populate_weekly_agreedisagree_scores.add_weekly_agree_disagree_scores_clubs()
