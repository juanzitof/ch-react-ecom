import { Row, Col } from "antd";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={`product-${product.id}`} span={8}>
          <Item product={product} />
        </Col>
      ))}
    </Row>
  );
};
export default ItemList;
