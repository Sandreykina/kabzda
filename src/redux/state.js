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
            ]
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
    _callSubscriber () {
        console.log('State was change');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) { //{ type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPostObject = {
                id: 6,
                message: this._state.postsPage.newPostText,
                likesCount: 1,
                dislikesCount: 2
            };
            this._state.postsPage.postData.push(newPostObject);
            this._state.postsPage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.postsPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}
export default store;
window.store = store;