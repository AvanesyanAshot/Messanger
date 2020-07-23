import React from "react";
import css from "./Profile.module.css"
import Userprofile from "./Contents/Profile/Userprofile";
import Preloader from "../../Common/Preloader/Preloader";

let Profile = ({profile, status, updateUserStatus}) => {
    if (!profile){
        return <Preloader />
    }

    return (
        <div className={css.section}>
            <Userprofile profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <div className={css.posts}>
                <div className={css.nav}>
                    <button className={css.link}>Projects</button>
                    <button className={css.link}>Collections</button>
                    <button className={css.link}>Followers</button>
                    <button className={css.link}>Following</button>
                </div>
                <div className={css.content}>
                    some info
                </div>
            </div>
        </div>
    )

}

export default Profile