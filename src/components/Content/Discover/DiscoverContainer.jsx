import React from "react";
import {connect} from "react-redux";
import Discover from "./Discover";

let mapStateToProps = (store) => {
    return {
        store: store.Discover
    }
}

const DiscoverContainer = connect(mapStateToProps, {})(Discover)
export default DiscoverContainer