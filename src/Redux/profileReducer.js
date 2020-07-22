import {profileAPI, usersAPI} from "../DAL/api";
// INIT
let initState = {
    profile: null,
    status: ''
}

// ACTION TYPE
let SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
let SET_USER_STATUS = 'profile/SET_USER_STATUS';

// ACTION CREATOR
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

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

// REDUCER
const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export default messagesReducer