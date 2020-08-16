import {AppActionsType} from '../Actions/appActionCreators';

//Type
type InitStateType = typeof initState

//INIT
let initState = {
    initialized: false
}

//REDUCER
const appReducer = (state = initState, action: AppActionsType): InitStateType => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS':
            return {...state, initialized: true}
        default:
            return state
    }
}

export default appReducer