import React from "react";
import css from './Paginator.module.css'

let Users = ({totalUsersCount, pageSize, onPageChanged, currentPages}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={css.pagination}>
            {
                pages.map(p => {
                    return <span key={p} onClick={(e) => {
                        onPageChanged(p)
                    }} className={currentPages === p && css.selectedPage}>{p}</span>
                })}
        </div>
}

export default Users