import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DialedNumberScreen = () => {
  const location = useLocation();
  const { dialedNumber } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/call-log');
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [dialedNumber, navigate]);

  return (
    <div className="container mx-auto m-8 p-5">
      <div className="text-white text-4xl mb-4 p-10">Dialed Number: {dialedNumber}</div>
      <p className="text-white">Call ending in 10 seconds...</p>
    </div>
  );
};

export default DialedNumberScreen;
