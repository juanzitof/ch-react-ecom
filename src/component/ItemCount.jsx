import { useState } from "react";
import { Button, Tooltip, Space } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { message } from "antd";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

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
    message.success("Se agregaron los productos a tu carrito");
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

        <Button
          type="primary"
          size={"small"}
          onClick={agregarCarrito}
          shape="round"
        >
          Agregar al carrito ({count})
        </Button>

        <Tooltip title="Agregar">
          <Button
            size="small"
            onClick={agregar}
            shape="circle"
            icon={<PlusOutlined />}
          />
        </Tooltip>

      </Space>
    </div>
  );
};

export default ItemCount;
