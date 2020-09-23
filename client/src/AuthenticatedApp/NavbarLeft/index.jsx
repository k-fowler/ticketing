import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavbarLeft = () => {
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
        <Menu.Item>
          <Link to="/projects">My projects</Link>
        </Menu.Item>
        <SubMenu key="sub1" title="Admin panel">
          <Menu.Item>
            <Link to="/roleassign">Manage user roles</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/projectassign">Manage project users</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default NavbarLeft;
