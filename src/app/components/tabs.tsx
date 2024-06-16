"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1); 
  const tabContentRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState('auto');

  const tabsData = [
    {
      id: 1,
      title: 'Technical',
      content: 'Future trending technology stacks in technical fields include advancements in artificial intelligence (AI), machine learning (ML), and cloud computing. These technologies are driving innovations in automation, data analytics, and scalable infrastructure solutions.',
      imageUrl: '/custom/dimg2.jpg', 
      visitLink: '/technical',
    },
    {
      id: 2,
      title: 'Non Technical',
      content: 'In non-technical domains, future trends focus on digital transformation, user experience (UX) design, and cybersecurity. Emerging technologies such as augmented reality (AR) and virtual reality (VR) are also shaping new opportunities in various industries.',
      imageUrl: '/custom/dimg3.jpg', 
      visitLink: '/nontechnical',
    },
    {
      id: 3,
      title: 'Agricultural',
      content: 'The future of agricultural technology is centered around precision farming, IoT (Internet of Things) applications, and sustainable practices. Innovations in drone technology, data-driven agriculture, and biotechnology are paving the way for more efficient and eco-friendly farming methods.',
      imageUrl: '/custom/dimg4.jpg', 
      visitLink: '/agriculture',
    },
  ];

  const handleTabClick = (tabId:any) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (tabContentRef.current) {
        // @ts-ignore
      setContainerHeight(`${tabContentRef.current.scrollHeight}px`);
    }
  }, [activeTab]);

  return (
    <>
    <h1 className='font-bold text-2xl md:-mt-10 md:mb-10'>Explore the growths of various domains</h1>
    <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
      {/* Tabs navigation */}
      <div className="flex justify-center mb-4 space-x-4">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 rounded-lg focus:outline-none ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div className="relative" style={{ height: containerHeight }}>
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            ref={activeTab === tab.id ? tabContentRef : null}
            className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
              activeTab === tab.id ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 pointer-events-none z-0'
            } p-6 rounded-lg bg-white shadow-md`}
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Left side content */}
              <div className="flex-1 mb-4 md:mb-0 md:mr-4">
                <h3 className="text-3xl font-bold mb-2 text-blue-500">{tab.title}</h3>
                <p className="text-gray-700">{tab.content}</p>
                {/* Visit page link */}
                <div className='mt-2'>
                <Link href={tab.visitLink} className='hover:text-blue-500 text-blue-800'>
                    Explore More
                </Link>
                </div>
              </div>
              {/* Right side image */}
              <div className="w-full md:w-96 flex-shrink-0">
                <img
                  src={tab.imageUrl}
                  alt={tab.title}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Tabs;
