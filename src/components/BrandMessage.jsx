import React from 'react';
import bannerImage from '../assets/bannerImage.png'; // Replace with your actual image path

export default function HeroBanner() {
  return (
    <section className="bg-[#FEFFF4] px-4 md:px-12 py-8 ml-10 mr-10">
      <div className="relative rounded-xl overflow-hidden">
        {/* Image */}
        <img
          src={bannerImage}
          alt="Hero Banner"
          className="w-full h-auto object-cover"
        />

        {/* Heading */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[120px] text-white text-center">
          <h1 className="text-[50px] font-semibold leading-tight">
            Feel Beautiful Inside and Out <br />
            with Every Product.
          </h1>
        </div>

        {/* Button */}
        <div className="absolute left-1/2 mt-94 transform -translate-x-1/2 bottom-[50px]">
          <button className=" px-7 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
