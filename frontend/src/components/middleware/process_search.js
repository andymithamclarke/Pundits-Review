// ======================================
// This file contains middleware logic to process a search term
// ======================================


// ===========
// IMPORTS 
// ===========

import { ADD_ARTICLE } from "../constants/action_types";


// ===========
// ProcessSearch can be used to check search terms before a request is made 
// ===========

export function processSearchMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      return next(action);
    };
  };
}


