// src/components/DialedNumberScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Update import statement

const DialedNumberScreen = ({ dialedNumber }) => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Automatically end the call after 10 seconds
      navigate('/call-log'); // Use navigate instead of history.push
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="container mx-auto mt-8">
      <div className="text-white text-4xl mb-4">Dialed Number: {dialedNumber}</div>
      <p>Call ending in 10 seconds...</p>
    </div>
  );
};

export default DialedNumberScreen;
