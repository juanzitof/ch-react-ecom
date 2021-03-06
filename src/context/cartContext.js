import { useState, createContext, useContext } from "react";

const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addToCart = (data) => {
    let list = [...cartList];

    if (list.some((i) => i.item.id === data.item.id)) {
      list.find((i) => i.item.id === data.item.id).quantity += data.quantity;
      setCartList(list);
    } else {
      setCartList([...list, data]);
    }
  };
  const getCount = () => {
    let totalProduct = 0;
    cartList.map((item) => (totalProduct += item.quantity));

    return totalProduct;
  };

  function deleteList() {
    setCartList([]);
  }

  const accumulateBuy = () => {
    return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0)
  }

  const deleteCart = (item) => {
    const deleteProduct = cartList.filter(
      (prod) => prod.item.id !== item.item.id
    );
    setCartList([...deleteProduct]);
  };

  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteCart,
        deleteList,
        accumulateBuy,
        getCount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
