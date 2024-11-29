import Navbar from "../components/Navbar";
import React from "react";
import { FcCalculator } from "react-icons/fc";
import Footer from "@/components/Footer";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { ImCalculator } from "react-icons/im";

export default function Home() {
  const { theme } = useTheme();
  const calculatorCards = [
    {

      title: "Educational Calculator",
      description: "Easily access a variety of educational calculators for learning and homework.",
      backgroundColor: theme === "dark" ? "bg-[#4285f4]" : "bg-[#4285f4]",
      href: "/educational-calculator",
      emoji: "🧑‍🏫", 
    },
    {
      title: "CGPA To Percentage Calculator",
      description: "Calculate your CGPA effortlessly with accurate results.",
      backgroundColor: theme === "dark" ? "bg-[#20a971]" : "bg-[#20a971]",
      href: "/educational-calculator/cgpa-to-percentage-calculator?filter=CGPA+to+percentage",
      emoji: "➗",
    },
    {
      title: "Percentage to CGPA Calculator",
      description: "Easily access a variety of educational calculators for learning and homework.",
      backgroundColor: theme === "dark" ? "bg-[#4285f4]" : "bg-[#4285f4]",
      href: "/educational-calculator/cgpa-to-percentage-calculator/percentage-to-cgpa-calculator?filter=Percentage+to+CGPA",
      emoji: "🔢",
    },
    {
      title: "GPA to CGPA Calculator",
      description: "Simplify complex calculations in seconds.",
      backgroundColor: theme === "dark" ? "bg-[#cf8408]" : "bg-[#cf8408]",
      href: "/educational-calculator/cgpa-to-percentage-calculator/gpa-to-cgpa-calculator?filter=GPA+to+CGPA",
      emoji: "💡",
    },
    {
      title: "CGPA to GPA Calculator",
      description: "Quickly calculate your GPA from CGPA values.",
      backgroundColor: theme === "dark" ? "bg-[#5865f2]" : "bg-[#5865f2]",
      href: "/educational-calculator/cgpa-to-percentage-calculator/cgpa-to-gpa-calculator?filter=CGPA+to+GPA",
      emoji: "📚",
    },
  ];


  return (
    <div className={`transition-all duration-300 ease-in-out ${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />
      <div className="relative flex flex-col justify-center items-center bg-[#fafafc] dark:bg-gray-800">
        <div className="absolute -z-51 w-full h-[500px] md:h-[500px] lg:h-[580px] top-0">
          <svg
            className="w-full h-full dark:hidden"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>


            <path
              d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,202.7C672,224,768,256,864,266.7C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
              fill="url(#waveGradient)"
              opacity="0.5"
            />


            <path
              d="M0,288L48,266.7C96,245,192,203,288,176C384,149,480,139,576,144C672,149,768,171,864,165.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
              fill="url(#waveGradient)"
              opacity="0.2"
            />
          </svg>
        </div>



        <div className="relative h-64 p-8 mt-4 flex justify-center mx-auto dark:text-white">
          <div className="text-center mt-20 p-5">
            <h1 className="block font-bold text-gray-800 text-3xl md:text-3xl lg:text-3xl dark:text-neutral-200 drop-shadow-md">
              Every tool you need to work
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> Calculator&nbsp;</span>
              with in one place
            </h1>
            <p className="text-sm my-3 text-gray-500 dark:text-gray-300">
              Every tool you need to use Calculator, at your fingertips. All are 100% FREE and easy to use! Merge,<br />
              split, compress, convert, rotate, unlock, and watermark Calculator with just a few clicks.
            </p>
          </div>
        </div>

        <div className="p-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 justify-center text-center">
            {calculatorCards.map((card, index) => (
              <div
                key={index}
                className={`flex flex-col gap-3 relative border dark:bg-gray-800 text-white bg-white hover:scale-105 rounded-md shadow-lg transition overflow-hidden duration-300 ease-in-out p-5 cursor-pointer ${card.backgroundColor} group`}
              >
                <div className=" text-left text-4xl mb-2">{card.emoji}</div>
                <Link href={card.href}>
                  <div className="align-items-center text-left">
                    <h3 className="text-xl font-bold group-hover:text-white text-black dark:text-gray-100 drop-shadow-sm">
                      {card.title}
                    </h3>
                    <p className="text-sm group-hover:text-white text-gray-500 dark:text-gray-100 drop-shadow-sm">
                      {card.description}
                    </p>
                  </div>
                </Link>
                <div className={`absolute left-0 top-0 -z-50 h-full w-full origin-top-left scale-y-0 ${card.backgroundColor} group-hover:scale-y-100 duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
