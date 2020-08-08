import React, {FC} from "react";
import css from "./FormsControls.module.css"
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorsType} from "../../../utls/validators/validators";

type FormControlParamsType = {
    meta: WrappedFieldMetaProps
}
const FormControl: FC<FormControlParamsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={css.formControl + " " + (hasError ? css.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input className={css.input} {...input} {...restProps}/></FormControl>
}

export function createField<N extends string>(placeholder: string | undefined,
                            name: N,
                            validators: Array<FieldValidatorsType> | null,
                            component: FC<WrappedFieldProps> | string,
                            props = {}, text = ''){
    return <div className={css.inputBlock}>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        />{text}
    </div>
}


