import React from 'react';
import css from './Discover.module.css'
import DiscoverItem from './DiscoverItem/DiscoverItem';
import {InitialStateType} from '../../../Redux/Reducers/discoverReducer';

type PropsType = {
    store: InitialStateType
}

const Discover: React.FC<PropsType> = (props) => {
    let newDiscoverData = props.store.discoverData.map(item => (
        <DiscoverItem key={item.id} id={item.id} name={item.name}></DiscoverItem>))

    return (
        <div className={css.content}>
            <aside className={css.nav}>
                <h3 className={css.categoriesTitle}>Popular categories</h3>
                some categories
                <hr/>
            </aside>
            <div className={css.result}>
                {newDiscoverData}
            </div>
        </div>
    )
}

export default Discover