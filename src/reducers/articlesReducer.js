import initialState from "../config/initialState"

const articlesReducer = (state = initialState.articles, actionCreator) => {
    switch (actionCreator.type) {
        case 'LOAD_ARTICLE':
            return { ...state, ...actionCreator.payload };
        default: return state;
    }
}

export default articlesReducer;