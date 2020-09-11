# ===================================================================
# This file contains the scrapy pipelines 1 and 2 which process the result of the spider - Pipeline 1 identifies sentiment // Pipeline 2 stores items in the Database
# ===================================================================

# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# ==============
# IMPORTS 
# ==============
import datetime


#Local Imports - NEW
from matchreportscraper.modules import target_identifier as target_identifier
from matchreportscraper.modules import players_dictionary as original_players_dictionary
from matchreportscraper.modules import predict as predict
from matchreportscraper.modules.items import ScoreItem, SentenceItem, ClubScoreItem, ClubSentenceItem

#Local Imports - OLD
#import modules.target_identifier as target_identifier
#import modules.players_dictionary as original_players_dictionary
#import modules.predict as predict
#from modules.items import ScoreItem, SentenceItem, ClubScoreItem, ClubSentenceItem


# Accessing top level
import sys
sys.path.append("..")
from main.models import Player, Club


# ================
# PIPELINE 1 ---> Identify Sentiment in Phrases
# ================


class IdentifySentimentPipeline:


	def process_item(self, item, spider):

		# Use the predict module to add sentiment predictions to the item before passing it to the next pipeline
		sentiment_dictionary = predict.predict(item)
		return sentiment_dictionary



# ================
# PIPELINE 2 ---> Calculate Sentiment Scores ... then -----> Store Items in DB (when spider has finished crawling)
# ================


