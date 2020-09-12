// ======================================
// Store to hold data & state of application
// ======================================

// ===========
// IMPORTS 
// ===========

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/reducers";
import { processSearchMiddleware } from "../middleware/process_search";
import thunk from "redux-thunk";


// Config store enhancers
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ===========
// Create Redux Store & set reducer
// ===========

const store = createStore(
	rootReducer,
	storeEnhancers(applyMiddleware(processSearchMiddleware, thunk))
	);

export default store;