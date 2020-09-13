# =========================
# This file contains a function to lemmatize a phrase and remove stopwords from the phrase
# =========================


# The function will remove the words in the phrase that are present within the customized list of stopwords 
# It will then return all words to their lemma form 
# This is done in order to best process the phrase for sentiment analysis


# =============
#  IMPORTS 
# =============

from nltk.stem import WordNetLemmatizer
from nltk import word_tokenize


# Local imports - NEW
from ..modules import stopwords as stopwords

# =============
# LEMMATIZE / REMOVE STOPWORDS
# =============

def lemmatize_remove_stopwords(phrase):

	# Apply the functionality with a list comprehension and return the string
	return " ".join([WordNetLemmatizer().lemmatize(word) for word in word_tokenize(phrase) if word not in stopwords.stopwords()])
