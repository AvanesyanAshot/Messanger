import React from "react";
import css from "./FormsControls.module.css"


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={css.formControl + " " + (hasError ? css.error: '')}>
            <div><textarea {...input} {...props}/> {hasError && <span>{meta.error}</span>}</div>
        </div>

    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={css.formControl + " " + (hasError ? css.error: '')}>
            <div><input {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}
