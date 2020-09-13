# =========================
# This file contains a function to identify the teams being desribed in a match report
# =========================


# Function will search for teams mentioned in a match report 
# It will search through the keys in the players dictionary find a match


#__Note:__
	# Potential problems in the future with over-identifying teams 
	# Especially in the case of Manchester United & Manchester City
	# Also in the case of identifying teams that are mentioned but don't actually take part in the match


# =============
#  IMPORTS 
# =============

from nltk import word_tokenize
import nltk
nltk.download('punkt')
nltk.download('wordnet')


# Local imports - NEW
from ..modules import players_dictionary as players_dictionary

# Local imports - OLD
#import modules.players_dictionary as players_dictionary



# =============
# IDENTIFY TEAMS  
# =============
def identify_teams(article_p_list):


	team_list = []

	# Iterate through the first 6 <p> elements of the article
	for p_element in article_p_list[0:6]:

		# Iterate through word tokens from each <p> element
		for word in word_tokenize(p_element):

			# Iterate through the players dictionary
			for key, value in players_dictionary.premier_league_players_dictionary.items():

				# If a word matchs the name_variations of a club ---> append the club to team_list
				if word in value['name_variations']:

					team_list.append(key)


	# Remove duplicate values from the list and return it
	return list(dict.fromkeys(team_list))
