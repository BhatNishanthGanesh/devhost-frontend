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
        { id: 1, name: 'React', description: 'A JavaScript library for building user interfaces.' },
        { id: 2, name: 'Vue.js', description: 'The progressive JavaScript framework.' },
        { id: 3, name: 'Angular', description: 'A platform for building mobile and desktop web applications.' },
        { id: 4, name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
        { id: 5, name: 'Express.js', description: 'Fast, unopinionated, minimalist web framework for Node.js.' },
        { id: 6, name: 'Django', description: 'A high-level Python web framework that encourages rapid development and clean, pragmatic design.' },
        { id: 7, name: 'Flask', description: 'A lightweight WSGI web application framework in Python.' },
        { id: 8, name: 'Ruby on Rails', description: 'A server-side web application framework written in Ruby under the MIT License.' },
        { id: 9, name: 'Laravel', description: 'A PHP framework for web artisans.' },
        { id: 10, name: 'Spring Boot', description: 'An open-source Java-based framework used to create microservices.' },
        { id: 11, name: 'ASP.NET Core', description: 'A cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications.' },
        { id: 12, name: 'GraphQL', description: 'A query language for APIs and a runtime for executing those queries with your existing data.' },
        { id: 13, name: 'Apollo Client', description: 'A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.' },
        { id: 14, name: 'MongoDB', description: 'A document-oriented NoSQL database used for high volume data storage.' },
        { id: 15, name: 'PostgreSQL', description: 'A powerful, open-source object-relational database system.' },
        { id: 16, name: 'AWS Lambda', description: 'A serverless computing service provided by Amazon Web Services.' },
        { id: 17, name: 'Google Cloud Functions', description: 'A serverless execution environment for building and connecting cloud services.' },
        { id: 18, name: 'Docker', description: 'A platform for developers and sysadmins to build, ship, and run applications.' },
        { id: 19, name: 'Kubernetes', description: 'An open-source container orchestration platform for automating the deployment, scaling, and management of containerized applications.' },
        { id: 20, name: 'TensorFlow', description: 'An open-source software library for dataflow and differentiable programming across a range of tasks.' }
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
        <div className="flex-grow mb-4  sm:mb-0 sm:mr-4">
          <input
            type="text"
            placeholder="Search for Topics..."
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
            <div key={stack.id} className="bg-white dark:bg-dark rounded-lg shadow-md dark:border dark:border-white p-4">
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
