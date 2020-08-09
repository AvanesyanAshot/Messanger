import {DefaultResponseType, instance} from "./api";
import {UsersType} from "../types/types";

type GetUsersType = {
    items: Array<UsersType>,
    totalCount: number,
    error: string | null
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 9) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<DefaultResponseType>(`follow/${userId}`, {})
            .then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<DefaultResponseType>(`follow/${userId}`)
            .then(res => res.data) as Promise<DefaultResponseType>
    }
}