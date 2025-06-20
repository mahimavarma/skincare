import React, { useState } from 'react';

import cartIcon from '../assets/cartIcon.svg';
import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';
import alyaImage from '../assets/caraousel1.png';
import sakuraImage from '../assets/caraousel2.png';
import bodyLotionImage from '../assets/caraousel3.png';
import ProductCard from './ProductCard';

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

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % products.length);
  };

  const visibleProducts = [
    products[startIndex],
    products[(startIndex + 1) % products.length],
    products[(startIndex + 2) % products.length],
  ];

  return (
    <section className="bg-[#FEFFF4] w-full px-4 md:px-12 py-16">
      {/* Heading Row */}
      <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
        <div className="flex items-center gap-2 px-4 py-2 border border-[#2D3B36] rounded-full text-[#2D3B36] text-sm font-medium ml-12">
          <span className="w-3 h-3 rounded-full bg-[#2D3B36]"></span>
          Best Selling Products
        </div>

        <h2 className="text-[32px] md:text-[48px] text-[#2D3B36] text-center mx-auto">
          Skincare That Brings Out <br className="hidden md:block" />
          Your Natural Radiance
        </h2>

        <div className="flex gap-4 mr-10 ">
          <button className="w-10 h-10 " onClick={handlePrev}>
            <img src={arrowLeft} alt="Previous" className="w-[80px] h-[80px] mr-10" />
          </button>
          <button className="w-10 h-10" onClick={handleNext}>
            <img src={arrowRight} alt="Next" className="w-[80px] h-[80px]" />
          </button>
        </div>
      </div>
          <ProductCard products={visibleProducts} />
    </section>
  );
}