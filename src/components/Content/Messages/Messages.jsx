import React from "react";
import css from "./Messages.module.css"
import MessageBlock from "./Message/message";

const Messages = () => {
    return (
        <div className={css.section}>
            <div className={css.messageList}>
                <MessageBlock name='Fedor' time='10:54' message='Hello world'/>
                <MessageBlock name='Kolya' time='10:58' message='Hello'/>
                <MessageBlock name='Petya' time='11:54' message='How are u?'/>
                <MessageBlock name='Katya' time='10:54' message='Thx'/>
            </div>
            <div>
                Some message
            </div>
        </div>
    )
}

export default Messages