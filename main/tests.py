# =========================
# This file contains unit tests for the 'main' app
# =========================

# ================
# TEST COVERAGE
# ================

# MODEL TESTS
# ================
#
# Visited URL
# -------------
# 1. URL can be created and found
# 2. URL does not return true when it doesn't exist
#
# Clubs
# -------------
# 3. Create new club
#
# Players
# -------------
# 4. Create new player with club relationship
#
# Scores
# -------------
# 5. Create new score  with relationships
#
# Sentences 
# -------------
# 6. Create new sentence with relationships
#
# Club Scores
# -------------
# 7. Create new club score with relationships
#
# Club Sentences
# -------------
# 8. Create new club sentence with relationships
#
# API CONNECTION TESTS – ensure that a connection can be made to the REST API
# ================
# 9. Check connection to API - CLUBS
# 10. Check connection to API - PLAYERS
# 11. Check connection to API - SCORES
# 12. Check connection to API - SENTENCES
# 13. Check connection to API - CLUB SENTENCES
# 14. Check connection to API - CLUB SCORES
# 
# API DATA RETRIEVAL PLAIN – ensure that data can be retrieved from the REST API
# ================
# 15. Retrieve from API - CLUBS
# 16. Retrieve from API - PLAYERS
# 17. Retrieve from API - CLUB SCORES
# 18. Retrieve from API - CLUB SENTENCES
# 19. Retrieve from API - PLAYER SCORES
# 20. Retrieve from API - PLAYER SENTENCES
# 
# API DATA RETRIEVAL WITH FILTER – ensure that data can be retrieved from the REST API using a filter query
# =================
# 21. Retrieve from API - CLUBS (CORRECTLY specified FILTER)
# 22. Retrieve from API - CLUBS (INCORRECTLY specified FILTER)
# 23. Retrieve from API - CLUBS (INCORRECTLY specified QUERY PARAM)
# 24. Retrieve from API - PLAYERS (CORRECTLY specified filter)
# 25. Retrieve from API - PLAYERS (INCORRECTLY specified filter)
# 26. Retrieve from API - PLAYERS (INCORRECTLY specified QUERY PARAM)
# 27. Retrieve from API - SCORES (CORRECTLY specified FILTER)
# 28. Retrieve from API - SCORES (INCORRECTLY specified FILTER)
# 29. Retrieve from API - SCORES (INCORRECTLY specified QUERY PARAM)
# 30. Retrieve from API - SENTENCES (CORRECTLY specified FILTER)
# 31. Retrieve from API - SENTENCES (INCORRECTLY specified FILTER)
# 32. Retrieve from API - SENTENCES (INCORRECTLY specified QUERY PARAM)
# 33. Retrieve from API - CLUB SENTENCES (CORRECTLY specified Filter)
# 34. Retrieve from API - CLUB SENTENCES (INCORRECTLY specified Filter)
# 35. Retrieve from API - CLUB SENTENCES (INCORRECTLY specified QUERY PARAM)
# 36. Retrieve from API - CLUB SCORES (CORRECTLY specified FILTER)
# 37. Retrieve from API - CLUB SCORES (INCORRECTLY specified FILTER)
# 38. Retrieve from API - CLUB SCORES (INCORRECTLY specified QUERY PARAM)


# ============
# IMPORTS
# ============
import datetime
from django.test import TestCase
from rest_framework import status


# Local imports
from main.models import VisitedURL, Club, Player, Score, Sentence, ClubSentence, ClubScore



# ========================================================================
# TEST - Models – can be entered into the database and checked for existence
# ========================================================================

