# ================
# URL patterns available for front-end site: https://www.punditsreview.com/
# ================

from django.urls import re_path
from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('results', views.index ),
    path('error', views.index ),
    path('players/<str:player_name>', views.playerpage ),
    path('clubs/<str:club_name>', views.clubpage ),
    path('playerrankings', views.index ),
    path('howitworks', views.index ),
    path('blog', views.index ),
    path('blogpost/<str:post_name>', views.blog),
    # Redirect any other URL to front end - Unregisted patterns are handled by React rather than Django
    re_path('.*/', views.index ),
]