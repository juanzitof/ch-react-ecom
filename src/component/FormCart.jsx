import { Form, Input } from "antd";

const FormCart = ({ form }) => {
  return (
    <Form
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
        name="nombre"
        rules={[
          {
            required: true,
            message: "Por favor ingrese su nombre!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Numero de telefono"
        name="numero de telefono"
        rules={[
          {
            required: true,
            message: "Ingrese su numero de telefono!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor ingrese su email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default FormCart;
