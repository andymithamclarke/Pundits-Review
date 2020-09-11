# =======================
# This file contains a REST serializer which will convert the Django model into a JSON so that the front-end can access data
# =======================

# ============
# IMPORTS 
# ============

from rest_framework import serializers
from .models import Score, Sentence, Player, PlayerAgreeDisagree, ClubScore, ClubSentence, Club, ClubAgreeDisagree, BlogPost


# ==================
# PLAYERS serializers
# ==================


# The Serializer for Sentiment Scores
class ScoreSerializer(serializers.ModelSerializer):

	# Meta information to setup the serializer
	class Meta:
		model = Score
		fields = ('player', 'player_name', 'club', 'date', 'field_position', 'nationality', 'sentiment_score', 'n_positive', 'n_negative', 'n_neutral', 'total_reviews')


# The Serializer for Original Sentences
class SentenceSerializer(serializers.ModelSerializer):

	# Meta information to setup the serializer
	class Meta:
		model = Sentence
		fields = ('player', 'player_name', 'date', 'media_source', 'url', 'sentiment', 'original_sentence')


# The Serializer for Player Agree Disagree Scores
class PlayerAgreeDisagreeSerializer(serializers.ModelSerializer):

	# Meta information to setup the serializer
	class Meta:
		model = PlayerAgreeDisagree
		fields = ('id', 'player', 'player_name', 'date', 'agree_score', 'disagree_score')


# The Serializer for Players
class PlayerSerializer(serializers.ModelSerializer):

	# Link to the score serializer
	scores = ScoreSerializer(many=True, read_only=True)

	# Link to the sentences serializer
	sentences = SentenceSerializer(many=True, read_only=True)

	# Link to player agree disagree serializer
	player_agree_disagree = PlayerAgreeDisagreeSerializer(many=True)

	# Meta information to setup the serializer
	class Meta:
		model = Player
		fields = ['id', 'player', 'club', 'club_name', 'position', 'nationality', 'scores', 'sentences', 'player_agree_disagree']

# Serializer for Searching Clubs
class PlayerSearchSerializer(serializers.ModelSerializer):

	class Meta:
		model = Player
		fields = ('id','player')

# ==================
# CLUBS serializers
# ==================

# The Serializer for Sentiment Scores - CLUBS
class ClubScoreSerializer(serializers.ModelSerializer):

	# Meta information to setup the serializer
	class Meta:
		model = ClubScore
		fields = ('club', 'club_name', 'date', 'sentiment_score', 'n_positive', 'n_negative', 'n_neutral', 'total_reviews')


# The Serializer for Original Sentences - CLUBS
class ClubSentenceSerializer(serializers.ModelSerializer):

	# Meta information to setup the serializer
	class Meta:
		model = ClubSentence
		fields = ('club', 'club_name', 'date', 'media_source', 'url', 'sentiment', 'original_sentence')

# The Serializer for Player Agree Disagree Scores
class ClubAgreeDisagreeSerializer(serializers.ModelSerializer):

	# Meta information to setup the serializer
	class Meta:
		model = ClubAgreeDisagree
		fields = ('id', 'club', 'club_name', 'date', 'agree_score', 'disagree_score')

# The Serializer for Clubs
class ClubSerializer(serializers.ModelSerializer):

	# Link to Players Serializer
	players = PlayerSerializer(many=True, read_only=True)

	# Link to the ClubScore serializer
	club_scores = ClubScoreSerializer(many=True, read_only=True)

	# Link to the ClubSentence serializer
	club_sentences = ClubSentenceSerializer(many=True, read_only=True)

	# Link to the ClubAgreeDisagree serializer
	club_agree_disagree = ClubAgreeDisagreeSerializer(many=True, read_only=True)

	# Meta information to setup the serializer
	class Meta:
		model = Club
		fields = ('id', 'club', 'club_scores', 'club_sentences', 'club_agree_disagree', 'players')


# Serializer for Searching Clubs
class ClubSearchSerializer(serializers.ModelSerializer):

	class Meta:
		model = Club
		fields = ('id','club')



# Serializer for Blog Posts
class BlogPostSerializer(serializers.ModelSerializer):

	# Meta information to setup the serializer
	class Meta:
		model = BlogPost
		fields = ('post_name', 'header_image_url', 'headline', 'thumbs_par', 'crawl_date', 'player_one_name', 'player_two_name', 'player_three_name', 'player_four_name', 'club_one_name', 'club_two_name', 'date_text', 'par_one', 'par_two', 'par_three', 'par_four', 'par_five', 'par_six', 'par_seven', 'par_eight', 'pull_quote_one', 'pull_quote_two', 'pull_quote_three', 'player_one_rank', 'player_two_rank', 'player_three_rank')

