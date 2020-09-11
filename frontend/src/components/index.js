// ======================================
// Temporary file to allow browser to access redux
// ======================================

// ===========
// IMPORTS 
// ===========


import store from "./store/store";
import { defineSearchTerm, searchByClub, searchByPlayer } from "./actions/actions";

window.store = store;
window.defineSearchTerm = defineSearchTerm;
window.searchByClub = searchByClub;
window.searchByPlayer = searchByPlayer;