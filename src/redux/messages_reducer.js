const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let newMessageObject = {
                id: 6,
                message: state.newMessageBody,
            };
            state.messagesData.push(newMessageObject);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default messagesReducer;