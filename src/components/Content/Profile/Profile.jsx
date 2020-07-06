import React from "react";
import css from "./Profile.module.css"
import {NavLink} from "react-router-dom";

const Profile = () => {
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
                    some content
                </div>
            </div>

        </div>

    )
}

export default Profile