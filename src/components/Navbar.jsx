import React, { useRef } from "react";
import bagIcon from '../assets/bag.svg';
import heartIcon from '../assets/heart.svg';
import profileIcon from '../assets/profile.svg';

const Navbar = () => {
  const navbarRef = useRef(null);

  return (
    <nav
      ref={navbarRef}
      className="w-full flex flex-wrap items-center justify-between px-6 md:px-16 lg:px-[100px] py-4 md:py-6 text-[#2D3B36] font-medium bg-[#f0f5e1] relative"
    >
      {/* Logo */}
      <div className="text-2xl md:text-3xl font-bold">SKINCARE</div>

      {/* Center Nav - Hidden on mobile */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 lg:gap-8 text-base lg:text-[20px]">
        <a href="#" className="hover:underline">All Products</a>
        <a href="#" className="hover:underline">Serum</a>
        <a href="#" className="hover:underline">Sunscreen</a>
        <a href="#" className="hover:underline">Bundle</a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative flex items-center gap-1 sm:gap-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border bg-[#F8FEE5] flex items-center justify-center cursor-pointer">
            <img src={bagIcon} alt="Cart" className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>
          <span className="text-xs sm:text-sm">Cart (1)</span>
        </div>
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border bg-[#F8FEE5] flex items-center justify-center cursor-pointer">
          <img src={heartIcon} alt="Wishlist" className="w-4 sm:w-5 h-4 sm:h-5" />
        </div>
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border bg-[#F8FEE5] flex items-center justify-center cursor-pointer">
          <img src={profileIcon} alt="Profile" className="w-4 sm:w-5 h-4 sm:h-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
