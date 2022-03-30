import { combineReducers } from "redux";
import homeReducer from "../reducers/homeReducer";
import bookmarkReducer from '../reducers/bookmarksReducer';
export default combineReducers({
    posts: homeReducer,
    bookmarks: bookmarkReducer
    

});