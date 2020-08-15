import React from "react";
import css from '../Discover.module.css'

type PropsType = {
    id: number
    name: string
}

const DiscoverItem: React.FC<PropsType> = (props) => {
    return (
        <div className={css.item}>
            <h4>{props.id}</h4>
            <hr/>
            <span className={css.itemAuthor}>{props.name}</span>
        </div>
    )
}

export default DiscoverItem