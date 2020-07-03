import React from "react";
import css from "./Messages.module.css"
import MessageBlock from "./Message/message";
import сorrespondence from "./Message/correspondence";
import {actionAddMessage, actionOnMessageChange} from '../../../Redux/messagesReducer';


// TODO Сделать отдельный компонент для вывода всех сообщений и отдельно диалог


const Messages = (props) => {
    // MAP jsx
    let newMessages = props.messages.message.map(m => (
        <MessageBlock id={m.id} name={m.name} time={m.time} message={m.message}/>)
    )

    let newCorrespondence = props.messages.correspondence.map(m => (
        <сorrespondence message={m.message}/>
    ))

    // REFS
    let newMessageElement = React.createRef()

    //Functions
    let addMessage = () => {
        props.dispatch(actionAddMessage())
        newMessageElement.current.value = ''
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(actionOnMessageChange(text))
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
                <div className={css.corManage}>
                    <textarea onChange={onMessageChange}
                              value={props.newMessageText}
                              ref={newMessageElement}
                              placeholder='Написать сообщение...'></textarea>
                    <button onClick={addMessage} className={css.btn}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages