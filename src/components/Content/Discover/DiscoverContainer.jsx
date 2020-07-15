import React from "react";
import {connect} from "react-redux";
import Discover from "./Discover";
import {compose} from "redux";

let mapStateToProps = (store) => {
    return {
        store: store.Discover
    }
}

export default compose(
    connect(mapStateToProps, {})
)(Discover)