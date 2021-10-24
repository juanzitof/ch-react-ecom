import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/cartContext";

const ProductDetail = ({ item }) => {
  const [cantidadSelect, setCantidadSelect] = useState(null);

  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    setCantidadSelect(quantity);
    addToCart({ item: item, quantity: quantity });
  };

  return (
    <>
      <ProductCard product={item} showDetail={false} />

      <div className="detail-action">
        {cantidadSelect ? (
          <Link to={"/cart"}>
            <Button type="primary" size={"small"} shape="round">
              Finalizar Compra
            </Button>
            <Link to="/">
              <Button type="primary" size={"small"} shape="round">
                Volver al catalogo
              </Button>
            </Link>
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </>
  );
};

export default ProductDetail;
