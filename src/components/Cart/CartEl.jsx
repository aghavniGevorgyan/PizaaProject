import React from "react";
import "../Cart/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  minusItemCount,
  addProductCart,
  delEachProduct,
} from "../../redux/slice/cartSlice";
import CartItemCategory from "./CartItemCategory";

function CartEl({ imageUrl, title, price, count, id, typeofProsuct }) {
  const dispatch = useDispatch();
  const eachItemDelete = () => {
    dispatch(delEachProduct(id));
  };

  return (
    <>
      <div className="cartProducts">
        <img className="prIm" src={imageUrl} alt="" />
        <div>
          <p className="titleText">{title}</p>
          {typeofProsuct.map((obj) => (
            <CartItemCategory
              key={`${obj.sizeName}_${obj.typeName}`}
              productId={id}
              bigobjCount={count}
              {...obj}
            />
          ))}
        </div>
        {/* <div className="buttonsDiv">
          <button className="someButton"
          onClick={handlePlusButton}
          >+</button>
          <span>{count}</span>
          <button className="someButton" 
          onClick={()=>handleMinusButton()}
          >-</button>
        </div> */}
        <p>{price * count}₽</p>
        <button className="xButton" onClick={() => eachItemDelete()}>
          X
        </button>
      </div>
      <hr className="hrProducts" />
    </>
  );
}

export default CartEl;
