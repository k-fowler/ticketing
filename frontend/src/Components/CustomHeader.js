import React from 'react';
import { Layout, Button } from 'antd';
import axios from 'axios';

import UserAction from './UserAction';

const { Header } = Layout;

const CustomHeader = () => {
  const handleButtonClick = async () => {
    const data = await axios.get('http://localhost:5000/');

    console.log(data.data);
  };

  return (
    <Header
      className="site-layout-sub-header-background"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button type="primary" onClick={handleButtonClick}>
        Create new ticket
      </Button>
      <UserAction />
    </Header>
  );
};

export default CustomHeader;
