import React from 'react';
import { Card, Row, Col } from 'antd';

import BarChart from './BarChart';
import PieChart from './PieChart';

const data = [
  {
    name: 'Low',
    Tickets: 5,
  },
  {
    name: 'Lowest',
    Tickets: 3,
  },
  {
    name: 'Medium',
    Tickets: 12,
  },
  {
    name: 'High',
    Tickets: 3,
  },
  {
    name: 'Highest',
    Tickets: 2,
  },
];

const data01 = [
  { name: 'Bugs/Errors', value: 7 },
  { name: 'Feature Requests', value: 5 },
  { name: 'Other Comments', value: 2 },
  { name: 'Training/Document Requests', value: 1 },
];

const Dashboard = () => {
  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          {' '}
          <Card title="Tickets by priority" extra={<a href="/#">View tickets</a>}>
            <BarChart data={data} />
          </Card>
        </Col>
        <Col span={12}>
          {' '}
          <Card title="Tickets by type" extra={<a href="/#">View tickets</a>}>
            <PieChart data={data01} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          {' '}
          <Card title="Tickets by priority" extra={<a href="/#">View tickets</a>}>
            <BarChart data={data} />
          </Card>
        </Col>
        <Col span={12}>
          {' '}
          <Card title="Tickets by priority" extra={<a href="/#">View tickets</a>}>
            <PieChart data={data01} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
