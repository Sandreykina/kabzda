import { combineReducers, createStore } from 'redux';
import messagesReducer from './messages_reducer'
import myfriendsReducer from './myfriends_reducer'
import navsectionReducer from './navsection_reducer'
import postsReducer from './posts_reducer'

let reducers = combineReducers({
    messagesPage: messagesReducer,
    myfriendsPage: myfriendsReducer,
    navSection: navsectionReducer,
    postsPage: postsReducer
});

let store = createStore(reducers);

export default store;