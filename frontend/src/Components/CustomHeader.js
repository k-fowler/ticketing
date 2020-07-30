import React from 'react';
import { Layout, Button } from 'antd';

import UserAction from './UserAction';

const { Header } = Layout;

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
      <Button type="primary">Create new ticket</Button>
      <UserAction />
    </Header>
  );
};

export default CustomHeader;
