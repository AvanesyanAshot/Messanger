import React, { FC, useState } from 'react'
import cn from 'classnames'
import css from './Paginator.module.css'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    portionSize?: number
}

let Users: FC<PropsType> = ({
    totalItemsCount,
    pageSize,
    onPageChanged,
    currentPage,
    portionSize = 10,
}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={css.pagination}>
            {portionNumber > 1 && (
                <button
                    className={css.pagControl}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                >
                    Prev
                </button>
            )}
            {pages
                .filter(
                    (p) =>
                        p >= leftPortionPageNumber &&
                        p <= rightPortionPageNumber
                )
                .map((p) => {
                    return (
                        <span
                            key={p}
                            onClick={() => {
                                onPageChanged(p)
                            }}
                            className={cn({
                                [css.selectedPage]: currentPage === p,
                            })}
                        >
                            {p}
                        </span>
                    )
                })}
            {portionCount > portionNumber && (
                <button
                    className={css.pagControl}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                >
                    Next
                </button>
            )}
        </div>
    )
}

export default Users
