import initialState from "../config/initialState"

const searchStoriesReducer = (state = initialState.searchStories, actionCreator) => {
    switch (actionCreator.type) {
        case 'SEARCH_STORIES':
            return actionCreator.payload;
        default: return state;
    }
}

export default searchStoriesReducer;