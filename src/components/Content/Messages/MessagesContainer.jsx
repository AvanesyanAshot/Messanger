import React from "react";
import {actionAddMessage, actionOnMessageChange} from '../../../Redux/messagesReducer';
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => { // всегда принимет в себя store
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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages) // у connect есть свой subscribe на рендер своей компоненты (перерисовка происходит при изм. mapStateToProps )
export default MessagesContainer