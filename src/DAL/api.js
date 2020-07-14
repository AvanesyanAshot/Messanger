import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "61a5ce91-0013-44e5-9ca4-7aef27d4ef3d"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 9) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data)
    }
}