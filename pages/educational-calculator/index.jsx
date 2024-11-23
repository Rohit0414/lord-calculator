import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TimelineItem from '@/components/TimelineItem';
import React from 'react';

export default function EducationalCalculator() {
    return (
        <div>
            <Navbar />
            <div className="relative overflow-hidden bg-[#fafafc] dark:bg-gray-800">

                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                            Educational <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Calculator</span>
                        </h1>
                    </div>
                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-600 dark:text-neutral-400">
                            Every tool you need to calculate effectively, at your fingertips—all 100% FREE and easy to use! Split, compress, convert, rotate, and more with just a few clicks.
                        </p>
                    </div>
                </div>

                <div className="relative mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-transparent max-w-6xl z-10">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-neutral-400 mb-8">
                        Why Use Our Calculators?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg text-indigo-600">User-Friendly Interface</h3>
                            <p className="text-gray-700 mt-2">
                                Our calculators are designed with a simple and intuitive interface that makes calculations easy for everyone.
                            </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg text-indigo-600">Accurate Results</h3>
                            <p className="text-gray-700 mt-2">
                                Get accurate calculations every time, helping you track your academic performance effectively.
                            </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg text-indigo-600">100% Free</h3>
                            <p className="text-gray-700 mt-2">
                                Enjoy all our tools and resources completely free of charge—no hidden fees or subscriptions!
                            </p>
                        </div>
                    </div>
                </div>

                <TimelineItem/>
            </div>
            <Footer />
        </div>
    );
}
