import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Ticket Number',
    dataIndex: 'ticketNo',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: '1',
    ticketNo: 'ASD-123',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    ticketNo: 'BDG-234',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    ticketNo: 'ASD-124',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    ticketNo: 'BGC-001',
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const TicketPage = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default TicketPage;
