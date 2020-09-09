import { useState, useCallback } from 'react'

const useToggle = (defaultState: boolean = false) => {
    const [toggle, setToggle] = useState(defaultState)

    const switchToggle = useCallback(() => setToggle((state) => !state), [])
    const onToggle = useCallback(() => setToggle(true), [])
    const offToggle = useCallback(() => setToggle(false), [])

    return [toggle, { onToggle, offToggle, switchToggle }] as const
}

export default useToggle
