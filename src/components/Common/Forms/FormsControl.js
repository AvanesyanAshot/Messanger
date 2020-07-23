import React from "react";
import css from "./FormsControls.module.css"
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, child, ...props}) => {
    const hasError = touched && error
    return (
        <div className={css.formControl + " " + (hasError ? css.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input className={css.input} {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div className={css.inputBlock}>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        />{text}
    </div>
)


