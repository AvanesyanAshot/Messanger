import React from "react";
import css from './Discover.module.css'


//TODO Сделать фильтры
//TODO Сделать item

const Discover = () => {
    return (
        <div className={css.content}>
            <aside className={css.nav}>
                <h3>Popular categories</h3>
                some categories
                <hr/>
                <br/><br/><br/><br/><br/>
            </aside>
            <div>
                <h3>Result</h3>
                Some result
            {/* Items   */}
            </div>
        </div>
    )
}

export default Discover