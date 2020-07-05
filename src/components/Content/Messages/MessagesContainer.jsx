import React from "react";
import {actionAddMessage, actionOnMessageChange} from '../../../Redux/messagesReducer';
import Messages from "./Messages";


const MessagesContainer = (props) => {
    // debugger
    let state = props.messages.Messages
    //Functions
    let addMessage = () => {
        props.dispatch(actionAddMessage())
    }

    let onMessageChange = (text) => {
        props.dispatch(actionOnMessageChange(text))
    }

    return (
        <Messages state={state} addMessage={addMessage} updateMessage={onMessageChange}/>
    )
}

export default MessagesContainer