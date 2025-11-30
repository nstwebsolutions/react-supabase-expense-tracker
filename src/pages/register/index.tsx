import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      <div className='bg-white border border-gray-300 p-5 rounded w-[420px] shadow-sm'>
        <h1 className='text-xl font-bold'>Register</h1>
        <p className='text-sm font-semibold'>
          Create an account to get started with our services.
        </p>
        <hr className='border-gray-300 my-5' />
        <Form layout='vertical' autoComplete='off' onFinish={onFinish}>
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: "Please enter your full name",
              },
            ]}
          >
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>
          <Button className='mb-3' block type='primary' htmlType='submit'>
            REGISTER
          </Button>
          <span className='text-sm font-semibold'>
            Already have an account? <Link to='/login'>Login</Link>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
