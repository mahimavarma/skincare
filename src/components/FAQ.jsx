import React, { useState } from 'react';
import faqImage from '../assets/Mask.png'; // Your uploaded FAQ product image here
import headphones from '../assets/headphones.svg'; // Your uploaded headphones icon here
import { Plus, Minus } from 'lucide-react'; // Using lucide icons
import { FaLeaf } from 'react-icons/fa'; // Overlay icon

const faqs = [
  {
    question: 'Are your products safe for sensitive skin?',
    answer: 'Absolutely! All our products are formulated to be gentle and effective for all skin types, including sensitive skin.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.',
  },
  {
    question: "What's your return policy?",
    answer: 'You can return unused products within 30 days for a full refund. Terms and conditions apply.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes! We offer worldwide shipping. Delivery times and rates may vary by region.',
  },
  {
    question: 'How do I choose the right product?',
    answer: 'Check out our product guides or speak with our skincare specialists through live chat.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FEFFF4] px-4 md:px-12 py-16 grid md:grid-cols-2 gap-12 ">
      {/* Left Image */}
      <div className="relative w-full h-full ml-10">
        <img
          src={faqImage}
          alt="Product"
          className="w-full h-auto rounded-2xl object-cover"
        />
        <div className="">
          {/* <img src={headphoneIcon} alt="Support" className="w-5 h-5" /> */}
          {/* 24/7 We’re Here to Help You */}
        </div>

        {/* Overlay Message */}
        <div className="absolute bottom-52 left-1/2 transform -translate-x-1/2 bg-[#EFF5E1] shadow-md rounded-full px-4 py-2 flex items-center space-x-3 ">
          <div className=" p-2 rounded-full mr-2">
                      <img src={headphones} alt="Wishlist"className='w-12 h-12' />
            
          </div>
          <span className="text-sm text-gray-700 ">
            24/7 We’re Here<br></br> to Help You
          </span>
        </div>
      </div>

      {/* Right FAQ */}
      <div className="flex flex-col justify-center ml-10">
        {/* Frequently Asked Question badge */}
        <div className="flex items-center gap-2 mb-[100px] text-[#2D3B36] text-[20px] border border-[#2D3B36] rounded-full px-4 py-2 w-fit ml-[4px]">
          <span className="w-3 h-3 bg-[#2D3B36] rounded-full"></span>
          Frequently Asked Question
        </div>

        {/* Heading */}
        <h2 className="text-[#2D3B36] text-3xl md:text-5xl font-semibold mb-[100px] leading-tight">
          Answers to Your <br /> Skincare Questions, All <br /> in One Place.
        </h2>

        {/* Dropdowns */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#2D3B36] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-[#2D3B36] font-medium"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-[#4b4b4b] text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
