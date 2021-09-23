import { useState } from "react";
import { Typography, Card } from "antd";
import Item from "./Item";
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
 const [cantidadSelect, setCantidadSelect] = useState (null)
  
 const onAdd = (cant) => {
    console.log(cant);
    setCantidadSelect(cant)
  };
  return (
    <>
      <Typography.Title level={2}>
        Detalle de producto {item.title}
      </Typography.Title>
      <p>(En proceso)</p>
      <Card actions={[<ItemCount stock={5} initial={1} onAdd={onAdd} />]}>
      <Item product={item} showDetail={false} />
      </Card>
      
    </>
  );
};

export default ItemDetail;
