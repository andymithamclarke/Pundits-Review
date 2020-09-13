# =========================
# This file contains the loop to initialise the population of the clubs model in the Database
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

# Accessing top level
import sys
sys.path.append("..")
from main.models import Club



# ==================
# The loop that will populate the clubs database model
# ==================


def populate_clubs_model():

	# Loop through the top level dictionary
	for team, value in premier_league_players_dictionary.items():

		# Save each club to the DB
		club_entry = Club(club=team)
		club_entry.save()