# =======================
# This file links the scrapy process to the Django Models; 'Score', 'Sentence', 'ClubScore' & 'ClubSentence'
# =======================

# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy_djangoitem import DjangoItem


# Accessing top level
import sys
sys.path.append("..")
from main.models import Score, Sentence, ClubScore, ClubSentence, VisitedURL


# =================
# FOR PLAYERS
# =================

# Sentiment Score - convert the django model into a scrapy django item
class ScoreItem(DjangoItem):
	django_model = Score


# Original Sentences - convert the django model into a scrapy django item
class SentenceItem(DjangoItem):
	django_model = Sentence


# =================
# FOR CLUBS
# =================

# Sentiment Score - convert the django model into a scrapy django item
class ClubScoreItem(DjangoItem):
	django_model = ClubScore


# Original Sentences - convert the django model into a scrapy django item
class ClubSentenceItem(DjangoItem):
	django_model = ClubSentence


# =================
# FOR URLs
# =================

# VisitedURL - convert the django model into a scrapy django item
class VisitedURLItem(DjangoItem):
	django_model = VisitedURL