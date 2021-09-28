import { useCartContext } from "../context/cartContext";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const Cart = () => {
  const { cartList, deleteCart } = useCartContext();

  return (
    <>
      {cartList.map((product) => (
        <div key={product.id}>
          <h3> {product.product.title} </h3>
          <h3> {product.product.description} </h3>
          <h3> {product.product.foto} </h3>
          <h3> {product.product.price} </h3>
          <Button
            type="primary"
            size={"small"}
            shape="round"
            onClick={() => deleteCart(product)}
          >
            <CloseOutlined />
          </Button>
        </div>
      ))}
    </>
  );
};

export default Cart;
