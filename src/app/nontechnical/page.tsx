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
    { id: 1, name: 'Solar Panels', description: 'Devices that convert sunlight into electricity.' },
    { id: 2, name: 'Wind Turbines', description: 'Devices that convert wind energy into mechanical power.' },
    { id: 3, name: 'Hydraulic Systems', description: 'Systems using liquid to transmit power in mechanical applications.' },
    { id: 4, name: 'Internal Combustion Engines', description: 'Engines that generate power by burning fuel inside cylinders.' },
    { id: 5, name: 'Electrical Motors', description: 'Devices that convert electrical energy into mechanical energy.' },
    { id: 6, name: 'Geothermal Energy', description: 'Energy derived from heat within the Earth.' },
    { id: 7, name: 'Biomass Energy', description: 'Energy derived from organic materials like wood, crops, and waste.' },
    { id: 8, name: 'Mechanical Gears', description: 'Devices for transmitting torque and rotation between shafts.' },
    { id: 9, name: 'Water Purification Systems', description: 'Systems for removing contaminants from water to make it suitable for consumption.' },
    { id: 10, name: 'HVAC Systems', description: 'Heating, Ventilation, and Air Conditioning systems for controlling indoor environmental conditions.' },
    { id: 11, name: 'Robotics', description: 'Field involving the design and application of robots for various tasks.' },
    { id: 12, name: 'Materials Science', description: 'Field studying properties and applications of materials like metals, ceramics, and polymers.' },
    { id: 13, name: 'Renewable Energy Sources', description: 'Sources of energy that are naturally replenished, such as solar, wind, and hydroelectric power.' },
    { id: 14, name: 'Electric Vehicles', description: 'Vehicles powered by electric motors and batteries instead of internal combustion engines.' },
    { id: 15, name: 'Green Building Design', description: 'Design approach focused on sustainability and efficiency in building construction and operation.' },
    { id: 16, name: 'Hybrid Power Systems', description: 'Systems combining two or more different power sources for increased efficiency and reliability.' },
    { id: 17, name: 'Energy Storage Technologies', description: 'Technologies for storing energy produced from renewable sources for later use.' },
    { id: 18, name: 'Environmental Monitoring Systems', description: 'Systems for monitoring and analyzing environmental parameters like air quality and water pollution.' },
    { id: 19, name: 'Mechatronics', description: 'Field combining mechanical engineering, electronics, and computer science for designing intelligent systems.' },
    { id: 20, name: 'Automation Systems', description: 'Systems and technologies for automating industrial processes and tasks.' }
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
        <Link href='/technical/form' className=' text-dark '>Send your syllabus copy</Link>
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
