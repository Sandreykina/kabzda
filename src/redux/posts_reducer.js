const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 23, dislikesCount: 22 },
        { id: 2, message: 'It is my first post', likesCount: 203, dislikesCount: 2 },
        { id: 3, message: 'I like it, bro', likesCount: 523, dislikesCount: 2 },
        { id: 4, message: 'I am a good girl', likesCount: 223, dislikesCount: 12 }
    ],
    newPostText: ''
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPostObject = {
                id: 6,
                message: state.newPostText,
                likesCount: 1,
                dislikesCount: 2
            };
            state.postData.push(newPostObject);
            state.newPostText = '';
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default postsReducer;