import React from 'react'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';

  const data = [
    { name: 'Jan', value: 2900 },
    { name: 'Feb', value: 1250 },
    { name: 'Mar', value: 900 },
    { name: 'Apr', value: 1500 },
    { name: 'May', value: 1825 },
    { name: 'Jun', value: 2526 },
    { name: 'Jul', value: 2010 },
    { name: 'Aug', value: 3260 },
    { name: 'Sep', value: 3005 },
    { name: 'Oct', value: 3860 },
    { name: 'Nov', value: 4039 }
  ];
  
const Chart_Earning = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorValue)"
        />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart_Earning
