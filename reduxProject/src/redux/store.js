import { legacy_createStore } from "redux";
import articlesReducers  from "./reducers/articlesReducers.js";

const store = legacy_createStore(articlesReducers)
export default store;