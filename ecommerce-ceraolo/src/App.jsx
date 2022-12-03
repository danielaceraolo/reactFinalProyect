import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'

import Menu from "./components/Menu/Menu";
import NameBrand from './components/NameBrand/NameBrand';
import CartContextProvider from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from "./pages/Cart/Cart";



import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Menu/>
        <NameBrand/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/detail/:product' element={<ItemDetailContainer/>
          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;