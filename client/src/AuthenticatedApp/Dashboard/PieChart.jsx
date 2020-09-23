import React from 'react';
import { Tooltip, PieChart as Chart, Pie } from 'recharts';

const PieChart = ({ data }) => {
  return (
    <Chart width={300} height={300} style={{ margin: 'auto' }}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={150}
        cy={150}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </Chart>
  );
};

export default PieChart;
