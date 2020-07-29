import React from "react";
import css from "../Messages.module.css"
import {Field, reduxForm} from "redux-form";


const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={css.corManage}>
            <Field name='message'
                   component={'textarea'}
                   placeholder='Написать сообщение...'></Field>
            <button className={css.btn}>Отправить</button>
        </form>
    )
}

export default reduxForm({form: 'message'})(MessageForm)