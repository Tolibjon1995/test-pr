import React from 'react'
import Home from './components/Home';
import Navbars from './components/navbar/Navbars';
import ProductDetail from './components/product/ProductDetail';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbars />
      <div className='app-container'>

        <div className="left-content">
          <Sidebar />
        </div>
        <div className="right-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
