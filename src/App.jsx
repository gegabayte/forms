import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { db, collection, addDoc } from '../firebase/config';
import './index.css';

const { TextArea } = Input;

const tailwindStyles = {
  formItem: 'mb-4',
  button: 'mt-4',
};

const validateMessages = {
  required: "'${label}' maydoni majburiy.",
  types: {
    email: "'${label}' to'g'ri email bo'lishi kerak.",
  },
};

const App = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const { name, surname, telegramUsername, description, email } = values;
    const dataToSubmit = {
      name,
      surname,
      telegramUsername,
      description: description || '',
      email,
    };

    try {
      await addDoc(collection(db, "users"), dataToSubmit);
      message.success('Ma\'lumot muvaffaqiyatli yuborildi');
      setLoading(false);
      form.resetFields();
    } catch (e) {
      console.error("Error adding document: ", e);
      message.error('Ma\'lumot yuborishda xatolik yuz berdi');
      setLoading(false);
    }
  };

  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border border-gray-300 rounded-lg">
      <Form
        form={form}
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        style={{ width: '250px', margin: '0 auto', marginTop: '20px' }}
      >
        <Form.Item
          label="Name"
          name="name"
          className={tailwindStyles.formItem}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Surname"
          name="surname"
          className={tailwindStyles.formItem}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Telegram Username"
          name="telegramUsername"
          className={tailwindStyles.formItem}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          className={tailwindStyles.formItem}
        >
          <TextArea style={{ resize: "none" }} rows={4} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          className={tailwindStyles.formItem}
          rules={[{ required: true, type: 'email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item className={tailwindStyles.button}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
