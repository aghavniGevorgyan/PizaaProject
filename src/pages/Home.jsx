import React, { useEffect, useState, useContext, useRef } from "react";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { fetchPizzas } from "../redux/slice/pizzaSlice";

import Category from "../components/Category/Category";
import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
// import { searchContext } from "../App";
import Loading from "../components/Loading/Loading";
import Pagination from "../Pagination/Pagination";
import "../Pagination/pagination.css";
import {
  setCategoryId,
  setPageCount,
  setFilters,
} from "../redux/slice/filterSlice";
import { setProducts, setLoadingProducts } from "../redux/slice/pizzaSlice";

import { sortData } from "../components/Sort/Sort";

function Home() {
  const dispatch = useDispatch();
  const [show,setshow]=useState(false)
  const { categoryId, sortId, pageCount, inputValue } = useSelector(
    (store) => store.filter
  );
  const { products, loading } = useSelector((store) => store.fillProducts);
  // const [inputValue, setInputValue] = useContext(searchContext)
  const isMouted = useRef(false);
  const isSearch = useRef(false);
  const navigate = useNavigate();

  const getPizza = async () => {
    const category = categoryId > 0 ? `category=${categoryId}&` : "";
    const sortBy = sortId.sortproperty.replace("-", "");
    const order = sortId.sortproperty.includes("-") ? "asc" : "desc";
    const search = inputValue ? `&search=${inputValue}` : "";
    
    const url = `https://6475c318e607ba4797dc8c74.mockapi.io/products?${category}sortBy=${sortBy}&order=${order}&page=${pageCount}&limit=4${search}`;
    dispatch(fetchPizzas({url}))
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(setProducts(data))
    //     dispatch(setLoadingProducts(false))
    //   })
    //   .catch((error) => {
    //     dispatch(setLoadingProducts(false))
    //   });

    // axios
    //   .get(url)
    //   // .then((promis)=>console.log(promis))
    //   .then((promis) => promis.data)
    //   .then((data) => {
    //     dispatch(setProducts(data));
    //     dispatch(setLoadingProducts(false));
    //   })

    // const res = await axios.get(url)
    // dispatch(setProducts(res.data))
    // dispatch(setLoadingProducts(false))

    // try {
    //   const res = await axios.get(url)
    //   dispatch(setProducts(res.data))
    //   dispatch(setLoadingProducts(false))
    // } catch (error) {
    //   console.log(error);
    // }

  };

  // useEffect(() => {
  //   getPizza()
  // }, [categoryId, sortId, pageCount, inputValue]);

  useEffect(() => {
    if (isMouted.current) {
      const quryString = qs.stringify({
        categoryId,
        sortproperty: sortId.sortproperty,
        pageCount,
      });
      navigate(`?${quryString}`);
    }
    isMouted.current = true;
  }, [categoryId, sortId.sortproperty, pageCount]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortData.find(
        (obj) => obj.sortproperty === params.sortproperty
      );
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      getPizza();
    }
    isSearch.current = false;
  }, [categoryId, sortId, pageCount, inputValue]);

const handleFaBar=()=>{
  setshow(true)
}

  const pizza = products.map((el, id) => <PizzaBlock key={id} {...el} />);

  const isLoading = [...new Array(4)].map((_, idx) => <Loading key={idx} />);
  return (
    <>
      <div className="CategotySort">
      <i className="fa fa-bars" aria-hidden="true" onClick={handleFaBar}></i>
      {/* {show? <Category
          categoryId={categoryId}
          changeCategory={(idx) => {
            dispatch(setCategoryId(idx));
            dispatch(setPageCount(1));
          }}
        />:""
      } */}
           <Category
          categoryId={categoryId}
          changeCategory={(idx) => {
            dispatch(setCategoryId(idx));
            dispatch(setPageCount(1));
          }}
          />
        <Sort sortId={sortId} />
      </div>
      <div >
      <h1>Все пиццы</h1>
      </div>
      
      <section className="productSection">
        {loading ? isLoading : pizza}
      </section>
      <div className="pagin">
        <Pagination
          pageCount={pageCount}
          onChangePag={(num) => dispatch(setPageCount(num))}
        />
      </div>
    </>
  );
}

export default Home;
