import React from "react";
import css from './Discover.module.css'
import DiscoverItem from "./DiscoverItem/DiscoverItem";

//TODO Сделать фильтры
//TODO Доверстать item

const Discover = (props) => {
    let newDiscoverData = props.discover.discoverData.map(item => (<DiscoverItem id={item.id} name={item.name}></DiscoverItem>))

    return (
        <div className={css.content}>
            <aside className={css.nav}>
                <h3>Popular categories</h3>
                some categories
                <hr/>
                <br/><br/><br/><br/><br/>
            </aside>
            <div className={css.result}>
                { newDiscoverData }
            </div>
        </div>
    )
}

export default Discover