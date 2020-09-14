# =========================
# This file contains a function to loop through the dictionary and return target players and teams
# =========================



# Function will loop through the dictionary entries
# It will then loop through the players in the teams listed 
# Using the function 'identify_nsubj_pobj' it will identify players/teams listed in the sentence from their identifiers listed in 'players dictionary'
# It will add a list of the target players/teams to the dictionaries corresponding entry


# =============
#  IMPORTS 
# =============


# Local imports - NEW
from matchreportscraper.modules import players_dictionary as players_dictionary
from matchreportscraper.modules import identify_nsubj_pobj as identify_nsubj_pobj


# =============
# TARGET IDENTIFIER
# =============

def target_identifier(dictionary):
    
    # Define an empty players list
    player_list = []
    
    
    # Create an empty dictionary to store players as keys and player identifiers as values
    d = {}

    # Iterate through the teams listed in each row
    for team in dictionary['teams']:

    	# Save the dictionary of squad players from the 'players_dictionary' module that match each team listed in the row
        squad_players = players_dictionary.premier_league_players_dictionary[team]['squad_players']

        # Add the teams to the dictionary
        d[team] = players_dictionary.premier_league_players_dictionary[team]['name_variations']

        # Make a dictionary holding the players names and player identifiers = d
        for player_key, player_value in squad_players.items():
            d[player_key] = player_value['identifiers']

    # Use the identify_nsubj_pobj function to return a list of the target players in the phrase      
    if identify_nsubj_pobj.identify_nsubj_pobj(dictionary['phrase'], d):
    	# If there is a match --->  Append the player targets to the player_list
        player_list.append(identify_nsubj_pobj.identify_nsubj_pobj(dictionary['phrase'], d))
    else: 
    	# If there is no match ----> Append and empty string
        player_list.append("")
    
    # Add the flattened players list to a new key in the dictionary
    dictionary['targets'] = [y for x in player_list for y in x]
    

    # Return the dictionary to be filtered and processed in the pipeline
    return dictionary
