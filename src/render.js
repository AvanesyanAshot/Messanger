import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage} from "./psevdoRedux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}