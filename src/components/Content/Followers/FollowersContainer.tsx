import React from 'react'
import { useSelector } from 'react-redux'
import Preloader from '../../Common/Preloader/Preloader'
import { getIsFetching } from '../../../Redux/Selectors/usersSelectros'
import { Users } from './Users'

type UserPagePropsType = {}

export const FollowersPage: React.FC<UserPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return (
        <>
            {isFetching ? <Preloader /> : null}
            <Users />
        </>
    )
}
