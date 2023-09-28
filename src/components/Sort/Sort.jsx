import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSortId } from '../../redux/slice/filterSlice'
import '../Sort/sort.css'
export const sortData = [
  {name: 'популярности (DESC)', sortproperty: 'rating' },
  {name: 'популярности (ASC)', sortproperty: '-rating' },
  {name: 'по цене (DESC)', sortproperty: 'price' },
  {name: 'по цене (ASC)', sortproperty: '-price' },
  {name: 'по алфавиту (DESC)', sortproperty: 'title' },
  {name: 'по алфавиту (ASC)', sortproperty: '-title' },
]
function Sort({ sortId }) {
  const dispatch=useDispatch()
  const [showSorts, setShowSorts] = useState(false)
  const onClickSort =(obj)=> {
    // setSortId(obj)
    dispatch(setSortId(obj))
    setShowSorts(!showSorts)
  }
  return (
    <div className='sortContainer'>
      {
      showSorts  && (
        <i className="fa fa-caret-up" aria-hidden="true"></i>
      )
      }
      {
      
      !showSorts &&(
        <i className="fa fa-caret-down" aria-hidden="true"></i>
        )
      }
      <div>
        Сортировка по:{' '} <span className='activeSpan' onClick={() => setShowSorts(!showSorts)}>{sortId.name}</span>
      </div>
      {showSorts && (
        <div className='sortLiDiv'>
          <ul className='sortUl'>
            {
              sortData?.map((obj, idx) => <li key={idx}
                onClick={() =>  onClickSort(obj)}
                className={sortId.sortproperty === obj.sortproperty ? 'activeSortLI' : ''}
              >{obj.name}</li>)
            }
          </ul>
        </div>

      )}
    </div>
  )
}
export default Sort