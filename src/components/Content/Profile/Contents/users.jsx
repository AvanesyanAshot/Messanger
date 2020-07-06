import React from "react";


const UserBlock = (props) => {
    return (
        <div>
            <span>{props.firstName}</span>
            <span>{props.age}</span>

        </div>
    )
}

export default UserBlock