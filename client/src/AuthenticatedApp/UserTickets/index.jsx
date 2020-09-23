import React, { useState, useEffect } from 'react';
import { Table, PageHeader, Button, Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    sorter: (a, b) => a.title.localeCompare(b.title),
  },
  {
    title: 'Project Name',
    dataIndex: 'project',
    sorter: (a, b) => a.project.localeCompare(b.project),
  },
  {
    title: 'Developer Assigned',
    dataIndex: 'devAssigned',
    sorter: (a, b) => a.devAssigned.localeCompare(b.devAssigned),
  },
  {
    title: 'Ticket Status',
    dataIndex: 'ticketStatus',
    sorter: (a, b) => a.ticketStatus.localeCompare(b.ticketStatus),
  },
  {
    title: 'Ticket Type',
    dataIndex: 'ticketType',
    sorter: (a, b) => a.ticketType.localeCompare(b.ticketType),
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
  },
  {
    title: 'Action',
    render: () => (
      <ul>
        <li>
          <Button type="link" size="small">
            Edit/Assign
          </Button>
        </li>
        <li>
          <Button type="link" size="small">
            Details
          </Button>
        </li>
      </ul>
    ),
  },
];

const data = [
  {
    key: '1',
    ticketNo: 'ASD-123',
    title: 'Fix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
  {
    key: '2',
    ticketNo: 'ZSD-123',
    title: 'Aix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
  {
    key: '3',
    ticketNo: 'BSD-123',
    title: 'Rix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
  {
    key: '4',
    ticketNo: 'CSD-123',
    title: 'Vix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
  {
    key: '5',
    ticketNo: 'ASD-123',
    title: 'Fix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
  {
    key: '6',
    ticketNo: 'ASD-123',
    title: 'Fix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
  {
    key: '7',
    ticketNo: 'ASD-123',
    title: 'Fix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
  {
    key: '8',
    ticketNo: 'ASD-123',
    title: 'Fix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
  {
    key: '9',
    ticketNo: 'ASD-123',
    title: 'Fix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
  {
    key: '10',
    ticketNo: 'ASD-123',
    title: 'Fix toolbar',
    project: 'Project 1',
    devAssigned: 'Dev Michael',
    ticketStatus: 'Open',
    ticketType: 'Future Requests',
    createdAt: new Date(Date.now()).toLocaleString(),
  },
];

const UserTickets = () => {
  //const [tableData, setTableData] = useState(data);
  const [filter, setFilter] = useState('');
  const [filteredTable, setFilteredTable] = useState(data);

  useEffect(() => {
    const filterTable = data.filter((o) =>
      Object.keys(o).some((k) => String(o[k]).toLowerCase().includes(filter.toLowerCase())),
    );

    setFilteredTable(filterTable);
  }, [filter]);

  return (
    <>
      <PageHeader title="Your Tickets" subTitle="All the tickets you have in the database" />
      <Row type="flex" justify="center" align="end" style={{ minHeight: '5vh' }}>
        <Col>
          <Input
            placeholder="Find ticket"
            prefix={<SearchOutlined />}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ width: 250, height: '80%' }}
          />
        </Col>
      </Row>

      <Table columns={columns} dataSource={filteredTable == null ? data : filteredTable} />
    </>
  );
};

export default UserTickets;
