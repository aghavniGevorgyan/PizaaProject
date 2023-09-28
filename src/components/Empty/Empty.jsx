import React from 'react'
import Header from '../Header/Header'
import '../Empty/empty.css'
import empty from '../Empty/shopCartRemove.png'
function Empty() {
  return (
    <>
        <section>
                <div className="emptyCart">
                    <h2>Корзина пустая 😕</h2>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу.
    
                    </p>
                    <p>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
    
                    </p>
                    <img src={empty}
                        alt="" className="shopRemove" />
                    <button className="backButton"><a href="/">Вернуться назад</a></button>
    
                </div>
            </section>
    </>
  )
}

export default Empty