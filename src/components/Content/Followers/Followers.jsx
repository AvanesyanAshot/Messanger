import React from "react";
import css from './User.module.css'
import avatar from '../../../assets/img/avatar.png'

// TODO перекинуть этот блок в profile

const UserBlock = (props) => {
    // debugger
    return <div className={css.wrapper}>
        {
            props.state.users.map( u => <div key={u.id} className={css.card}>
                <div className={css.userBlock}>
                    <img className={css.avatar} src={avatar} alt="#"/>
                    <h3 className={css.userName}>{u.name}</h3>
                    <span className={css.country}>Russia, Moscow</span>
                    <div className={css.infoBlock}>
                        <span>12 likes</span>
                        <span>15 views</span>
                    </div>
                    <button className={css.follow}>follow</button>
                </div>
            </div>)
        }

    </div>
}

export default UserBlock