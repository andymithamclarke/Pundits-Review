# =========================
# This file contains the Django Models (Database Tables)
# =========================


# =============
# IMPORTS 
# =============

from django.db import models

# =============
# Club Model 	 ----> Fields ----->  club	
# 					   Types  ----->  char  
# =============


class Club(models.Model):

	# Declare the fields
	club = models.CharField(max_length=150)

	# Declare how the entry should appear on display
	def __str__(self):
		return "{}".format(self.club)

	# Specify the ordering of the data
	class Meta:
		ordering = ['club']


# =============
# Player Model 	 ----> Fields ----->  	club 	|	player	| club_name |	position 	|  nationality	
# 					   Types  -----> 	relation	char   	  char			char 		   char  
# =============


class Player(models.Model):

	# Link to the Club Table
	club = models.ForeignKey(Club, on_delete=models.CASCADE, related_name="players")

	# Declare the fields
	player = models.CharField(max_length=150)
	club_name = models.CharField(max_length=150)
	position = models.CharField(max_length=10)
	nationality = models.CharField(max_length=150)

	# Declare how the entry should appear on display
	def __str__(self):
		return "{}: {}, {}, {} ".format(self.player, self.club_name, self.position, self.nationality)

	# Specify the ordering of the data
	class Meta:
		ordering = ['player', 'club_name', 'position', 'nationality']




# =================================================
# PLAYER SPECIFIC MODELS
# =================================================


# =============
# (FOR PLAYERS)
# Score Model ----> Fields -----> player 	| 	club	 |   	date 		| field_position | n_negative | n_neutral | n_positive | nationality | player_name  | sentiment_score | total_reviews
# 					Types  -----> relation   	char			datefield  	  char			   integer      integer     integer      char 			char	      float			    integer
# =============

class Score(models.Model):

	# Link to Players Table
	player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name="scores")

	# Declare the fields
	player_name = models.CharField(max_length=150)
	club = models.CharField(max_length=150)
	date = models.DateField()
	field_position = models.CharField(max_length=10)
	nationality = models.CharField(max_length=150)
	sentiment_score = models.FloatField()
	n_positive = models.IntegerField()
	n_negative = models.IntegerField()
	n_neutral = models.IntegerField()
	total_reviews = models.IntegerField()


	# Declare how the entry should appear on display
	def __str__(self):
		return "{}, {}: {}".format(self.date, self.player, self.sentiment_score)

	# Specify the ordering of the data
	class Meta:
		ordering = ['date', 'player_name', 'sentiment_score']



# =============
# (FOR PLAYERS)
# Sentence Model ----> Fields ----->  player	| 	date 	|	media_source 	|  url	|	sentiment 	| original_sentence | player_name
# 					   Types  ----->  relation    	datefield	char 			   char     char          text   			  char
# =============


class Sentence(models.Model):

	# Link to Players Table
	player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name="sentences")

	# Declare the fields
	player_name = models.CharField(max_length=150)
	date = models.DateField()
	media_source = models.CharField(max_length=200)
	url = models.URLField(max_length=300)
	sentiment = models.CharField(max_length=50)
	original_sentence = models.TextField()


	# Declare how the entry should appear on display
	def __str__(self):
		return "{} - {}: {}, {} ...".format(self.media_source, self.player, self.sentiment, self.original_sentence[0:10])

	# Specify the ordering of the data
	class Meta:
		ordering = ['date', 'player_name', 'sentiment', 'media_source', 'url', 'sentiment', 'original_sentence']


# =======================================
# (FOR PLAYERS)
# Agree/Disagree Scores
# =======================================

class PlayerAgreeDisagree(models.Model):

	# Link to Player Table
	player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name="player_agree_disagree")

	# Declare the fields
	player_name = models.CharField(max_length=150)
	date = models.DateField()
	agree_score = models.IntegerField()
	disagree_score = models.IntegerField()

	# Declare how the entry should appear on display
	def __str__(self):
		return "{} - {}: Agree {}, Disagree {} ...".format(self.date, self.player_name, self.agree_score, self.disagree_score)

	# Specify the ordering of the data
	class Meta:
		ordering = ['date', 'player_name', 'agree_score', 'disagree_score']


# =================================================
# CLUB SPECIFIC MODELS
# =================================================


# =============
# (FOR CLUBS)
# Score Model ----> Fields ----->  club		 |   	date 		 | n_negative | n_neutral | n_positive  | club_name  | sentiment_score | total_reviews
# 					Types  ----->  relation   		datefield  	   integer      integer     integer       char 		   float			 integer
# =============

