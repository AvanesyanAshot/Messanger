import React from "react";
import css from "./Messages.module.css"
import MessageBlock from "./Message/message";

const Messages = (props) => {
    let newMessages = props.messages.message.map( m => (
        <MessageBlock name={m.name} time={m.time} message={m.message}/>)
    )

    return (
        <div className={css.section}>
            <div className={css.messageList}>
                {newMessages}
            </div>
            <div>
                Some message ...
            </div>
        </div>
    )
}

export default Messages