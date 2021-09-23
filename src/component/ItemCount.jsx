import { useState } from "react";
import { Button, Tooltip, Space } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [changeButton, setChangeButton] = useState(true);

  const agregar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const descontar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const agregarCarrito = () => {
    onAdd(count);
    setChangeButton(false);
  };

  return (
    <div className="item-count-component">
      <Space>
        <Tooltip title="Descontar">
          <Button
            size="small"
            onClick={descontar}
            shape="circle"
            icon={<MinusOutlined />}
          />
        </Tooltip>

        {changeButton ? (
          <Button
            type="primary"
            size={"small"}
            onClick={agregarCarrito}
            shape="round"
          >
            Agregar al carrito ({count})
          </Button>
        ) : (
          <div>
            <Link to={"/cart"}>
              <Button type="primary" size={"small"} shape="round">
                Finalizar Compra({count})
              </Button>
            </Link>
            <Link to={"/"}>
              <Button type="primary" size={"small"} shape="round">
                Continuar Compra({count})
              </Button>
            </Link>
          </div>
        )}

        <Tooltip title="Agregar">
          <Button
            size="small"
            onClick={agregar}
            shape="circle"
            icon={<PlusOutlined />}
          ></Button>
        </Tooltip>
      </Space>
    </div>
  );
};

export default ItemCount;
