import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Spin } from "antd";
import { getFetch } from "../utils/mock";
import ItemList from "./ItemList";

const ItemListContainer = ({ gretting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(id);
      getFetch()
        .then((respuesta) => {
          let filterProduct = respuesta.filter(
            (prod) => prod.category.toLowerCase() === id
          );
          setProducts(filterProduct);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      getFetch()
        .then((respuesta) => {
          setProducts(respuesta);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  console.log(id);

  return (
    <div>
      <Typography.Title className="welcome-title" level={2}>
        {gretting}
      </Typography.Title>

      {loading ? (
        <div className="loading-center">
          <Spin tip="Cargando" size="large" />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};
export default ItemListContainer;
