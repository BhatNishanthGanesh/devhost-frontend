"use client";
// import React, { useState } from 'react';
// import * as pdfjsLib from 'pdfjs-dist/webpack.mjs';

// const Resume = () => {
//   const [pdfFile, setPdfFile] = useState(null);
//   const [selectedPdfName, setSelectedPdfName] = useState('');

//   // Handler for file input change
//   const handleFileChange = (event) => {
//     if (event.target.files && event.target.files.length > 0) {
//       const file = event.target.files[0];
//       setPdfFile(file);
//       setSelectedPdfName(file.name);
//     }
//   };

//   // Handler for reading PDF content
//   const handlePdfRead = async () => {
//     if (!pdfFile) return;

//     try {
//       const fileReader = new FileReader();
//       fileReader.onload = async () => {
//         const typedArray = new Uint8Array(fileReader.result);
//         const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
//         const numPages = pdf.numPages;

//         console.log(`Number of Pages: ${numPages}`);

//         for (let pageNum = 1; pageNum <= numPages; pageNum++) {
//           const page = await pdf.getPage(pageNum);
//           const textContent = await page.getTextContent();
//           const textItems = textContent.items.map((item) => item.str).join(' ');

//           console.log(`Page ${pageNum}: ${textItems}`);
//         }
//       };
//       fileReader.readAsArrayBuffer(pdfFile);
//     } catch (error) {
//       console.error('Error reading PDF:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//       <h1 className="text-2xl font-bold mb-4">Upload Your Resume</h1>
//       <div className="sm:ml-4">
//         {/* File input for selecting PDF */}
//         <input
//           type="file"
//           accept=".pdf"
//           onChange={handleFileChange}
//           className="hidden"
//           id="pdf-upload"
//         />
//         {/* Label for file input */}
//         <label htmlFor="pdf-upload" className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
//           Select PDF
//         </label>

//         {/* Display selected PDF file name */}
//         {selectedPdfName && <p className="mt-2">Selected PDF: {selectedPdfName}</p>}

//         {/* Button to trigger PDF read */}
//         <button onClick={handlePdfRead} disabled={!pdfFile} className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none disabled:opacity-50">
//           Read PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Resume;
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import Image from 'next/image'; // Import Image from Next.js

const Resume = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [selectedPdfName, setSelectedPdfName] = useState('');
  const [uploading, setUploading] = useState(false); // State to manage upload status
  const [resumeData, setResumeData] = useState(null);
  const [skills, setSkills] = useState(''); // State to store skills
  const [projects, setProjects] = useState(''); // State to store skills

  // Handler for file input change
  const handleFileChange = (event:any) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setPdfFile(file);
      setSelectedPdfName(file.name);
    }
  };

  // Handler for uploading PDF to backend
  const handlePdfUpload = async () => {
    if (!pdfFile) return;

    try {
      setUploading(true); // Set uploading state to true

      const formData = new FormData();
      formData.append('file', pdfFile);
      console.log(formData)

      // Replace with your backend endpoint for file upload
      const response = await axios.post('https://formrecognizer.onrender.com/analyze?file=', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
      // Handle success or further processing after upload
      const { documents } = response.data;
      if (documents && documents.length > 0) {
        const { fields } = documents[0];
        const extractedSkills = fields.Skills || '';
        const extractedProjects = fields.projcts || ''; // Corrected typo 'projcts' to 'projects'

        setSkills(extractedSkills);
        setProjects(extractedProjects);

        console.log(projects)
        console.log(skills);
      }
    } catch (error) {
      console.error('Error uploading PDF:', error);
      // Handle error condition
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row mt-5 items-center justify-center min-h-screen dark:bg-dark bg-gray-50 p-4">
    {/* Left Side: Upload Form */}
    <div className="md:w-1/2 md:pr-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Upload Your Resume</h1>
      <p className="text-lg mb-4 text-center md:text-left">Add your resume to know whether you are in sync with current world technologies.</p>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="hidden"
        id="pdf-upload"
      />
      <label
        htmlFor="pdf-upload"
        className="cursor-pointer px-6 py-3 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none mb-4"
      >
        Select PDF
      </label>
      {selectedPdfName && (
        <p className="text-lg font-medium text-gray-700 mb-4">Selected PDF: {selectedPdfName}</p>
      )}
      <button
        onClick={handlePdfUpload}
        disabled={!pdfFile || uploading}
        className={`px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none disabled:opacity-50 ${
          uploading ? 'cursor-not-allowed' : ''
        }`}
      >
        {uploading ? 'Uploading...' : 'Upload PDF'}
      </button>
    </div>

    {/* Right Side: Display extracted data */}
    {skills && (
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">Resume Data</h2>
        <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
          <p className="text-gray-700">{skills}</p>

          <h3 className="text-xl font-bold mt-4 mb-2">Projects</h3>
          <p className="text-gray-700">{projects}</p>
        </div>
      </div>
    )}
  </div>
  );
};

export default Resume;
