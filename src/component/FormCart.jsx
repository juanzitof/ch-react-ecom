import { Form, Input } from "antd";

const validateMessages = {
  required: "${label} es requerido",
  types: {
    email: "el email ingresado no es valido!",
    number: "ingrese solo numeros!",
  },
};

const FormCart = ({ form }) => {
  return (
    <Form
      validateMessages={validateMessages}
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre"
        name={["user", "name"]}
        rules={[
          {
            required: true,
            
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Numero de telefono"
        name={["user", "number"]}
        rules={[
          {
            required: true,
    
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name={["user", "email"]}
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default FormCart;
