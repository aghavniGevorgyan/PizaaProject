import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "..//redux/slice/cartSlice";
import '../AlertBox/modal.css'


function AreYouShure() {
    const dispatch=useDispatch()
  return (
    <div className="modalDiv">
      <div>Are You Shure?</div>
      <Link to={"/cart"} className='linkBtns'>
        <button className="no" onClick={()=>dispatch(deleteAll(false)) }>No</button>
        <button className="yes" onClick={()=>dispatch(deleteAll(true))}>Yes</button>
      </Link>
    </div>
  );
}

export default AreYouShure;
