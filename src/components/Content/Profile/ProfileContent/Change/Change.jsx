import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../../Common/Forms/FormsControl";
import css from '../../Profile.module.css'

let Change = ({handleSubmit, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <b>Full Name: </b>{createField('fullName', 'fullName', [], Input)}
            <b>Looking for a job:</b>{createField('', 'lookingForAJob', [], 'input', {type: 'checkbox'})}
            <b>My professional
                skills:</b>{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            <b>About Me: </b>{createField('aboutMe', 'aboutMe', [], Textarea)}
            <div>
                <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                return <div className={css.contact} key={key}>
                    <b>{key}</b>: {createField(key, 'contacts.' + key, [], Input)}
                </div>
            })}
            </div>
            <button>Save</button>
        </form>
    )
}

export default reduxForm({form: 'edit-profile'})(Change)