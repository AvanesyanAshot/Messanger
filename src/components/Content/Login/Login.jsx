import React from "react";
import {reduxForm} from "redux-form";
import css from './Login.module.css'
import {required} from "../../../utls/validators/validators";
import {createField, Input} from "../../Common/Forms/FormsControl";
import {connect} from "react-redux";
import {login} from "../../../Redux/authReducer";
import {Redirect} from "react-router-dom";

let LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={css.form}>
            {createField('login', 'email', [required], Input)}
            {createField('password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', null, 'input', {type: 'checkbox'}, ' remember me')}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], 'input', {})}

            { error && <div className={css.summaryError}>{error}</div>}
            <button className={css.btn}>login</button>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

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