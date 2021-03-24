import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductsContextProvider from './context/products-context'
import CartContextProvider from './context/cart-context'
import './index.css';
ReactDOM.render(
  <CartContextProvider>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </CartContextProvider>
  , document.getElementById("root")
)