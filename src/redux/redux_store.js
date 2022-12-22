import { combineReducers, createStore } from 'redux';
import messagesReducer from './messages_reducer'
import usersReducer from './users_reducer'
import navsectionReducer from './navsection_reducer'
import postsReducer from './posts_reducer'

let reducers = combineReducers({
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    navSection: navsectionReducer,
    postsPage: postsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
