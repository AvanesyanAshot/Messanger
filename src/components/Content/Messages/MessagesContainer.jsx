import React from "react";
import {addMessage, onMessageChange} from '../../../Redux/messagesReducer';
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => { // всегда принимет в себя store
    return {
        state: state.Messages,
        isAuth: state.auth.isAuth
    }
}

const MessagesContainer = connect(mapStateToProps, {addMessage, onMessageChange})(Messages) // у connect есть свой subscribe на рендер своей компоненты (перерисовка происходит при изм. mapStateToProps )
export default MessagesContainer