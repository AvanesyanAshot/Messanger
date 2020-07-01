import React from "react";
import css from "./Messages.module.css"
import MessageBlock from "./Message/message";
import сorrespondence from "./Message/correspondence";

const Messages = (props) => {
    let newMessages = props.messages.message.map(m => (
        <MessageBlock id={m.id} name={m.name} time={m.time} message={m.message}/>)
    )

    let newCorrespondence = props.messages.message.map( m => (
        <сorrespondence message={m.message}/>
    ))
    let newMessageElement = React.createRef()
    let addMessage = () => {
        let message = newMessageElement.current.value
        props.addMessage(message)
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
                    <textarea ref={newMessageElement} placeholder='Написать сообщение...'></textarea>
                    <button onClick={addMessage} className={css.btn}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages