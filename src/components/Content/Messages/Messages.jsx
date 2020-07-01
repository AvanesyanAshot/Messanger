import React from "react";
import css from "./Messages.module.css"
import MessageBlock from "./Message/message";

const Messages = (props) => {
    let newMessages = props.messages.message.map(m => (
        <MessageBlock id={m.id} name={m.name} time={m.time} message={m.message}/>)
    )

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
                    Переписка...
                </div>
                <div className={css.corManage}>
                    <textarea placeholder='Написать сообщение...'></textarea>
                    <div className={css.btn}>Отправить</div>
                </div>
            </div>
        </div>
    )
}

export default Messages