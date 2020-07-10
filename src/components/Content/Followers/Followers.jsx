import React from "react";
import * as axios from 'axios'
import css from './User.module.css'
import avatar from '../../../assets/img/avatar.png'
import {setCurrentPage} from "../../../Redux/usersReducer";


// TODO перекинуть этот блок в profile
// TODO Сделать pagination


class UserBlock extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`)
            .then(response => {
                debugger

                this.props.setUsers(response.data.items)
                // this.props.setTotalUserCount(response.data.totalCount)

            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div className={css.wrapper}>
            <div className={css.users}>
                {
                    this.props.users.map(u => <div key={u.id} className={css.card}>
                        <div className={css.userBlock}>
                            <img className={css.avatar} src={u.photos.small != null ? u.photos.small : avatar} alt="#"/>
                            <h3 className={css.userName}>{u.name}</h3>
                            <span className={css.country}>u.address.city</span>
                            <div className={css.infoBlock}>
                                <span>12 likes</span>
                                <span>15 views</span>
                            </div>
                            <button className={css.follow}>follow</button>
                        </div>
                    </div>)
                }
            </div>

            <div className={css.pagination}>
                {pages.map(p => {
                    return <span key={p} onClick={(e) => {
                        this.onPageChanged(p)
                    }} className={this.props.currentPages === p && css.selectedPage}>{p}</span>

                })}
            </div>

        </div>
    }
}

export default UserBlock