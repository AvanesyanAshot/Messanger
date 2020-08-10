import {PhotosType, ProfileType} from "../types/types";
import {DefaultResponseType, instance} from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosType
}
export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<DefaultResponseType>('profile/status', {status})
            .then(res => res.data)
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append("image", photo)

        return instance.put<DefaultResponseType<SavePhotoResponseDataType>>('profile/photo', formData)
            .then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<DefaultResponseType>('profile', profile)
            .then(res => res.data)
    }

}