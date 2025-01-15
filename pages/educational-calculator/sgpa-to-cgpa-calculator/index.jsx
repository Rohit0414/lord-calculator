import React, { useState } from "react";
import { useTheme } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meter from "@/components/MeterForSgpa";
import { PDFDocument, rgb } from "pdf-lib"; // Added import for PDF generation

const SGPAtoCGPA = () => {
  const { theme } = useTheme();
  const [semesters, setSemesters] = useState([{ sgpa: "", credits: "" }]);
  const [calculationMethod, setCalculationMethod] = useState("weighted");
  const [cgpa, setCgpa] = useState(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

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

    setCgpa(cgpaValue.toFixed(2));
    setHistory([...history, { semesters: [...semesters], cgpa: cgpaValue.toFixed(2) }]);
    setError("");
  };

  const resetCalculator = () => {
    setSemesters([{ sgpa: "", credits: "" }]);
    setCgpa(null);
    setError("");
    setCalculationMethod("weighted");
  };

  const downloadHistoryAsPDF = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      let page = pdfDoc.addPage([600, 500]);
      const margin = 50;

      const headerText = "SGPA to CGPA Calculation History";
      const headerFontSize = 24;
      const textWidth = headerFontSize * 0.6 * headerText.length;
      const centerX = (600 - textWidth) / 2;

      page.drawText(headerText, {
        x: centerX,
        y: 450,
        size: headerFontSize,
        color: rgb(0, 0.53, 0.71),
      });

      page.drawLine({
        start: { x: margin, y: 440 },
        end: { x: 600 - margin, y: 440 },
        thickness: 1,
        color: rgb(0.8, 0.8, 0.8),
      });

      let yPosition = 420;
      history.forEach((entry, index) => {
        if (yPosition < 50) {
          page = pdfDoc.addPage([600, 500]);
          yPosition = 450;
        }

        page.drawText(`${index + 1}`, { x: margin, y: yPosition, size: 12, color: rgb(0, 0, 0) });
        page.drawText(`${entry.semesters.map(s => s.sgpa).join(", ")}`, { x: 100, y: yPosition, size: 12, color: rgb(0, 0, 0) });
        page.drawText(`${entry.cgpa}`, { x: 300, y: yPosition, size: 12, color: rgb(0, 0, 0) });
        yPosition -= 20;
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "sgpa_to_cgpa_history.pdf";
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className={`relative transition-all bg-gradient-to-b from-[#f0f4f8] to-[#d9e2ec] dark:from-gray-900 dark:to-gray-800 ${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />
      <div className="flex justify-center mt-8 items-center min-h-screen py-10">
        <div className="w-full max-w-3xl mt-4 border rounded-md shadow-md p-6 bg-white dark:bg-gray-800 dark:border-gray-600">
          <h1 className="text-4xl mt-4 font-bold mb-4 text-center text-[#308d46]">
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
                className="p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white"
              />
              {calculationMethod === "weighted" && (
                <input
                  type="number"
                  placeholder="Credits"
                  value={semester.credits}
                  onChange={(e) => handleInputChange(index, "credits", e.target.value)}
                  className="p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white"
                />
              )}
              <div>
                <button
                  onClick={() => removeSemester(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded flex items-center justify-center text-lg"
                >
                  ✕
                </button>
              </div>
            </div>

          ))}

          <div className="flex justify-center mt-4">
            <Meter sgpa={cgpa} />
          </div>
          <div className="flex justify-center mb-4 ">
            <h3 className="text-2xl  mt-4 font-bold mb-4 text-center text-[#308d46]">Your Calculated CGPA = </h3>
            <input
              type="number"
              placeholder="Calculated cgpa"
              value={cgpa}
              className="py-2 px-4 mt-3 mb-4 ml-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white"
            />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <button onClick={addSemester} className="px-4 py-2 bg-blue-500 text-white rounded">+ Add Semester</button>
            <button onClick={calculateCGPA} className="px-4 py-2 bg-green-500 text-white rounded">Calculate CGPA</button>
            <button onClick={resetCalculator} className="px-4 py-2 bg-red-500 text-white rounded">Reset</button>
            <button onClick={downloadHistoryAsPDF} className="px-4 py-2 bg-purple-500 text-white rounded">Download PDF</button>
          </div>

          <div className=" mt-4 flex justify-center">
            <div className="history-container mb-4 text-center w-full sm:w-60">
              <b>Calculation History</b>
              <table className="min-w-full border border-gray-300 mt-2 mx-auto dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 p-2 dark:border-gray-700">SNO</th>
                    <th className="border border-gray-300 p-2 dark:border-gray-700">CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((entry, index) => (
                    <tr key={index} className="dark:bg-gray-700">
                      <td className="border border-gray-300 p-2 font-semibold dark:border-gray-700">{index + 1}</td>
                      <td className="border border-gray-300 p-2 dark:border-gray-700">{entry.cgpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default SGPAtoCGPA;
