// ======================================
// Contains an object to control settings on the insights page
// Keys 	---> Insights Category
// Values 	---> 
// ======================================


export var insights_settings = {

	"REVIEW SCORE": {

		stateArrayKey: "playerReviewScores",
		scoreVariableName: "sentiment_score",
		calculationVariable: 100,
		categoryName: "PR SCORE"
	},
	"MENTIONS": {
		stateArrayKey: "playerTotalReviews",
		scoreVariableName: "total_reviews",
		calculationVariable: 1,
		categoryName: "PR MENTIONS"
	},
	"SEASON AVG SCORE": {
		stateArrayKey: "playerAvgScores",
		scoreVariableName: "avg_score",
		calculationVariable: 100,
		categoryName: "PR AVG SCORE"
	},
	"POSITIVE REVIEWS": {
		stateArrayKey: "playerTotalReviews",
		scoreVariableName: "n_positive",
		calculationVariable: 1,
		categoryName: "POSITIVE REVIEWS"
	},
	"NEGATIVE REVIEWS": {
		stateArrayKey: "playerTotalReviews",
		scoreVariableName: "n_negative",
		calculationVariable: 1,
		categoryName: "NEGATIVE REVIEWS"
	},

}