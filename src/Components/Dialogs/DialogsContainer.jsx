import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogs-reducer.jsx'
import Dialogs from './Dialogs.jsx';
import {withAuthRedirect} from "./../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messPage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => { 
            dispatch(sendMessageCreator()); 
        },

        updateNewMessageBody: (body) => { 
            dispatch(updateNewMessageBodyCreator(body)); 
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;