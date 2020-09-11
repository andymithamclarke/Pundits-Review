# =========================
# This file contains a function to split an article into phrases
# =========================


# Parameters: 
	# - list of <p> elements in article
	# - list of teams involved in the match
	# - string - media source
	# - string - article url


# Function will return a dataframe for each phrase in a list of <p> elements in a match report 
# Function will first tokenize the sentences 
# Then split each sentence by commas 
# Then apply lemmatization and stopwords removal to the phrase



#__Note:__


# =============
#  IMPORTS 
# =============

from nltk.tokenize import sent_tokenize
from datetime import datetime

# Local imports - NEW
from ..modules import lemmatize_remove_stopwords as lemmatize_remove_stopwords

# Local imports - OLD
#import modules.lemmatize_remove_stopwords as lemmatize_remove_stopwords



# =============
#  The Function
# =============

def phraseify(article_p_list, teams, article_url, media_source):

	# Declare the article_dataframe_list
	article_dataframe_list = []

	# Iterate through the <p> elements in article_p_list
	for p_element in article_p_list:

		# Tokenize the sentences
		for item in sent_tokenize(p_element):

			# Iterate through the phrases - Split again by comma
			for phrase in item.split(','):

				# Initialise a datetime object
				now = datetime.now()

				# Create a string from the datetime object
				datetime_string = now.strftime("%d/%m/%Y %H:%M:%S")

				# Split date and time
				date = datetime_string.split(" ")[0]
				time = datetime_string.split(" ")[1]

				# Apply lemmatization_stopwords_removal function to the phrase
				lemmatized_no_stopwords_phrase = lemmatize_remove_stopwords.lemmatize_remove_stopwords(phrase)

				# Create the individual phrase dictionary
				phrase_dictionary = {
					"media_source": media_source,
					"url": article_url,
					"date": date,
					"time": time,
					"teams": teams,
					"phrase": phrase,
					"original_sentence": item,
					"lemmatized_no_stopwords_phrase": lemmatized_no_stopwords_phrase
				}

				# Append the dataframe list with the dictionary converted into a dataframe
				article_dataframe_list.append(phrase_dictionary)

				


	# Return a list of dictionaries
	return article_dataframe_list
