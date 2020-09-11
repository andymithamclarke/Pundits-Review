// ======================================
// Reference to dates used inside of the application
// Used to control which review scores are seen by the user - Most recent and Season Dates
// ======================================

// ===========
// IMPORTS 
// ===========

// ===========
// Date References
// ===========


// New date object
let date = new Date();


// Function to get previous Monday
// Code adapted from Stack Overflow post by Matthew Lymer on Jan 19 2016
// https://stackoverflow.com/questions/35088088/javascript-for-getting-the-previous-monday
// Accessed Aug 08 2020

function getPreviousMonday() {

    var day = date.getDay();
    var prevMonday;

    if(date.getDay() == 1){

    	// Add code to check if crawl has finished ...

        prevMonday = formatDate(new Date(new Date().setDate(date.getDate() - 7)));
    }
    else {
        prevMonday = formatDate(new Date(new Date().setDate(date.getDate() - (day - 1))));
    }

    return prevMonday;
}

// End of referenced code

// Function to format the date to match DB entry

function formatDate(dateObject) {

	// Format the date
    let dd = dateObject.getDate();
    let mm = dateObject.getMonth()+1;
    let yyyy = dateObject.getFullYear();

    if(dd < 10) {
    	dd='0'+ dd;
	} 
	if(mm < 10) {
    	mm='0'+ mm;
	}

	return yyyy + "-" + mm + "-" + dd;
}

export let localCrawlDate = "2020-08-08";
export let agreeDisagreeDate = "2020-08-11";
export let previousMonday = getPreviousMonday();