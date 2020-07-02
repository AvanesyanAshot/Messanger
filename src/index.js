import ReactDOM from "react-dom";
import React from "react";
import App from './App';
import * as serviceWorker from './serviceWorker';
// Псевдо REDUX
import store from './psevdoRedux/state'
import {BrowserRouter} from "react-router-dom"


let rerenderEntireTree = (state) => {
    // debugger
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addMessage={store.addMessage.bind(store)}
                 updateNewMessage={store.updateNewMessage.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

serviceWorker.unregister();
