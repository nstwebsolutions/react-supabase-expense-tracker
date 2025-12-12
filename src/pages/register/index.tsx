import { Form, Input, Button, message } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabaseConfig from "../../config/supabase-config";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const signupResponse = await supabaseConfig.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (signupResponse.error) {
        throw new Error(signupResponse.error.message);
      }
      messageApi.success(
        "Registration successful. Please check your email to verify your account"
      );
      navigate("/login");
    } catch (error: any) {
      messageApi.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      {contextHolder}
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
          <Button
            loading={loading}
            disabled={loading}
            className='mb-3'
            block
            type='primary'
            htmlType='submit'
          >
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
