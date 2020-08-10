import {ResultCodeEnum} from "../../DAL/api";
import {profileActions, ProfileActionsType} from "../Actions/profileActionCreators";
import {ProfileType} from "../../types/types";
import {BaseThunkType} from "../redux-store";
import {profileAPI} from "../../DAL/profile-api";

type ThunkType = BaseThunkType<ProfileActionsType>

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(profileActions.setUserProfile(data))
}
export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(profileActions.setUserStatus(data))
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(profileActions.setUserStatus(status))
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(profileActions.savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getUserProfile(userId))
    }
}