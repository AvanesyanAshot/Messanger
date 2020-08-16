import React from 'react';
import css from '../Messages.module.css'

type PropsType = {
    id: number
    name: string
    time: Date
    message: string
}

const MessageBlock: React.FC<PropsType> = (props) => {
    return (
        <div onClick={() => alert(props.id)} className={css.messageItem}>
            <div className={css.photo}>
            </div>
            <div className={css.content}>
                <span className={css.name}>{props.name}</span>
                <time className={css.time}>{props.time}</time>
                <p className={css.message}>{props.message}</p>
            </div>
        </div>
    )
}

const MessageBlockWithMemo = React.memo(MessageBlock)

export default MessageBlockWithMemo