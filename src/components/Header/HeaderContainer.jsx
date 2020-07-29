import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthId, getIsAuth, getLogin} from "../../Redux/Selectors/authSelectors";
import {logout} from "../../Redux/Thunks/authThunks";

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