import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logout})(HeaderContainer)