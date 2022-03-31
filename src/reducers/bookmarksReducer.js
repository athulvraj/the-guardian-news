import initialState from "../config/initialState";

const bookmarkReducer = (state = initialState.bookmarks, actionCreator) =>{
switch(actionCreator.type){
    case 'LOAD_BOOKMARKS' : return {...state}
    default: return state;
}
}

export default bookmarkReducer;