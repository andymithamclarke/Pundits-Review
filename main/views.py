# =========================
# This file contains the Django Views used to specify API routes which can be accessed by the front-end
# =========================



# =============
# IMPORTS 
# =============
from django.shortcuts import render
from django.http import Http404
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import filters

# Local imports 
from .models import Score, Sentence, Player, PlayerAgreeDisagree, ClubScore, ClubSentence, Club, ClubAgreeDisagree, BlogPost
from .serializers import ScoreSerializer, SentenceSerializer, PlayerSerializer, PlayerAgreeDisagreeSerializer, PlayerSearchSerializer, ClubScoreSerializer, ClubSentenceSerializer, ClubSerializer, ClubAgreeDisagreeSerializer, ClubSearchSerializer, BlogPostSerializer


# =========================================================
# PLAYER VIEWS
# =========================================================



#===================
# The Score API view - Filter by playername
#===================
class ScoreListCreate(generics.ListCreateAPIView):
	queryset = Score.objects.all()

	# Declare serializer_class
	serializer_class = ScoreSerializer

	# Setting the filter options
	def get_queryset(self):
		""" Optionally restricts the returned player scores to a user by filtering against a `playername` query parameter in the URL. """

		# Initially set the returned objects to be all sentences
		queryset = Score.objects.all()

		# Access the request params
		playername = self.request.query_params.get('playername', None)

		# If a player name is specified ---> Set the filter
		if playername is not None:
			queryset = queryset.filter(player_name=playername)

		# Return the appropriate queryset
		return queryset


#===================
# The Sentence API view - Filter by playername
#===================
class SentenceListCreate(generics.ListCreateAPIView):
	
	# Declare serializer_class
	serializer_class = SentenceSerializer

	# Setting the filter options 
	def get_queryset(self):
		""" Optionally restricts the returned player sentences to a user by filtering against a `playername` query parameter in the URL. """

		# Initially set the returned objects to be all sentences
		queryset = Sentence.objects.all()

		# Access the request params
		playername = self.request.query_params.get('playername', None)

		# If a player name is specified ---> Set the filter
		if playername is not None:
			queryset = queryset.filter(player_name=playername)

		# Return the appropriate queryset
		return queryset


#===================
# The Player Agree Disagree GET API view - Filter by playername & date
#===================
class PlayerAgreeDisagreeListCreate(APIView):
	
	# Declare serializer_class
	serializer_class = PlayerAgreeDisagreeSerializer

	# GET REQUEST 
	# Setting the filter options 
	def get(self, request, format=None):
		""" Optionally restricts the returned player agree disagree scores to a user by filtering against a `playername` query parameter in the URL. """

		# Initially set the returned objects to be all sentences
		queryset = PlayerAgreeDisagree.objects.all()

		# Access the request params
		playername = self.request.query_params.get('playername', None)
		date_param = self.request.query_params.get('date', None)

		# If a player name is specified ---> Set the filter
		if date_param is not None and playername is not None:
			queryset = queryset.filter(date=date_param)
			queryset = queryset.filter(player_name=playername)

		# Define instance of the serializer data
		serializer = PlayerAgreeDisagreeSerializer(queryset, many=True)

		# Return the appropriate queryset
		return Response(serializer.data)



#===================
# The Player Agree Disagree UPDATE API view - Filter by playername
#===================
class PlayerAgreeDisagreeDetailCreate(generics.RetrieveUpdateDestroyAPIView):

	queryset = PlayerAgreeDisagree.objects.all()
	serializer_class = PlayerAgreeDisagreeSerializer



#===================
# The Player API view - Filter by playername
#===================
class PlayerListCreate(generics.ListCreateAPIView):

	# Declare serializer_class
	serializer_class = PlayerSerializer

	# Allow search functionality
	search_fields = ['player']
	filter_backends = (filters.SearchFilter,)

	# Setting the filter options
	def get_queryset(self):
		""" Optionally restricts the returned players to a  user by filtering against a `playername` query parameter in the URL. """

		# Initially set the returned objects to be all players
		queryset = Player.objects.all()

		# Access the request params
		playername = self.request.query_params.get('playername', None)

		# If a player name is specified ---> Set the filter
		if playername is not None:
			queryset = queryset.filter(player=playername)

		# Return the appropriate queryset
		return queryset


#===================
# The Player Search API view - Filter by playername
#===================
class PlayerSearchListCreate(generics.ListCreateAPIView):

	# Declare serializer_class
	serializer_class = PlayerSearchSerializer

	# Allow search functionality
	search_fields = ['player']
	filter_backends = (filters.SearchFilter,)

	# Setting the filter options
	def get_queryset(self):
		""" Optionally restricts the returned players to a user by filtering against a `playername` query parameter in the URL. """

		# Initially set the returned objects to be all players
		queryset = Player.objects.all()

		# Access the request params
		playername = self.request.query_params.get('playername', None)

		# If a club name is specified ---> Set the filter
		if playername is not None:
			queryset = queryset.filter(player=playername)

		return queryset



