import React from 'react';
import {useSpring, animated} from 'react-spring'

type PropsType = {
    message: string
}
const сorrespondence: React.FC<PropsType> = (props) => {
    const spring = useSpring({opacity: 1, from: {opacity: 0}})
    return (
        <animated.div style={spring}>
            <p>{props.message}</p>
        </animated.div>
    )
}

export default сorrespondence