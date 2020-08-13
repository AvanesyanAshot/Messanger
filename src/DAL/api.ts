import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "61a5ce91-0013-44e5-9ca4-7aef27d4ef3d"
    }
})

export type DefaultResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    resultCode: RC
    messages: Array<string>
}

// Enum
export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeWithCaptcha {
    Captcha = 10
}




