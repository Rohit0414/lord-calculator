import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useRef } from "react";
import { FaGlobe, FaSun, FaMoon, FaUserCircle, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import calculatorImage from "../public/png calci.png";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const categoryRef = useRef(null);
  const profileRef = useRef(null);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
    console.log(`Language changed to: ${language}`);
  };

  const closeDropdowns = (event) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setIsCategoryOpen(false);
    }
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdowns);
    window.addEventListener("resize", () => {
      setIsCategoryOpen(false);
      setIsProfileOpen(false);
    });

    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
      window.removeEventListener("resize", () => {
        setIsCategoryOpen(false);
        setIsProfileOpen(false);
      });
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="dark:bg-gray-800 dark:border-gray-700 shadow-lg">
      <div className="flex w-full h-[60px] z-[9999] fixed top-0 items-center px-5 justify-between bg-[#F6F5F2] dark:bg-gray-900">
        <Link href="/" className="flex items-center">
          <Image
            src={calculatorImage}
            alt="Calculator Logo"
            width={120}
            height={120}
            className="mr-inset-4"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 text-transparent drop-shadow-lg">
            Lord Calculator
          </span>
        </Link>

        <div className="flex items-center ml-auto space-x-2">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="px-2 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#009688] transition duration-300"
            />
          </div>

          <Link href="/" className="block px-4 py-2 text-black dark:text-white hover:text-[#009688]">
            Home
          </Link>

          <div className="relative" ref={categoryRef}>
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center px-4 py-2 text-black dark:text-white hover:text-[#009688] rounded-md transition duration-300"
            >
              Categories
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <div
              className={`absolute mt-2 bg-[#fafafc] dark:bg-gray-700 shadow-lg rounded-md w-[180px] transition-all duration-300 ease-out ${isCategoryOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                }`}
            >
              <Link href="/educational-calculator" className="block px-4 py-2 text-black dark:text-white hover:text-[#009688]">
                Educational Calculator
              </Link>
              <Link href="/scientific-calculator" className="block px-4 py-2 text-black dark:text-white hover:text-[#009688]">
                Scientific Calculator
              </Link>
              <Link href="/Women's-calculator" className="block px-4 py-2 text-black dark:text-white hover:text-[#009688]">
                Women's Calculator
              </Link>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition duration-300 text-black dark:text-white"
          >
            {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center px-4 py-2 text-black dark:text-white rounded-md transition duration-300"
            >
              <FaGlobe size={20} />
            </button>
            {isLanguageOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-[420px] h-[340px] text-center">
                  <button
                    onClick={() => setIsLanguageOpen(false)}
                    className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
                  >
                    <IoClose size={24} />
                  </button>
                  <h3 className="text-lg font-bold mb-4">Select Language</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "English",
                      "Español",
                      "Français",
                      "Italiano",
                      "Deutsch",
                      "Português",
                      "বাংলা",
                      "한국어",
                      "हिन्दी",
                      "Русский",
                      "தமிழ்",
                      "മലയാളം",
                    ].map((language) => (
                      <button
                        key={language}
                        onClick={() => handleLanguageChange(language)}
                        className="text-black dark:text-white hover:text-[#009688] transition text-lg"
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="p-2 rounded-md text-black dark:text-white transition duration-300"
            >
              <FaUserCircle size={22} />
            </button>
            <div
              className={`absolute right-0 mt-2 w-[180px] bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 text-center ${isProfileOpen ? "block" : "hidden"
                }`}
            >
              <Link href="/" className="block px-4 py-2 text-black dark:text-white hover:text-[#009688]">
                Profile
              </Link>
              <Link href="/settings" className="block px-4 py-2 text-black dark:text-white hover:text-[#009688]">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
