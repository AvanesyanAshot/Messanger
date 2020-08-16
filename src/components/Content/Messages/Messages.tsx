import React, {FC} from 'react';
import css from './Messages.module.css'
import MessageBlock from './Message/message';
import Correspondence from './Message/correspondence';
import MessageFormRedux from './MessageForm/MessageForm'
import {InitialStateType} from '../../../Redux/Reducers/messagesReducer';

type PropsType = {
    state: InitialStateType
    addMessage: (messageText: string) => void
}

export type MessageFromValuesType = {
    message: string
}

const Messages: FC<PropsType> = (props) => {

    let newMessages = props.state.message.map(d => (
        // todo ПОФИКСИТЬ
        // @ts-ignore
        <MessageBlock id={d.id} key={d.id} name={d.name} time={d.time} message={d.message}/>
    ))


    let newCorrespondence = props.state.correspondence.map(m => (
        <Correspondence key={m.id} message={m.message}/>
    ))


    let addMessage = (value: MessageFromValuesType) => {
        props.addMessage(value.message)
    }

    return (
        <div className={css.section}>
            <div className={css.messageList}>
                <h4 className={css.messagesTitle}>Last messages</h4>
                {newMessages}
            </div>
            <div className={css.сorrespondence}>
                <div className={css.corTitle}>
                    Title
                </div>
                <div className="css.cor">
                    {newCorrespondence}
                </div>
                <MessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    )
}

export default Messages