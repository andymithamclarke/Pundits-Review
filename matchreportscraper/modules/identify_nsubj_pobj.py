# =========================
# This file contains a function to return players from a phrase when they meet certain natural language characteristics
# =========================



# KEY: 
	# nsubj = main subject of a sentence
	# pobj = object of a preposition



# This function will use spaCy to return players that are either the main subject of a phrase or the object of a preposition
# First it will create a spaCy object from the phrase
# Then it will match words that meet the criteria: 
#			a) are either the "nsubj" or "pobj" of the phrase
#		    b) are a proper noun
#			c) have a length longer than 2 characters
# 			d) are listed as a player identifier
# Next it will re-match the player identifier with the original name of the player, given the parameter of "d" - a dictionary containing player names and identifiers for each team listed in the dataframe row
# It will return a list of the player names




# =============
#  IMPORTS 
# =============

import spacy



# =============
#  Save instance of spaCy model
# =============

nlp = spacy.load("en_core_web_sm")


# =============
#  The Function
# =============


def identify_nsubj_pobj(string, player_identifiers):
    
    # Create spacy object from string
    doc = nlp(string)
    
    # Create empty nsubj list
    nsubj_pobj = []
    
    # Iterate through doc object
    for i, tok in enumerate(doc):

        # ADDING NSUBJ
        # Check for NSubj only if tok is a proper noun and it's length is greater than 2
        if str(tok.dep_) == "nsubj" and str(tok.pos_) == "PROPN" and len(tok.text) > 2:
            # Append subject to temporary list if it matches with a player
            identified_players = []

            # Loop through items and find a match
            for key, value in player_identifiers.items():
                if tok.text in list(value):
                    identified_players.append(key)


            # Sanity Check if token matches more than one player
            if len(identified_players) > 1:
                for matching_player in identified_players:
                    # Check if first name is also in the sentence
                    first_name = matching_player.split(' ')[0]
                    if first_name in str(doc):
                        nsubj_pobj.append([matching_player])
                        
            # Append the list of identified players to the core nsubj_pobj list
            else:
                nsubj_pobj.append(identified_players)

        # ADDING POBJ
        elif str(tok.dep_) == "pobj" and str(tok.pos_) == "PROPN" and len(tok.text) > 2:
            # Append subject to temporary list if it matches with a player
            identified_players = []

            # Loop through items and find a match
            for key, value in player_identifiers.items():
                if tok.text in list(value):
                    identified_players.append(key)


            # Sanity Check if token matches more than one player
            if len(identified_players) > 1:
                for matching_player in identified_players:
                    # Check if first name is also in the sentence
                    first_name = matching_player.split(' ')[0]
                    if first_name in str(doc):
                        nsubj_pobj.append([matching_player])
                        
            # Append the list of identified players to the core nsubj_pobj list
            else:
                nsubj_pobj.append(identified_players)
            

            
    # return a flattened list - removing duplicate values        
    return list(dict.fromkeys([y for x in nsubj_pobj for y in x]))




