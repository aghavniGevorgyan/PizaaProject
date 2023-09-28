import React from 'react'

function NotFound() {
    return (
        <section>
            <div className="emptyCart">
                <h2>Not found 😕</h2>
                {/* <p>
                    Вероятней всего, вы не заказывали ещё пиццу.

                </p>
                <p>
                    Для того, чтобы заказать пиццу, перейди на главную страницу.

                </p>
                <img src={empty}
                    alt="" className="shopRemove" /> */}
                <button className="backButton"><a href="/">Вернуться назад</a></button>

            </div>
        </section>
    )
}

export default NotFound