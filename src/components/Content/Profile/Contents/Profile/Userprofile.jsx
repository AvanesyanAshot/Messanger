import React from "react";
import css from "./User.module.css"
import * as axios from 'axios'

const Userprofile = (props) => {
    return (
        <div className={css.userDetail}>
            <div className={css.header}>
                <button className={css.btn}>+ Follow</button>
                <div className={css.logo}></div>
                <button className={css.btn}>+ Message</button>
            </div>
            <p className={css.name}>{props.profile.fullName}</p>
            <p>{props.profile.aboutMe}</p>
            <div className={css.management}>
                <button className={css.btn}>Создать пост</button>
                <button className={css.btn}>Удалить пост</button>

            </div>
        </div>

    )
}

export default Userprofile