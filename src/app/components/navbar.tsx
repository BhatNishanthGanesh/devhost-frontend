// components/Navbar.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from 'react-icons/io';
import { useActivePath } from '../helpers/active';

const Navbar = () => {
  const { setTheme } = useTheme();
  const checkActivePath = useActivePath();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-80 dark:bg-dark backdrop-blur-lg shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo and Brand */}
          <div className="flex flex-shrink-0">
            <Image
              src="/custom/hat.jpeg"
              alt="hat"
              width={80}
              height={80}
              className="ml-2 rounded-full"
            />
            <div className="flex flex-col items-start mt-2 ml-4">
              <Link href="/homePage" passHref>
                <h2 className="font-bold text-2xl md:text-3xl text-blue-gray-900">UpSkills</h2>
              </Link>
              <p className="text-sm text-blue-gray-500">"Learn Tomorrow, Today."</p>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/homePage" passHref>
              <div className={`text-md antialiased leading-normal text-blue-gray-900 focus:text-blue-500 ${checkActivePath('/homePage') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
                HomePage
              </div>
            </Link>
            {/* Account Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className={`text-md antialiased leading-normal text-blue-gray-900 hover:text-blue-500 focus:text-blue-500 cursor-pointer flex items-center ${checkActivePath('/technical') || checkActivePath('/nontechnical') || checkActivePath('/agriculture') ? 'text-blue-500' : ''}`}>
                  Technologies
                  <IoIosArrowDown className="ml-1 h-5 w-5" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className='bg-slate-200'>
                <DropdownMenuItem>
                  <Link href="/technical" passHref>
                    <div className={`block px-4 py-2 text-gray-900 hover:bg-blue-300 ${checkActivePath('/technical') ? 'text-blue-500' : ''}`}>Technical</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/nontechnical" passHref>
                    <div className={`block px-4 py-2 text-gray-800 hover:bg-blue-300 ${checkActivePath('/nontechnical') ? 'text-blue-500' : ''}`}>Non Technical</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/agriculture" passHref>
                    <div className={`block px-4 py-2 text-gray-800 hover:bg-blue-300 ${checkActivePath('/agriculture') ? 'text-blue-500' : ''}`}>Agricultural</div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/feedback" passHref>
              <div className={`text-md antialiased leading-normal text-blue-gray-900 hover:text-blue-500 focus:text-blue-500 ${checkActivePath('/feedback') ? 'text-blue-500' : ''}`}>
                Feedback
              </div>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className='bg-slate-200 dark:bg-slate-800'>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              className="text-blue-gray-900 hover:text-blue-500 focus:text-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
              onClick={toggleMobileMenu}
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {mobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/homePage" passHref>
              <div className="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">HomePage</div>
            </Link>
            {/* Account Dropdown (Mobile) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-900 hover:text-blue-500 focus:text-blue-500 cursor-pointer">Technologies</div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/technical" passHref>
                    <a className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white ${checkActivePath('/technical') ? 'text-blue-500' : ''}`}>Technical</a>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/nontechnical" passHref>
                    <a className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white ${checkActivePath('/nontechnical') ? 'text-blue-500' : ''}`}>Non Technical</a>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/agricultural" passHref>
                    <a className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white ${checkActivePath('/agriculture') ? 'text-blue-500' : ''}`}>Agricultural</a>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/feedback" passHref>
              <div className="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
                Feedback
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
