import {connect} from "react-redux";
import Discover from "./Discover.jsx";
import {compose} from "redux";
import {AppStateType} from "../../../Redux/redux-store";

let mapStateToProps = (store: AppStateType) => {
    return {
        store: store.Discover
    }
}

export default compose(
    connect(mapStateToProps, {})
)(Discover)