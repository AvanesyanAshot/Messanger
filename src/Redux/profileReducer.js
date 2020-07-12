let initState = {
    profile: null
}

// ACTION TYPE
let SET_USER_PROFILE = 'SET-USER-PROFILE';

// ACTION CREATOR
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export default messagesReducer