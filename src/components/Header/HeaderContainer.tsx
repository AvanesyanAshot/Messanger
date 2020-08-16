import React from 'react';
import Header, {DispatchPropsType, MapPropsType} from './Header';
import {connect} from 'react-redux';
import {getAuthId, getIsAuth, getLogin} from '../../Redux/Selectors/authSelectors';
import {logout} from '../../Redux/Thunks/authThunks';
import {AppStateType} from '../../Redux/redux-store';

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    id: getAuthId(state),
    login: getLogin(state),
    isAuth: getIsAuth(state)
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer)