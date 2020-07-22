import {getAuthUserData} from "./authReducer";

//INIT
let initState = {
    initialized: false
}

// ACTION TYPE
let INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

// ACTION CREATOR
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

// THUNK CREATOR
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

//REDUCER
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}

export default appReducer