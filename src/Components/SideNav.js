import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideNav = () => {
  return (
    <Sider style={{ minHeight: '100vh' }}>
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <Menu.Item>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/tickets">My tickets</Link>
        </Menu.Item>
        <Menu.Item>My projects</Menu.Item>
        <SubMenu key="sub1" title="Admin panel">
          <Menu.Item>Manage user role assignment</Menu.Item>
          <Menu.Item>Manage users assigned to project</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideNav;
