import React, {useState} from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../../Common/Forms/FormsControl";
import {required} from "../../../../../utls/validators/validators";

let Change = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <b>Full Name: </b>{createField('fullName', 'fullName', [required], Input)}
            <b>About Me: </b>{createField('aboutMe', 'aboutMe', [], Textarea)}
            <b>Looking for a job:</b>{createField('', 'lookingForAJob', [], 'input', {type: 'checkbox'})}
            <b>My professional skills:</b>{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}

            { error && <div>{error}</div>}
            <button>Save</button>
        </form>
    )
}

let ChangeReduxForm = reduxForm({form: 'edit-profile'})(Change)

export default ChangeReduxForm