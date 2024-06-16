'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Resume from '../components/resume';
import ScrollToTop from '../components/scrollToTop';
import Camp from '../components/camp';
import Features from '../components/features';
import Tabs from '../components/tabs';

const Page = () => {
  return (
    <div className="fade-in">
      <Navbar />
      <div className="flex flex-col md:flex-row md:mt-24 md:ml-10">
        {/* Left Content */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-dark dark:to-gray-800 rounded-lg shadow-lg">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left text-gray-900 dark:text-white">
              Visit the <span className="text-blue-600">Growing Technologies</span>
            </h1>
            <div className="border-t-2 border-blue-500 w-24 mt-4 mb-8 mx-auto md:mx-0"></div>
            <p className="text-lg md:text-2xl mt-5 mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Download it and explore how we focus on <span className="font-semibold text-blue-500">enhancing educational programs</span> across diverse fields and regions to empower graduates for success in today's dynamic job market.
            </p>
            <p className="text-base md:text-lg mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              We strive to ensure that our curriculum stays up-to-date with the latest industry trends and technological advancements.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full md:w-96 h-96 relative overflow-hidden shadow-lg">
            <Image
              src="/custom/dimg2.jpg"
              alt="Educational Image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Components Below */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Camp />
        <Tabs />
        <Resume />
        <Features />
      </div>

      {/* Footer and Scroll To Top */}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Page;
