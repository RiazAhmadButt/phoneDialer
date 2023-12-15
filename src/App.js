import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dialer from './components/Dialer Screen/dialerScreen'; 
import DialedNumberScreen from './components/Dialed Number Screen/DialedNumberScreen '; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dialer />} />
          <Route path="/dialed-number" element={<DialedNumberScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
