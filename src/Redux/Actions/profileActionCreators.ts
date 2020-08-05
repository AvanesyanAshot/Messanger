import {SAVE_PHOTO, SET_USER_PROFILE, SET_USER_STATUS} from "../Reducers/profileReducer"
import {PhotosType, ProfileType} from "../../types/types"

export type ProfileActionsType = setUserProfileActionType | setUserStatusActionType | savePhotoSuccessActionType

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile})

type setUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status: string): setUserStatusActionType => ({type: SET_USER_STATUS, status})

type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => ({type: SAVE_PHOTO, photos})