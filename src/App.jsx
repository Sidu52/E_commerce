import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Seller from './pages/Seller/Seller';
import Product from './pages/AddProduct/Product';
import Item from './pages/Product/Product';
import Signin from './pages/Seller/Signin';

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path={'/'} exact element={<Home />} />
        <Route path={'/seller'} element={<Seller />} />
        <Route path={'/signin'} element={<Signin />} />
        <Route path={'/addproduct'} element={<Product />} />
        <Route path={'/product/:id'} element={<Item />} />

      </Routes>
    </BrowserRouter>
  );
}
