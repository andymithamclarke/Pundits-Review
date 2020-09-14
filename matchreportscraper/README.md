<img src="https://i.ibb.co/ZXVNVY5/pr-logo-plain-opauq.png" width="7.5%" height="7.5%">

# Match Report Scraper
11/09/2020 - Scrapy Pipeline - used to collect & process incoming data each week. Contains spider, pipelines, prediction model & entity extraction module

## Contents

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/modules">Modules</a>
Modules used to process and pass the incoming data along the pipeline

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/spiders">Spiders</a>
Article spider used to collect new football articles from a list of sources

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/crawl.py">Crawl.py</a>
Contains trigger to start crawling process

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/middlewares.py">Middlewares.py</a>
Automatically generated middlewares for spider

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/populate_weekly_agreedisagree_scores.py">Populate Weekly Agree Disagree Scores.py</a>
Ran by 'crawl.py' and used to generated new weekly agree disagree entries for each player & club

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/populateclubstable.py">Populate Clubs Table.py</a>
Ran on DB setup to initially populate the clubs model with Premier League clubs

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/populateclubstable.py">Populate Players Table.py</a>
Ran on DB setup to initially populate the players model with Premier League players

#### <a href="https://github.com/andyclarkemedia/Pundits-Review/tree/master/matchreportscraper/populateclubstable.py">Settings.py</a>
Configures scrapy crawler settings
