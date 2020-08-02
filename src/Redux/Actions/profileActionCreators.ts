import {SAVE_PHOTO, SET_USER_PROFILE, SET_USER_STATUS} from "../Reducers/profileReducer"
import {PhotosType, ProfileType} from "../../types/types"

export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status})
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO, photos})