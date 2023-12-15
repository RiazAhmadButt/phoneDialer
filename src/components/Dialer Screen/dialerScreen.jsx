import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dialer = ({ addCallLog }) => {
    const [dialedNumber, setDialedNumber] = useState('');
    const navigate = useNavigate();
  
    const handleNumberClick = (number) => {
      setDialedNumber((prevNumber) => prevNumber + number);
    };
  
    const handleCall = () => {
      console.log(`Calling ${dialedNumber}`);
      addCallLog(dialedNumber);
      navigate('/dialed-number');
    };
  
    const handleClose = () => {
      setDialedNumber('');
    };

    return (
        <div className="container mx-auto mt-8 m-5 p-5">
            <div className="text-white text-4xl mb-4">{dialedNumber}</div>

            <div className="grid grid-cols-3 gap-4">
                {Array.from(Array(9), (e, i) => i + 1).map((number) => (
                    <button
                        key={number}
                        className="bg-gray-500 text-white rounded-full p-2"
                        onClick={() => handleNumberClick(number.toString())}
                    >
                        {number}
                    </button>
                ))}
                <button
                    className="bg-gray-500 text-white rounded-full p-4"
                    onClick={() => handleNumberClick('*')}
                >
                    *
                </button>
                <button
                    className="bg-gray-500 text-white rounded-full p-4"
                    onClick={() => handleNumberClick('0')}
                >
                    0
                </button>
                <button
                    className="bg-gray-500 text-white rounded-full p-4"
                    onClick={() => handleNumberClick('#')}
                >
                    #
                </button>
            </div>

            <div className="flex justify-between mt-4">
                <button
                    className="bg-gray-500 text-white rounded-full p-4"
                    onClick={handleCall}
                >
                    Call
                </button>
                <button
                    className="bg-gray-500 text-white rounded-full p-4"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Dialer;
