import { useCartContext } from "../context/cartContext";
import CartTable from "./CartTable";
import { Link } from "react-router-dom";
import { Button, Empty, Modal, message, Form} from "antd";
import { useState } from "react";
import FormCart from "./FormCart";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../service/getFirebase";

const Cart = () => {
  const { cartList, deleteCart, deleteList } = useCartContext();
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isSendingData, setIsSendingData] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setisModalOpen(true);
  };

  const hideModal = () => {
    setisModalOpen(false);
  };

  const validateData = () => {
    setIsSendingData(true);

    form.validateFields().then((values) => {
      sendData(values);
    });
  };

  const sendData = (userInfo) => {

    let order = {};

    order.date = firebase.firestore.Timestamp.fromDate(new Date());

    order.buyer = userInfo;

    order.items = cartList.map((cartItem) => {
      const id = cartItem.item.id;
      const title = cartItem.item.title;
      const price = cartItem.item.price * cartItem.quantity;
      const quantity = cartItem.item.quantity;

      return { id, title, price, quantity};
    });


    const db = getFirestore();

    db.collection("orders")

      .add(order)
      .then((resp) => {
        console.log("data", resp);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsSendingData(false);
        hideModal(true);
        message.success("Su pedido fue enviando con exito!");
        deleteList();
      });
  };

  return (
    <>
      {cartList.length === 0 ? (
        <Empty description={<span>Tu carrito esta vacio</span>}>
          <Link to="/">
            <Button type="primary">Volver al catalogo</Button>
          </Link>
        </Empty>
      ) : (
        <>
          <CartTable products={cartList} onDelete={deleteCart} />
          <Button type="primary" size="small" shape="round" onClick={showModal}>
            Terminar mi compra
          </Button>
          <Modal
            confirmLoading={isSendingData}
            title="Formulario Finalizar Compra"
            visible={isModalOpen}
            onOk={validateData}
            onCancel={hideModal}
            okText={"Enviar"}
            cancelText={"Cancelar"}
          >
            {<FormCart form={form} />}
          </Modal>
        </>
      )}
    </>
  );
};

export default Cart;
