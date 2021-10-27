import { useCartContext } from "../context/cartContext";
import CartTable from "../component/CartTable";
import { Link, Redirect } from "react-router-dom";
import { Button, Empty, Modal, Form } from "antd";
import BackButton from "../component/BackButton";
import { useState } from "react";
import FormCart from "../component/FormCart";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../service/getFirebase";

const CartContainer = () => {
  const { cartList, deleteCart, deleteList, accumulateBuy } = useCartContext();

  const [isModalOpen, setisModalOpen] = useState(false);
  const [isSendingData, setIsSendingData] = useState(false);
  const [successfulorder, setSuccessfulorder] = useState(false);

  const [form] = Form.useForm();

  const showModal = () => {
    setisModalOpen(true);
  };

  const hideModal = () => {
    setisModalOpen(false);
  };

  const validateData = () => {
    setIsSendingData(true);

    form
      .validateFields()
      .then((values) => {
        sendData(values);
      })
      .catch((err) => {
        setIsSendingData(false);
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
      const quantity = cartItem.quantity;

      return { id, title, price, quantity };
    });

    const db = getFirestore();

    db.collection("orders")

      .add(order)
      .then((resp) => {
        setIsSendingData(false);
        hideModal(true);
        setSuccessfulorder(resp.id);
        deleteList();
      })
      .catch((err) => console.log(err));
  };
  if (successfulorder) {
    return (
      <>
        <Redirect to={`/gracias/${successfulorder}`} />
      </>
    );
  }

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
          <BackButton />

          <CartTable
            products={cartList}
            onDelete={deleteCart}
            total={accumulateBuy()}
          />

          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={showModal}
            className="button-finally"
          >
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

export default CartContainer;
