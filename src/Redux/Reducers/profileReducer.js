// INIT
let initState = {
    profile: null,
    status: ''
}

// REDUCER
const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'profile/SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'profile/SET_USER_STATUS':
            return {...state, status: action.status}
        case 'profile/SAVE_PHOTO':
            return {...state, profile: {...state.profile, photos: action.photo}}
        default:
            return state
    }
}

export default messagesReducer