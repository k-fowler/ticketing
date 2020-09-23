import React from 'react';
import { Spin, Row, Col } from 'antd';

const PageLoader = () => (
  <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
    <Col span={1}>
      <Spin size="large" />
    </Col>
  </Row>
);

export default PageLoader;
