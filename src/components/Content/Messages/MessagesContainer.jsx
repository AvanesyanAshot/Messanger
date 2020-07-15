import React from "react";
import {addMessage, onMessageChange} from '../../../Redux/messagesReducer';
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";

let mapStateToProps = (state) => { // всегда принимет в себя store
    return {
        state: state.Messages
    }
}
let AuthRedirectComponent = withAuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, {addMessage, onMessageChange})(AuthRedirectComponent) // у connect есть свой subscribe на рендер своей компоненты (перерисовка происходит при изм. mapStateToProps )
export default MessagesContainer