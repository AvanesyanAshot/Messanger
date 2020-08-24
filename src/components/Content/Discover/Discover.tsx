import React, {FC} from 'react';
import css from './Discover.module.css'
import DiscoverItem from './DiscoverItem/DiscoverItem';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';

const DiscoverPage: FC = (props) => {
    const store = useSelector(((state: AppStateType) => state.Discover.discoverData))

    let newDiscoverData = store.map(item => (
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

export default DiscoverPage

