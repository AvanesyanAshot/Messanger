import React from "react";
import {addMessage, onMessageChange} from '../../../Redux/messagesReducer';
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        state: state.Messages
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, onMessageChange}),
    withAuthRedirect
)(Messages)