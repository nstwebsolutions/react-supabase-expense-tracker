import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      <div className='bg-white border border-gray-300 p-5 rounded w-[420px] shadow-sm'>
        <h1 className='text-xl font-bold'>Login</h1>
        <p className='text-sm font-semibold'>
          Welcome back! Please login to your account.
        </p>
        <hr className='border-gray-300 my-5' />
        <Form layout='vertical' autoComplete='off' onFinish={onFinish}>
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
            LOGIN
          </Button>
          <span className='text-sm font-semibold'>
            Don't have an account? <Link to='/register'>Register</Link>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
