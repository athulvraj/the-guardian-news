import { combineReducers } from "redux";
import storiesReducer from "../reducers/storiesReducer";
import bookmarkReducer from '../reducers/bookmarksReducer';
import articlesReducer from "../reducers/articlesReducer";

export default combineReducers({
    bookmarks: bookmarkReducer,
    stories: storiesReducer,
    articles: articlesReducer
});