class TestModels(TestCase):

	# ============
	# VisitedURL
	# ============

	# 1. URL can be created and found
	def test_visited_url_create_exists(self):
		"""Test should return True that a URL was created and found in the DB"""
		test_url_entry = VisitedURL.objects.create(url="https://www.valentinog.com/blog/testing-django/", date_visited=datetime.datetime.now().date())
		self.assertEqual(VisitedURL.objects.filter(url="https://www.valentinog.com/blog/testing-django/").exists(), True)

	# 2. URL does not return true when it doesn't exist
	def test_visited_url_does_not_exit(self):
		"""Test should return False that URL does not exist in DB"""
		self.assertEqual(VisitedURL.objects.filter(url="https://stackoverflow.com/questions/14186055/django-test-app-error-got-an-error-creating-the-test-database-permission-deni").exists(), False)


	# ============
	# Clubs
	# ============

	# 3. Create new club
	def test_new_club(self):
		"""Test should return True - new club exists in DB """
		test_club_entry = Club.objects.create(club="Testy Test")
		self.assertEqual(Club.objects.all().count(), 1)



	# ============
	# Players - Relationship with Club & Player exists
	# ============

	# 4. Create new player with club relationship
	def test_new_player(self):
		"""Test should return True - new player exists in DB. Also that a relationship with new club exists"""

		test_club_entry = Club.objects.create(club="Testy Test")
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		# Check item exists
		self.assertEqual(Player.objects.all().count(), 1)
		# Check player name = "Mr. Test"
		self.assertEqual(Player.objects.filter(player="Mr. Test").exists(), True)


	# ============
	# Players Scores - Relationship between player and club || Relationship between player and score
	# ============

	#  5. Create new score  with relationships
	def test_new_player_score(self):
		"""Test should assert that a score can be created with a relationship to a player - and that player also has a relationship to a club"""

		test_club_entry = Club.objects.create(club="Testy Test")
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		test_score_entry = Score.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			club="Testy Test",
			date=datetime.datetime.now().date(),
			field_position="GK",
			nationality="Germany",
			sentiment_score=0.75,
			n_positive=1209,
			n_negative=1002,
			n_neutral=3033,
			total_reviews=10923
			)
		# Check item exists
		self.assertEqual(Score.objects.all().count(), 1)
		# Check Sentiment Score = 0.75
		self.assertEqual(Score.objects.filter(player_name="Mr. Test").exists(), True)

	# ============
	# Players Sentences - Relationship between player and club || Relationship between player and sentence
	# ============

	# 6. Create new sentence with relationships
	def test_new_player_sentence(self):
		"""Test should assert that new player sentence exists and that there is a relationship between the player and the sentence- and that player also has a relationship to a club"""
		test_club_entry = Club.objects.create(club="Testy Test")
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		test_sentence_entry = Sentence.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Mr. Test had a great game today!"
			)
		# Check item exists
		self.assertEqual(Sentence.objects.all().count(), 1)
		# Check Sentiment Score = 0.75
		self.assertEqual(Sentence.objects.filter(media_source="The Testy Gazette").exists(), True)

	# ============
	# Club Scores -  Relationship between club and score
	# ============

	# 7. Create new club score with relationships
	def test_new_club_score(self):
		"""Test should assert that new club score exists and that score has a relationship to a club"""
		test_club_entry = Club.objects.create(club="Testy Test")
		test_score_entry = ClubScore.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			sentiment_score=0.81,
			n_positive=1000,
			n_negative=123,
			n_neutral=3033,
			total_reviews=10923
			)
		# Check item exists
		self.assertEqual(ClubScore.objects.all().count(), 1)
		# Check Sentiment Score = 0.75
		self.assertEqual(ClubScore.objects.filter(n_positive=1000).exists(), True)


	# ============
	# Club Sentence -  Relationship between club and sentence
	# ============

	# 8. Create new club sentence with relationships
	def test_new_club_sentence(self):
		"""Test should assert that new club sentence exists and that sentence has a relationship to a club"""
		test_club_entry = Club.objects.create(club="Testy Test")
		test_sentence_entry = ClubSentence.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Testy Test had a great game today!"
			)
		# Check item exists
		self.assertEqual(ClubSentence.objects.all().count(), 1)
		# Check Sentiment Score = 0.75
		self.assertEqual(ClubSentence.objects.filter(media_source="The Testy Gazette").exists(), True)



# ========================================================================
# TEST - API CONNECTION – ensure that a connection can be made to the REST API
# ========================================================================


