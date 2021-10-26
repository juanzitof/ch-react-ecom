import { useState, useEffect } from "react";
import { getFirestore } from "../service/getFirebase";
import { useParams, Redirect } from "react-router-dom";
import ProductDetail from "../component/ProductDetail";
import { Spin } from "antd";

const ProductDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [notItem, setnotItem] = useState(false);
  
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const dbQuery = getFirestore();
      
      dbQuery
        .collection("products")
        .doc(id)
        .get()
        .then((resp) => {
          if (resp.data()) {
            setItem({ id: resp.id, ...resp.data() });
          } else {
            setnotItem(true);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (notItem) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {loading ? (
        <div className="loading-center">
          <Spin tip="Cargando" size="large" />
        </div>
      ) : (
        <ProductDetail item={item} />
      )}
    </>
  );
};
export default ProductDetailContainer;
