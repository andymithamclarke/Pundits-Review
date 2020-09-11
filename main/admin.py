# =========================
# This file will register my models with the 'main' app
# =========================


# =============
# IMPORTS 
# =============

from django.contrib import admin

# Local imports 
from main.models import Score, Sentence, Player, PlayerAgreeDisagree, Club, ClubScore, ClubSentence, ClubAgreeDisagree, VisitedURL, BlogPost


# ===============
# Customising appearance of admin site
# ===============

# Change Site Header
admin.site.site_header = "Pundits Review - Match Report Scraper"


# ===============
# Customise Appearance of Models
# ===============

# ==========
# Players
# ==========


class PlayerDisplay(admin.ModelAdmin):

	list_display = ('player', 'club_name', 'position', 'nationality')

	list_filter = ('club_name', )

# Players Score
class ScoreDisplay(admin.ModelAdmin):

	list_display = ('player_name', 'club', 'sentiment_score', 'n_positive', 'n_negative', 'total_reviews', 'date')

	list_filter = ('date', )


# Players Sentences
class SentenceDisplay(admin.ModelAdmin):

	list_display = ('player_name', 'media_source', 'sentiment', 'original_sentence')

	list_filter = ('media_source', )

# Players Agree Disagree
class PlayerAgreeDisagreeDisplay(admin.ModelAdmin):

	list_display = ('date', 'player_name', 'agree_score', 'disagree_score')

	list_filter = ('date', )


# ==========
# Clubs
# ==========

# Clubs Score
class ClubScoreDisplay(admin.ModelAdmin):

	list_display = ('club_name', 'sentiment_score', 'n_positive', 'n_negative', 'total_reviews', 'date')

	list_filter = ('date', )


# Club Sentences
class ClubSentenceDisplay(admin.ModelAdmin):

	list_display = ('club_name', 'media_source', 'sentiment', 'original_sentence')

	list_filter = ('media_source', )

# Players Agree Disagree
class ClubAgreeDisagreeDisplay(admin.ModelAdmin):

	list_display = ('date', 'club_name', 'agree_score', 'disagree_score')

	list_filter = ('date', )

# ==========
# URLs
# ==========

class VisitedUrlDisplay(admin.ModelAdmin):

	list_display = ('date_visited','url')

	list_filter = ('date_visited', )




# ==========
# BLOG
# ==========

class BlogPostDisplay(admin.ModelAdmin):

	list_display = ('date_text','headline')

	list_filter = ('crawl_date', )




# ================
# Register your models here
# ================
admin.site.register(Score, ScoreDisplay)
admin.site.register(Sentence, SentenceDisplay)
admin.site.register(PlayerAgreeDisagree, PlayerAgreeDisagreeDisplay)
admin.site.register(Player, PlayerDisplay)
admin.site.register(Club)
admin.site.register(ClubScore, ClubScoreDisplay)
admin.site.register(ClubAgreeDisagree, ClubAgreeDisagreeDisplay)
admin.site.register(ClubSentence, ClubSentenceDisplay)
admin.site.register(VisitedURL, VisitedUrlDisplay)
admin.site.register(BlogPost, BlogPostDisplay)


