import React from 'react';
import { Tooltip, PieChart, Pie } from 'recharts';

const CustomPieChart = ({ data }) => {
  return (
    <PieChart width={300} height={300} style={{ margin: 'auto' }}>
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
    </PieChart>
  );
};

export default CustomPieChart;
