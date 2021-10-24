import { Row, Col } from "antd";
import ProductCard from "./ProductCard";

const ItemList = ({ products }) => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={`product-${product.id}`} span={8}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
export default ItemList;
