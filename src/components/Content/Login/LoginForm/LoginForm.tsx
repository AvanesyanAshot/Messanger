import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import css from './../Login.module.css'
import {required} from "../../../../utls/validators/validators";
import {createField, Input} from "../../../Common/Forms/FormsControl";
import {LoginFormValuesType} from "../Login";

type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

let LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={css.form}>
            {createField('login', 'email', [required], Input)}
            {createField('password', 'password', [required], Input, {type: 'password'})}
            {createField(undefined, 'rememberMe', [], 'input', {type: 'checkbox'}, ' remember me')}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], 'input', {})}

            {error && <div className={css.summaryError}>{error}</div>}
            <button className={css.btn}>login</button>
        </form>
    )
}

export default reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)