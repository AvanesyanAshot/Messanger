import React from "react";
import css from "./User.module.css"
import UserStatus from "./UserStatus";
import avatar from '../../../../assets/img/avatar.png'

const Userprofile = React.memo((props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
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
})

const ProfileData = (props) => {
    return (
        <div>
            <p>{props.profile.aboutMe}</p>
            <div><b>lookingForAJob:</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            {
                props.profile.lookingForAJob &&
                <div><b>lookingForAJobDescription:</b>{props.profile.lookingForAJobDescription}</div>
            }
            <div>
                <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={css.contact}><b>{contactTitle}: </b>{contactValue}</div>
}
export default Userprofile