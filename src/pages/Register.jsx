import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './less/Login.less'
import {Link} from 'react-router-dom'
import logoImg from '../assets/logo.png'
import { RegisterApi } from '../request/api';

export default function Register() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login">
      <div className='login_box'>
      <img src={logoImg} alt='logo' />
      <Form
      name="basic"
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input size='large' prefix={<UserOutlined />}
         placeholder='please input your username'/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder='please input your password'/>
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password  size='large' prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder='please confirm your password'/>
      </Form.Item>

      <Form.Item>
        <Link to="/login" >Has account yet? Go to login.</Link>
      </Form.Item>

      <Form.Item>
        <Button size='large' type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  )
}
