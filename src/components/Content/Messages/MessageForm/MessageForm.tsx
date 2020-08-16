import React, {FC} from 'react';
import css from '../Messages.module.css'
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField} from '../../../Common/Forms/FormsControl';
import {MessageFromValuesType} from '../Messages';

export type MessageFromTypeTypeKeys = Extract<keyof MessageFromValuesType, string>
type PropsType = {}

const MessageForm: FC<InjectedFormProps<MessageFromValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={css.corManage}>
            {createField<MessageFromTypeTypeKeys>('Написать сообщение...', 'message', [], 'textarea')}
            <button className={css.btn}>Отправить</button>
        </form>
    )
}

export default reduxForm<MessageFromValuesType>({form: 'message'})(MessageForm)