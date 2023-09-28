import React, { useState } from "react";
import "../PizzaBlock/pizzaBlock.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductCart} from "../../redux/slice/cartSlice";
const typeName = ["тонкое", "традиционное"];

function PizzaBlock({ imageUrl, title, price, sizes, types, id }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.addcart.cartProducts.find((obj)=> obj.id === id))
  const itemCount = cartItem ? cartItem.count : 0
  const [changeType, setChangeType] = useState(0);
  const [changeSize, setChangeSize] = useState(0);
  const onclickAdd=()=>{
      const newProduct = {
        id,
        imageUrl,
        title,
        price,
        size: sizes[changeSize],
        type: typeName[changeType],
      }
      dispatch(addProductCart(newProduct))
  }

  return (
    <div className="productDiv">
      <img className="productImage" src={imageUrl} alt="none" />
      <p className="PizzaName">{title}</p>
      <div className="pizzaParams">
        <div>
          <ul className="typeUl">
            {types?.map((idx) => (
              <li
                key={idx}
                onClick={() => setChangeType(idx)}
                className={changeType === idx ? "activeLI" : ""}
              >
                {typeName[idx]}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="typeUlSecond">
            {sizes?.map((el, idx) => (
              <li
                key={idx}
                onClick={() => setChangeSize(idx)}
                className={changeSize === idx ? "activeLI" : ""}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="priceAndButton">
        <span className="pizzaPrice">от {price} ₽</span>
        <button
          className="btns"
          onClick={() => onclickAdd()}
        >
          <span className="pluseSpan">+</span> Добавить{" "}
          {itemCount>0?<span className="raitngSpan">{itemCount}</span> :''}
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
