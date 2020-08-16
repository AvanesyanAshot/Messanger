import React, {FC} from 'react';
import css from '../User.module.css'
import {ContactsType, ProfileType} from '../../../../../types/types';

type PropsType = {
    profile: ProfileType
}
const ProfileData: FC<PropsType> = ({profile}) => {
    return (
        <div>
            <p>{profile.aboutMe}</p>
            <div><b>lookingForAJob:</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
            {
                profile.lookingForAJob &&
                <div><b>lookingForAJobDescription:</b>{profile.lookingForAJobDescription}</div>
            }
            <div>
                <b>Contacts</b>:{Object
                .keys(profile.contacts)
                .map(key => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={profile.contacts[key as keyof ContactsType]}/>
                })}
            </div>
        </div>
    )
}
type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={css.contact}><b>{contactTitle}: </b>{contactValue}</div>
}
export default ProfileData