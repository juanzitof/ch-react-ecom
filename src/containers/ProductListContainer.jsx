import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Spin } from "antd";
import ItemList from "../component/ItemList";
import { getFirestore } from "../service/getFirebase";

const ProductListContainer = ({ gretting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();

    const listProduct = id
      ? dbQuery.collection("products").where("category", "==", id)
      : dbQuery.collection("products");

    listProduct
      .get()
      .then((resp) => {
        setProducts(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
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

export default ProductListContainer;
