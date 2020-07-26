import React from "react";
import css from "./User.module.css"
import UserStatus from "./UserStatus";
import avatar from '../../../../../assets/img/avatar.png'

const Userprofile = React.memo((props) => {
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={css.userDetail}>
            <div className={css.header}>
                <button className={css.btn}>+ Follow</button>
                <img className={css.logo} src={props.profile.photos.large || avatar} />
                <button className={css.btn}>+ Message</button>
            </div>
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <p className={css.name}>{props.profile.fullName}</p>
            <UserStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            <p>{props.profile.aboutMe}</p>
            <div className={css.management}>
                <button className={css.btn}>Создать пост</button>
                <button className={css.btn
                }>Удалить пост</button>

            </div>
        </div>

    )
})

export default Userprofile