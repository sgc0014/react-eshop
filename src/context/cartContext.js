import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  const values = {
    data,
    setData,
    loading,
    setLoading,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export default CartContext;
