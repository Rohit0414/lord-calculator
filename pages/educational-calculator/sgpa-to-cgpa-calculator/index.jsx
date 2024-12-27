import { useState } from 'react';

export default function SGPAtoCGPA() {
  const [sgpa, setSgpa] = useState('');
  const [totalCredits, setTotalCredits] = useState('');
  const [cgpa, setCgpa] = useState(null);
  const [error, setError] = useState('');

  // Function to calculate CGPA from SGPA
  const calculateCGPA = () => {
    setError('');
    if (!sgpa || !totalCredits) {
      setError('Please fill in all fields.');
      return;
    }

    if (isNaN(sgpa) || isNaN(totalCredits)) {
      setError('Please enter valid numbers.');
      return;
    }

    // Assuming SGPA is calculated over total credits
    const cgpaResult = parseFloat(sgpa) * parseFloat(totalCredits);
    setCgpa(cgpaResult.toFixed(2));
  };

  return (
    <div className="mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-lg">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">SGPA to CGPA Calculator</h2>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-4">
        <label htmlFor="sgpa" className="block text-lg text-gray-700 dark:text-gray-300">Enter SGPA:</label>
        <input
          type="number"
          id="sgpa"
          value={sgpa}
          onChange={(e) => setSgpa(e.target.value)}
          className="w-full p-2 border rounded-md mt-2"
          placeholder="Enter SGPA"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="totalCredits" className="block text-lg text-gray-700 dark:text-gray-300">Total Credits:</label>
        <input
          type="number"
          id="totalCredits"
          value={totalCredits}
          onChange={(e) => setTotalCredits(e.target.value)}
          className="w-full p-2 border rounded-md mt-2"
          placeholder="Enter Total Credits"
        />
      </div>

      <div className="mb-4">
        <button
          onClick={calculateCGPA}
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Calculate CGPA
        </button>
      </div>

      {cgpa && (
        <div className="text-lg font-semibold text-green-600">
          <p>Your CGPA: {cgpa}</p>
        </div>
      )}
    </div>
  );
}
