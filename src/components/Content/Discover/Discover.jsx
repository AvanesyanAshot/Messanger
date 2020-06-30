import React from "react";
import css from './Discover.module.css'


const DiscoverItem = (props) => {
    return (
        <div className={css.item}>
            <h4>{props.id}</h4>
            <hr/>
            <span className={css.itemAuthor}>{props.name}</span>
        </div>
    )
}

//TODO Сделать фильтры
//TODO Доверстать item

const Discover = () => {
    const discoverData = [
        {id:1,name:'Pasha'},
        {id:2,name:'Kolya'},
        {id:3,name:'Sveta'},
        {id:4,name:'Ahmed'},
        {id:5,name:'Razmik'},
        {id:6,name:'Gevorg'},
        {id:7,name:'Artem'},
        {id:8,name:'Vitalik'},
        {id:9,name:'Grey'}
    ]

    let newDiscoverData = discoverData.map(item => (<DiscoverItem id={item.id} name={item.name} />))

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