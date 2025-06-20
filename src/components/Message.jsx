import React, { useEffect, useState } from 'react';

export default function Message() {
  const text = [
    "Experience the ultimate in skincare with our expertly formulated products,",  
    "crafted to nourish, protect, and rejuvenate your skin. Combining the finest", 
    "natural ingredients with advanced science, our collection ensures every",     
    "skin type can achieve a radiant, healthy glow. Embrace your beauty with",     
    "confidence every day. Discover the transformative power of our",              
    "products designed to protect, repair, and rejuvenate",                        
    "your skin for lasting radiance and health."                                   
  ];

  const words = text.join(' ').split(' ');
  const [visibleWordCount, setVisibleWordCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWordCount((prev) => (prev < words.length ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, [words.length]);

  let wordCounter = 0;

  return (
    <div
      className="w-full pb-20 md:pb-40 overflow-hidden bg-[#FEFFF4] px-4 sm:px-6 md:px-20 pt-20"
    >
      <div
        className="text-[20px] sm:text-[26px] md:text-[33px] leading-relaxed md:leading-[3.8rem] text-[#0f172a] font-normal text-left break-words max-w-full"
      >
        {text.map((line, index) => (
          <div key={index}>
            {line.split(' ').map((word, i) => {
              const count = wordCounter++;
              return (
                <span
                  key={count}
                  className={`transition-opacity duration-500 ease-out ${
                    count < visibleWordCount ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  {word + '\u00A0'}
                </span>
              );
            })}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
