import Messages from './Messages';
import { addMessageActionCreator, updateNewMessageTextActionCreator, clearNewMessageTextActionCreator} from '../../redux/messages-reducer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        messagesPage: state.messagesPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateMessage: (body) => {
            dispatch(updateNewMessageTextActionCreator(body));
        },
        clearText: () => {
            dispatch(clearNewMessageTextActionCreator());
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;