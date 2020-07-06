import React from "react";
import {connect} from "react-redux";
import Discover from "./Discover";

let mapStateToProps = (state) => {
    return {
        state: state.Discover
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DiscoverContainer = connect(mapStateToProps, mapDispatchToProps)(Discover)
export default DiscoverContainer