class CalculateScorePipeline:

	# Attribute to store
	targets_dictionary = {}

	def close_spider(self, spider):

		# ==========
		# Dump the results into a PICKLE for analysis
		# ==========

		#pickle.dump(self.targets_dictionary, open("target_model_two.p","wb"))

    	# ==========
		# Loop through the completed targets dictionary and add the results to the DB
		# ==========
		
		for key, value in self.targets_dictionary.items():


			# Calculate the sentiment score
			sentiment_score = 0

			# Ensure division is not by 0 and assign the result of the calculation to `sentiment_score`
			# Calculation ----->  Number of positive reviews as a percentage of total positive and negative reviews
			if value['n_positive'] == 0 and value['n_negative'] == 0:
				# Not enough values represented by np.nan
				sentiment_score = -1
			else:
				sentiment_score = (value['n_positive'] / (value['n_positive'] + value['n_negative']))


			# ====================
			# Check whether the target is a team or a player
			# ====================

			# ========
			# PLAYER
			# ========

			if value['type'] == "PLAYER":

				# Specify the current player
				current_player = value['target']
				player_model_reference = Player.objects.get(player=current_player)


					
				# Enter the item into the Database
				score_item = ScoreItem()

				# Link to the players table
				score_item['player'] = player_model_reference

				# Add other fields
				score_item['player_name'] = current_player
				score_item['date'] = datetime.datetime.now().date()
				score_item['club'] = value['club']
				score_item['sentiment_score'] = sentiment_score
				score_item['nationality'] = value['nationality']
				score_item['field_position'] = value['field_position']
				score_item['n_negative'] = value['n_negative']
				score_item['n_positive'] = value['n_positive']
				score_item['n_neutral'] = value['n_neutral']
				score_item['total_reviews'] = value['total_reviews']

				# Save the item
				score_item.save()

				# Loop through the original_sentences and add them to the database 
				for dictionary in value['sample_sentences']:

					# Enter the sentence into the database 
					sentence_item = SentenceItem()

					# Link to the players table
					sentence_item['player'] = player_model_reference

					# Add other fields
					sentence_item['player_name'] = current_player
					sentence_item['date'] = datetime.datetime.now().date()
					sentence_item['media_source'] = dictionary['media_source']
					sentence_item['url'] = dictionary['url']
					sentence_item['sentiment'] = dictionary['sentiment']
					sentence_item['original_sentence'] = dictionary['original_sentence']

					# Save the sentence item
					sentence_item.save()

			# ========
			# CLUB
			# ========

			elif value['type'] == "CLUB":

				# Specify the current club
				current_club = value['target']
				club_model_reference = Club.objects.get(club=current_club)


				# Enter the item into the Database
				club_score_item = ClubScoreItem()

				# Link to the club table
				club_score_item['club'] = club_model_reference

				# Add other fields
				club_score_item['club_name'] = current_club
				club_score_item['date'] = datetime.datetime.now().date()
				club_score_item['sentiment_score'] = sentiment_score
				club_score_item['n_negative'] = value['n_negative']
				club_score_item['n_positive'] = value['n_positive']
				club_score_item['n_neutral'] = value['n_neutral']
				club_score_item['total_reviews'] = value['total_reviews']

				# Save the item
				club_score_item.save()

				# Loop through the original_sentences and add them to the database 
				for dictionary in value['sample_sentences']:

					# Enter the sentence into the database 
					club_sentence_item = ClubSentenceItem()

					# Link to the players table
					club_sentence_item['club'] = club_model_reference

					# Add other fields
					club_sentence_item['club_name'] = current_club
					club_sentence_item['date'] = datetime.datetime.now().date()
					club_sentence_item['media_source'] = dictionary['media_source']
					club_sentence_item['url'] = dictionary['url']
					club_sentence_item['sentiment'] = dictionary['sentiment']
					club_sentence_item['original_sentence'] = dictionary['original_sentence']

					# Save the sentence item
					club_sentence_item.save()









	def process_item(self, item, spider):


		# Iterate through each target identified in the item
		for target in item['targets']:

			# Check if the target already has an entry in the attribute: 'targets_dictionary'
			if target in list(self.targets_dictionary.keys()):

				# Increment the appropriate values in the players dictionary depending on the sentiment of the phrase
				if item['sentiment'] == "NEGATIVE":
					self.targets_dictionary[target]['n_negative'] += 1
					self.targets_dictionary[target]['total_reviews'] += 1
					self.targets_dictionary[target]['sample_sentences'].append({"sentiment": "NEGATIVE", "url": item['url'], "media_source": item['media_source'], "original_sentence": item['original_sentence']})
				elif item['sentiment'] == "POSITIVE":
					self.targets_dictionary[target]['n_positive'] += 1
					self.targets_dictionary[target]['total_reviews'] += 1
					self.targets_dictionary[target]['sample_sentences'].append({"sentiment": "POSITIVE", "url": item['url'], "media_source": item['media_source'], "original_sentence": item['original_sentence']})
				else:
					self.targets_dictionary[target]['n_neutral'] += 1
					self.targets_dictionary[target]['total_reviews'] += 1

			# Create an entry for the target in the attribute: 'targets_dictionary' ----> if it does not already exist		
			else:


				# Adding Player Info
				for key, value in original_players_dictionary.premier_league_players_dictionary.items():
					if target in list(value['squad_players'].keys()):

						# Create a new dictionary entry for the target - PLAYER
						self.targets_dictionary[target] = {
							"type": "PLAYER",
							"target": target,
							"sample_sentences": [],
							"nationality": "",
							"club": "",
							"field_position": "",
							"n_positive": 0,
							"n_negative": 0,
							"n_neutral": 0,
							"total_reviews": 0
						}

						self.targets_dictionary[target]['field_position'] = value['squad_players'][target]['position']
						self.targets_dictionary[target]['nationality'] = value['squad_players'][target]['nationality']
						self.targets_dictionary[target]['club'] = key

					# Adding Club Info
					elif target in list(value['name_variations']):

						# Create a new dictionary entry for the target - CLUB
						self.targets_dictionary[target] = {
							"type": "CLUB",
							"target": target,
							"sample_sentences": [],
							"n_positive": 0,
							"n_negative": 0,
							"n_neutral": 0,
							"total_reviews": 0
						}

				# Increment the appropriate values in the players dictionary depending on the sentiment of the phrase
				if item['sentiment'] == "NEGATIVE":
					self.targets_dictionary[target]['n_negative'] += 1
					self.targets_dictionary[target]['total_reviews'] += 1
					self.targets_dictionary[target]['sample_sentences'].append({"sentiment": "NEGATIVE", "url": item['url'], "media_source": item['media_source'], "original_sentence": item['original_sentence']})
				elif item['sentiment'] == "POSITIVE":
					self.targets_dictionary[target]['n_positive'] += 1
					self.targets_dictionary[target]['total_reviews'] += 1
					self.targets_dictionary[target]['sample_sentences'].append({"sentiment": "POSITIVE", "url": item['url'], "media_source": item['media_source'], "original_sentence": item['original_sentence']})
				else:
					self.targets_dictionary[target]['n_neutral'] += 1
					self.targets_dictionary[target]['total_reviews'] += 1
