import { Card } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({ product, showDetail = true }) => {
  const onAdd = (cant) => {
    console.log(cant);
  };
  return (
    <div className="card-component" key={product.id}>
      <Card
        style={{ width: "100%" }}
        cover={<img className="thumb" src={product.foto} />}
        actions={[<ItemCount stock={5} initial={1} onAdd={onAdd} />]}
      >
        <Card.Meta title={product.title} description={product.description} />
        <span className="price">{product.price}</span>
        
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
