import { combineReducers } from "redux";
import storiesReducer from "../reducers/storiesReducer";
import bookmarkReducer from '../reducers/bookmarksReducer';
import articlesReducer from "../reducers/articlesReducer";
import searchStoriesReducer from "../reducers/searchStoriesReducer";

export default combineReducers({
    bookmarks: bookmarkReducer,
    stories: storiesReducer,
    articles: articlesReducer,
    searchStories: searchStoriesReducer
});