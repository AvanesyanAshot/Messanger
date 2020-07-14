import React from "react";
import css from "./Messages.module.css"
import MessageBlock from "./Message/message";
import сorrespondence from "./Message/correspondence";
import Redirect from "react-router-dom/es/Redirect";


// TODO Сделать отдельный компонент для вывода всех сообщений и отдельно диалог


const Messages = (props) => {
   // MAP jsx
    let newMessages = props.state.message.map(m => (
        <MessageBlock id={m.id} key={m.id} name={m.name} time={m.time} message={m.message}/>)
    )

    let newCorrespondence = props.state.correspondence.map(m => (
        <сorrespondence key={m.id} message={m.message}/>
    ))

    // REFS
    let newMessageElement = React.createRef()

    //Functions
    let addMessage = (e) => {
        props.addMessage()
        newMessageElement.current.value = ''
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.onMessageChange(text)
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>
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
                              value={props.state.newMessageText}
                              ref={newMessageElement}
                              placeholder='Написать сообщение...'></textarea>
                    <button onClick={addMessage} className={css.btn}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages