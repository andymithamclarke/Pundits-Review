# =========================
# This file contains API URL patters that will be used to make and send requests
# =========================

# =============
# IMPORTS 
# =============
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

# Local Imports 
from . import views



# Define the url patterns here

urlpatterns = [
    path('api/blogposts/', views.BlogPostListCreate.as_view()),
    path('api/scores/', views.ScoreListCreate.as_view()),
    path('api/sentences/', views.SentenceListCreate.as_view()),
    path('api/playeragreedisagree/', views.PlayerAgreeDisagreeListCreate.as_view()),
    path('api/playeragreedisagree/<int:pk>/', views.PlayerAgreeDisagreeDetailCreate.as_view()),
    path('api/players/', views.PlayerListCreate.as_view()),
    path('api/plainplayers/', views.PlayerSearchListCreate.as_view()),
    path('api/clubscores/', views.ClubScoreListCreate.as_view()),
    path('api/clubsentences/', views.ClubSentenceListCreate.as_view()),
    path('api/clubagreedisagree/', views.ClubAgreeDisagreeListCreate.as_view()),
    path('api/clubagreedisagree/<int:pk>/', views.ClubAgreeDisagreeDetailCreate.as_view()),
    path('api/clubs/', views.ClubListCreate.as_view()),
    path('api/plainclubs/', views.ClubSearchListCreate.as_view()),
]