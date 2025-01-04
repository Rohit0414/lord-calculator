import Navbar from "../components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const image = {
    src: "/book-svgrepo-com.svg",
    width: 60,
    height: 70,
  };
  const image1 = {
    src: "/bulb.svg",
    width: 60,
    height: 70,
  };
  const image2 = {
    src: "/calculator.svg",
    width: 60,
    height: 70,
  };
  const image3 = {
    src: "/divide.svg",
    width: 60,
    height: 70,
  };
  const image4 = {
    src: "/teacher.svg",
    width: 60,
    height: 70,
  }

  const calculatorCards = [
    {
      title: t("tit"),
      description: t('des'),
      href: "/educational-calculator",
      backgroundColor: theme === "dark" ? "bg-[#4285f4]" : "bg-[#4285f4]",
      Image: (
        <Image
          src={image4.src}
          height={image4.height}
          width={image4.width}
          alt="image description"
        />
      ),
    },
    {
      title: t('calculatorCards.0.title'),
      description: t('calculatorCards.0.description'),
      href: "/educational-calculator/cgpa-to-percentage-calculator?filter=CGPA+to+percentage",
      backgroundColor: theme === "dark" ? "bg-[#20a971]" : "bg-[#20a971]",
      Image: (
        <Image
          src={image3.src}
          height={image3.height}
          width={image3.width}
          alt="image description"
        />
      ),
    },
    {
      title: t('calculatorCards.1.title'),
      description: t('calculatorCards.1.description'),
      href: "/educational-calculator/cgpa-to-percentage-calculator/percentage-to-cgpa-calculator?filter=Percentage+to+CGPA",
      backgroundColor: theme === "dark" ? "bg-[#4285f4]" : "bg-[#4285f4]",
      Image: (
        <Image
          src={image2.src}
          height={image2.height}
          width={image2.width}
          alt="image description"
        />
      ),
    },
    {
      title: t('calculatorCards.2.title'),
      description: t('calculatorCards.2.description'),
      href: "/educational-calculator/cgpa-to-percentage-calculator/gpa-to-cgpa-calculator?filter=GPA+to+CGPA",
      backgroundColor: theme === "dark" ? "bg-[#cf8408]" : "bg-[#cf8408]",
      Image: (
        <Image
          src={image1.src}
          height={image1.height}
          width={image1.width}
          alt="image description"
        />
      ),
    },
    {
      title: t('calculatorCards.3.title'),
      description: t('calculatorCards.3.description'),
      href: "/educational-calculator/cgpa-to-percentage-calculator/cgpa-to-gpa-calculator?filter=CGPA+to+GPA",
      backgroundColor: theme === "dark" ? "bg-[#5865f2]" : "bg-[#5865f2]",
      Image: (
        <Image
          src={image.src}
          height={image.height}
          width={image.width}
          alt="image description"
        />
      ),
    },
  ];


  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`transition-all duration-300 ease-in-out ${theme === "dark" ? "dark" : "light"}`}>
      <Head>
        <title>Lord Calculator – Free A to Z Calculators</title>
        <meta
          name="description"
          content="Lord Calculator, only platform with highly accurate A to Z calculators. Scientific calculator, CGPA to Percentage and many more with reports What’s App sharing feature"
        />
      </Head>
      <Navbar />
      <div className="relative flex flex-col justify-center items-center bg-[#fafafc] dark:bg-gray-800">
        <div className="absolute -z-51 w-full h-[400px] sm:h-[500px] lg:h-[580px] top-0">
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
      </div>
      <div className="relative h-64 py-8 mt-4 flex justify-center mx-auto dark:text-white text-center">
        <div className="text-center mt-20 p-5">
          <h1 className="block font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl dark:text-neutral-200 drop-shadow-md">
            {t('section.title')}
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              {t('section.highlightedText')}
            </span>
            {t('section.subtitle')}
          </h1>
          <p className="text-sm my-3 text-gray-500 dark:text-gray-300">
            {t('section.description')}
            <br />
            {t('section.additionalDescription')}
          </p>
        </div>
      </div>
      <div className="py-6 px-4 translate-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 justify-center text-center">
          {calculatorCards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3 relative border dark:bg-gray-800 text-white bg-white hover:scale-105 rounded-md shadow-lg transition overflow-hidden duration-300 ease-in-out p-4 cursor-pointer ${card.backgroundColor} group`}
            >
              <Link href={card.href}>
                <div className="text-left mb-2 text-4xl">{card.Image}</div>
                <div className="align-items-center text-left max-h-32 overflow-y-auto">
                  <h2 className="text-xxl font-bold mb-2 group-hover:text-white text-black dark:text-gray-100 drop-shadow-sm">
                    {card.title}
                  </h2>
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
      <div className="translate-y-5">
        <Footer />
      </div>
    </div>

  );
}