class TestAPIConnection(TestCase):

	# ============
	# 9. Check connection to API - CLUBS
	# ============
	def test_club_data_access(self):
		"""Test should assert that API connection to '/api/clubs/ returns a status code 200"""

		# Code to make request to the api using the built-in client taken from API Guide on Django Rest Framework site
		# https://www.django-rest-framework.org/api-guide/testing/#checking-the-response-data
		# Accessed 01-07-2020
		response = self.client.get('/api/clubs/', format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)
		# End of referenced code

	# ============
	# 10. Check connection to API - PLAYERS
	# ============

	def test_player_data_access(self):
		"""Test should assert that API connection to '/api/players/ returns a status code 200"""

		response = self.client.get('/api/players/', format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)


	# ============
	# 11. Check connection to API - SCORES
	# ============

	def test_scores_data_access(self):
		"""Test should assert that API connection to '/api/scores/' returns a status code 200"""
		response = self.client.get('/api/scores/', format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)


	# ============
	# 12. Check connection to API - SENTENCES
	# ============

	def test_sentences_data_access(self):
		"""Test should assert that API connection to '/api/sentences/' returns a status code 200"""
		response = self.client.get('/api/sentences/', format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)


	# ============
	# 13. Check connection to API - CLUB SENTENCES
	# ============

	def test_clubsentences_data_access(self):
		"""Test should assert that API connection to '/api/clubsentences/' returns a status code 200"""
		response = self.client.get('/api/clubsentences/', format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)


	# ============
	# 14. Check connection to API - CLUB SCORES
	# ============

	def test_clubscores_data_access(self):
		"""Test should assert that API connection to '/api/clubscores/' returns a status code 200"""
		response = self.client.get('/api/clubscores/', format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)



# ========================================================================
# TEST - API DATA RETRIEVAL PLAIN – ensure that data can be retrieved from the REST API
# ========================================================================

class TestAPIDataRetrieval(TestCase):

	# ============
	# 15. Retrieve from API - CLUBS
	# ============

	def test_clubs_data_retrieval(self):
		"""Test should assert that newly created club object can be retrieved through the route '/api/clubs/'"""
		
		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Get the response
		response = self.client.get('/api/clubs/', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)


	# ============
	# 16. Retrieve from API - PLAYERS
	# ============

	def test_players_data_retrieval(self):
		"""Test should assert that newly created player object can be retreived through the route '/api/players/"""

		# Create new player 
		test_club_entry = Club.objects.create(club="Testy Test")
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)

		# Get the response
		response = self.client.get('/api/players/', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)

	# ============
	# 17. Retrieve from API - CLUB SCORES
	# ============

	def test_clubscores_data_retrieval(self):
		"""Test should assert that newly created club score object can be retrieved through the route '/api/clubscores' """

		test_club_entry = Club.objects.create(club="Testy Test")
		test_score_entry = ClubScore.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			sentiment_score=0.81,
			n_positive=1000,
			n_negative=123,
			n_neutral=3033,
			total_reviews=10923
			)

		# Get the response
		response = self.client.get('/api/clubscores/', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)


	# ============
	# 18. Retrieve from API - CLUB SENTENCES
	# ============

	def test_clubsentences_data_retrieval(self):
		"""Test should assert that newly created club sentence object can be retrieved through the route '/api/clubsentences' """

		test_club_entry = Club.objects.create(club="Testy Test")
		test_sentence_entry = ClubSentence.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Testy Test had a great game today!"
			)

		# Get the response
		response = self.client.get('/api/clubsentences/', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)


	# ============
	# 19. Retrieve from API - PLAYER SCORES
	# ============

	def test_playerscores_data_retrieval(self):
		"""Test should assert that newly created player score object can be retrieved through the route '/api/scores'"""
		test_club_entry = Club.objects.create(club="Testy Test")
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		test_score_entry = Score.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			club="Testy Test",
			date=datetime.datetime.now().date(),
			field_position="GK",
			nationality="Germany",
			sentiment_score=0.75,
			n_positive=1209,
			n_negative=1002,
			n_neutral=3033,
			total_reviews=10923
			)

		# Get the response
		response = self.client.get('/api/scores/', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)



	# ============
	# 20. Retrieve from API - PLAYER SENTENCES
	# ============

	def test_playersentences_data_retrieval(self):
		"""Test should assert that newly created player sentence object can be retrieved through the route '/api/sentences/'"""
		test_club_entry = Club.objects.create(club="Testy Test")
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		test_sentence_entry = Sentence.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Mr. Test had a great game today!"
			)
		# Get the response
		response = self.client.get('/api/sentences/', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)




