import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Row, Col, Divider, Typography } from 'antd';
const { Title } = Typography;
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { AuthContext, loginUser } from 'Auth/Authenticate';

const LoginPage = () => {
  const [state, setState] = useContext(AuthContext);

  const onFinish = async (userInputData) => {
    const login = await loginUser(userInputData);
    if (login.status === 'success') {
      setState({ ...state, status: 'success' });
    } else {
      console.log('Invalid login credentials');
    }
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={4} align="center">
        <Title level={5}>Log in to your account</Title>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="default" htmlType="submit" block>
              Continue as demo user
            </Button>
          </Form.Item>
          <Divider />
          <Form.Item>
            <Link to="/" style={{ float: 'left' }}>
              Can't log in?
            </Link>
            <Link to="/register" style={{ float: 'right' }}>
              Sign up for an account
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
