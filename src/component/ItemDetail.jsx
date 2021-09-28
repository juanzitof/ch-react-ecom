import { useState } from "react";
import { Typography, Button } from "antd";
import { Link } from "react-router-dom";
import Item from "./Item";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/cartContext";

const ItemDetail = ({ item }) => {
  const [cantidadSelect, setCantidadSelect] = useState(null);

  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    setCantidadSelect(quantity);
    addToCart({ item: item, quantity : quantity });
  };

  return (
    <>
      <Typography.Title level={2}>
        Detalle de producto {item.title}
      </Typography.Title>
      <p>(En proceso)</p>
      <Item product={item} showDetail={false} />

      <div className="detail-action">
        {cantidadSelect ? (
          <Link to={"/cart"}>
            <Button type="primary" size={"small"} shape="round">
              Finalizar Compra
            </Button>
          </Link>
        ) : (
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        )}
      </div>
    </>
  );
};

export default ItemDetail;
