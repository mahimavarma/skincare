import React, { useState, useEffect } from 'react';

const LandingPage = ({ onFinish }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        setCount(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        onFinish(); 
      }, 300);
    }
  }, [count, onFinish]);

  return (
    <div className="h-screen w-screen bg-[#edf2dd] flex items-end justify-end p-10">
      <span className="text-8xl text-[#2c3730]">{count}</span>
    </div>
  );
};

export default LandingPage;
