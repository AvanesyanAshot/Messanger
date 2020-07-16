import {profileAPI, usersAPI} from "../DAL/api";
// INIT
let initState = {
    profile: null,
    status: ''
}

// ACTION TYPE
let SET_USER_PROFILE = 'SET-USER-PROFILE';
let SET_USER_STATUS = 'SET_USER_STATUS';

// ACTION CREATOR
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

// THUNK CREATOR
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response=>{
            dispatch(setUserProfile(response.data))
        })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response=>{
            dispatch(setUserStatus(response.data))
        })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response=>{
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
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