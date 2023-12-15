import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const DialedNumberScreen = ({ dialedNumber }) => {
  const history = useHistory();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Automatically end the call after 10 seconds
      history.push('/call-log'); // Transition to Call Log Screen
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [history]);

  return (
    <div className="container mx-auto mt-8">
      <div className="text-white text-4xl mb-4">Dialed Number: {dialedNumber}</div>
      <p>Call ending in 10 seconds...</p>
    </div>
  );
};

export default DialedNumberScreen;
