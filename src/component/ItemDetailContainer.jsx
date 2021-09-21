import { useState, useEffect } from "react";
import { getDetail } from "../utils/mock";
import { useParams } from "react-router-dom";
import ItemDetail from "../component/ItemDetail";
import { Spin } from "antd";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  useEffect(() => {
    getDetail(id)
      .then((result) => {
         setItem(result)
        console.log(result)})
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loading-center">
          <Spin tip="Cargando" size="large" />
        </div>
        
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};
export default ItemDetailContainer;
