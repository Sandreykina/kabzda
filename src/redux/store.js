import messagesReducer from "./messages_reducer";
import postsReducer from "./posts_reducer";
import myfriendsReducer from "./myfriends_reducer";
import navsectionReducer from "./navsection_reducer";


let store = {

    _state: {
        postsPage: {
            postData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 23, dislikesCount: 22 },
                { id: 2, message: 'It is my first post', likesCount: 203, dislikesCount: 2 },
                { id: 3, message: 'I like it, bro', likesCount: 523, dislikesCount: 2 },
                { id: 4, message: 'I am a good girl', likesCount: 223, dislikesCount: 12 }
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'George' },
                { id: 3, name: 'Viktor' },
                { id: 4, name: 'Pavel' },
                { id: 5, name: 'Kolya-Kolya' },
                { id: 6, name: 'Anatoliy' }
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo-Kolya' },
                { id: 6, message: 'Yo' }
            ],
            newMessageBody: ''
        },
        myfriendsPage: {
            myfriendsData: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'George' },
                { id: 3, name: 'Viktor' },
                { id: 4, name: 'Pavel' },
                { id: 5, name: 'Kolya-Kolya' },
                { id: 6, name: 'Anatoliy' }
            ]
        },
        navSection: {
            bestFriends: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'George' },
                { id: 3, name: 'Viktor' }

            ]
        }
    },
    _callSubscriber() {
        console.log('State was change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { //action - это объект, у которого как минимум есть свойство type

        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.postsPage = postsReducer(this._state.postsPage, action);
        this._state.myfriendsPage = myfriendsReducer(this._state.myfriendsPage, action);
        this._state.navSection = navsectionReducer(this._state.navSection, action);

        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;