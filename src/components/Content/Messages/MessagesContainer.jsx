import {messagesActions} from '../../../Redux/Actions/messagesActionCreators';
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";
import {getMessages} from "../../../Redux/Selectors/messagesSelectors";

const {addMessage} = messagesActions

let mapStateToProps = (state) => {
    return {
        state: getMessages(state)
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Messages)