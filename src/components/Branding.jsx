import React from 'react';
import ProductImage from '../assets/Central.png'; 
import Image from '../assets/Image1.png'; // Placeholder for the product image

export default function Branding() {
  return (
    <div className="relative w-full bg-[#f0f5e1] overflow-hidden py-20">

      {/* SKINCARE Text in Background */}
      <h1 className="absolute text-[21.5vw] top-1/2 mt-[105px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold tracking-tight leading-none text-[#2D3B36] opacity-100 z-0 text-center pointer-events-none">
        SKINCARE
      </h1>

      {/* Shop Now Button */}
      <div className="absolute z-20 top-[calc(50%-125px)] left-[100px] sm:left-[100px] sm:block hidden">
        <button className="bg-[#2D3B36] text-white w-[180px] h-[60px] rounded-full text-sm hover:bg-[#1e2a26] transition flex items-center justify-center">
          Shop Now
        </button>
      </div>

      {/* Mobile Button (Centered) */}
      <div className="sm:hidden flex justify-center mb-8 z-20 relative">
        <button className="bg-[#2D3B36] text-white w-[160px] h-[50px] rounded-full text-sm hover:bg-[#1e2a26] transition flex items-center justify-center">
          Shop Now
        </button>
      </div>

      {/* Centered Product Image */}
      <div className="relative z-10 flex justify-center">
        <div className="relative rounded-[20px] overflow-hidden">
          <img 
            src={ProductImage} 
            alt="Skincare branding" 
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] rounded-[20px] shadow-xl"
          />

          {/* Overlay Message */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#EFF5E1] shadow-md rounded-full px-4 py-2 flex items-center space-x-3 w-[90%] md:w-[80%] lg:w-[75%]">
            <div className="p-1 rounded-full border border-dotted border-[#2D3B36]">
              <div className="p-0 rounded-full bg-[#EFF5E1]">
                <img
                  src={Image}
                  alt="Product"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            </div>

            <span className="text-sm text-gray-700 text-center sm:text-left">
              While giving you an invigorating cleansing experience.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
