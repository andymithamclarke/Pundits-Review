// ======================================
// Function to prevent unneccessary requests
// ======================================


// ===========
// IMPORTS 
// ===========

// General Imports 
import axios from 'axios';



// Code to cancel unccessessary requests adapted from Digital Ocean Blog by Dilshod Turobov
// Published February 28, 2019
// https://www.digitalocean.com/community/tutorials/react-live-search-with-axios
// Accessed August 12, 2020

const resources = {};

const makeRequestCreator = () => {
  let cancel;

  return async query => {
    if (cancel) {
      // Cancel the previous request before making a new request
      cancel.cancel();
    }
    // Create a new CancelToken
    cancel = axios.CancelToken.source();
    try {
      if (resources[query]) {
        // Return result if it exists
        return resources[query];
      }
      const res = await axios(query, { cancelToken: cancel.token });

      const result = res;
      // Store response
      resources[query] = result;

      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log('Request canceled', error.message);
      } else {
        // Handle usual errors
        console.log('Something went wrong: ', error.message);
      }
    }
  };
};

export const makeSearch = makeRequestCreator()


// End of referenced code 