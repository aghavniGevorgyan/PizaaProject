import React from 'react'

import { Link } from 'react-router-dom'
import '../Category/category.css'

const categoryData = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

function Category({categoryId,changeCategory}) {
  return (
    
    <ul className="navUl">
      {
          categoryData?.map((el,idx)=><li key={idx} onClick={()=>changeCategory(idx)} className={ categoryId === idx? 'active': ''} >{el}</li>)
      }
      
      {/* {
      categoryData?.map((el,idx)=><li>
      <Link to={el} onClick={()=>changeCategory(idx)}  className={ categoryId === idx? 'active': ''} >{el}</Link>
   </li>
      )
      
      } */}
       
      {/* {categoryData?.map((el, idx) => (
      
        <li key={idx}>
          <Link
            to={`/${el.toLowerCase()}`}
            onClick={() => changeCategory(idx)}
            className={categoryId === idx ? 'active' : ''}
          >
            {el}
          </Link>
        </li>
      ))} */}
  </ul>
  )
}

export default Category