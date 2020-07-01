import App from './App';
import * as serviceWorker from './serviceWorker';
// Псевдо REDUX
import state from './psevdoRedux/state'
import {rerenderEntireTree} from "./render";


// addMessage('GeG')


rerenderEntireTree(state)

serviceWorker.unregister();
