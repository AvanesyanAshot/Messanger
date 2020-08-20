import React from 'react';
import {Field, Formik} from 'formik';
import {FilterType} from '../../../../Redux/Reducers/usersReducer';

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}


let UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onFilterChanged(values)
        setSubmitting(false)

    }
    return <>
        <Formik
            initialValues={{term: '', friend: null}}
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
                    <Field
                        type="term"
                        name="term"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.term}
                    />
                    <Field
                        name='friend'
                        as='select'
                    >
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>

                    </Field>
                    <button type="submit" disabled={isSubmitting}>Find</button>
                </form>
            )}
        </Formik>
    </>
})
export default UsersSearchForm
