import React, {useState} from "react";
import css from './Paginator.module.css'

let Users = ({totalItemsCount, pageSize, onPageChanged, currentPages, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={css.pagination}>
        {portionNumber > 1 &&
        <button className={css.pagControl} onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>
        }
        {
            pages
                .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span key={p} onClick={(e) => {
                    onPageChanged(p)
                }} className={currentPages === p && css.selectedPage}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button className={css.pagControl} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
        }
    </div>
}

export default Users