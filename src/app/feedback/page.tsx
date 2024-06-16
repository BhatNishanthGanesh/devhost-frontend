"use client"
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import handleSubmit from "../utils/handleSubmit";

const Feedback = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [positiveChecked, setPositiveChecked] = useState([]);
  const [negativeChecked, setNegativeChecked] = useState([]);

  const handleCategoryChange = (event:any) => {
    setCategory(event.target.value);
    setPositiveChecked([]);
    setNegativeChecked([]);
  };

  const handleNameChange = (event:any) => {
    setName(event.target.value);
  };

  const handlePositiveCheckboxChange = (event:any) => {
    const value = event.target.value;
    // @ts-ignore
    setPositiveChecked((prev) =>
        //@ts-ignore
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleNegativeCheckboxChange = (event:any) => {
    const value = event.target.value;
    // @ts-ignore
    setNegativeChecked((prev) =>
        // @ts-ignore
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

//   const handleSubmit = () => {
//     const feedback = [
//       ...positiveChecked.map((item) => ({ name: item, score: 1 })),
//       ...negativeChecked.map((item) => ({ name: item, score: -1 }))
//     ];
//     console.log("Name:", name);
//     console.log("Selected Category:", category);
//     console.log("Feedback:", feedback);
//     try {
//         const response = axios.post('http://localhost:4000/skillsupdate', feedback);
//         console.log('Feedback saved:', response.data);
//         // Optionally handle success message or redirect after successful submission
//       } catch (error) {
//         console.error('Error saving feedback:', error);
//         // Optionally handle error message or display an error to the user
//       }
//   };

const resetForm = () => {
    setCategory('');
    setName('');
    setPositiveChecked([]);
    setNegativeChecked([]);
  };

const onSubmit = async () => {
    try {
      await handleSubmit({ name, category, positiveChecked, negativeChecked });
      // If submission succeeds, reset the form
      resetForm();
      // Optionally show a success message to the user
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Optionally handle error message or display an error to the user
      alert('Failed to submit feedback. Please try again.');
    }
  };
  const techOptions = [
    "Python",
    "Java",
    "JavaScript",
    "Computer networks",
    "DBMS"
  ];

  const agricultureOptions = [
    "Agriculture Option 1",
    "Agriculture Option 2",
    "Agriculture Option 3",
    "Agriculture Option 4"
  ];

  const renderCheckboxes = (options:any, checkedItems:any, handleChange:any) => (
    <div className="flex flex-col gap-2 mt-4">
      {options.map((option:any, index:any) => (
        <label className="inline-flex items-center" key={index}>
          <input
            type="checkbox"
            value={option}
            checked={checkedItems.includes(option)}
            onChange={handleChange}
            className="form-checkbox"
          />
          <span className="ml-2">{option}</span>
        </label>
      ))}
    </div>
  );

  return (
    <>
    <Navbar/>
      <div className="flex items-center justify-center min-h-screen dark:bg-dark bg-gray-50 p-4">
        <div className="flex dark:bg-dark bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl w-full">
          <div className="hidden md:flex md:w-1/2">
          <Image
            src="/custom/feedback.jpeg" alt="Alumni Image" className="object-cover"  width={540}
            height={600}
          />
          </div>

          <div className="w-full p-8 md:w-1/2 flex flex-col items-center justify-center dark:text-white text-gray-700">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Alumni Feedback
            </h4>
            <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed dark:text-white text-gray-700">
              We value your feedback! Please fill out the form below.
            </p>
            <form className="max-w-screen-lg mt-8 mb-2 w-96 sm:w-112">
              <div className="flex flex-col gap-6 mb-1">
                <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Your Name
                </h6>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    placeholder="John Doe"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Feedback Category
                </h6>
                <div className="relative h-11 w-full min-w-[200px]">
                  <select
                    id="feedbackCategory"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 dark:bg-dark border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <option value="" disabled>Select category</option>
                    <option value="tech">Tech</option>
                    <option value="agriculture">Agriculture</option>
                  </select>
                </div>
                {category === 'tech' && (
                  <>
                    <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                      Positive Feedback
                    </h6>
                    {renderCheckboxes(techOptions, positiveChecked, handlePositiveCheckboxChange)}
                    <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                      Negative Feedback
                    </h6>
                    {renderCheckboxes(techOptions, negativeChecked, handleNegativeCheckboxChange)}
                  </>
                )}
                {category === 'agriculture' && (
                  <>
                    <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                      Positive Feedback
                    </h6>
                    {renderCheckboxes(agricultureOptions, positiveChecked, handlePositiveCheckboxChange)}
                    <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                      Negative Feedback
                    </h6>
                    {renderCheckboxes(agricultureOptions, negativeChecked, handleNegativeCheckboxChange)}
                  </>
                )}
              </div>
              <button
                className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={onSubmit}
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Feedback;