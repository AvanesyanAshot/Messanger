import React from "react";

type PropsType = {
    message: string
}
const сorrespondence: React.FC<PropsType> = (props) => {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    )
}

export default сorrespondence