import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
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

  return (
    <div className="wait-time-card">
      <h3>Current Wait Time: <span className="highlight">{waitTimes.current} min</span></h3>
      <div className="wait-time-graph">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="time" fill="#FFD700" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="wait-time-info">
        <p>Average: {waitTimes.average} min</p>
        <p>Peak Hours: {Object.values(waitTimes.peakHours)[0].join(', ')}</p>
      </div>
    </div>
  );
};

export default WaitTimeGraph;