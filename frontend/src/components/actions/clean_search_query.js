// ======================================
// Helper function to clean and prepare a search query parameter for use in API call
// ======================================


export function cleanSearchParam(queryParam) {

	const dashIndex = queryParam.indexOf("-");

	// Make all characters lowercase, split them by spaces, capitalize each word and return the joined string
	// Adapted from Stack Overflow post by Dexter on Feb 2nd 2011
	// https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
	// Accessed 05.07.2020
	let clean = queryParam.toLowerCase()
    				.split(/[\s-]+/)
    				.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    				.join(' ');

   	// Replace dash in string
    if (dashIndex !== -1) {
    	clean = clean.slice(0, dashIndex) + "-" + clean.slice(dashIndex + 1) 
    }

    // Temporary fix for Brighton and Hove Albion
    if (queryParam.includes("Brighton")) {
    	clean = queryParam;
    }

	// Return URI encoded param
	return encodeURI(clean);

}