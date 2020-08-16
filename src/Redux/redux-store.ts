import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import discoverReducer from './Reducers/discoverReducer';
import messagesReducer from './Reducers/messagesReducer';
import usersReducer from './Reducers/usersReducer';
import profileReducer from './Reducers/profileReducer';
import authReducer from './Reducers/authReducer';
import appReducer from './Reducers/appReducer';
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    Messages: messagesReducer,
    Discover: discoverReducer,
    Users: usersReducer,
    Profile: profileReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.__store__ = store
export default store

