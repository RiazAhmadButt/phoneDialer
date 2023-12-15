import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dialer from './components/Dialer Screen/dialerScreen';
import DialedNumberScreen from './components/Dialed Number Screen/DialedNumberScreen ';
import './App.css';
import CallLogScreen from './components/callScreen/CallScreen';
import { useState } from 'react';

function App() {
  const [callLogs, setCallLogs] = useState([]);

  const addCallLog = (dialedNumber) => {
    const newCallLog = {
      id: Date.now(),
      dialedNumber,
      timestamp: new Date().toLocaleString(),
    };

    setCallLogs((prevLogs) => [newCallLog, ...prevLogs]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Dialer addCallLog={addCallLog} />} // Pass addCallLog as a prop
          />
          <Route path="/dialed-number" element={<DialedNumberScreen />} />
          <Route path="/call-log" element={<CallLogScreen callLogs={callLogs} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
