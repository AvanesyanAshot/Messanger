import React from 'react';
import {Formik} from 'formik';
import {FilterType} from '../../../../Redux/Reducers/usersReducer';

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}


let UsersSearchForm: React.FC<PropsType> = (props) => {

    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onFilterChanged(values)
        setSubmitting(false)

    }
    return <>
        <Formik
            initialValues={{term: ''}}
            validate={userSearchFormValidate}
            onSubmit={submit}>
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="term"
                        name="term"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.term}
                    />
                    <button type="submit" disabled={isSubmitting}>Find</button>
                </form>
            )}
        </Formik>
    </>
}
export default UsersSearchForm
