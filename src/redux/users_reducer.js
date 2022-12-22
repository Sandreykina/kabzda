const UPDATE_FOLLOWED_STATUS = 'UPDATE_FOLLOWED_STATUS';
const UPDATE_UNFOLLOWED_STATUS = 'UPDATE_UNFOLLOWED_STATUS';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, name: 'Andrey', followed: true, photoURL: 'https://i.pinimg.com/originals/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg' },
        { id: 2, name: 'George', followed: false, photoURL: 'https://i.pinimg.com/originals/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg' },
        { id: 3, name: 'Viktor', followed: true, photoURL: 'https://i.pinimg.com/originals/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg' },
        { id: 4, name: 'Pavel', followed: false, photoURL: 'https://i.pinimg.com/originals/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg'},
        { id: 5, name: 'Kolya-Kolya', followed: true, photoURL: 'https://i.pinimg.com/originals/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg'},
        { id: 6, name: 'Anatoliy', followed: false, photoURL: 'https://i.pinimg.com/originals/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg' }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FOLLOWED_STATUS:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UPDATE_UNFOLLOWED_STATUS:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({
    type: UPDATE_FOLLOWED_STATUS, userId
})

export const unfollowAC = (userId) => ({
    type: UPDATE_UNFOLLOWED_STATUS, userId
})

export const setUserAC = (users) => ({
    type: SET_USERS, users
})
export default usersReducer;