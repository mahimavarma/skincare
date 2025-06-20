import React, { useState } from 'react';
import cartIcon from '../assets/cartIcon.svg'; 
import cartFilledIcon from '../assets/cartFilled.svg'; 
import alyaImage from '../assets/caraousel1.png';
import sakuraImage from '../assets/caraousel2.png';
import bodyLotionImage from '../assets/caraousel3.png';

const products = [
  {
    title: 'ALYA SKIN CLEANSER.',
    price: 'FROM $29.99',
    image: alyaImage,
  },
  {
    title: 'RITUAL OF SAKURA.',
    price: 'FROM $27.99',
    image: sakuraImage,
  },
  {
    title: 'THE BODY LOTION.',
    price: 'FROM $19.99',
    image: bodyLotionImage,
  },
];

export default function BestSellers() {
  const [startIndex, setStartIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(Array(products.length).fill(false));

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % products.length);
  };

  const handleToggleCart = (index) => {
    const updated = [...addedToCart];
    updated[index] = !updated[index];
    setAddedToCart(updated);
  };

  const visibleProducts = [
    products[startIndex],
    products[(startIndex + 1) % products.length],
    products[(startIndex + 2) % products.length],
  ];

  return (
    <section className="bg-[#FEFFF4] w-full px-4 md:px-12 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleProducts.map((product, i) => {
          const globalIndex = (startIndex + i) % products.length;
          const isAdded = addedToCart[globalIndex];

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm overflow-hidden relative"
            >
              <div className="relative w-full h-[770px] w-[560px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-10 right-10 bottom-4 flex justify-between items-left px-6 py-4 bg-[#FEFFF4]/90 backdrop-blur-md rounded-lg">
                  <div>
                    <h3 className="text-[#2D3B36] font-medium text-lg">{product.title}</h3>
                    <p className="text-[#4b4b4b] text-sm">{product.price}</p>
                  </div>

                  <button
                    onClick={() => handleToggleCart(globalIndex)}
                    className={`p-5 rounded-lg ${
                      isAdded ? 'bg-[#2D3B36]' : 'bg-[#F2F2E8]'
                    }`}
                  >
                    <img
                      src={isAdded ? cartFilledIcon : cartIcon}
                      alt="Cart"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
