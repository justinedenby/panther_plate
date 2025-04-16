// src/components/QueueStatus.js
import React, { useContext } from 'react';
import { OrderQueueContext } from '../contexts/OrderQueueContext';

const QueueStatus = () => {
  const { queue } = useContext(OrderQueueContext);

  const getQueueColor = () => {
    if (queue.currentOrders < 3) return 'text-green-500';
    if (queue.currentOrders < 6) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="queue-status bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">Order Queue Status</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Orders Ahead:</p>
          <p className={`text-2xl font-bold ${getQueueColor()}`}>
            {queue.currentOrders}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Est. Wait Time:</p>
          <p className="text-2xl font-bold">
            {queue.estimatedWait} min
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block text-gray-600">
                Queue Progress
              </span>
            </div>
            <div>
              <span className="text-xs font-semibold inline-block text-gray-600">
                {Math.min(queue.currentOrders, 10)}/10
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${Math.min(queue.currentOrders * 10, 100)}%` }}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                queue.currentOrders < 3 ? 'bg-green-500' : 
                queue.currentOrders < 6 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueStatus;