import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import avatar from '../../../assets/img/avatar.png'
import { userActions } from '../../../Redux/Actions/userActionCreators'
import { FilterType } from '../../../Redux/Reducers/usersReducer'
import {
    getcurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter,
} from '../../../Redux/Selectors/usersSelectros'
import { follow, setUsers, unfollow } from '../../../Redux/Thunks/userThunks'
import Paginator from '../../Common/Paginator/Paginator'
import css from './User.module.css'
import UsersSearchForm from './UsersSearchForm/UsersSearchForm'
import * as queryString from 'querystring'

const { setCurrentPage } = userActions

type PropsType = {}

export const Users: FC<PropsType> = (props) => {
    const users = useSelector(getUsers)
    const currentPage = useSelector(getcurrentPage)
    const totalItemsCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory()

    // useEffect(() => {
    //     history.push({
    //         pathname: '/Followers',
    //         search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`,
    //     })
    // }, [filter, currentPage])

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1))
        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term)
            actualFilter = { ...actualFilter, term: parsed.term as string }
        switch (parsed.friend) {
            case 'null':
                actualFilter = { ...actualFilter, friend: null }
                break
            case 'true':
                actualFilter = { ...actualFilter, friend: true }
                break
            case 'false':
                actualFilter = { ...actualFilter, friend: false }
                break
        }
        dispatch(setUsers(actualPage, pageSize, actualFilter))
    }, [])
    const onPageChanged = (page: number) => {
        dispatch(setUsers(page, pageSize, filter))
        dispatch(setCurrentPage(page))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(setUsers(1, pageSize, filter))
    }
    const followHandler = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowHandler = (userId: number) => {
        dispatch(unfollow(userId))
    }
    return (
        <div className={css.wrapper}>
            <UsersSearchForm onFilterChanged={onFilterChanged} />

            <div className={css.users}>
                {users.map((u) => (
                    <div key={u.id} className={css.card}>
                        <div className={css.userBlock}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={
                                        u.photos.small != null
                                            ? u.photos.small
                                            : avatar
                                    }
                                    alt="#"
                                    className={css.avatar}
                                />
                            </NavLink>
                            <h3 className={css.userName}>{u.name}</h3>
                            <span className={css.country}>u.address.city</span>
                            <div className={css.infoBlock}>
                                <span>12 likes</span>
                                <span>15 views</span>
                            </div>
                            {u.followed ? (
                                <button
                                    disabled={followingInProgress.some(
                                        (id) => id === u.id
                                    )}
                                    onClick={() => {
                                        unfollowHandler(u.id)
                                    }}
                                    className={css.unfollow}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={followingInProgress.some(
                                        (id) => id === u.id
                                    )}
                                    onClick={() => {
                                        followHandler(u.id)
                                    }}
                                    className={css.follow}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className={css.paginator}>
                <Paginator
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalItemsCount={totalItemsCount}
                    pageSize={pageSize}
                />
            </div>
        </div>
    )
}
