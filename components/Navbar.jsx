import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useRef } from "react";
import { FaGlobe, FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import calculatorImage from "../public/png calci.png";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from "react-icons/fa";




const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const categoryRef = useRef(null);
  const profileRef = useRef(null);
  const { t, i18n } = useTranslation();
  const { locale } = router;
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale: language });
    setIsLanguageOpen(false);
  };
  const closeDropdowns = (event) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setIsCategoryOpen(false);
    }
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsProfileOpen(false);
    }
  };

  const image4 = {
    src: "/teacher.svg",
    width: 20,
    height: 20,
  };
  const image1 = {
    src: "/testtube.svg",
    width: 20,
    height: 20,
  };
  const image = {
    src: "/women.svg",
    width: 20,
    height: 20,
  }

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
        { id: 5, title: "Lord Calculator, Home", link: "/" },
        { id: 6, title: "Privacy policy", link: "/privacy-policy" },
        { id: 7, title: "Terms of use", link: "/terms-of-use" },
        { id: 8, title: "About us", link: "/about-us" },
        { id: 9, title: "GPA to CGPA Calculator", link: "/educational-calculator/cgpa-to-percentage-calculator/gpa-to-cgpa-calculator?filter=GPA+to+CGPA" },
        { id: 10, title: "CGPA to GPA Calculator", link: "/educational-calculator/cgpa-to-percentage-calculator/cgpa-to-gpa-calculator?filter=CGPA+to+GPA" },
        { id: 11, title: "Home", link: "/" },
        { id: 12, title: "sgpa to cgpa calculator", link: "/educational-calculator/sgpa-to"}
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
  
    if (searchInput.trim() && searchResults.length > 0) {
      const result = searchResults[0]; 
      router.push(result.link);
    } else {
      alert("No results found. Please try a different search term.");
    }
  };
  
  // Handle input change
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <nav className="dark:bg-gray-800 dark:border-gray-700 shadow-md fixed top-0 w-full z-[9999]">
      <div className="flex h-[60px] items-center px-5 justify-between bg-[#F6F5F2] dark:bg-gray-900 md:h-[70px] sm:h-[50px] sm:px-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={calculatorImage}
            alt="Calculator Logo"
            width={100}
            height={80}

          />
          <span className="translate-x-[-34px] self-center text-xl sm:text-lg md:text-2xl font-bold whitespace-nowrap bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 text-transparent drop-shadow-lg">
            Lord Calculator
          </span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        >
          <FaBars className="text-black dark:text-white" size={20} />
        </button>

        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
              className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-[9997] transition-opacity duration-300 ease-in-out"
              aria-hidden="true"
            />

            {/* Menu */}
            <div
              className={`fixed top-0 right-0 h-full w-[70%] bg-gradient-to-r from-[#8e8ece] to-[#e2e2e2] dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 shadow-lg z-[9998] transform transition-all duration-500 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
                } md:relative md:w-auto md:translate-x-0 md:opacity-100 md:pointer-events-auto lg:relative lg:w-auto lg:opacity-100`}
              aria-hidden={!isMenuOpen}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            >
              {/* Close Menu Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 bg-gradient-to-r md:hidden lg:hidden from-blue-500 to-purple-600 rounded-full text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ease-in-out"
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </button>

              {/* Menu Content */}
              <div className="md:hidden flex flex-col px-2 mt-12 py-4">
                <form onSubmit={handleSearch} className="flex items-center space-x-4 py-4 px-4  dark:bg-gray-800 rounded-lg shadow-lg max-w-lg mx-auto transition-all duration-300">
                  <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    placeholder={t("search_placeholder")}
                    className="border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-md w-full dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    disabled={searchResults.length === 0}
                    className={`p-2 rounded-lg ${
                      searchResults.length > 0 ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3a8 8 0 111.714 15.672l5.39 5.39a1 1 0 11-1.414 1.414l-5.39-5.39A7.963 7.963 0 0111 19a8 8 0 110-16z"
                      />
                    </svg>
                  </button>
                </form>

                {searchResults.length > 0 && (
                  <ul className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto p-4">
                    {searchResults.map((result) => (
                      <li key={result.id} className="mb-4">
                        <a href={result.link} className="text-lg text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-300">
                          {result.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}




                <Link href="/" className="block px-6 py-4 text-black dark:text-white hover:text-[#009688]">
                  {t("home")}
                </Link>

                <div className="relative" ref={categoryRef}>
                  <button
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="flex items-center px-6 py-4 text-black dark:text-white hover:text-[#009688] rounded-md transition duration-300"
                  >
                    {t("categories")}
                    <FaChevronDown
                      className={`ml-2 transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  </button>
                  <div
                    className={`absolute  bg-[#fafafc] dark:bg-gray-700 shadow-lg rounded-md w-[240px] transition-all duration-300 ease-out ${isCategoryOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                      }`}
                  >
                    <Link
                      href="/educational-calculator"
                      className="flex items-center gap-2 px-6 py-4 text-black dark:text-white hover:text-[#009688]"
                    >
                      <Image src={image4.src} height={24} width={24} alt="image description" />
                      <span className="text-sm md:text-base">{t("educational_calculator")}</span>
                    </Link>

                    <Link
                      href="/scientific-calculator"
                      className="flex items-center gap-2 px-6 py-4 text-black dark:text-white hover:text-[#009688]"
                    >
                      <Image src={image1.src} height={24} width={24} alt="image description" />
                      <span className="text-sm md:text-base">{t("scientific_calculator")}</span>
                    </Link>

                    <Link
                      href="/womens-calculator"
                      className="flex items-center gap-2 px-6 py-4 text-black dark:text-white hover:text-[#009688]"
                    >
                      <Image src={image.src} height={24} width={24} alt="image description" />
                      <span className="text-sm md:text-base">{t("womens_calculator")}</span>
                    </Link>
                  </div>
                </div>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className=" py-2 px-6 rounded-md transition duration-300 text-black dark:text-white"
                >
                  {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
                <div className="py-2 px-2 ">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="flex items-center px-4 py-2 text-black dark:text-white rounded-md transition duration-300"
                  >
                    <FaGlobe size={20} />
                    <span className="ml-2">{selectedLanguage}</span>
                  </button>
                  {isLanguageOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
                      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-[90%] max-w-md text-center">
                        <button
                          onClick={() => setIsLanguageOpen(false)}
                          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
                        >
                          <IoClose size={24} />
                        </button>
                        <h3 className="text-lg font-bold mb-4">{t('navbar.selectLanguage')}</h3>
                        <div className="grid grid-cols-1 gap-2 text-[15px]">
                          {[
                            { code: 'en', name: 'English' },
                            { code: 'es', name: 'Español' },
                            { code: 'fr', name: 'Français' },
                            { code: 'it', name: 'Italiano' },
                            { code: 'de', name: 'Deutsch' },
                            { code: 'pt', name: 'Português' },
                            { code: 'bn', name: 'বাংলা' },
                            { code: 'ko', name: '한국어' },
                            { code: 'hi', name: 'हिन्दी' },
                            { code: 'ru', name: 'Русский' },
                          ].map(({ code, name }) => (
                            <div
                              key={code}
                              className="cursor-pointer flex justify-between items-center border-b border-gray-300 py-2 px-4"
                              onClick={() => handleLanguageChange(code)}
                            >
                              {name}
                              {i18n.language === code && (
                                <div>
                                  <svg
                                    width="20"
                                    height="14"
                                    viewBox="0 0 20 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                                      className="fill-black dark:fill-white"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </>
        )}

        {/* Desktop Menu */}
        <div className={`flex-col md:flex-row md:flex ${isMenuOpen ? "flex" : "hidden"} md:items-center space-y-2 md:space-y-0 md:space-x-4`}>
          {/* Search */}
          <div className="relative">
            <form
              onSubmit={handleSearch}
              className="flex items-center space-x-2 py-2 px-4 dark:bg-gray-800 rounded-lg max-w-4xl mx-auto transition-all duration-300"
            >
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder={t("search_placeholder")}
                className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg w-full dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#009688] transition-all duration-300 text-md"
              />
              <button
                type="submit"
                className={`p-2 rounded-lg ${
                  searchResults.length > 0 ? "bg-[#009688] hover:bg-blue-600 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                } focus:outline-none focus:ring-2 focus:ring-[#009688] transition-all duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3a8 8 0 111.714 15.672l5.39 5.39a1 1 0 11-1.414 1.414l-5.39-5.39A7.963 7.963 0 0111 19a8 8 0 110-16z"
                  />
                </svg>
              </button>
            </form>

            {searchResults.length > 0 && (
              <ul className="mt-2 ml-2 bg-white absolute dark:bg-gray-800 rounded-lg shadow-md max-w-4xl mx-auto p-4 space-y-6">
                {searchResults.map((result) => (
                  <li key={result.id}>
                    <a
                      href={result.link}
                      className="text-md text-black hover:text-[#009688] dark:text-white dark:hover:text-blue-300 transition-all duration-300"
                    >
                      {result.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>



          {/* Links */}
          <Link href="/" className="block px-4 py-2 text-black dark:text-white hover:text-[#009688]">
            {t("home")}
          </Link>

          {/* Categories Dropdown */}
          <div className="relative" ref={categoryRef}>
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center px-4 py-2 text-black dark:text-white hover:text-[#009688] rounded-md transition duration-300"
            >
              {t("categories")}
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <div
              className={`absolute mt-4 bg-[#fafafc] dark:bg-gray-700 shadow-lg rounded-md w-[240px] transition-all duration-300 ease-out ${isCategoryOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                }`}
            >
              <Link href="/educational-calculator" className="flex items-center gap-2 px-4 py-2 text-black dark:text-white hover:text-[#009688]">
                <Image
                  src={image4.src}
                  height={24} // Adjust icon size
                  width={24}
                  alt="image description"
                />
                <span className="text-sm md:text-base">{t("educational_calculator")}</span>
              </Link>

              <Link href="/scientific-calculator" className="flex items-center gap-2 px-4 py-2 text-black dark:text-white hover:text-[#009688]">
                <Image
                  src={image1.src}
                  height={24} // Adjust icon size
                  width={24}
                  alt="image description"
                />
                <span className="text-sm md:text-base">{t("scientific_calculator")}</span>
              </Link>

              <Link href="/womens-calculator" className="flex items-center gap-2 px-4 py-2 text-black dark:text-white hover:text-[#009688]">
                <Image
                  src={image.src}
                  height={24} // Adjust icon size
                  width={24}
                  alt="image description"
                />
                <span className="text-sm md:text-base">{t("womens_calculator")}</span>
              </Link>

            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition duration-300 text-black dark:text-white"
          >
            {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <div className="relative hidden lg:flex">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center px-4 py-2 text-black dark:text-white rounded-md transition duration-300"
            >
              <FaGlobe size={20} />
              <span className="ml-2">{selectedLanguage}</span>
            </button>
            {isLanguageOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-[550px] h-[450px] text-center">
                  <button
                    onClick={() => setIsLanguageOpen(false)}
                    className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
                  >
                    <IoClose size={24} />
                  </button>
                  <h3 className="text-lg font-bold mb-4">{t('navbar.selectLanguage')}</h3>
                  <div class="grid grid-cols-2 gap-4 text-[15px]">
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 false text-left"
                      onClick={() => { handleLanguageChange('en') }}
                    >
                      English
                      {
                        i18n.language === 'en' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }

                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('es') }}
                    >
                      Español
                      {
                        i18n.language === 'es' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('fr') }}
                    >
                      Français
                      {
                        i18n.language === 'fr' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('it') }}
                    >
                      Italiano
                      {
                        i18n.language === 'it' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('de') }}
                    >
                      Deutsch
                      {
                        i18n.language === 'de' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('pt') }}
                    >
                      Português
                      {
                        i18n.language === 'pt' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('bn') }}
                    >
                      বাংলা
                      {
                        i18n.language === 'bn' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('ko') }}
                    >
                      한국어
                      {
                        i18n.language === 'ko' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('hi') }}
                    >
                      हिन्दी
                      {
                        i18n.language === 'hi' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('ru') }}
                    >
                      Русский
                      {
                        i18n.language === 'ru' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('ta') }}
                    >
                      தமிழ்
                      {
                        i18n.language === 'ta' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('ml') }}
                    >
                      മലയാളം
                      {
                        i18n.language === 'ml' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('ja') }}
                    >
                      日本語
                      {
                        i18n.language === 'ja' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                    <div
                      class="cursor-pointer flex justify-between items-center border-b border-b-[#E0E0E0] py-2 pl-2 pr-16 false text-left"
                      onClick={() => { handleLanguageChange('ar') }}
                    >
                      Arabic
                      {
                        i18n.language === 'ja' &&
                        <div class="ml-16">
                          <svg
                            width="20"
                            height="14"
                            viewBox="0 0 20 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20 0.998386L7.22492 14L0 6.64696L0.980991 5.64858L7.22492 12.0032L19.019 0L20 0.998386Z"
                              class="fill-black dark:fill-white"
                            ></path>
                          </svg>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav >

  );
};

export default Navbar;


