import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <div className="flex-grow flex flex-col justify-center bg-gradient-to-b from-[#f0f4fc] to-[#e2e8f0] dark:from-gray-900 dark:to-gray-800 py-4 relative overflow-hidden">
               
                <svg
                    className="absolute inset-0 h-full w-full -z-51 dark:hidden"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    fill="currentColor"
                >
                    <circle cx="10" cy="30" r="20" opacity="0.2" />
                    <circle cx="80" cy="80" r="30" opacity="0.1" />
                </svg>

                <main className="relative p-5 w-full max-w-3xl mx-auto z-10">
                    <div className="text-center py-4">
                        <div className="mb-2 p-5 mt-4">
                            <h1 className="text-5xl cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 drop-shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                                About Us
                            </h1>
                        </div>
                        <div className="space-y-6 p-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>
                                Hi, calculation lovers! I'm a software developer, father, husband, and son—if you call me a family man, it would be perfect. The main motivation behind developing Lord Calculator comes from real-life experiences.
                            </p>
                            <p>
                                Since school, I struggled with mathematics calculations, and even after graduation, this remained a challenge. I often relied on online tools for calculations. After completing my degree in Computer Science, I was inspired to create this project, which you now see in front of you.
                            </p>
                            <p>
                                I’ve developed (and continue to develop) calculators that are genuinely useful to people. I hope you enjoy my work and help others by sharing these calculators with friends, colleagues, and students. Thank you very much for choosing my website.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
