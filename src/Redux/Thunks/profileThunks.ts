import {profileAPI, ResultCodeEnum, usersAPI} from "../../DAL/api";
import {ProfileActionsType, savePhotoSuccess, setUserProfile, setUserStatus} from "../Actions/profileActionCreators";
import {ProfileType} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";
import {UserActionsType} from "../Actions/userActionCreators";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsType>

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(data))
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodeEnum.Success) {
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
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getUserProfile(userId))
    }
}