import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useRef } from "react";
import { FaGlobe, FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import calculatorImage from "../public/png calci.png";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const categoryRef = useRef(null);
  const profileRef = useRef(null);
  const { t, i18n } = useTranslation();
  const { locale } = router;


  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale: language });
    setIsLanguageOpen(false)
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
      <div className="flex w-full h-[60px] z-[9999] fixed top-0 items-center px-5 justify-between bg-[#F6F5F2] dark:bg-gray-900 md:h-[70px] sm:h-[50px] sm:px-3">
        <Link href="/" className="flex items-center">
          <Image
            src={calculatorImage}
            alt="Calculator Logo"
            width={100}
            height={80}
            className="mr-2"
          />
          <span className="translate-x-[-34px] self-center text-xl sm:text-lg md:text-2xl font-bold whitespace-nowrap bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 text-transparent drop-shadow-lg">
            Lord Calculator
          </span>
        </Link>

       
        <div className="flex items-center ml-auto space-x-2">
          <form
            onSubmit={handleSearch}
            className="hidden lg:flex dark:text-white dark:bg-gray-800 items-center space-x-2 relative"
          >
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder={t("search_placeholder")}
              className="border px-2 py-1.5 rounded-l-md w-full dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="relative group px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md overflow-hidden shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            >
              <span className="absolute inset-0 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              <span className="relative flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2H6"
                  />
                </svg>
                <span>{t("search_button")}</span>
              </span>
            </button>
            {searchResults.length > 0 && searchInput && (
              <ul className="absolute top-7 right-[1.5px] bg-white dark:text-white dark:bg-gray-800 rounded-2xl shadow-lg w-full mt-2 z-10">
                {searchResults.map((result) => (
                  <li key={result.id} className="px-4 py-2 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-900">
                    <Link href={result.link} className="block">{result.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </form>

          
          <Link href="/" className="block px-4 py-2 text-black dark:text-white hover:text-[#009688]">
            {t("home")}
          </Link>

          
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
              className={`absolute mt-2 bg-[#fafafc] dark:bg-gray-700 shadow-lg rounded-md w-[240px] transition-all duration-300 ease-out ${isCategoryOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                }`}
            >
             
              <Link
                href="/educational-calculator"
                className="block px-4 py-2 text-black dark:text-white hover:text-[#009688] flex items-center space-x-2"
              >
                <Image src={image4.src} height={image4.height} width={image4.width} alt="Educational Calculator" />
                <span>{t("educational_calculator")}</span>
              </Link>
              <Link
                href="/scientific-calculator"
                className="block px-4 py-2 text-black dark:text-white hover:text-[#009688] flex items-center space-x-2"
              >
                <Image src={image1.src} height={image1.height} width={image1.width} alt="Scientific Calculator" />
                <span>{t("scientific_calculator")}</span>
              </Link>
              <Link
                href="/scientific-calculator"
                className="block px-4 py-2 text-black dark:text-white hover:text-[#009688] flex items-center space-x-2"
              >
                <Image src={image.src} height={image.height} width={image.width} alt="Women's Calculator" />
                <span>{t("womens_calculator")}</span>
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
    </nav>

  );
};

export default Navbar;
