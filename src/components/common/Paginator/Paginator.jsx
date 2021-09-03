import s from './Paginator.module.css'
import { useState } from 'react'
import cn from 'classnames'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button
          className={s.prev}
          onClick={() => {
            setPortionNumber(portionNumber - 1)
          }}
        >
          prev
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              className={cn(
                {
                  [s.page__selected]: currentPage === p,
                },
                s.page__number
              )}
              key={p}
              onClick={(e) => {
                onPageChanged(p)
              }}
            >
              {p}
            </span>
          )
        })}
      {portionCount > portionNumber && (
        <button
          className={s.next}
          onClick={() => {
            setPortionNumber(portionNumber + 1)
          }}
        >
          next
        </button>
      )}
    </div>
  )
}

export default Paginator
