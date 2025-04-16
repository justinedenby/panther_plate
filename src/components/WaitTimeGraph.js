// src/components/WaitTimeGraph.js
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label
} from 'recharts';

const WaitTimeGraph = ({ waitTimes }) => {
  const data = [
    { name: 'Mon', time: waitTimes.history[0] },
    { name: 'Tue', time: waitTimes.history[1] },
    { name: 'Wed', time: waitTimes.history[2] },
    { name: 'Thu', time: waitTimes.history[3] },
    { name: 'Fri', time: waitTimes.history[4] },
    { name: 'Sat', time: waitTimes.history[5] }
  ];

  // Determine color based on current wait time
  const getWaitTimeColor = () => {
    if (waitTimes.current < 15) return '#4CAF50'; // Green
    if (waitTimes.current < 25) return '#FFC107'; // Yellow
    return '#F44336'; // Red
  };

  return (
    <div className="wait-time-card">
      <h3>Current Wait Time: 
        <span 
          className="highlight" 
          style={{ color: getWaitTimeColor() }}
        >
          {waitTimes.current} min
        </span>
      </h3>
      <div className="wait-time-graph">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis>
              <Label 
                value="Minutes" 
                angle={-90} 
                position="insideLeft" 
                style={{ textAnchor: 'middle' }} 
              />
            </YAxis>
            <Tooltip 
              formatter={(value) => [`${value} minutes`, 'Wait Time']}
              labelFormatter={(label) => `Day: ${label}`}
            />
            <Bar 
              dataKey="time" 
              fill="#FFD700" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="wait-time-info">
        <p><strong>Average:</strong> {waitTimes.average} min</p>
        <p><strong>Peak Hours:</strong> {Object.values(waitTimes.peakHours)[0].join(', ')}</p>
      </div>
    </div>
  );
};

export default WaitTimeGraph;