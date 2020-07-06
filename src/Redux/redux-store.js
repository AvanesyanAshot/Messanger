import {combineReducers, createStore} from "redux";
import discoverReducer from "./discoverReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    Messages: messagesReducer,
    Discover: discoverReducer,
    Users: usersReducer
})

let store = createStore(reducers)
window.store = store

export default store

