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

  function deleteList() {
    setCartList([]);
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
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
