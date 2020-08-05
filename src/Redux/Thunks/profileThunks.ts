import {profileAPI, usersAPI} from "../../DAL/api";
import {ProfileActionsType, savePhotoSuccess, setUserProfile, setUserStatus} from "../Actions/profileActionCreators";
import {ProfileType} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";
import {UserActionsType} from "../Actions/userActionCreators";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsType>

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const savePhoto = (file: any): ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}