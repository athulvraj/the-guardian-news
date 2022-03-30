import {applyMiddleware, createStore} from 'redux';
import reducers  from './reducers';
import thunk from 'redux-thunk';
import initialState from './initialState';
const store = createStore(reducers,initialState, applyMiddleware(thunk) );
export default store;