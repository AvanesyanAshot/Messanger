import React, {FC} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';

type MapPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapPropsType)

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
    const RedirectComponent: FC<MapPropsType & {}> = props => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as WCP}/>
    }

    return connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);
}
