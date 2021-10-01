import { useCartContext } from "../context/cartContext";
import CartTable from "./CartTable";
import { Link } from "react-router-dom";
import { Button, Empty } from "antd";

const Cart = () => {
  const { cartList, deleteCart } = useCartContext();

  return (
    <>
      {cartList.length === 0 ? (
        <Empty description={<span>Tu carrito esta vacio</span>}>
          <Link to="/">
            <Button type="primary">Volver al catalogo</Button>
          </Link>
        </Empty>
      ) : (
        <>
          <CartTable products={cartList} onDelete={deleteCart} />
          <Button type="primary" size="small" shape="round">
            Terminar mi compra
          </Button>
        </>
      )}
    </>
  );
};

export default Cart;
