import React from 'react'
import '../styles/app.scss'
import Sidebar from './sidebar/Sidebar'
import { Routes, Route } from "react-router-dom";
import Product from './product/Product';
import ProductDetail from './product/ProductDetail';
import Navbars from './navbar/Navbars';
const Home = () => {
    return (
        <>

            <Routes>
                <Route path="*" element={<Product />} />
            </Routes>

        </>
    )
}

export default Home