# ========================================================================
# TEST - API DATA RETRIEVAL WITH FILTER – ensure that data can be retrieved from the REST API using a filter query
# ========================================================================


class TestAPIDataRetrievalWithFilter(TestCase):

	# ============
	# 21. Retrieve from API - CLUBS (CORRECTLY specified FILTER)
	# ============

	def test_clubs_data_filter(self):
		"""Test should assert that newly created club object can be retrieved through the route '/api/clubs/?clubname=Testy%20Test'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Get the response
		response = self.client.get('/api/clubs/?clubname=Testy%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)


	# ============
	# 22. Retrieve from API - CLUBS (INCORRECTLY specified FILTER)
	# ============
	def test_clubs_data_filter_incorrect_filter(self):
		"""Test should assert that newly created club object CANNOT be retrieved through the route '/api/clubs/?clubname=Testy%20TestWRONG'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Get the response
		response = self.client.get('/api/clubs/?clubname=Testy%20TestWRONG', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 0)


	# ============
	# 23. Retrieve from API - CLUBS (INCORRECTLY specified QUERY PARAM)
	# ============
	def test_clubs_data_filter_incorrect_query(self):
		"""Test should assert that newly created club object CANNOT be retrieved through the route '/api/clubs/?club_name=Testy%20Test' - instead this should return all clubs"""

		# Create new clubs
		test_club_entry = Club.objects.create(club="Testy Test")
		test_club_entry_two = Club.objects.create(club="Testy Test Two")

		# Get the response
		response = self.client.get('/api/clubs/?club_name=Testy%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 2)


	# ============
	# 24. Retrieve from API - PLAYERS (CORRECTLY specified filter)
	# ============

	def test_players_data_filter(self):
		"""Test should assert that newly created player object can be retrieved through the route '/api/players/?playername=Mr.%20Test'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new player
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)

		# Get the response
		response = self.client.get('/api/players/?playername=Mr.%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)


	# ============
	# 25. Retrieve from API - PLAYERS (INCORRECTLY specified filter)
	# ============

	def test_players_data_filter_incorrect_filter(self):
		"""Test should assert that newly created player object CANNOT be retrieved through the route '/api/players/?playername=Mr.%20TestWRONG'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new player
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)

		# Get the response
		response = self.client.get('/api/players/?playername=Mr.%20TestWRONG', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 0)

	# ============
	# 26. Retrieve from API - PLAYERS (INCORRECTLY specified QUERY PARAM)
	# ============

	def test_players_data_filter_incorrect_query(self):
		"""Test should assert that newly created player object CANNOT be retrieved through the route '/api/players/?player_name=Mr.%20TestWRONG' - instead this should return all players"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new player
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		test_player_entry_two = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test Two",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)

		# Get the response
		response = self.client.get('/api/players/?player_name=Mr.%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 2)


	# ============
	# 27. Retrieve from API - SCORES (CORRECTLY specified FILTER)
	# ============

	def test_scores_data_filter(self):
		"""Test should assert that newly created scores object can be retrieved through the route '/api/scores/?playername=Mr.%20Test'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new player
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		test_score_entry = Score.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			club="Testy Test",
			date=datetime.datetime.now().date(),
			field_position="GK",
			nationality="Germany",
			sentiment_score=0.75,
			n_positive=1209,
			n_negative=1002,
			n_neutral=3033,
			total_reviews=10923
			)

		# Get the response
		response = self.client.get('/api/scores/?playername=Mr.%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)


	# ============
	# 28. Retrieve from API - SCORES (INCORRECTLY specified FILTER)
	# ============

	def test_scores_data_filter_incorrect_filter(self):
		"""Test should assert that newly created scores object CANNOT be retrieved through the route '/api/scores/?playername=Mr.%20TestWRONG'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new player
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		test_score_entry = Score.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			club="Testy Test",
			date=datetime.datetime.now().date(),
			field_position="GK",
			nationality="Germany",
			sentiment_score=0.75,
			n_positive=1209,
			n_negative=1002,
			n_neutral=3033,
			total_reviews=10923
			)

		# Get the response
		response = self.client.get('/api/scores/?playername=Mr.%20TestWRONG', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 0)



	# ============
	# 29. Retrieve from API - SCORES (INCORRECTLY specified QUERY PARAM)
	# ============

	def test_scores_data_filter_incorrect_query(self):
		"""Test should assert that newly created scores object CANNOT be retrieved through the route '/api/scores/?player_name=Mr.%20Test' - instead this should return all scores"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new player
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		test_score_entry = Score.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			club="Testy Test",
			date=datetime.datetime.now().date(),
			field_position="GK",
			nationality="Germany",
			sentiment_score=0.75,
			n_positive=1209,
			n_negative=1002,
			n_neutral=3033,
			total_reviews=10923
			)

		# Create another player
		test_player_entry_two = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test TWO",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		test_score_entry_two = Score.objects.create(
			player=Player.objects.get(player="Mr. Test TWO"),
			player_name="Mr. Test TWO",
			club="Testy Test",
			date=datetime.datetime.now().date(),
			field_position="GK",
			nationality="Germany",
			sentiment_score=0.75,
			n_positive=1209,
			n_negative=1002,
			n_neutral=3033,
			total_reviews=10923
			)

		# Get the response
		response = self.client.get('/api/scores/?player_name=Mr.%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 2)


	# ============
	# 30. Retrieve from API - SENTENCES (CORRECTLY specified FILTER)
	# ============

	def test_sentences_data_filter(self):
		"""Test should assert that newly created sentence object can be retrieved through the route '/api/sentences/?playername=Mr.%20Test'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new player
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		# Create new sentence object
		test_sentence_entry = Sentence.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Mr. Test had a great game today!"
			)

		# Get the response
		response = self.client.get('/api/sentences/?playername=Mr.%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)



	# ============
	# 31. Retrieve from API - SENTENCES (INCORRECTLY specified FILTER)
	# ============

	def test_sentences_data_filter_incorrect_filter(self):
		"""Test should assert that newly created sentence object CANNOT be retrieved through the route '/api/sentences/?playername=Mr.%20TestWRONG'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new player
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		# Create new sentence object
		test_sentence_entry = Sentence.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Mr. Test had a great game today!"
			)

		# Get the response
		response = self.client.get('/api/sentences/?playername=Mr.%20TestWRONG', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 0)


	# ============
	# 32. Retrieve from API - SENTENCES (INCORRECTLY specified QUERY PARAM)
	# ============

	def test_sentences_data_filter_incorrect_query(self):
		"""Test should assert that newly created sentence object CANNOT be retrieved through the route '/api/sentences/?player_name=Mr.%20Test' - instead this should return all sentences"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new player
		test_player_entry = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		# Create new sentence object
		test_sentence_entry = Sentence.objects.create(
			player=Player.objects.get(player="Mr. Test"),
			player_name="Mr. Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Mr. Test had a great game today!"
			)

		# Create another player
		test_player_entry_two = Player.objects.create(
			club=Club.objects.get(club="Testy Test"),
			player="Mr. Test TWO",
			club_name="Testy Test",
			position="GK",
			nationality="Germany" 
			)
		# Create another sentence object
		test_sentence_entry_two = Sentence.objects.create(
			player=Player.objects.get(player="Mr. Test TWO"),
			player_name="Mr. Test TWO",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Mr. Test had a great game today!"
			)

		# Get the response
		response = self.client.get('/api/sentences/?player_name=Mr.%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 2)


	# ============
	# 33. Retrieve from API - CLUB SENTENCES (CORRECTLY specified Filter)
	# ============

	def test_clubsentences_data_filter(self):
		"""Test should assert that newly created club sentence object can be retrieved through the route '/api/clubsentences/?clubname=Testy%20Test'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new club sentence
		test_sentence_entry = ClubSentence.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Testy Test had a great game today!"
			)

		# Get the response
		response = self.client.get('/api/clubsentences/?clubname=Testy%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)


	# ============
	# 34. Retrieve from API - CLUB SENTENCES (INCORRECTLY specified Filter)
	# ============

	def test_clubsentences_data_filter_incorrect_filter(self):
		"""Test should assert that newly created club sentence object CANNOT be retrieved through the route '/api/clubsentences/?clubname=Testy%20TestWRONG'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new club sentence
		test_sentence_entry = ClubSentence.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Testy Test had a great game today!"
			)

		# Get the response
		response = self.client.get('/api/clubsentences/?clubname=Testy%20TestWRONG', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 0)


	# ============
	# 35. Retrieve from API - CLUB SENTENCES (INCORRECTLY specified QUERY PARAM)
	# ============

	def test_clubsentences_data_filter_incorrect_query(self):
		"""Test should assert that newly created club sentence object CANNOT be retrieved through the route '/api/clubsentences/?club_name=Testy%20Test'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new club sentence
		test_sentence_entry = ClubSentence.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Testy Test had a great game today!"
			)

		# Create another club
		test_club_entry_two = Club.objects.create(club="Testy Test TWO")

		# Create new club sentence
		test_sentence_entry_two = ClubSentence.objects.create(
			club=Club.objects.get(club="Testy Test TWO"),
			club_name="Testy Test TWO",
			date=datetime.datetime.now().date(),
			media_source="The Testy Gazette",
			url="https://www.test.com/",
			sentiment="POSITIVE",
			original_sentence="Testy Test had a great game today!"
			)

		# Get the response
		response = self.client.get('/api/clubsentences/?club_name=Testy%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 2)


	# ============
	# 36. Retrieve from API - CLUB SCORES (CORRECTLY specified FILTER)
	# ============

	def test_clubscores_data_filter(self):
		"""Test should assert that newly created club scores object can be retrieved through the route '/api/clubscores/?clubname=Testy%20Test'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new club score entry
		test_score_entry = ClubScore.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			sentiment_score=0.81,
			n_positive=1000,
			n_negative=123,
			n_neutral=3033,
			total_reviews=10923
			)

		# Get the response
		response = self.client.get('/api/clubscores/?clubname=Testy%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 1)



	# ============
	# 37. Retrieve from API - CLUB SCORES (INCORRECTLY specified FILTER)
	# ============

	def test_clubscores_data_filter_incorrect_filter(self):
		"""Test should assert that newly created club scores object CANNOT be retrieved through the route '/api/clubscores/?clubname=Testy%20TestWRONG'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new club score entry
		test_score_entry = ClubScore.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			sentiment_score=0.81,
			n_positive=1000,
			n_negative=123,
			n_neutral=3033,
			total_reviews=10923
			)

		# Get the response
		response = self.client.get('/api/clubscores/?clubname=Testy%20TestWRONG', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 0)


	# ============
	# 38. Retrieve from API - CLUB SCORES (INCORRECTLY specified QUERY PARAM)
	# ============

	def test_clubscores_data_filter_incorrect_filter(self):
		"""Test should assert that newly created club scores object CANNOT be retrieved through the route '/api/clubscores/?club_name=Testy%20Test'"""

		# Create new club
		test_club_entry = Club.objects.create(club="Testy Test")

		# Create new club score entry
		test_score_entry = ClubScore.objects.create(
			club=Club.objects.get(club="Testy Test"),
			club_name="Testy Test",
			date=datetime.datetime.now().date(),
			sentiment_score=0.81,
			n_positive=1000,
			n_negative=123,
			n_neutral=3033,
			total_reviews=10923
			)

		# Create another club
		test_club_entry_two = Club.objects.create(club="Testy Test TWO")

		# Create another club score entry
		test_score_entry_two = ClubScore.objects.create(
			club=Club.objects.get(club="Testy Test TWO"),
			club_name="Testy Test TWO",
			date=datetime.datetime.now().date(),
			sentiment_score=0.81,
			n_positive=1000,
			n_negative=123,
			n_neutral=3033,
			total_reviews=10923
			)

		# Get the response
		response = self.client.get('/api/clubscores/?club_name=Testy%20Test', format='json')

		# Check the length of the response data object
		self.assertEqual(len(response.data), 2)




