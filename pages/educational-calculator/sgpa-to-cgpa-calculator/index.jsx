import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";
import Meter from "@/components/Meter";

const SGPAToCGPACalculator = () => {
  const [calculationMethod, setCalculationMethod] = useState("weighted");
  const [semesters, setSemesters] = useState([]);
  const [cgpa, setCGPA] = useState(null);
  const [error, setError] = useState("");
  const { theme } = useTheme();

  // Function to handle input change
  const handleInputChange = (index, field, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[index][field] = value;
    setSemesters(updatedSemesters);
  };

  // Function to add a new semester
  const addSemester = () => {
    setSemesters([...semesters, { sgpa: "", credits: "" }]);
  };

  // Function to remove a semester
  const removeSemester = (index) => {
    setSemesters(semesters.filter((_, i) => i !== index));
  };

  // Debug function to log semester data
  const logSemesters = () => {
    console.log("Semesters:", semesters);
  };

  // Function to calculate CGPA
  const calculateCGPA = () => {
    try {
      let totalCredits = 0;
      let weightedSum = 0;

      // Log inputs for debugging
      logSemesters();

      semesters.forEach(({ sgpa, credits }) => {
        // Check if SGPA and credits are valid
        if (!sgpa || !credits) {
          throw new Error("All fields must be filled out.");
        }
        totalCredits += parseFloat(credits);
        weightedSum += parseFloat(sgpa) * parseFloat(credits);
      });

      // Log total credits and weighted sum for debugging
      console.log("Total Credits:", totalCredits);
      console.log("Weighted Sum:", weightedSum);

      // Calculate CGPA based on the method
      if (calculationMethod === "weighted" && totalCredits > 0) {
        const calculatedCGPA = (weightedSum / totalCredits).toFixed(2);
        setCGPA(calculatedCGPA);
      } else if (calculationMethod === "average" && semesters.length > 0) {
        const totalSGPA = semesters.reduce((acc, { sgpa }) => acc + parseFloat(sgpa), 0);
        const calculatedCGPA = (totalSGPA / semesters.length).toFixed(2);
        setCGPA(calculatedCGPA);
      }
      setError(""); // Clear any previous errors
    } catch (err) {
      console.error("Error calculating CGPA:", err);
      setError("Invalid inputs. Please check your entries.");
      setCGPA(null); // Reset CGPA on error
    }
  };

  return (
    <div
      className={`relative min-h-screen transition-all duration-300 bg-[#fafafc] ease-in-out ${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <div className="mb-4">
        <Navbar />
      </div>
      <div className="px-6 py-8 mt-16 max-h-sc max-w-2xl translate-y-20 mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:text-white">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#308d46] drop-shadow-md dark:bg-teal-950 bg-transparent bg-clip-text">
          SGPA to CGPA Calculator
        </h1>

        <div className="mb-6 flex justify-center space-x-6">
          <button
            type="button"
            className={`px-6 py-3 text-lg rounded-lg transition-all duration-300 shadow-md ${
              calculationMethod === "weighted"
                ? "bg-blue-600 text-white scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            }`}
            onClick={() => setCalculationMethod("weighted")}
          >
            Weighted Method
          </button>
          <button
            type="button"
            className={`px-6 py-3 text-lg rounded-lg transition-all duration-300 shadow-md ${
              calculationMethod === "average"
                ? "bg-blue-600 text-white scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            }`}
            onClick={() => setCalculationMethod("average")}
          >
            Average Method
          </button>
        </div>

        {semesters.map((semester, index) => (
          <div key={index} className="flex items-center space-x-4 mb-4">
            <input
              type="number"
              placeholder={`Enter SGPA for Semester ${index + 1}`}
              value={semester.sgpa}
              onChange={(e) => handleInputChange(index, "sgpa", e.target.value)}
              className="border px-4 py-3 rounded-md w-full text-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {calculationMethod === "weighted" && (
              <input
                type="number"
                placeholder="Credit Hours"
                value={semester.credits}
                onChange={(e) =>
                  handleInputChange(index, "credits", e.target.value)
                }
                className="border px-4 py-3 rounded-md w-full text-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            <button
              type="button"
              onClick={() => removeSemester(index)}
              className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Meter Component */}
        <Meter value={cgpa ? parseFloat(cgpa) : 0} />
        <div className="flex justify-between space-x-4 mb-6">
          <button
            type="button"
            onClick={addSemester}
            className="flex-1 px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          >
            Add Semester
          </button>
          <button
            type="button"
            onClick={calculateCGPA}
            disabled={
              semesters.length === 0 ||
              semesters.some(
                ({ sgpa, credits }) =>
                  !sgpa || (!credits && calculationMethod === "weighted")
              )
            }
            className={`flex-1 px-6 py-3 rounded-lg shadow-md focus:outline-none transition-all duration-300 ${
              semesters.length === 0 ||
              semesters.some(
                ({ sgpa, credits }) =>
                  !sgpa || (!credits && calculationMethod === "weighted")
              )
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            Calculate CGPA
          </button>
        </div>
        {error && <p className="text-red-500 text-lg text-center mb-4">{error}</p>}
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default SGPAToCGPACalculator;
