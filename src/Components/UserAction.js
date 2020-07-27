import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Update profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Sign out</a>
    </Menu.Item>
  </Menu>
);

const UserAction = () => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <Avatar size="large" icon={<UserOutlined />} />
      </a>
    </Dropdown>
  );
};

export default UserAction;
