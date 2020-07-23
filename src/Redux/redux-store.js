import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import discoverReducer from "./discoverReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import appReducer from "./AppReducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    Messages: messagesReducer,
    Discover: discoverReducer,
    Users: usersReducer,
    Profile: profileReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

е
window.__store__ = store
export default store

