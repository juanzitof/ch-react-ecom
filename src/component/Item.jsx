import { Card } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Item = ({ product, showDetail = true }) => {
  return (
    <div className="card-component" key={product.id}>
      <Card
        style={{ width: "100%" }}
        cover={<img className="thumb" src={product.foto} />}
      >
        <Card.Meta title={product.title} description={product.description} />
        <span className="price">${product.price}</span>

        {showDetail ? (
          <Link to={`/detail/${product.id}`}>
            <Button type="primary">Detalles</Button>
          </Link>
        ) : null}
      </Card>
    </div>
  );
};

export default Item;
