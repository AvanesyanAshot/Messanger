import React from "react";
import css from "./Profile.module.css"

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
                posts
            </div>

        </div>

    )
}

export default Profile