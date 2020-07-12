import {combineReducers, createStore} from "redux";
import discoverReducer from "./discoverReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    Messages: messagesReducer,
    Discover: discoverReducer,
    Users: usersReducer,
    Profile: profileReducer
})

let store = createStore(reducers)
window.store = store

export default store

