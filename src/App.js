import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import Store from './pages/Store';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="checkout" element={<Checkout />}/>
            <Route path="product/:id" element={<Product />}/>
          </Route>

        </Routes>      
      </BrowserRouter>
    </>
  );
}

export default App;
