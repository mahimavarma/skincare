import React, { useState } from 'react';
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

const categories = ['NEW ARRIVAL', 'CLEANSING', 'ACNE FIGHTER', 'ANTI AGING'];



export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('NEW ARRIVAL');

  return (
    <section className="bg-[#FEFFF4] w-full px-4 md:px-12 py-16 text-center">
      {/* Heading */}
      <h2 className="text-[40px] md:text-[50px] text-[#2D3B36]  mb-6">
        Feel Beautiful Inside and Out <br className="hidden md:block" />
        with Every Product.
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-[15px]  transition ${
              activeCategory === category
                ? 'bg-[#2D3B36] text-white'
                : 'border border-[#2D3B36] text-[#2D3B36]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <ProductCard  />
      
    </section>
  );
}
