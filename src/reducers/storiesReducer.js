import initialState from "../config/initialState"

const homeReducer = (state = initialState.stories, actionCreator) => {
    switch (actionCreator.type) {
        case 'LOAD_STORIES':
            return { ...state, ...actionCreator.payload };
        default: return state;
    }
}

export default homeReducer;