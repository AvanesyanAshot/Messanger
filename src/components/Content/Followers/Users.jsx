import React from "react";
import css from './User.module.css'
import avatar from '../../../assets/img/avatar.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={css.wrapper}>
        <div className={css.users}>
            {
                props.users.map(u => <div key={u.id} className={css.card}>
                    <div className={css.userBlock}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={css.avatar} src={avatar} alt="#"/>
                        </NavLink>
                        {/*<img className={css.avatar} src={u.photos.small != null  ? u.photos.small : avatar} alt="#"/>*/}
                        <h3 className={css.userName}>{u.name}</h3>
                        <span className={css.country}>u.address.city</span>
                        <div className={css.infoBlock}>
                            <span>12 likes</span>
                            <span>15 views</span>
                        </div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "61a5ce91-0013-44e5-9ca4-7aef27d4ef3d"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)

                                        }
                                    })
                            }} className={css.unfollow}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "61a5ce91-0013-44e5-9ca4-7aef27d4ef3d"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)

                                        }
                                    })
                            }} className={css.follow}>Follow</button>}
                    </div>
                </div>)
            }
        </div>

        <div className={css.pagination}>
            {pages.map(p => {
                return <span key={p} onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPages === p && css.selectedPage}>{p}</span>

            })}
        </div>

    </div>
}

export default Users