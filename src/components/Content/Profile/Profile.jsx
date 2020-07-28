import React from "react";
import css from "./Profile.module.css"
import Userprofile from "./ProfileInfo/Userprofile";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileContent from "./ProfileContent/ProfileContent";

let Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    if (!profile){
        return <Preloader />
    }

    return (
        <div className={css.section}>
            <Userprofile isOwner={isOwner} profile={profile} status={status}
                         updateUserStatus={updateUserStatus} savePhoto={savePhoto}/>
            <ProfileContent profile={profile} isOwner={isOwner} saveProfile={saveProfile}/>
        </div>
    )

}

export default Profile