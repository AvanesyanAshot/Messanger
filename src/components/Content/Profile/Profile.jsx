import React from "react";
import css from "./Profile.module.css"
import {NavLink} from "react-router-dom";
import UserBlock from "./Contents/users";


// TODO сделать свой REST API

const Profile = (props) => {
    debugger
    // MAP jsx
    let newUsers = props.state.users.map(m => (
        <UserBlock firstName={m.firstName} age={m.age}/>)
    )
    return (
        <div className={css.section}>
            <div className={css.userDetail}>
                <div className={css.header}>
                    <button className={css.btn}>+ Follow</button>
                    <div className={css.logo}></div>
                    <button className={css.btn}>+ Message</button>
                </div>
                <p className={css.name}>Jim Matthews</p>
                <p>some info... and links</p>

                <div className={css.management}>
                    <button className={css.btn}>Создать пост</button>
                    <button className={css.btn}>Удалить пост</button>

                </div>
            </div>

            <div className={css.posts}>
                <div className={css.nav}>
                    <a href='#' className={css.link}>Projects</a>
                    <a href='#' className={css.link}>Collections</a>
                    <a href='#' className={css.link}>Followers</a>
                    <a href='#' className={css.link}>Following</a>
                </div>
                <div className={css.content}>
                    {newUsers}
                </div>
            </div>

        </div>

    )
}

export default Profile