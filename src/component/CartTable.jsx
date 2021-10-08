import { Table, Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const CartTable = ({ products, onDelete }) => {
  const columns = [
    {
      title: "Nombre",
      dataIndex: ["item", "title"],
      key: "titulo",
    },
    {
      title: "Cantidad",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Precio",
      dataIndex: ["item", "price"],
      key: "price",
      render: (text) => `$${text}`,
    },
    {
      title: "Total",
      dataIndex: "item",
      key: "total",
      render: (text, o) => `$${o.item.price * o.quantity}`,
    },
    
    {
      title: "",
      dataIndex: "item",
      key: "action",
      render: (item, o) => {
        return (
          <Tooltip title="eliminar del carrito">
            <Button
              onClick={() => onDelete(o)}
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Tooltip>
        );
      },
    },
  ];
  return <Table columns={columns} dataSource={products} pagination={false}  title={() => 'Detalle de la compra' } footer={() => 'Precio total'} />;
};

export default CartTable;
