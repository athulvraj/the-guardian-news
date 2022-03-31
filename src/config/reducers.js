import { combineReducers } from "redux";
import storiesReducer from "../reducers/storiesReducer";
import bookmarkReducer from '../reducers/bookmarksReducer';

export default combineReducers({
    bookmarks: bookmarkReducer,
    stories: storiesReducer
});