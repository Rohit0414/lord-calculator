import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { FaGlobeAsia } from "react-icons/fa";
import Nav from "./Nav";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
    console.log(`Language changed to: ${language}`);
  };

  return (
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
      <div className="flex w-full h-[60px] z-[9999] fixed top-0 items-center px-5 justify-between bg-[#F6F5F2] dark:bg-gray-900">
       
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-tl from-blue-700 to-gray-600 text-transparent bg-clip-text drop-shadow-lg mr-12">
            Lord Calculator
          </span>
        </Link>

     
        <div className="flex items-center ml-auto space-x-4">
          <div className="flex items-center ml-auto space-x-2">
            <Link href='/' className="block px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688]">Home</Link>
            
            <Link href='/educational-calculator/' className="block px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688]">Educational Calculator</Link> 
            </div>
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center px-4 py-2 text-black dark:text-white  dark:bg-gray-700  hover:bg-transparent hover:text-[#009688] rounded-md transition duration-300"
            >
              Categories
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  isCategoryOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute mt-2 bg-[#fafafc] dark:bg-gray-700 shadow-lg rounded-md w-[180px] transition-transform duration-300 ease-out ${
                isCategoryOpen ? "transform scale-100 opacity-100" : "transform scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <Link href="/educational-calculator/percentage-to-cgpa-calculator/" className="block px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688]">
                Percentage to CGPA
              </Link>
              <Link href="/educational-calculator/cgpa-to-percentage-calculator/" className="block px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688]">
               CGPA to Percentage
              </Link>
              <Link href="/educational-calculator/gpa-to-cgpa-calculator/" className="block px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688]">
                GPA to CGPA
              </Link>
              <Link href="/educational-calculator/cgpa-to-gpa-calculator/" className="block px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688]">
                 CGPA to GPA
              </Link>
            </div>
          </div>

          
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center px-4 py-2 text-black dark:text-white  dark:bg-gray-700 rounded-md transition duration-300"
            >
              <FaGlobeAsia size={20} />
            </button>

            {isLanguageOpen && ( 
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[300px] text-center">
                  <h3 className="text-lg font-bold mb-4">Select Language</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => handleLanguageChange("English")}
                        className="w-full text-lg px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688] transition"
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLanguageChange("Spanish")}
                        className="w-full text-lg px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688] transition"
                      >
                        Spanish
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLanguageChange("French")}
                        className="w-full text-lg px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688] transition"
                      >
                        French
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLanguageChange("German")}
                        className="w-full text-lg px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688] transition"
                      >
                        German
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLanguageChange("Chinese")}
                        className="w-full text-lg px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688] transition"
                      >
                        Chinese
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLanguageChange("Japanese")}
                        className="w-full text-lg px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688] transition"
                      >
                        Japanese
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLanguageChange("Hindi")}
                        className="w-full text-lg px-4 py-2 text-black dark:text-white hover:bg-transparent hover:text-[#009688] transition"
                      >
                        Hindi
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md  dark:bg-gray-700 transition duration-300 hover:bg-[#009688]"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
     
    </nav>
  );
};

export default Navbar;
