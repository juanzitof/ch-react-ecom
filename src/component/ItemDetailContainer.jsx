import { useState, useEffect } from "react";
import { getFirestore } from "../service/getFirebase";
import { useParams, Redirect } from "react-router-dom";
import ItemDetail from "../component/ItemDetail";
import { Spin } from "antd";

const ItemDetailContainer = () => {
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
        
        .then((resp) => {console.log('test',item)
          setItem({ id: resp.id, ...resp.data() });
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setnotItem(true);
    }
  }, [id]);
  if(notItem){
    return <Redirect to="/" />


  }
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
