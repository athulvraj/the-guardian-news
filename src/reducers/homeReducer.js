import initialState from "../config/initialState"

const homeReducer = (state = initialState.posts, actionCreator) =>{
switch(actionCreator.type){
    case 'LOAD_TOP_STORIES' : return actionCreator.payload; 
    default: return state;
}
}

export default homeReducer;