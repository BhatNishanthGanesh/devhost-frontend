'use client'
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [images, setImages] = useState([
    "/custom/dLanding.jpg",
    "/custom/dimg2.jpg",
    "/custom/dimg3.jpg",
    "/custom/dimg4.jpg",
    "/custom/dimg5.jpg",
    "/custom/dimg6.jpg",
    "/custom/dimg7.jpg",
    "/custom/dimg8.jpg",
    "/custom/dimg9.jpg",
    "/custom/dimg10.jpg",
    "/custom/dimg11.jpg",
    "/custom/dimg12.jpg",
    
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      swapImages();
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * images.length);
  };

  const swapImages = () => {
    const randomIndex1 = getRandomIndex();
    const randomIndex2 = getRandomIndex();
    const updatedImages = [...images];
    const temp = updatedImages[randomIndex1];
    updatedImages[randomIndex1] = updatedImages[randomIndex2];
    updatedImages[randomIndex2] = temp;
    setImages(updatedImages);
  };

  const numRows = Math.ceil(images.length / 3); 

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const rowImages = images.slice(i * 3, (i + 1) * 3); 
    rows.push(
      <div key={i} className="grid grid-cols-3 gap-2">
        {rowImages.map((image, index) => (
          <div key={index} className="overflow-hidden p-2 shadow-lg h-20  flex items-center justify-center">
            <Image 
              src={image} 
              alt={`Image ${i * 3 + index + 1}`} 
              width={800} 
              height={800} 
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-8 bg-gradient-to-b bg-white text-black">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between w-full max-w-6xl">
        <div className="md:w-1/2 pr-8">
          <section className="text-left mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Hey there 👋,</h1>
            <h2 className="text-2xl md:text-3xl font-bold  mb-8">Welcome to Future-Ready Education Initiative</h2>
            <p className="text-base md:text-lg">Here we focus on enhancing educational programs across diverse fields and regions to empower graduates for success in today's dynamic job market.</p>
          </section>
          <Link href="/homePage" className="relative inline-block px-4 py-2 font-medium group  items-center">
  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-br from-blue-800 to-blue-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
  <span className="relative flex items-center justify-center text-black group-hover:text-white">
    Get Started <FaArrowAltCircleRight className="ml-2" />
  </span>
</Link>

        </div>
        <div className="md:w-1/2 mt-8 md:p-8 md:mt-0">
          <div className="grid grid-cols-1 w-full gap-2">
            {rows}
          </div>
        </div>
      </div>
    </main>
  );
}
