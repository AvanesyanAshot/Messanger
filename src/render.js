import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, updateNewMessage} from "./psevdoRedux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addMessage={addMessage}
                 updateNewMessage = {updateNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}