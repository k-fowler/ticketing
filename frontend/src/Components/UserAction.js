import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/#">Update profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/login">Sign out</Link>
    </Menu.Item>
  </Menu>
);

const UserAction = () => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a
        href="/#"
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        <Avatar size="large" icon={<UserOutlined />} />
      </a>
    </Dropdown>
  );
};

export default UserAction;
