import { Button, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const PurchaseResult = () => {
  const { id } = useParams();

  const renderExtra = (
    <Link to={"/"}>
      <Button type="primary" size={"small"} shape="round">
        Volver al catalogo
      </Button>
    </Link>
  );
  
  return (
    <Result
      icon={<SmileOutlined />}
      title={`Su compra fue exitosa! Su numero de orden es:${id}`}
      extra={renderExtra}
    />
  );
};

export default PurchaseResult;
