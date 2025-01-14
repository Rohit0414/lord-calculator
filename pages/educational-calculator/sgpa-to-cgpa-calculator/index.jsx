import React, { useState } from "react";
import { useTheme } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meter from "@/components/MeterForSgpa";

const SGPAtoCGPA = () => {
  const { theme } = useTheme();
  const [semesters, setSemesters] = useState([{ sgpa: "", credits: "" }]); // Initial state for SGPA and credits
  const [calculationMethod, setCalculationMethod] = useState("weighted"); // Default method is weighted
  const [cgpa, setCgpa] = useState(null);
  const [error, setError] = useState("");

  const addSemester = () => {
    setSemesters([...semesters, { sgpa: "", credits: "" }]);
  };

  const removeSemester = (index) => {
    setSemesters(semesters.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[index][field] = value;
    setSemesters(updatedSemesters);
  };

  const calculateCGPA = () => {
    if (semesters.some(({ sgpa, credits }) => !sgpa || (calculationMethod === "weighted" && !credits))) {
      setError("Please fill all fields.");
      return;
    }

    let cgpaValue = 0;

    if (calculationMethod === "weighted") {
      let totalCredits = 0;
      let weightedSum = 0;

      semesters.forEach(({ sgpa, credits }) => {
        totalCredits += parseFloat(credits);
        weightedSum += parseFloat(sgpa) * parseFloat(credits);
      });

      cgpaValue = weightedSum / totalCredits;
    } else if (calculationMethod === "average") {
      const totalSGPA = semesters.reduce((sum, { sgpa }) => sum + parseFloat(sgpa), 0);
      cgpaValue = totalSGPA / semesters.length;
    }

    setError("");
    setCgpa(cgpaValue.toFixed(2));
  };

  const resetCalculator = () => {
    setSemesters([{ sgpa: "", credits: "" }]);
    setCgpa(null);
    setError("");
    setCalculationMethod("weighted");
  };

  return (
    <div className={`relative transition-all bg-gradient-to-b from-[#f0f4f8] to-[#d9e2ec] dark:from-gray-900 dark:to-gray-800 ${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />
      <div className="flex justify-center mt-4 items-center min-h-screen py-10">
        <div className="w-full max-w-3xl mt-4 border rounded-md shadow-md p-6 bg-white dark:bg-gray-800 dark:border-gray-600">
          <h1 className="text-4xl mt-4 font-bold mb-4 text-center text-[#308d46] drop-shadow-lg dark:bg-teal-950 bg-transparent bg-clip-text">
            SGPA to CGPA Calculator
          </h1>

          <div className="flex gap-2 justify-center mt-4 mb-4">
            {['weighted', 'average'].map((method) => (
              <button
                key={method}
                onClick={() => setCalculationMethod(method)}
                className={`px-4 py-2 rounded ${calculationMethod === method ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
              >
                {method.charAt(0).toUpperCase() + method.slice(1)} Method
              </button>
            ))}
          </div>

          {semesters.map((semester, index) => (
            <div key={index} className="flex justify-center gap-2 mt-2">
              <input
                type="number"
                placeholder={`SGPA ${index + 1}`}
                value={semester.sgpa}
                onChange={(e) => handleInputChange(index, "sgpa", e.target.value)}
                className="p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center ml-2 dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white"
              />
              {calculationMethod === "weighted" && (
                <input
                  type="number"
                  placeholder="Credits"
                  value={semester.credits}
                  onChange={(e) => handleInputChange(index, "credits", e.target.value)}
                  className="p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center ml-2 dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white"
                />
              )}
              <button onClick={() => removeSemester(index)} className="px-2 py-1 bg-red-500 text-white rounded">✕</button>
            </div>
          ))}


          <div className="flex justify-center items-center w-full">
            <Meter
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto"
              sgpa={cgpa}
            />
          </div>



          <div className="flex justify-center gap-2 mt-4 mb-6">
            <button onClick={addSemester} className="px-4 py-2 bg-blue-500 text-white rounded">+ Add Semester</button>
            <button
              onClick={calculateCGPA}
              disabled={semesters.length === 0 || semesters.some(({ sgpa, credits }) => !sgpa || (calculationMethod === "weighted" && !credits))}
              className={`px-4 py-2 rounded ${semesters.length === 0 || semesters.some(({ sgpa, credits }) => !sgpa || (calculationMethod === "weighted" && !credits)) ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white"}`}
            >
              Calculate CGPA
            </button>
            <button onClick={resetCalculator} className="px-4 py-2 bg-red-500 text-white rounded">Reset</button>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          {cgpa && !error && (
            <div className="mt-4 flex justify-center items-center text-2xl">
              <label className="text-3xl font-bold mb-2 text-[#105045] drop-shadow-lg mt-2 dark:text-[#b3e0e6]">Calculated CGPA = </label>
              <input
                type="number"
                value={cgpa}
                readOnly
                className="px-4 py-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center ml-2 dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SGPAtoCGPA;
