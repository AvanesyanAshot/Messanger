import React from "react";
import {connect} from "react-redux";
import Discover from "./Discover";

let mapStateToProps = (store) => {
    return {
        store: store.Discover
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DiscoverContainer = connect(mapStateToProps, mapDispatchToProps)(Discover)
export default DiscoverContainer