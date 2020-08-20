import React from 'react';
import {Field, Formik} from 'formik';
import {FilterType} from '../../../../Redux/Reducers/usersReducer';

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type FilterTypeWithFriend = {
    term: string
    friend: 'true' | 'false' | 'null'
}

const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}


let UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const submit = (values: FilterTypeWithFriend, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)

    }
    return <>
        <Formik
            initialValues={{term: '', friend: 'null'}}
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
