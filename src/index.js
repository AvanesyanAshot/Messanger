    import ReactDOM from "react-dom";
    import React from "react";
    import App from './App';
    import * as serviceWorker from './serviceWorker';
    import store from './Redux/redux-store'
    import {BrowserRouter} from 'react-router-dom'
    import {Provider} from "react-redux";


    let rerenderEntireTree = (state) => {
        ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App state={state} dispatch={store.dispatch.bind(store)}/>
                </Provider>
            </BrowserRouter>,
            document.getElementById('root')
        );
    }
    rerenderEntireTree(store.getState())

    store.subscribe(() => {
        rerenderEntireTree(store.getState())
    })

    serviceWorker.unregister();
