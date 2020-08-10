import {PhotosType, ProfileType} from "../../types/types"
import {InferActionsType} from "../redux-store";

export type ProfileActionsType = InferActionsType<typeof profileActions>

export const profileActions = {
    setUserProfile: (profile: ProfileType) => ({type: 'profile/SET-USER-PROFILE', profile} as const),
    setUserStatus: (status: string) => ({type: 'profile/SET_USER_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'profile/SAVE_PHOTO', photos} as const)
}


