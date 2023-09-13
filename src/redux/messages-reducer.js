const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

function messagesReducer(action, state) {
    // debugger;
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText !== '') {
                const newMessage = {
                    id: 5,
                    author: 'You',
                    text: state.newMessageText
                }
                state.messages.push(newMessage);
                state.newMessageText = '';
            }
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            console.log("Error");
            return state;
    }
}

export default messagesReducer;

export function addMessageActionCreator() {
    return {
        type: 'ADD-MESSAGE'
    }
}



export function updateNewMessageTextActionCreator(newText) {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    }
}