import React from 'react';
import { Layout, Input, Button, Space } from 'antd';

import UserAction from './UserAction';

const { Header } = Layout;
const { Search } = Input;

const CustomHeader = () => {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Space>
        <Button type="primary">Create new ticket</Button>
        <Search
          placeholder="Find ticket"
          onSearch={(value) => console.log(value)}
          style={{ width: 200, height: '50%' }}
        />
      </Space>
      <UserAction />
    </Header>
  );
};

export default CustomHeader;
