import {ProfileType} from "../../types/types"
import {ProfileActionsType} from "../Actions/profileActionCreators";


export type InitialStateType = typeof initialState

// INIT
let initialState = {
    profile: null as ProfileType | null,
    status: ''
}

// REDUCER
const messagesReducer = (state = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case "profile/SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "profile/SET_USER_STATUS":
            return {...state, status: action.status}
        case "profile/SAVE_PHOTO":
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state
    }
}

export default messagesReducer