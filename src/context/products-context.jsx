//Will load shop data
import React, { createContext, useState, useContext } from "react";
import SHOP_DATA from "../data/shopData";

//Create Context
export const ProductsContext = createContext();

//Create Product context provider

const ProductsContextProvider = ({ children }) => {
  //We're initializing shop data to be products
  const [products] = useState(SHOP_DATA);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ProductsContext);
};

export default ProductsContextProvider;
