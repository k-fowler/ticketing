import React from 'react';
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const BarChart = ({ data }) => {
  return (
    <Chart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 30,
        bottom: 5,
      }}
      style={{ margin: 'auto' }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Tickets" fill="#8884d8" />
    </Chart>
  );
};

export default BarChart;
