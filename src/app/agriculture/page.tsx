"use client"
import React, { useState } from 'react';
import axios from 'axios'; // Assuming axios is used for HTTP requests
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trendingStacks, setTrendingStacks] = useState([
    { id: 1, name: 'Crop Rotation', description: 'A practice of growing different types of crops in the same area in sequential seasons.' },
    { id: 2, name: 'Precision Agriculture', description: 'Techniques that use satellite imagery and data to optimize crop yield and reduce inputs.' },
    { id: 3, name: 'Drip Irrigation', description: 'A method of watering plants by delivering water directly to the roots in controlled amounts.' },
    { id: 4, name: 'Greenhouse Farming', description: 'A method of cultivating crops under a controlled environment within glass or plastic structures.' },
    { id: 5, name: 'Organic Farming', description: 'A farming practice that avoids synthetic chemicals and emphasizes soil health and biodiversity.' },
    { id: 6, name: 'Hydroponics', description: 'A method of growing plants without soil, using nutrient-rich water solutions.' },
    { id: 7, name: 'Agroforestry', description: 'Integrating trees and shrubs into crop and animal farming systems to create environmental, economic, and social benefits.' },
    { id: 8, name: 'Biodynamic Farming', description: 'An ecological farming approach that treats farms as unified and interconnected organisms.' },
    { id: 9, name: 'Vertical Farming', description: 'Growing crops in vertically stacked layers or vertically inclined surfaces.' },
    { id: 10, name: 'Aquaponics', description: 'Combining aquaculture (raising fish) and hydroponics (growing plants without soil) in a symbiotic environment.' },
    { id: 11, name: 'Soil Conservation', description: 'Practices to prevent soil erosion and maintain soil fertility for sustainable agriculture.' },
    { id: 12, name: 'Seed Preservation', description: 'Efforts to maintain genetic diversity of crops by storing seeds in gene banks and seed libraries.' },
    { id: 13, name: 'Integrated Pest Management', description: 'A sustainable approach to controlling pests by combining biological, cultural, and mechanical methods.' },
    { id: 14, name: 'Farm Robotics', description: 'Use of robots and automated systems to perform tasks on farms, such as planting, harvesting, and monitoring.' },
    { id: 15, name: 'Agricultural Biotechnology', description: 'Applications of biotechnology techniques to improve crop production and food quality.' },
    { id: 16, name: 'Farm-to-Table Movement', description: 'Promoting locally grown produce and direct relationships between farmers and consumers.' },
    { id: 17, name: 'Climate-Resilient Agriculture', description: 'Practices and technologies that help agriculture adapt to and mitigate climate change impacts.' },
    { id: 18, name: 'Livestock Management', description: 'Techniques for raising and caring for livestock animals to ensure health and productivity.' },
    { id: 19, name: 'Sustainable Farming Practices', description: 'Methods that aim to reduce environmental impact while maintaining profitability and social equity.' },
    { id: 20, name: 'Food Security Initiatives', description: 'Efforts to ensure that all people have access to sufficient, safe, and nutritious food.' }
  ]);
  

  const handleSearch = (event:any) => {
    setSearchTerm(event.target.value);
  };

  // Filter trending stacks based on search term
  const filteredStacks = trendingStacks.filter(stack =>
    stack.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start">
        {/* Search Bar */}
        <div className="flex-grow mb-4 sm:mb-0 sm:mr-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
         <Button className='bg-blue-200 rounded-full hover:bg-blue-300'>
        <Link href='/agriculture/form' className=' text-dark '>Send your syllabus copy</Link>
         </Button>
      </div>
      

      {/* Display Trending Stacks */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className='text-4xl mb-10 font-bold'>Trending Topics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredStacks.map(stack => (
            <div key={stack.id} className="bg-white dark:bg-dark rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">{stack.name}</h3>
              <p>{stack.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Page;
