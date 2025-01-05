import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from 'recharts';



const data = [
  { name: 'Jan', value: 2909 },
  { name: 'Feb', value: 1259 },
  { name: 'Mar', value: 950 },
  { name: 'Apr', value: 1563 },
  { name: 'May', value: 1825 },
  { name: 'Jun', value: 2526 },
  { name: 'Jul', value: 2010 },
  { name: 'Aug', value: 3260 },
  { name: 'Sep', value: 3005 },
  { name: 'Oct', value: 3860 },
  { name: 'Nov', value: 4039 }
];

const Chart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={data}
      margin={{ top: 50, right: 30, left: 20, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3}>
        <LabelList dataKey="value" position="top" />
      </Line>
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