# =========================================================
# CLUB VIEWS
# =========================================================


#===================
# The ClubScore API view - Filter by clubname
#===================

class ClubScoreListCreate(generics.ListCreateAPIView):

	# Declare serializer_class
	serializer_class = ClubScoreSerializer

	# Allow search functionality
	search_fields = ['club_name']
	filter_backends = (filters.SearchFilter,)

	# Setting the filter options
	def get_queryset(self):
		""" Optionally restricts the returned club scores to a  user by filtering against a `clubname` query parameter in the URL. """

		# Initially set the returned objects to be all club scores
		queryset = ClubScore.objects.all()

		# Access the request params
		clubname = self.request.query_params.get('clubname', None)

		# If a club name is specified ---> Set the filter
		if clubname is not None:
			queryset = queryset.filter(club_name=clubname)

		return queryset




#===================
# The ClubSentence API view - Filter by clubname
#===================

class ClubSentenceListCreate(generics.ListCreateAPIView):
	
	# Declare serializer_class
	serializer_class = ClubSentenceSerializer

	# Setting the filter options
	def get_queryset(self):
		""" Optionally restricts the returned club sentences to a  user by filtering against a `clubname` query parameter in the URL. """

		# Initially set the returned objects to be all club sentences
		queryset = ClubSentence.objects.all()

		# Access the request params
		clubname = self.request.query_params.get('clubname', None)

		# If a club name is specified ---> Set the filter
		if clubname is not None:
			queryset = queryset.filter(club_name=clubname)

		return queryset


#===================
# The CLUB Agree Disagree GET API view - Filter by clubname & date
#===================
class ClubAgreeDisagreeListCreate(APIView):
	
	# Declare serializer_class
	serializer_class = ClubAgreeDisagreeSerializer

	# GET REQUEST 
	# Setting the filter options 
	def get(self, request, format=None):
		""" Optionally restricts the returned clubs agree disagree scores to a user by filtering against a `clubname`  & 'date' query parameter in the URL. """

		# Initially set the returned objects to be all sentences
		queryset = ClubAgreeDisagree.objects.all()

		# Access the request params
		clubname = self.request.query_params.get('clubname', None)
		date_param = self.request.query_params.get('date', None)

		# If a player name is specified ---> Set the filter
		if date_param is not None and clubname is not None:
			queryset = queryset.filter(date=date_param)
			queryset = queryset.filter(club_name=clubname)

		# Define instance of the serializer data
		serializer = ClubAgreeDisagreeSerializer(queryset, many=True)

		# Return the appropriate queryset
		return Response(serializer.data)


#===================
# The CLUB Agree Disagree UPDATE API view
#===================
class ClubAgreeDisagreeDetailCreate(generics.RetrieveUpdateDestroyAPIView):

	queryset = ClubAgreeDisagree.objects.all()
	serializer_class = ClubAgreeDisagreeSerializer



#===================
# The Club API view - Filter by clubname
#===================

class ClubListCreate(generics.ListCreateAPIView):

	# Declare serializer_class
	serializer_class = ClubSerializer

	# Allow search functionality
	search_fields = ['club']
	filter_backends = (filters.SearchFilter,)

	# Setting the filter options
	def get_queryset(self):
		""" Optionally restricts the returned clubs to a user by filtering against a `clubname` query parameter in the URL. """

		# Initially set the returned objects to be all clubs
		queryset = Club.objects.all()

		# Access the request params
		clubname = self.request.query_params.get('clubname', None)

		# If a club name is specified ---> Set the filter
		if clubname is not None:
			queryset = queryset.filter(club=clubname)

		return queryset


#===================
# The Club Search API view - Filter by clubname
#===================
class ClubSearchListCreate(generics.ListCreateAPIView):

	# Declare serializer_class
	serializer_class = ClubSearchSerializer

	# Allow search functionality
	search_fields = ['club']
	filter_backends = (filters.SearchFilter,)

	# Setting the filter options
	def get_queryset(self):
		""" Optionally restricts the returned clubs to a user by filtering against a `clubname` query parameter in the URL. """

		# Initially set the returned objects to be all clubs
		queryset = Club.objects.all()

		# Access the request params
		clubname = self.request.query_params.get('clubname', None)

		# If a club name is specified ---> Set the filter
		if clubname is not None:
			queryset = queryset.filter(club=clubname)

		return queryset



#===================
# The Blog Post API view
#===================
class BlogPostListCreate(generics.ListCreateAPIView):

	queryset = BlogPost.objects.all()

	# Declare serializer_class
	serializer_class = BlogPostSerializer

	# Setting the filter options
	def get_queryset(self):
		""" Currently No Filter """

		# Initially set the returned objects to be all blog posts
		queryset = BlogPost.objects.all()

		# Return the appropriate queryset
		return queryset

