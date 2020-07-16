import React from "react";
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>

            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/> remember me
            </div>
            <button>login</button>
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
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default LoginPage