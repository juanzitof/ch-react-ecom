import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Avatar } from "antd";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const CartWidget = () => {
  const { getCount } = useCartContext();

  const count = getCount();
  return (
    <>
      {count === 0 ? null : (
        <Link to="/cart">
         <Badge size="small" count={count}>
          <Avatar className="cart-background" shape="square" icon={<ShoppingCartOutlined />} />
        </Badge>
        </Link>
       
      )}
    </>
  );
};

export default CartWidget;
