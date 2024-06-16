import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full p-8  bg-[#fdfdfd] dark:border dark:border-gray-900 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex items-center justify-center sm:justify-start mb-6 sm:mb-0">
          <Image src="/custom/hat.jpeg" alt="Logo" width={100} height={40} className="mr-4" />
          <span className="text-2xl font-bold text-blue-gray-900 dark:text-gray-300">UpSkills</span>
        </div>
        <ul className="flex flex-wrap justify-center sm:justify-start gap-y-4 gap-x-8 mb-6 sm:mb-0">
          <li>
            <Link href="#">
              <span className="cursor-pointer text-lg font-medium text-blue-gray-900 dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 transition-colors">
                About Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="cursor-pointer text-lg font-medium text-blue-gray-900 dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 transition-colors">
                License
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="cursor-pointer text-lg font-medium text-blue-gray-900 dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 transition-colors">
                Contribute
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="cursor-pointer text-lg font-medium text-blue-gray-900 dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 transition-colors">
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <span className="block mb-1 border-t border-gray-200 dark:border-gray-900"></span>
      <p className="text-center text-lg text-blue-gray-900 dark:text-gray-300">
        © 2024 UpSkills
      </p>
    </footer>
  )
}

export default Footer
