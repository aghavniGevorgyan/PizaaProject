import './App.css';
import { Header } from './components/index';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShopCart from './pages/ShopCart';
import { createContext, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { setInputValue } from './redux/slice/filterSlice';

import AreYouShure from './AlertBox/AreYouShure';

// export const searchContext = createContext('')

export default function App() {
  // const {inputValue}=useSelector((store)=>store.filter)
  return (
    <div className="App">
      <div className='parent_App'>
        <div className='big-block_app'>
          <div className='contaner'>
            {/* <searchContext.Provider value={[inputValue,setInputValue]}> */}
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='cart' element={<ShopCart />} />
              <Route path='*' element={<NotFound />} />
              <Route path='modal' element={<AreYouShure />} />
            </Routes>
          {/* </searchContext.Provider> */}
          </div>
        </div>
      </div>
    </div>
  );
}


