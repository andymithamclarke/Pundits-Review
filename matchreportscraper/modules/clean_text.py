# =========================
# This file contains a function to clean the scraped text of irregularities
# =========================

# Irregularities found:

	# - '\n' can appear within the body of the text
	# - <p> elements can be too short and thus useless 


# Solutions implemented:

	# - Returning the <p> element only if it's str(length) is greater than 10 chars


# __Note__: 
# Expecting that there will be more solutions required as the volume of the corpus increases


# ================
# IMPORTS 
# ================

import re


# Function to remove tags 
# Code taken from stack overflow post by Amber on Mar 12 '12
# https://stackoverflow.com/questions/9662346/python-code-to-remove-html-tags-from-a-string/12982689
# Accessed 01/05/2020
def remove_tags(text):
	TAG_RE = re.compile(r'<[^>]+>')
	return TAG_RE.sub('', text)
# End of referenced code

# Core function that is called by article_scraper
def clean_text(full_text_list):
    
    return [remove_tags(item) for item in full_text_list if len(item) > 10]