import React from 'react';
import { Layout, Button } from 'antd';
import axios from 'axios';

import UserAvatar from './UserAvatar';

const Header = () => {
  const handleButtonClick = async () => {
    const data = await axios.get('http://localhost:5000/');

    console.log(data.data);
  };

  return (
    <Layout.Header
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
      <UserAvatar />
    </Layout.Header>
  );
};

export default Header;
