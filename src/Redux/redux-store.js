import {combineReducers, createStore} from "redux";
import discoverReducer from "./discoverReducer";
import messagesReducer from "./messagesReducer";

let reducers = combineReducers({
    Messages: messagesReducer,
    Discover: discoverReducer
})

let store = createStore(reducers)

export default store
