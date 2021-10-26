import { Link } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";


const BackButton = () => {
  return(
  <>
  <Link to="/">
   <Button type="text" icon={<LeftOutlined/>}>Volver</Button>
</Link>
</>

  )}

export default BackButton