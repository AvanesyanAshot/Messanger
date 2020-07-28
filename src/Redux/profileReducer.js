import {profileAPI, usersAPI} from "../DAL/api";
// INIT
let initState = {
    profile: null,
    status: ''
}

// ACTION TYPE
let SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
let SET_USER_STATUS = 'profile/SET_USER_STATUS';
let SAVE_PHOTO = 'profile/SAVE_PHOTO';

// ACTION CREATOR
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const savePhotoSuccess = (photo) => ({type: SAVE_PHOTO, photo})

// THUNK CREATOR
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}

// REDUCER
const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo}}
        default:
            return state
    }
}

export default messagesReducer