# =========================
# Loop to add new agree/disagree scores to the database EACH WEEK for EACH PLAYER & CLUB
#
# --------
#
# NOTE: *** This file will be controlled by tasks.py and run everyweek with new DATES****
# =========================


# ==============
# IMPORTS 
# ==============

import datetime

# Local Imports - NEW
from .modules.players_dictionary import premier_league_players_dictionary

# Accessing top level
import sys
sys.path.append("..")
from main.models import Club, Player, PlayerAgreeDisagree, ClubAgreeDisagree


# ==================
# The loop that will add new weekly agree / disagree scores for players
# ==================


def add_weekly_agree_disagree_scores_players():

	# Loop through the top level dictionary
	for team, value in premier_league_players_dictionary.items():

		# Loop through the players in each team
		for player_name, val in value['squad_players'].items():

			# Create a new player agree disagree score instance for each player
			player_agree_disagree_new_score = PlayerAgreeDisagree(player=Player.objects.get(player=player_name), player_name=player_name, date=datetime.datetime.now().date(), agree_score=0, disagree_score=0)
			player_agree_disagree_new_score.save()
			

# ==================
# The loop that will add new weekly agree / disagree scores for clubs
# ==================


def add_weekly_agree_disagree_scores_clubs():

	# Loop through the top level dictionary
	for team, value in premier_league_players_dictionary.items():

		# Create a new club agree disagree score instance for each club
		club_agree_disagree_new_score = ClubAgreeDisagree(club=Club.objects.get(club=team), club_name=team, date=datetime.datetime.now().date(), agree_score=0, disagree_score=0)
		club_agree_disagree_new_score.save()