import React from 'react';
import ProductImage from '../assets/Image1.png';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#f0f5e1' }}>
      <div className="flex items-center justify-center px-6 md:px-[100px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-12 py-12">

          {/* Left Section - Paragraph */}
          <div className="flex flex-col items-center lg:items-start space-y-6 order-2 lg:order-1">
            <div className="text-sm sm:text-base md:text-lg leading-relaxed max-w-sm text-center lg:text-left text-[#2D3B36]">
              Transform your skincare routine with premium<br />
              products that restore, protect, and enhance your<br />
              natural glow every day.
            </div>
          </div>

          {/* Center Title */}
          <div className="text-center order-1 lg:order-2">
            <h1 className="font-bold leading-none tracking-tight text-[#2D3B36]
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block lg:hidden">GLOWWWWW</span>
              <span className="block lg:hidden">NATURALLY</span>
              <span className="hidden lg:block">GLOW<br />NATUR-<br />ALLY</span>
            </h1>
          </div>

          {/* Right Product Image */}
<div className="hidden sm:flex justify-center lg:justify-end order-3">
  <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 h-auto rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-[#e8f2d4] to-[#d4e8c4]">
    <img 
      src={ProductImage}
      alt="Skincare Product"
      className="w-full h-full object-contain rounded-2xl"
    />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
