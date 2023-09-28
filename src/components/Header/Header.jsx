import React from 'react'
import '../Header/header.css'
import titleImage from '../Header/titlePizza.png'
import { Search} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {
  const {totalPrice,cartProducts}=useSelector((store)=>store.addcart)
  return (
    <div>
      <div className='container'>
        <div className='headDiv'>
          <img src={titleImage} />
            <Link to={'/'}>
            <div className='headTitle'>
              <p className='boldTitle'>REACT PIZZA</p>
              <p className='grayTitle'>самая вкусная пицца во вселенной</p>
            </div>
            </Link>
        </div>
        <Search />
        <div className="upDiv">
          <Link to='cart'>
            <div className="pageImgTitle">
            </div>
            <button className="btnCart" >
              <span className="cartPrice">{totalPrice} ₽</span>
              <hr className='btnHr' />
              <i className="fa fa-shopping-cart" aria-hidden="true"> { cartProducts.length}</i>
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </div>

  )
}

export default Header