import { useState } from "react";
import { Button } from "antd";
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
      <Item product={item} showDetail={false} />

      <div className="detail-action">
        {cantidadSelect ? (
          <Link to={"/cart"}>
            <Button type="primary" size={"small"} shape="round">
              Finalizar Compra
            </Button>
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </>
  );
};

export default ItemDetail;
