import React from "react";
import {actionAddMessage, actionOnMessageChange} from '../../../Redux/messagesReducer';
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => { // всегда принимет в себя state
    return {
        state: state.Messages
    }
}

let mapDispatchToProps = (dispatch) => { // всегда принимет в себя dispatch
    return {
        addMessage: () => {
            dispatch(actionAddMessage())
        },
        updateMessage: (text) => {
            dispatch(actionOnMessageChange(text))
        }
    }

}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer