# =========================
# This file contains a dictionary with all the landing urls for sources used in my system
# -----
# - These urls will be visited and article urls scraped from them
# =========================

# Note: This file will be updated frequently with more source urls

# ================
# IMPORTS 
# ================
from ..modules.url_helpers import BBC_datetime_url, Goal_datetime_url

sources_dictionary = {


	"The Mirror - Match Reports": {
		"landing_urls": ["https://www.mirror.co.uk/sport/football/match-reports/", "https://www.mirror.co.uk/sport/football/match-reports/?pageNumber=2", "https://www.mirror.co.uk/sport/football/match-reports/?pageNumber=3"],
		"landing_characteristics": '//a[contains(@href, "match-report")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"The Guardian - Match Reports": {
		"landing_urls": ["https://www.theguardian.com/football/football+tone/matchreports", "https://www.theguardian.com/football/football+tone/matchreports?page=2", "https://www.theguardian.com/football/football+tone/matchreports?page=3"],
		"landing_characteristics": '//a[contains(@data-link-name, "article")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"The Guardian - Minute by Minutes": {
		"landing_urls": ["https://www.theguardian.com/football/football+tone/minutebyminute", "https://www.theguardian.com/football/football+tone/minutebyminute?page=2", "https://www.theguardian.com/football/football+tone/minutebyminute?page=3"],
		"landing_characteristics": '//a[contains(@data-link-name, "article")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Sky Sports - Premier League Results": {
		"landing_urls": ["https://www.skysports.com/premier-league-results"],
		"landing_characteristics": '//a[contains(@class, "matches__link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"EPL Analysis - Match Analysis": {
		"landing_urls": ["https://eplanalysis.com/category/analysis/match-analysis", "https://eplanalysis.com/category/analysis/match-analysis/page/2", "https://eplanalysis.com/category/analysis/match-analysis/page/3"],
		"landing_characteristics": '//div[contains(@class, "main-content")]//a[contains(@rel, "bookmark")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"EPL Analysis - Player Analysis": {
		"landing_urls": ["https://eplanalysis.com/category/analysis/player-analysis", "https://eplanalysis.com/category/analysis/player-analysis/page/2", "https://eplanalysis.com/category/analysis/player-analysis/page/3"],
		"landing_characteristics": '//div[contains(@class, "main-content")]//a[contains(@rel, "bookmark")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Coaches Voice - The Game": {
		"landing_urls": ["https://www.coachesvoice.com/category/the-game/", "https://www.coachesvoice.com/category/the-game/page/2/", "https://www.coachesvoice.com/category/the-game/page/3/", "https://www.coachesvoice.com/category/the-game/page/4/"],
		"landing_characteristics": '//div[contains(@class, "top")]//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"BBC Sport - Premier League Results": {
		"landing_urls": [BBC_datetime_url("PREV"), BBC_datetime_url("NOW")],
		"landing_characteristics": '//a[contains(@class, "sp-c-fixture__block-link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.bbc.co.uk/"
	},
	"The Hype Train - Match Reports": {
		"landing_urls": ["https://www.thehypetrain.co.uk/home/category/Premier-League", "https://www.thehypetrain.co.uk/home/category/Premier-League/page/1", "https://www.thehypetrain.co.uk/home/category/Premier-League/page/2"],
		"landing_characteristics": '//a[contains(@href, "single-post")]/@href',
		"article_characteristics": "//p[contains(@class, 'font_8')]/node()",
		"article_url_prefix": ""
	},
	# =========================
	# Bein Sports - Consider rechecking if commentary has been added <span>
	# =========================
	"Bein Sports - Match Reports": {
		"landing_urls": ["https://www.beinsports.com/en/premier-league/videos", "https://www.beinsports.com/en/premier-league/videos/2", "https://www.beinsports.com/en/premier-league/videos/3"],
		"landing_characteristics": '//figcaption//a/@href',
		"article_characteristics": "//div[contains(@itemprop, 'articleBody')]/node()",
		"article_url_prefix": ""
	},
	"Goal - Match Reports": {
		"landing_urls": [Goal_datetime_url(0), Goal_datetime_url(1), Goal_datetime_url(2), Goal_datetime_url(3), Goal_datetime_url(4), Goal_datetime_url(5), Goal_datetime_url(6), Goal_datetime_url(7)],
		"landing_characteristics": '//a[contains(@class, "match-main-data-link")]/@href',
		"article_characteristics": "//span[contains(@class, 'text')]/text()",
		"article_url_prefix": "https://www.goal.com"
	},
	"Goal - Match Reports": {
		"landing_urls": [Goal_datetime_url(0), Goal_datetime_url(1), Goal_datetime_url(2), Goal_datetime_url(3), Goal_datetime_url(4), Goal_datetime_url(5), Goal_datetime_url(6), Goal_datetime_url(7)],
		"landing_characteristics": '//a[contains(@class, "match-main-data-link")]/@href',
		"article_characteristics": "//div[contains(@class, 'body')]//p/node()",
		"article_url_prefix": "https://www.goal.com"
	},
	"The Football Faithful": {
		"landing_urls": ["https://thefootballfaithful.com/premier-league/", "https://thefootballfaithful.com/premier-league/page/2/", "https://thefootballfaithful.com/premier-league/page/3/", "https://thefootballfaithful.com/premier-league/page/4/"],
		"landing_characteristics": '//h2[contains(@class, "post-box-title")]//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	# =========================
	# Sporting Life - Match Commentary - Should consider worthiness as mostly picks up match action - Not totally accurate
	# =========================
	"Sporting Life - Match Commentary": {
		"landing_urls": ["https://www.sportinglife.com/football/results/competitions/english-premier-league/1"],
		"landing_characteristics": '//div[contains(@class, "topRow")]//a/@href',
		"article_characteristics": "//div[contains(@class, 'detail-col')]/text()",
		"article_url_prefix": "https://www.sportinglife.com"
	},
	"Daily Mail - Premier League": {
		"landing_urls": ["https://www.dailymail.co.uk/sport/premierleague/index.html"],
		"landing_characteristics": '//a[contains(@itemprop, "url")]/@href',
		"article_characteristics": "//p[contains(@class, 'mol-para-with-font')]/text()",
		"article_url_prefix": ""
	},
	"Sky Sports - Pundits Page": {
		"landing_urls": ["https://www.skysports.com/football/pundits"],
		"landing_characteristics": '//a[contains(@class, "news-list__headline-link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Sky Sports - Football News": {
		"landing_urls": ["https://www.skysports.com/football/news"],
		"landing_characteristics": '//a[contains(@class, "news-list__headline-link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"BT Sport - Premier League News": {
		"landing_urls": ["https://www.bt.com/sport/football/premier-league/news"],
		"landing_characteristics": '//h4//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.bt.com/"
	},
	"BT Sport - Premier League Features": {
		"landing_urls": ["https://www.bt.com/sport/football/features"],
		"landing_characteristics": '//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.bt.com/"
	},
	"Sporting Life - Football News": {
		"landing_urls": ["https://www.sportinglife.com/football"],
		"landing_characteristics": '//a[contains(@class, "article-title")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.sportinglife.com"
	},
	"Fox Sports - Premier League": {
		"landing_urls": ["https://www.foxsports.com/soccer/premier-league", "https://www.foxsports.com/soccer/premier-league?pn=2", "https://www.foxsports.com/soccer/premier-league?pn=3"],
		"landing_characteristics": '//h2//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"The Telegraph - Premier League": {
		"landing_urls": ["https://www.telegraph.co.uk/premier-league/", "https://www.telegraph.co.uk/premier-league/page-2/", "https://www.telegraph.co.uk/premier-league/page-3/"],
		"landing_characteristics": '//a[contains(@class, "list-headline__link u-clickable-area__link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.telegraph.co.uk/"
	},
	"The Independent - Football Live": {
		"landing_urls": ["https://www.independent.co.uk/sport/football/live"],
		"landing_characteristics": '//div[contains(@class, "content")]//a[contains(@href, "sport/football")]/@href',
		"article_characteristics": "//div[contains(@class, 'body-content')]/node()",
		"article_url_prefix": "https://www.independent.co.uk/"
	},
	"The Independent - Football": {
		"landing_urls": ["https://www.independent.co.uk/sport/football"],
		"landing_characteristics": '//div[contains(@class, "content")]//a[contains(@href, "sport/football")]/@href',
		"article_characteristics": "//div[contains(@class, 'body-content')]/node()",
		"article_url_prefix": "https://www.independent.co.uk/"
	},
	"Four Four Two - Premier League": {
		"landing_urls": ["https://www.fourfourtwo.com/premier-league", "https://www.fourfourtwo.com/premier-league/page/2", "https://www.fourfourtwo.com/premier-league/page/3", "https://www.fourfourtwo.com/premier-league/page/4", "https://www.fourfourtwo.com/premier-league/page/5", "https://www.fourfourtwo.com/premier-league/page/6", "https://www.fourfourtwo.com/premier-league/page/7", "https://www.fourfourtwo.com/premier-league/page/8"],
		"landing_characteristics": '//a[contains(@class, "article-link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"The Times - Premier League": {
		"landing_urls": ["https://www.thetimes.co.uk/topic/premier-league?page=1", "https://www.thetimes.co.uk/topic/premier-league?page=2", "https://www.thetimes.co.uk/topic/premier-league?page=3"],
		"landing_characteristics": '//div[contains(@data-testid, "article-list-item")]//a[contains(@class, "linkweb__RespLink-yfb9n-0")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Evening Standard - Football News": {
		"landing_urls": ["https://www.standard.co.uk/sport/football"],
		"landing_characteristics": '//div[contains(@class, "type-article")]//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.standard.co.uk"
	},
	"Reuters - Football News": {
		"landing_urls": ["https://uk.reuters.com/news/sports/football", "https://uk.reuters.com/news/archive/subjects-football?view=page&page=2", "https://uk.reuters.com/news/archive/subjects-football?view=page&page=3", "https://uk.reuters.com/news/archive/subjects-football?view=page&page=4", "https://uk.reuters.com/news/archive/subjects-football?view=page&page=5", "https://uk.reuters.com/news/archive/subjects-football?view=page&page=6", "https://uk.reuters.com/news/archive/subjects-football?view=page&page=7", "https://uk.reuters.com/news/archive/subjects-football?view=page&page=8", "https://uk.reuters.com/news/archive/subjects-football?view=page&page=9", "https://uk.reuters.com/news/archive/subjects-football?view=page&page=10"],
		"landing_characteristics": '//div[contains(@class, "story-content")]//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://uk.reuters.com"
	},
	"Talk Sport": {
		"landing_urls": ["https://talksport.com/football/", "https://talksport.com/football/page/2/", "https://talksport.com/football/page/3/", "https://talksport.com/football/page/4/", "https://talksport.com/football/page/5/", "https://talksport.com/football/page/6/"],
		"landing_characteristics": '//a[contains(@class, "teaser-anchor")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"The Guardian - Premier League News": {
		"landing_urls": ["https://www.theguardian.com/football/premierleague"],
		"landing_characteristics": '//a[contains(@data-link-name, "article")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Gulf News - Sport": {
		"landing_urls": ["https://gulfnews.com/sport/football"],
		"landing_characteristics": '//h2[contains(@class, "card-title")]//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://gulfnews.com/"
	},
	"Express - Premier League": {
		"landing_urls": ["https://www.express.co.uk/sport/football"],
		"landing_characteristics": '//a[contains(@href, "sport/football")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.express.co.uk"
	},
	"Metro - Sport": {
		"landing_urls": ["https://metro.co.uk/sport/football/"],
		"landing_characteristics": '//a[contains(@href, "2020")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Pundit Arena - Football": {
		"landing_urls": ["https://punditarena.com/football/"],
		"landing_characteristics": '//h2//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Sports Mole - Premier League": {
		"landing_urls": ["https://www.sportsmole.co.uk/football/premier-league/"],
		"landing_characteristics": '//div[contains(@class, "hp")]//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.sportsmole.co.uk"
	},
	"Football.london - News": {
		"landing_urls": ["https://www.football.london/"],
		"landing_characteristics": '//a[contains(@class, "headline")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Manchester Evening News - Football": {
		"landing_urls": ["https://www.manchestereveningnews.co.uk/sport/football/"],
		"landing_characteristics": '//a[contains(@class, "headline")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"NBC Sports - Premier League Stories": {
		"landing_urls": ["https://www.nbcsports.com/soccer"],
		"landing_characteristics": '//a[contains(@class, "link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Liverpool Echo - Liverpool FC": {
		"landing_urls": ["https://www.liverpoolecho.co.uk/all-about/liverpool-fc"],
		"landing_characteristics": '//a[contains(@class, "headline")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Liverpool Echo - Everton FC": {
		"landing_urls": ["https://www.liverpoolecho.co.uk/all-about/everton-fc"],
		"landing_characteristics": '//a[contains(@class, "headline")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Arseblog - Match Reports": {
		"landing_urls": ["https://arseblog.news/category/matches-and-team-news/matchreports/"],
		"landing_characteristics": '//a[contains(@rel, "bookmark")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Chelsea - Official Club Match Reports": {
		"landing_urls": ["https://www.chelseafc.com/en/matches/results"],
		"landing_characteristics": '//a[contains(@class, "match-card__cta__link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.chelseafc.com"
	},
	"The Football Blog - Premier League": {
		"landing_urls": ["https://www.footballblog.co.uk/"],
		"landing_characteristics": '//a[contains(@rel, "bookmark")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"EuroSport - Premier League Results": {
		"landing_urls": ["https://www.eurosport.com/football/premier-league/calendar-result.shtml"],
		"landing_characteristics": '//div[contains(@class, "match")]//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.eurosport.com/"
	},
	# =========================
	# EuroSport - Premier League News - Questionable how much value this has
	# =========================
	"EuroSport - Premier League News": {
		"landing_urls": ["https://www.eurosport.com/football/premier-league/calendar-result.shtml"],
		"landing_characteristics": '//a[contains(@href, "football/premier-league")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.eurosport.com/"
	},
	"The Argus - Brighton Reports": {
		"landing_urls": ["https://www.theargus.co.uk/sport/albion/"],
		"landing_characteristics": '//div[contains(@class, "nq-article-card-content")]//a/@href',
		"article_characteristics": "//p",
		"article_url_prefix": "https://www.theargus.co.uk"
	},
	"Birmingham Mail - Match Reports": {
		"landing_urls": ["https://www.birminghammail.co.uk/sport/football/match-reports/"],
		"landing_characteristics": '//a[contains(@class, "headline")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Express and Star - Wolves Reports": {
		"landing_urls": ["https://www.expressandstar.com/sport/football/wolverhampton-wanderers-fc/"],
		"landing_characteristics": '//article//a[contains(@class, "block-link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.expressandstar.com"
	},
	"Eastern Daily Press - Norwich Reports": {
		"landing_urls": ["https://www.edp24.co.uk/sport/norwich-city"],
		"landing_characteristics": '//h2//a/@href',
		"article_characteristics": "//p",
		"article_url_prefix": ""
	},
	"Chronicle Live - Newcastle Reports": {
		"landing_urls": ["https://www.chroniclelive.co.uk/sport/football/match-reports/"],
		"landing_characteristics": '//a[contains(@class, "headline")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Bournemouth Echo - Bournemouth Reports": {
		"landing_urls": ["https://www.bournemouthecho.co.uk/sport/cherries/clubnews/"],
		"landing_characteristics": '//div[contains(@class, "nq-article-card-content")]//a/@href',
		"article_characteristics": "//p",
		"article_url_prefix": "https://www.bournemouthecho.co.uk/"
	},
	"Leicester Mercury - Leicester News": {
		"landing_urls": ["https://www.leicestermercury.co.uk/sport/football/"],
		"landing_characteristics": '//a[contains(@class, "headline")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Southern Daily Echo - Southampton News": {
		"landing_urls": ["https://www.dailyecho.co.uk/sport/saints/"],
		"landing_characteristics": '//div[contains(@class, "nq-article-card-content")]//a/@href',
		"article_characteristics": "//p",
		"article_url_prefix": "https://www.dailyecho.co.uk"
	},
	"Watford Observer - Watford News": {
		"landing_urls": ["https://www.watfordobserver.co.uk/sport/watfordfc/watfordfcnews/"],
		"landing_characteristics": '//div[contains(@class, "nq-article-card-content")]//a/@href',
		"article_characteristics": "//p",
		"article_url_prefix": "https://www.watfordobserver.co.uk"
	},
	"MARCA - International Football News": {
		"landing_urls": ["https://www.marca.com/en/football/international-football.html?intcmp=MENUPROD&s_kw=english-international-football"],
		"landing_characteristics": '//h3[contains(@itemprop, "headline")]//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"Give Me Sport - Premier League News": {
		"landing_urls": ["https://www.givemesport.com/premier-league/latest-news"],
		"landing_characteristics": '//h3//a/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.givemesport.com"
	},
	"Yorkshire Examiner - Premier League News": {
		"landing_urls": ["https://www.examinerlive.co.uk/all-about/barclays-premier-league"],
		"landing_characteristics": '//a[contains(@class, "headline")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	},
	"MSN Sport": {
		"landing_urls": ["https://www.msn.com/en-gb/sport/football/premier-league"],
		"landing_characteristics": '//a[contains(@class, "match  ")]/@href',
		"article_characteristics": "//span",
		"article_url_prefix": "https://www.msn.com/"
	},
	"Breaking The Lines - Tactical Analysis": {
		"landing_urls": ["https://breakingthelines.com/category/tactical-analysis/"],
		"landing_characteristics": '//a[contains(@rel, "bookmark")]/@href',
		"article_characteristics": "//p",
		"article_url_prefix": ""
	},
	"BBC Sport - Premier League Homepage": {
		"landing_urls": ["https://www.bbc.co.uk/sport/football/premier-league"],
		"landing_characteristics": '//a[contains(@class, "gs-o-faux-block-link__overlay-link")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.bbc.co.uk/"
	},
	"Goal - Premier League News": {
		"landing_urls": ["https://www.goal.com/en/premier-league/1/2kwbbcootiqqgmrzs6o5inle5", "https://www.goal.com/en/premier-league/2/2kwbbcootiqqgmrzs6o5inle5", "https://www.goal.com/en/premier-league/3/2kwbbcootiqqgmrzs6o5inle5", "https://www.goal.com/en/premier-league/4/2kwbbcootiqqgmrzs6o5inle5", "https://www.goal.com/en/premier-league/5/2kwbbcootiqqgmrzs6o5inle5", "https://www.goal.com/en/premier-league/6/2kwbbcootiqqgmrzs6o5inle5", "https://www.goal.com/en/premier-league/7/2kwbbcootiqqgmrzs6o5inle5"],
		"landing_characteristics": '//a[contains(@class, "type-article")]/@href',
		"article_characteristics": "//div[contains(@class, 'body')]//p/node()",
		"article_url_prefix": "https://www.goal.com/"
	}

}


sources_dictionary_not_working = {
	# =========================
	# ESPN - Match Reports - Match Commentary - Blocked by robots.txt
	# =========================
	"ESPN - Match Reports": {
		"landing_urls": ["https://www.espn.com/soccer/fixtures/_/date/20200625"],
		"landing_characteristics": '//a[contains(@href, "report")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": "https://www.espn.com/"
	},
	"The Athletic": {
		"landing_urls": ["https://theathletic.co.uk/premier-league/"],
		"landing_characteristics": '//a[contains(@class, "article")]/@href',
		"article_characteristics": "//p/text()",
		"article_url_prefix": ""
	}
}


sources_dictionary_test = {

	"Breaking The Lines - Tactical Analysis": {
		"landing_urls": ["https://breakingthelines.com/category/tactical-analysis/"],
		"landing_characteristics": '//a[contains(@rel, "bookmark")]/@href',
		"article_characteristics": "//p",
		"article_url_prefix": ""
	},
}






sources_dictionary_sanity_check = {

	"Daily Mail - Premier League": {
		"landing_urls": ["https://www.dailymail.co.uk/sport/premierleague/index.html"],
		"landing_characteristics": '//a[contains(@class, "news-list__headline-link")]/@href',
		"article_characteristics": "//p[contains(@class, 'mol-para-with-font')]/text()",
		"article_url_prefix": ""
	},
}

