import avatar from '../icons/avatar-placeholder.svg';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const CLEAR_NEW_MESSAGE_TEXT = 'CLEAR-NEW-MESSAGE-TEXT';
let initialState = {
        partners: [
          { id: 0, name: "Lorem Ipsum", avatar: avatar },
          { id: 1, name: "Myles Mullins", avatar: avatar },
          { id: 2, name: "Jasper Hatfield", avatar: avatar },
          { id: 3, name: "Poppy Morton", avatar: avatar },
          { id: 4, name: "Ivy Harrison", avatar: avatar },
          { id: 5, name: "Mahdi Keller", avatar: avatar },
          { id: 6, name: "Riley Alvarado", avatar: avatar },
          { id: 7, name: "Omari May", avatar: avatar },
          { id: 8, name: "Wojciech Acevedo", avatar: avatar },
          { id: 9, name: "Maisey Summers", avatar: avatar },
        ],
        messages: [
          { id: 0, author: "You", text: "Hello!" },
          { id: 1, author: "You", text: "I hope this chat will be working soon" },
          { id: 2, author: "Maisey Summers", text: "Hello!" },
          { id: 3, author: "Maisey Summers", text: "i guess it will" },
          { id: 4, author: "Maisey Summers", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium consectetur molestias rem sint, autem repudiandae nesciunt eligendi ducimus harum dicta, quis, voluptatum eos facere optio aliquam fugit perspiciatis rerum? Dolor maxime corporis hic esse totam repudiandae reprehenderit. Quae pariatur sint reprehenderit illum rerum ducimus impedit quidem fugiat magni quia." },
          { id: 5, author: "You", text: "i dont speak ancient Greek" },
          { id: 6, author: "You", text: "Can you speak English?" },
          { id: 7, author: "Maisey Summers", text: "Oh, Sorry" }
    
        ],
        newMessageText: ''
}
function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText !== '') {
                const newMessage = {
                    id: 55,
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
        case CLEAR_NEW_MESSAGE_TEXT:
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export default messagesReducer;

export function addMessageActionCreator() {
    return {
        type: ADD_MESSAGE
    }
}

export function clearNewMessageTextActionCreator(){
    return {
        type: CLEAR_NEW_MESSAGE_TEXT
    }
}

export function updateNewMessageTextActionCreator(newText) {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    }
}