class ClubScore(models.Model):

	# Link to Clubs Table
	club = models.ForeignKey(Club, on_delete=models.CASCADE, related_name="club_scores")

	# Declare the fields
	club_name = models.CharField(max_length=150)
	date = models.DateField()
	sentiment_score = models.FloatField()
	n_positive = models.IntegerField()
	n_negative = models.IntegerField()
	n_neutral = models.IntegerField()
	total_reviews = models.IntegerField()


	# Declare how the entry should appear on display
	def __str__(self):
		return "{}, {}: {}".format(self.date, self.club_name, self.sentiment_score)

	# Specify the ordering of the data
	class Meta:
		ordering = ['date', 'club_name', 'sentiment_score']


# =============
# (FOR CLUBS)
# Sentence Model ----> Fields ----->  club		|     date 		|	media_source 	|  url	|	sentiment 	| original_sentence   |  club_name
# 					   Types  ----->  relation        datefield		char 			   char     char          text  				 char
# =============


class ClubSentence(models.Model):

	# Link to Clubs Table
	club = models.ForeignKey(Club, on_delete=models.CASCADE, related_name="club_sentences")

	# Declare the fields
	club_name = models.CharField(max_length=150)
	date = models.DateField()
	media_source = models.CharField(max_length=200)
	url = models.URLField(max_length=300)
	sentiment = models.CharField(max_length=50)
	original_sentence = models.TextField()


	# Declare how the entry should appear on display
	def __str__(self):
		return "{} - {}: {}, {} ...".format(self.media_source, self.club_name, self.sentiment, self.original_sentence[0:10])

	# Specify the ordering of the data
	class Meta:
		ordering = ['date', 'club_name', 'sentiment', 'media_source', 'url', 'sentiment', 'original_sentence']


# =======================================
# (FOR CLUBS)
# Agree/Disagree Scores
# =======================================

class ClubAgreeDisagree(models.Model):

	# Link to Clubs Table
	club = models.ForeignKey(Club, on_delete=models.CASCADE, related_name="club_agree_disagree")

	# Declare the fields
	club_name = models.CharField(max_length=150)
	date = models.DateField()
	agree_score = models.IntegerField()
	disagree_score = models.IntegerField()

	# Declare how the entry should appear on display
	def __str__(self):
		return "{} - {}: Agree {}, Disagree {} ...".format(self.date, self.club_name, self.agree_score, self.disagree_score)

	# Specify the ordering of the data
	class Meta:
		ordering = ['date', 'club_name', 'agree_score', 'disagree_score']



# =======================================
# URL MODEL
# =======================================

class VisitedURL(models.Model):

	# Declare the fields 
	url = models.URLField(max_length=300)
	date_visited = models.DateField()

	# Declare how the entry should appear on display
	def __str__(self):
		return "{}: {}".format(self.date_visited, self.url)

	# Specify the ordering of the data
	class Meta:
		ordering = ['date_visited', 'url']







# =================================================
# BLOG MODELS
# =================================================


# =============
# POST Model ----> Fields -----> post_name 	| 	header_image_url	 |   	headline 		| thumbs_par | crawl_date | player_one_name | player_two_name | player_three_name | player_four_name  | player_five_name | club_one_name  | club_two_name | date_text | par_one  | par_two | par_three | par_four | par_five | par_six | par_seven | par_eight | pull_quote_one | pull_quote_two | pull_quote_three | player_one_rank | player_two_rank | player_three_rank
#
# =============




class BlogPost(models.Model):

	# Declare the fields 
	post_name = models.TextField()
	header_image_url = models.URLField(max_length=500)
	headline = models.CharField(max_length=300)
	thumbs_par = models.TextField()
	crawl_date = models.DateField()
	player_one_name = models.CharField(max_length=300)
	player_two_name = models.CharField(max_length=300)
	player_three_name = models.CharField(max_length=300)
	player_four_name = models.CharField(max_length=300)
	club_one_name = models.CharField(max_length=300)
	club_two_name = models.CharField(max_length=300)
	date_text = models.CharField(max_length=150)
	par_one = models.TextField()
	par_two = models.TextField()
	par_three = models.TextField()
	par_four = models.TextField()
	par_five = models.TextField()
	par_six = models.TextField()
	par_seven = models.TextField()
	par_eight = models.TextField()
	pull_quote_one = models.TextField()
	pull_quote_two = models.TextField()
	pull_quote_three = models.TextField()
	player_one_rank = models.CharField(max_length=10)
	player_two_rank = models.CharField(max_length=10)
	player_three_rank = models.CharField(max_length=10)
	

	# Declare how the entry should appear on display
	def __str__(self):
		return "{}".format(self.headline)

	# Specify the ordering of the data
	class Meta:
		ordering = ['date_text', 'headline']



