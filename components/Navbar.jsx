import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useRef } from "react";
import { FaGlobe, FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import calculatorImage from "../public/png calci.png";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const categoryRef = useRef(null);
  const profileRef = useRef(null);
  const { t } = useTranslation();


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

  useEffect(() => {
    if (searchInput.trim()) {
      const results = [
        { id: 1, title: "CGPA to Percentage Calculator", link: "/educational-calculator/cgpa-to-percentage-calculator?filter=CGPA+to+percentage" },
        { id: 2, title: "Percentage to CGPA Calculator", link: "/educational-calculator/cgpa-to-percentage-calculator/percentage-to-cgpa-calculator?filter=Percentage+to+CGPA" },
        { id: 3, title: "Scientific Calculator", link: "/educational-calculator/scientific-calculator" },
        { id: 4, title: "Educational Calculator", link: "/educational-calculator/" },
        { id: 5, title: "Lord calulator,Home", link: "/" },
        { id: 6, title: "Privacy policy", link: "/privacy-policy" },
        { id: 7, title: "Terms of use", link: "/terms-of-use" },
        { id: 8, title: "About us", link: "/about-us" },
        { id: 9, title: "GPA to CGPA Calculator", link: "/educational-calculator/cgpa-to-percentage-calculator/gpa-to-cgpa-calculator?filter=GPA+to+CGPA" },
        { id: 10, title: "CGPA to GPA Calculator", link: "/educational-calculator/cgpa-to-percentage-calculator/cgpa-to-gpa-calculator?filter=CGPA+to+GPA" }
      ].filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchInput)}`);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <nav className="dark:bg-gray-800 dark:border-gray-700 shadow-lg">
      <div className="flex w-full h-[60px] z-[9999] fixed top-0 items-center px-5 justify-between bg-[#F6F5F2] dark:bg-gray-900">
    
        <Link href="/" className="flex items-center">
          <Image
            src={calculatorImage}
            alt="Calculator Logo"
            width={100}
            height={80}
            className="mr-2"
          />
          <span className=" translate-x-[-34px] self-center text-2xl font-bold whitespace-nowrap bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 text-transparent drop-shadow-lg">
            Lord Calculator
          </span>
        </Link>

        <div className="flex items-center ml-auto space-x-2">
        
          <form onSubmit={handleSearch} className="flex dark:text-white dark:bg-gray-800 items-center space-x-2 relative">
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder="Search..."
              className="border px-3 py-1 rounded-l-md w-full dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600"
            >
              Search
            </button>

          
            {searchResults.length > 0 && searchInput && (
              <ul className="absolute top-7 right-[1.5px] bg-white dark:text-white dark:bg-gray-800 rounded-2xl  shadow-lg w-full mt-2 z-10">
                {searchResults.map((result) => (
                  <li key={result.id} className="px-4 py-2 rounded-2xl hover:bg-gray-200 dark:hover:[#000]">
                    <Link href={result.link} className="block">{result.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </form>



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
              <Link href="/womens-calculator" className="block px-4 py-2 text-black dark:text-white hover:text-[#009688]">
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
                <h3 className="text-lg font-bold mb-4">{t("navbar.selectLanguage")}</h3> 
                <div className="grid grid-cols-2 gap-3">
                  {['English', 'Español', 'Français', 'Italiano', 'Deutsch', 'Português', 'বাংলা', '한국어', 'हिन्दी', 'Русский', 'தமிழ்', 'മലയാളം'].map((language) => (
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
