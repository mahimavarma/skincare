import React, { useEffect, useState } from 'react';

export default function Message() {
  const text = [
    "Experience the ultimate in skincare with our expertly formulated products,",  // Line 1
    "crafted to nourish, protect, and rejuvenate your skin. Combining the finest", // Line 2
    "natural ingredients with advanced science, our collection ensures every",     // Line 3
    "skin type can achieve a radiant, healthy glow. Embrace your beauty with",     // Line 4
    "confidence every day. Discover the transformative power of our",              // Line 5
    "products designed to protect, repair, and rejuvenate",                        // Line 6
    "your skin for lasting radiance and health."                                   // Line 7
  ];

  const words = text.join(' ').split(' ');
  const [visibleWordCount, setVisibleWordCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWordCount((prev) => (prev < words.length ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  let wordCounter = 0;

  return (
    <div
      className="w-full pb-40 overflow-x-hidden"
      style={{
        backgroundColor: 'rgba(254, 255, 244, 1)',
        paddingTop: '80px',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
    >
      <div
        style={{
          fontSize: '50px',
          lineHeight: '3.8rem',
          color: '#0f172a',
          fontWeight: 400,
          textAlign: 'left',
        }}
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
