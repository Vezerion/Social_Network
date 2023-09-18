import Messages from './Messages';
import { addMessageActionCreator, updateNewMessageTextActionCreator, clearNewMessageTextActionCreator} from '../../redux/messages-reducer';

function MessagesContainer(props) {
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    const updateMessage = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    }
    const clearText = () => {
        props.store.dispatch(clearNewMessageTextActionCreator());
    }
    return (
        <div>
            <Messages addMessage={addMessage} updateMessage={updateMessage} clearText={clearText} messagesPage={props.store.getState().messagesPage}/>
        </div>
    )
}

export default MessagesContainer;