"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const Page = () => {
  const [skills, setSkills] = useState([{ skill: '', skilltolearn: [''] }]);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [newSkills, setNewSkills] = useState([]);
  const [toAdd, setToAdd] = useState([]);
  const [toRemove, setToRemove] = useState([]);

  const handleSkillChange = (event:any, skillIndex:any) => {
    const updatedSkills = [...skills];
    updatedSkills[skillIndex].skill = event.target.value;
    setSkills(updatedSkills);
  };

  const handleSkillNameChange = (event:any, skillIndex:any, nameIndex:any) => {
    const updatedSkills = [...skills];
    updatedSkills[skillIndex].skilltolearn[nameIndex] = event.target.value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { skill: '', skilltolearn: [''] }]);
  };

  const removeSkill = (index:any) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if (skills.length === 0) return;

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:4000/fetchSkills', skills);
      console.log('Skills recognized are:', response.data);
      const { data } = response.data;

      setNewSkills(data.newSkills);
      setToAdd(data.toAdd);
      setToRemove(data.toRemove);

      setSkills([{ skill: '', skilltolearn: [''] }]);
      setSubmitted(true);
    } catch (error) {
      console.error('Error adding skills:', error);
    }

    setIsLoading(false);
  };

  // Render only on the client-side
  if (typeof window === 'undefined') {
    return null; // Render nothing on the server-side
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start">
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto dark:bg-dark bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Add your Skills</h2>
          {skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="mb-4">
              <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor={`skill-${skillIndex}`}>
                Skill
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id={`skill-${skillIndex}`}
                  placeholder="Enter skill"
                  value={skill.skill}
                  onChange={(event) => handleSkillChange(event, skillIndex)}
                  className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
                {skillIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => removeSkill(skillIndex)}
                    className="ml-2 text-red-600 hover:text-red-700 focus:outline-none"
                  >
                    Remove
                  </button>
                )}
              </div>
              {skill.skilltolearn.map((name, nameIndex) => (
                <div key={`${skillIndex}-${nameIndex}`} className="mt-2">
                  <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor={`skillName-${skillIndex}-${nameIndex}`}>
                    Skill Name {nameIndex + 1}
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id={`skillName-${skillIndex}-${nameIndex}`}
                      placeholder={`Enter skill name ${nameIndex + 1}`}
                      value={name}
                      onChange={(event) => handleSkillNameChange(event, skillIndex, nameIndex)}
                      className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      required
                    />
                    {nameIndex === skill.skilltolearn.length - 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const updatedSkills = [...skills];
                          updatedSkills[skillIndex].skilltolearn.push('');
                          setSkills(updatedSkills);
                        }}
                        className="ml-2 text-blue-600 hover:text-blue-700 focus:outline-none"
                      >
                        +
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="mb-4">
            <button
              type="button"
              onClick={addSkill}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add Skill
            </button>
          </div>
          <div>
            <button
              type="submit"
              className={`w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Adding Skills...' : 'Submit Skills'}
            </button>
          </div>
        </form>
        {submitted && (
          <div className="mt-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 ml-3">New Skills:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {newSkills.map((skill, index) => (
                  <li key={index} className="bg-white dark:bg-dark p-4 rounded-lg shadow-md">
                    {/* @ts-ignore */}
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                    {/* @ts-ignore */}
                    <p className="text-sm text-gray-700 dark:text-white">{skill.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 ml-3">Skills to Add:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {toAdd.map((skill, index) => (
                  <li key={index} className="bg-white dark:bg-dark p-4 rounded-lg shadow-md">
                    {/* @ts-ignore */}
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                    {/* @ts-ignore */}
                    <p className="text-sm text-gray-700 dark:text-white">{skill.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 ml-3">Skills to Remove:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {toRemove.map((skill, index) => (
                  <li key={index} className="bg-white dark:bg-dark p-4 rounded-lg shadow-md">
                    {/* @ts-ignore */}
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                    {/* @ts-ignore */}
                    <p className="text-sm text-gray-700 dark:text-white">{skill.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
