import React, { useState } from 'react';

const formatTimestamp = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};

const CallLogScreen = () => {

  const [callLogs, setCallLogs] = useState([]);

  const addCallLog = (dialedNumber) => {
    const newCallLog = {
      id: Date.now(),
      dialedNumber,
      timestamp: Date.now(),
    };

    setCallLogs((prevLogs) => [newCallLog, ...prevLogs]);
  };

  const deleteCallLog = (id) => {
    setCallLogs((prevLogs) => prevLogs.filter((log) => log.id !== id));
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-white text-3xl mb-4">Call Log</h2>

      <ul>
        {callLogs.map((log) => (
          <li key={log.id} className="text-white mb-2 flex justify-between items-center">
            <div>
              <span>{log.dialedNumber}</span>
              <span className="ml-4">({formatTimestamp(log.timestamp)})</span>
            </div>
            <button
              className="bg-red-500 text-white rounded-full p-2"
              onClick={() => deleteCallLog(log.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CallLogScreen;
