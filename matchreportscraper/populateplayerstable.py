# =========================
# This file contains the loop to initialise the population of the players model in the Database
#
# --------
#
# NOTE: *** This file should only be run on DB setup and not again ****
# =========================


# ==============
# IMPORTS 
# ==============

# Local Imports - NEW
from .modules.players_dictionary import premier_league_players_dictionary

# Local Imports - OLD
#from modules.players_dictionary import premier_league_players_dictionary

# Accessing top level
import sys
sys.path.append("..")
from main.models import Player, Club

# ==================
# The loop that will populate the players database model
# ==================


def populate_players_model():
	# Loop through the top level dictionary
	for team, value in premier_league_players_dictionary.items():

		# Loop through the players in each team
		for player_name, val in value['squad_players'].items():

			# Create a new player instance for each player
			player_entry = Player(club=Club.objects.get(club=team), player=player_name, club_name=team, position=val['position'], nationality=val['nationality'])
			player_entry.save()
