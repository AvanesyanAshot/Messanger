import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import discoverReducer from "./Reducers/discoverReducer";
import messagesReducer from "./Reducers/messagesReducer";
import usersReducer from "./Reducers/usersReducer";
import profileReducer from "./Reducers/profileReducer";
import authReducer from "./Reducers/authReducer";
import appReducer from "./Reducers/appReducer";
import {reducer as formReducer} from 'redux-form'

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

window.__store__ = store
export default store

