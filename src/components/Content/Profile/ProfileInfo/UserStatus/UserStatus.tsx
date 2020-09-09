import React, { ChangeEvent, useEffect, useState } from 'react'
import useToggle from '../../../../../hooks/useToggle'

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

const UserStatus = (props: PropsType) => {
    let [toggle, { onToggle, offToggle }] = useToggle()
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const deactivateToggle = () => {
        offToggle()
        props.updateUserStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!toggle && (
                <div>
                    <b>Status: </b>
                    <span onDoubleClick={onToggle}>
                        {props.status || 'Нет статуса'}
                    </span>
                </div>
            )}
            {toggle && (
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateToggle}
                        value={status}
                    />
                </div>
            )}
        </div>
    )
}

export default UserStatus
