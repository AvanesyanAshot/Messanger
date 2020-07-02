import ReactDOM from "react-dom";
import React from "react";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMessage, subscribe, updateNewMessage} from "./psevdoRedux/state";
// Псевдо REDUX
import state from './psevdoRedux/state'


let rerenderEntireTree = (state) => {
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
rerenderEntireTree(state)

subscribe(rerenderEntireTree)

serviceWorker.unregister();
