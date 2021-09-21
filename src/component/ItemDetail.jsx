import { Typography } from "antd";
import Item from "./Item";
const ItemDetail = ({ item }) => {
  return (
    <>
      <Typography.Title level={2}>
        Detalle de producto {item.title}
      </Typography.Title>
      <p>(En proceso)</p>
      <Item product={item} showDetail={false} />
    </>
  );
};

export default ItemDetail;
