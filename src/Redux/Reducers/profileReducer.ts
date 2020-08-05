import { ProfileType } from "../../types/types"
import {ProfileActionsType} from "../Actions/profileActionCreators";

export const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
export const SET_USER_STATUS = 'profile/SET_USER_STATUS'
export const SAVE_PHOTO = 'profile/SAVE_PHOTO'

// INIT
let initialState = {
    profile: null as ProfileType | null,
    status: ''
}
export type InitialStateType = typeof initialState

// REDUCER
const messagesReducer = (state = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state
    }
}

export default messagesReducer