import React from "react";
import {Field, reduxForm} from "redux-form";
import css from './Login.module.css'
import {required} from "../../../utls/validators/validators";
import {Input} from "../../Common/Forms/FormsControl";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={css.form}>
            <Field className={css.input} placeholder={'login'} name={'login'} validate={[required]} component={Input}/>
            <Field className={css.input} placeholder={'password'} name={'password'} validate={[required]} component={Input}/>
            <div><Field name={'rememberMe'} type="checkbox" component='input'/> remember me</div>
            <button className={css.btn}>login</button>
        </form>
    )
}
let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={css.formPage}>
            <h1 className={css.header}>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default LoginPage