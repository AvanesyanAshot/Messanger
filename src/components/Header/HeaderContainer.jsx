import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import {getAuthId, getIsAuth, getLogin} from "../../Redux/Selectors/authSelectors";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    id: getAuthId(state),
    login: getLogin(state),
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {logout})(HeaderContainer)