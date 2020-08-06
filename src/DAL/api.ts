import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "61a5ce91-0013-44e5-9ca4-7aef27d4ef3d"
    }
})

// Enum
export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeWithCaptcha {
    Captcha = 10
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 9) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number | null) {
        //Старый метод
        console.warn('Старый метод')
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status})
    },
    savePhoto(photo: any) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put('profile/photo', formData)
    },
    saveProfile(profile: ProfileType) {
        return instance.put('profile', profile)
    }

}

type MeType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LoginType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum | ResultCodeWithCaptcha
    messages: Array<string>
}
type LogoutType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: Array<string>
}
export const authAPI = {
    me() {
        return instance.get<MeType>('auth/me').then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginType>('auth/login', {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout() {
        return instance.delete<LogoutType>('auth/login').then(res => res.data)
    }
}

type GetCaptchaUrlType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlType>('security/get-captcha-url').then(res => res.data)
    }
}
