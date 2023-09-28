import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate'
import { useSelector } from "react-redux";
import '../Pagination/pagination.css'

export default function Pagination({ onChangePag, pageCount }) {
    // const {products}=useSelector((store)=>store.fillProducts)
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => onChangePag(e.selected + 1)}
                pageRangeDisplayed={5}
                pageCount={3}
                // pageCount={products.length<4 ? 1 :3}
                forcePage={pageCount-1}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName="page_num"
                previousLinkClassName="page_num"
                nextLinkClassName="page_num"
                activeLinkClassName="active"
            />
        </>
    )
}