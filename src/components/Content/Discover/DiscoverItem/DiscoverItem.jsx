import React from "react";
import css from '../Discover.module.css'


const DiscoverItem = (props) => {
    return (
        <div className={css.item}>
            <h4>{props.id}</h4>
            <hr/>
            <span className={css.itemAuthor}>{props.name}</span>
        </div>
    )
}

export default DiscoverItem