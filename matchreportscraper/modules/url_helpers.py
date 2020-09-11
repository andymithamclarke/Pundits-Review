# =========================
# This file contains helper functions to support the sources dictionary in findin gthe correct landing URLs to visit.
# =========================


# ================
# IMPORTS 
# ================
import datetime




# BBC - Helper function

def BBC_datetime_url(current_previous):
    
    # Constant first/second part of string
    first_part = "https://www.bbc.co.uk/sport/football/premier-league/scores-fixtures/"
    second_part = "?filter=results"
    
    # Format = https://www.bbc.co.uk/sport/football/premier-league/scores-fixtures/2020-06?filter=results
    # Required = 2020-06
    today = datetime.date.today()
    current_month = today.replace(day=1)
    last_month = current_month - datetime.timedelta(days=1)
    
    # Get Strings
    current_yyyy_mm = current_month.strftime("%Y-%m")
    last_yyyy_mm = last_month.strftime("%Y-%m")
    
    # Return correct string
    if current_previous == "PREV":
        return first_part + last_yyyy_mm
    elif current_previous == "NOW":
        return first_part + current_yyyy_mm + second_part



# Goal.com - Helper function

def Goal_datetime_url(days_back):
    
    # Constant first/second part of string
    first_part = "https://www.goal.com/en/premier-league/fixtures-results/"
    second_part = "/2kwbbcootiqqgmrzs6o5inle5"
    
    # Format = https://www.goal.com/en/premier-league/fixtures-results/2020-06-21/2kwbbcootiqqgmrzs6o5inle5
    # Required = 2020-06-21
    today = datetime.date.today()
    correct_day = today - datetime.timedelta(days=days_back)
    
    # Get Strings
    current_yyyy_mm_dd = correct_day.strftime("%Y-%m-%d")
    
    return first_part + current_yyyy_mm_dd + second_part