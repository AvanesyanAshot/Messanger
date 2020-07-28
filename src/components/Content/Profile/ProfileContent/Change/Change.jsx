import React, {useState} from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../../Common/Forms/FormsControl";
import {required} from "../../../../../utls/validators/validators";
import css from '../../Profile.module.css'

let Change = ({handleSubmit, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <b>Full Name: </b>{createField('fullName', 'fullName', [], Input)}
            <b>Looking for a job:</b>{createField('', 'lookingForAJob', [], 'input', {type: 'checkbox'})}
            <b>My professional skills:</b>{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            <b>About Me: </b>{createField('aboutMe', 'aboutMe', [], Textarea)}
            <div>
                <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                return <div className={css.contact} key={key}>
                    <b>{key}</b>: {createField(key, 'contact.'+ key, [], Input)}
                </div>
            })}
            </div>
            <button>Save</button>
        </form>
    )
}

let ChangeReduxForm = reduxForm({form: 'edit-profile'})(Change)

export default ChangeReduxForm