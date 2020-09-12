// ======================================
// This file contains middleware logic to process a search term
// ======================================


// ===========
// ProcessSearch can be used to check search terms before a request is made 
// ===========

export function processSearchMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      return next(action);
    };
  };
}


