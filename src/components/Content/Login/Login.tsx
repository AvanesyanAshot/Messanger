import React, {FC} from 'react';
import css from './Login.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginReduxForm from './LoginForm/LoginForm'
import {login} from '../../../Redux/Thunks/authThunks';
import {AppStateType} from '../../../Redux/redux-store';

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

export const LoginPage: FC = () => {
    const captchaUrl = useSelector(((state: AppStateType) => state.auth.captchaUrl))
    const isAuth = useSelector(((state: AppStateType) => state.auth.isAuth))

    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={css.formPage}>
            <h1 className={css.header}>login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

