import React from "react";
import css from '../User.module.css'

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
export default ProfileData