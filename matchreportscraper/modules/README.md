<img src="https://i.ibb.co/ZXVNVY5/pr-logo-plain-opauq.png" width="7.5%" height="7.5%">

# Match Report Scraper / Modules
11/09/2020 - Modules used to process and pass the incoming data along the pipeline

## Contents

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/pickles">Pickles</a>
Gzip versions of the vectorizer & prediction model used to predict sentiment of news article phrases

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/clean_text.py">Clean Text.py</a>
Removes HTML tags and very short phrases

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/identify_nsubj_pobj.py">Identify Nsubj Pobj.py</a>
Identifies players and teams within article phrase according to 4 natural language characteristics

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/items.py">Items.py</a>
Defines links from scrapy items to django models

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/lemmatize_remove_stopwords.py">Lemmatize Remove Stopwords.py</a>
Lemmatizes the phrase and removes stopwords from it

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/match_info.py">Match Info.py</a>
Identifies the main clubs being spoken about in the article

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/phrases.py">Phrases.py</a>
Splits the article text into phrases

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/pipelines.py">Pipelines.py</a>
Two pipelines - 1. Predict Sentiment |  2. Process & Save Result

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/players_dictionary.py">Players Dictionary.py</a>
Python dictionary of Premier League players and teams - accurate for season 2019-2020

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/players_dictionary_2020_2021.py">Players Dictionary 2020-2021.py</a>
Python dictionary of Premier League players and teams - accurate for season 2020-2021

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/predict.py">Predict.py</a>
Function to apply vectorizer and prediction model to article phrases

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/sources_dictionary.py">Sources Dictionary.py</a>
Defines sources alongside xpath characteristics used to recognise how to access article links and article text - specific to each source

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/stopwords.py">Stopwords.py</a>
Custom list of stopwords - Adapted from sklearn with stopwords removed that might influence sentiment prediction. eg. "can't"

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/target_identifier.py">Target Identifier.py</a>
Applies the 'identify_nsubj_pobj' function to the dictionary being passed through the pipeline.

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules/url_helpers.py">URL Helpers.py</a>
Support sources dictionary to create dynamic urls

