import {messagesActions} from '../../../Redux/Actions/messagesActionCreators';
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";
import {getMessages} from "../../../Redux/Selectors/messagesSelectors";
import {AppStateType} from "../../../Redux/redux-store";
import React from "react";

let mapStateToProps = (state: AppStateType) => {
    return {
        state: getMessages(state)
    }
}

export default compose(
    connect(mapStateToProps, {addMessage: messagesActions.addMessage}),
    withAuthRedirect
)(Messages) as React.ComponentType