import {AppStateType} from '../redux-store';

export const getProfile = (state: AppStateType) => {
    return state.Profile.profile
}
export const getStatus = (state: AppStateType) => {
    return state.Profile.status
}
