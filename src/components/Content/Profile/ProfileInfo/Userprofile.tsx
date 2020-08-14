import React, {ChangeEvent, FC} from "react";
import css from "./User.module.css"
import UserStatus from "./UserStatus/UserStatus";
import avatar from '../../../../assets/img/avatar.png'
import ProfileData from "./ProfileData/ProfileData";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    status: string
    savePhoto: (file:File) => void
    updateUserStatus: (status: string) => void

}

const UserProfile: FC<PropsType> = (props) => {
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={css.userDetail}>
            <div className={css.header}>
                <button className={css.btn}>+ Follow</button>
                <div className={css.photo}></div>
                <div><img className={css.logo} src={props.profile.photos.large || avatar}/></div>
                <button className={css.btn}>+ Message</button>
            </div>
            {props.isOwner && <input type="file" className={css.inputfile} onChange={onMainPhotoSelected}/>}
            <p className={css.name}>{props.profile.fullName}</p>

            <UserStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            <ProfileData profile={props.profile}/>

            <div className={css.management}>
                <button className={css.btn}>Создать пост</button>
                <button className={css.btn}>Удалить пост</button>
            </div>
        </div>

    )
}
const UserProfileMemorized = React.memo(UserProfile)

export default UserProfileMemorized