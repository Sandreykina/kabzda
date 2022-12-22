let initialState = {
    bestFriends: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'George' },
        { id: 3, name: 'Viktor' }
    ]
}

const navsectionReducer = (state = initialState, action) => {
    return {
        ...state,
        bestFriends: [...state.bestFriends]

    }
}
export default navsectionReducer;