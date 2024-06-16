// components/PdfUploader.js
"use client"
// components/PdfUploader.js
// components/PdfUploader.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const PdfUploader = ({ onPdfUpload }:any) => {
//   const [pdfFile, setPdfFile] = useState(null);

//   // Handler for file input change
//   const handleFileChange = (event:any) => {
//     const file = event.target.files[0];
//     setPdfFile(file);
//   };

//   // Handler for uploading PDF content to backend
//   const handlePdfUpload = async () => {
//     if (!pdfFile) return;

//     try {
//       const formData = new FormData();
//       formData.append('file', pdfFile);

//       const response = await axios.post('http://your-backend-url/upload-pdf', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('PDF uploaded successfully:', response.data);
//       onPdfUpload(response.data); // Notify parent component about successful upload
//     } catch (error) {
//       console.error('Error uploading PDF:', error);
//     }
//   };

//   return (
//     <div className="sm:ml-4">
//       {/* File input for selecting PDF */}
//       <input
//         type="file"
//         accept=".pdf"
//         onChange={handleFileChange}
//         className="hidden"
//         id="pdf-upload"
//       />
//       {/* Label for file input */}
//       <label htmlFor="pdf-upload" className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
//         Upload your syllabus pdf
//       </label>

//       {/* Display selected PDF file name */}
//       {/* @ts-ignore */}
//       {pdfFile && <p className="mt-2">Selected PDF: {pdfFile.name}</p>}

//       {/* Button to trigger PDF upload */}
//       <button onClick={handlePdfUpload} disabled={!pdfFile} className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none disabled:opacity-50">
//         Upload PDF
//       </button>
//     </div>
//   );
// };

// export default PdfUploader;

import React, { useState } from 'react';
// @ts-ignore
import * as pdfjsLib from 'pdfjs-dist/webpack.mjs';

const PdfUploader: React.FC<{ onPdfUpload: (data: any) => void }> = ({ onPdfUpload }) => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [selectedPdfName, setSelectedPdfName] = useState<string>('');

  // Handler for file input change
  const handleFileChange = (event:any) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setPdfFile(file);
      setSelectedPdfName(file.name);
    }
  };

  const handlePdfRead = async () => {
    if (!pdfFile) return;

    try {
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        // @ts-ignore
        const typedArray = new Uint8Array(fileReader.result);
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
        const numPages = pdf.numPages;

        console.log(`Number of Pages: ${numPages}`);

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const textContent = await page.getTextContent();
          const textItems = textContent.items.map((item:any) => item.str).join(' ');

          console.log(`Page ${pageNum}: ${textItems}`);
        }
      };
      fileReader.readAsArrayBuffer(pdfFile);
    } catch (error) {
      console.error('Error reading PDF:', error);
    }
  };

  // // Handler for uploading PDF content to backend
  // const handlePdfUpload = async () => {
  //   if (!pdfFile) return;

  //   try {
  //     const formData = new FormData();
  //     formData.append('file', pdfFile);

  //     console.log('Uploading PDF...');
  //     const response = await axios.post('http://your-backend-url/upload-pdf', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });

  //     console.log('PDF uploaded successfully:', response.data);

  //     // Extract skills and skill names from the uploaded PDF
  //     const skills = await extractSkillsFromPDF(pdfFile);

  //     // Send skills data to backend
  //     console.log('Extracted skills:', skills);
  //     const skillsResponse = await axios.post('http://your-backend-url/extract-skills', { skills });

  //     console.log('Skills extracted and sent to backend:', skillsResponse.data);

  //     onPdfUpload(response.data); // Notify parent component about successful upload
  //   } catch (error) {
  //     console.error('Error uploading or extracting PDF:', error);
  //   }
  // };

  return (
    <div className="sm:ml-4">
      {/* File input for selecting PDF */}
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="hidden"
        id="pdf-upload"
      />
      <label htmlFor="pdf-upload" className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
        Upload your syllabus pdf
      </label>

      {selectedPdfName && <p className="mt-2">Selected PDF: {selectedPdfName}</p>}

      <button onClick={handlePdfRead} disabled={!pdfFile} className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none disabled:opacity-50">
          Submit PDF
        </button>
    </div>
  );
};

export default PdfUploader;
