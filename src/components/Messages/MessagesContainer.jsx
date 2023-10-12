import Messages from './Messages';
import { addMessageActionCreator, updateNewMessageTextActionCreator, clearNewMessageTextActionCreator} from '../../redux/messages-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux';

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);