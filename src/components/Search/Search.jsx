import React, { useRef, useState,useCallback } from 'react'
import '../Header/header.css'
import { useContext } from 'react'
import { searchContext } from '../../App'
import debounce from 'lodash.debounce'
import { setInputValue } from '../../redux/slice/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Search() {
  // const [inputValue, setInputValue] = useContext(searchContext)
  const {inputValue}=useSelector((store)=>store.filter)
  const dispatch=useDispatch()
  const inpRef = useRef()
  const [vel, setVel] = useState('')
  


  // const  ubdate = (e)=>dispatch(setInputValue(e?.target.value))
  // const debouncedOnchange=debounce(ubdate,1000)


  const updataSearch = useCallback(
    debounce((txt)=>{
      dispatch(setInputValue(txt))
    }, 500),
    []
  )

  const onChangeInp =e=>{
    // dispatch(setInputValue(e.target.value))
    updataSearch(e.target.value) 
    setVel(e.target.value)
  }

  const handleSearchClick=()=>{
   dispatch(setInputValue(''))
    inpRef.current.focus()
    setVel('')
  }

  return (
    <div className='searchDiv'>
      <input ref={inpRef} type="text" className='searchInp'
        value={vel}
        // onChange={debouncedOnchange}
        onChange={onChangeInp}
      />
      {inputValue ?  <i className="fa fa-times" aria-hidden="true"
     onClick={()=>{
      handleSearchClick()
    }}
     ></i> : <i className="fa fa-search" aria-hidden="true"></i> 
    }
    </div>
  )
}

export default Search