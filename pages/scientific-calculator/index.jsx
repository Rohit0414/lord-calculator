import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ScientificCalculator() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [isNewNumber, setIsNewNumber] = useState(true);

  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const operators = ["÷", "×", "-", "+"];
  const scientificFunctions = [
    "sin",
    "cos",
    "tan",
    "log",
    "ln",
    "√",
    "π",
    "e",
    "x²",
    "x³",
    "x^",
    "!",
    "(",
    ")",
  ];

  const handleNumber = (num) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op) => {
    setEquation(display + op);
    setIsNewNumber(true);
  };

  const calculate = () => {
    try {
      let expr = equation + display;
      expr = expr.replace(/÷/g, "/").replace(/×/g, "*");
      expr = expr
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan");
      expr = expr.replace(/log/g, "Math.log10").replace(/ln/g, "Math.log");
      expr = expr
        .replace(/√/g, "Math.sqrt")
        .replace(/π/g, "Math.PI")
        .replace(/e/g, "Math.E");
      expr = expr
        .replace(/x²/g, "**2")
        .replace(/x³/g, "**3")
        .replace(/x\^/g, "**");
      expr = expr.replace(/(\d+)!/g, (_, n) => factorial(n));

      const result = eval(expr);
      setDisplay(result.toString());
      setEquation("");
      setIsNewNumber(true);
    } catch (error) {
      setDisplay("Error");
    }
  };

  const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
    setIsNewNumber(true);
  };

  const deleteLast = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
      setIsNewNumber(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mt-8 min-h-screen p-6">
        {/* Mobile Phone Frame */}
        <div className="relative w-[360px] h-[835px] rounded-[40px] shadow-2xl border-[8px] border-gray-800 overflow-hidden transform transition-all duration-300 hover:scale-105">
          {/* Camera Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-full"></div>

          {/* Speaker */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>

          {/* Screen */}
          <div className="mt-16 h-[calc(100%-40px)] p-4 rounded-b-[40px] bg-gradient-to-t from-gray-800 to-transparent">
            {/* Calculator Display */}
            <div className="mb-4 p-3 bg-gray-800 rounded-lg text-right shadow-lg border border-gray-700">
              <div className="text-gray-400 text-sm h-6 font-mono">
                {equation}
              </div>
              <div className="text-5xl font-bold text-emerald-400 h-16 overflow-hidden font-mono">
                {display}
              </div>
            </div>

            {/* Calculator Buttons */}
            <div className="grid grid-cols-4 gap-2 p-2">
              {/* Scientific Functions Row */}
              <div className="col-span-4 grid grid-cols-6 gap-1 mb-2">
                {scientificFunctions.map((func) => (
                  <button
                    key={func}
                    onClick={() => handleOperator(func)}
                    className="p-2 text-xs bg-gray-700 hover:bg-gray-600 text-emerald-400 rounded-lg shadow-md transition-all duration-150 transform hover:scale-110 active:scale-90"
                  >
                    {func}
                  </button>
                ))}
              </div>

              {/* Main Buttons */}
              <div className="col-span-3 grid grid-cols-3 gap-2">
                {numbers.map((num) => (
                  <button
                    key={num}
                    onClick={() => handleNumber(num)}
                    className="p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-2xl font-mono shadow-md transition-all duration-150 transform hover:scale-110 active:scale-90"
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={calculate}
                  className="col-span-2 p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-2xl font-mono shadow-md active:scale-90"
                >
                  =
                </button>
              </div>

              {/* Operators Column */}
              <div className="grid grid-cols-1 gap-2">
                {operators.map((op) => (
                  <button
                    key={op}
                    onClick={() => handleOperator(op)}
                    className="p-4 bg-gray-700 hover:bg-gray-600 text-emerald-400 rounded-lg text-2xl font-mono shadow-md transform hover:scale-110 active:scale-90"
                  >
                    {op}
                  </button>
                ))}
                <button
                  onClick={clear}
                  className="p-4 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-mono shadow-md transform hover:scale-110 active:scale-90"
                >
                  AC
                </button>
                <button
                  onClick={deleteLast}
                  className="p-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-mono shadow-md transform hover:scale-110 active:scale-90"
                >
                  DEL
                </button>
              </div>
            </div>
          </div>

          {/* Home Button */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 border-2 border-gray-700 rounded-full transform hover:scale-105">
            <div className="w-8 h-8 m-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
