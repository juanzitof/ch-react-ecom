import { useState } from "react";
import { Button, Tooltip, Space } from "antd";
import {
  PlusOutlined,
  MinusOutlined
} from "@ant-design/icons";

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
  };

  return (
    <div className="item-count-component">
      <Space>
      <Tooltip title="Descontar">
        <Button size="small"  onClick={descontar} shape="circle" icon={<MinusOutlined />} />
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
        <Button size="small"  onClick={agregar} shape="circle" icon={<PlusOutlined />} />
      </Tooltip>
      </Space>
    </div>
  );
};

export default ItemCount;
