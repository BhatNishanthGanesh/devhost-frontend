// utils/handleSubmit.ts
"use server"
import axios from 'axios';

const handleSubmit = async ({ name, category, positiveChecked, negativeChecked }: {
  name: string;
  category: string;
  positiveChecked: string[];
  negativeChecked: string[];
}) => {
  const feedback = [
    ...positiveChecked.map((item) => ({ name: item, score: 1 })),
    ...negativeChecked.map((item) => ({ name: item, score: -1 }))
  ];

  console.log("Name:", name);
  console.log("Selected Category:", category);
  console.log("Feedback:", feedback);

  try {
    const response = await axios.put('http://localhost:4000/skills/update', feedback);
    console.log('Feedback saved:', response.data);
    // Optionally handle success message or redirect after successful submission
  } catch (error) {
    console.error('Error saving feedback:', error);
    // Optionally handle error message or display an error to the user
  }
};

export default handleSubmit;
