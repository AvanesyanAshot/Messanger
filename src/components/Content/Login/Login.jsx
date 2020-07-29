import React from "react";
import css from './Login.module.css'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import LoginReduxForm from './LoginForm/LoginForm'
import {login} from "../../../Redux/Thunks/authThunks";

let LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={css.formPage}>
            <h1 className={css.header}>login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginPage)