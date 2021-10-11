import { Table, Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const CartTable = ({ products, onDelete, total }) => {
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
      width: 120,
    },
    {
      title: "Precio",
      dataIndex: ["item", "price"],
      key: "price",
      width: 120,
      render: (text) => `$${text}`,
    },
    {
      title: "Total",
      dataIndex: "item",
      key: "total",
      width: 120,
      render: (text, o) => `$${o.item.price * o.quantity}`,
    },

    {
      title: "",
      dataIndex: "item",
      key: "action",
      width: 80,
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
  return (
    <Table
      columns={columns}
      dataSource={products}
      pagination={false}
      title={() => "Detalle de la compra"}
      footer={()=> <p className="footer-table">Total: ${total}</p>}
    />
  );
};

export default CartTable;
