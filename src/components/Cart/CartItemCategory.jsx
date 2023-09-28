import React from "react";
import { useDispatch } from "react-redux";
import {
  minusItemCount,
  addProductCart,
  delEachProduct,
  deleteSizeAndType
} from "../../redux/slice/cartSlice";
function CartItemCategory({ sizeName, typeName, count, productId,bigobjCount }) {
  const dispatch = useDispatch();
  
 
  const handlePlusButton = (sizeName, typeName) => {
    dispatch(addProductCart({ id: productId, size: sizeName, type: typeName }));
  };

  console.log(bigobjCount);

    const minusOrDelete=()=>{
      if (bigobjCount > 1) {
        if(count > 1){
          dispatch(minusItemCount({ productId, sizeName, typeName }));
        }else{
          dispatch(deleteSizeAndType({id:productId, size: sizeName, type: typeName }))
        }
       
      }else{
        dispatch(delEachProduct(productId))
      }
    }

  return (
    <div>
      <p className="grayText">
        {sizeName} {typeName} - {count}
      </p>
      <div className="productParamDiv">
        <button onClick={() => handlePlusButton(sizeName, typeName)}>+</button>
        <span>{count}</span>
        <button
          onClick={() =>minusOrDelete()}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CartItemCategory;
