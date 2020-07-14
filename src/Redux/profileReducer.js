import {usersAPI} from "../DAL/api";
// INIT
let initState = {
    profile: null
}

// ACTION TYPE
let SET_USER_PROFILE = 'SET-USER-PROFILE';

// ACTION CREATOR
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

// THUNK CREATOR
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response=>{
            dispatch(setUserProfile(response.data))
        })
}

// REDUCER
const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export default messagesReducer