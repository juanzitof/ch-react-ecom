import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Spin } from "antd";
import ItemList from "./ItemList";
import { getFirestore } from "../service/getFirebase";

const ItemListContainer = ({ gretting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const dbQuery = getFirestore();
      dbQuery
        .collection("products")
        .where("category", "==", id)
        .get()
        .then((resp) => {
          setProducts(
            resp.docs.map((product) => ({ id: product.id, ...product.data() }))
          );
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      const dbQuery = getFirestore();
      dbQuery
        .collection("products")
        .get()
        .then((resp) => {
          setProducts(
            resp.docs.map((product) => ({ id: product.id, ...product.data() }))
          );
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

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
