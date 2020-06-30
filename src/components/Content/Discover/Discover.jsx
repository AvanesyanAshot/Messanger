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
    return (
        <div className={css.content}>
            <aside className={css.nav}>
                <h3>Popular categories</h3>
                some categories
                <hr/>
                <br/><br/><br/><br/><br/>
            </aside>
            <div className={css.result}>
                <DiscoverItem id={discoverData[0].id} name={discoverData[0].name} />
                <DiscoverItem id={discoverData[1].id} name={discoverData[1].name} />
                <DiscoverItem id={discoverData[2].id} name={discoverData[2].name} />
                <DiscoverItem id={discoverData[3].id} name={discoverData[3].name} />
                <DiscoverItem id={discoverData[4].id} name={discoverData[4].name} />
                <DiscoverItem id={discoverData[5].id} name={discoverData[5].name} />
                <DiscoverItem id={discoverData[6].id} name={discoverData[6].name} />
                <DiscoverItem id={discoverData[7].id} name={discoverData[7].name} />
                <DiscoverItem id={discoverData[8].id} name={discoverData[8].name} />
            </div>
        </div>
    )
}

export default Discover