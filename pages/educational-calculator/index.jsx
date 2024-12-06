import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TimelineItem from '@/components/TimelineItem';
import React from 'react';
import Link from 'next/link';

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
                    <div className="mt-5 max-w-3xl mx-auto text-center">
                        <p className="text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
                            Solving simple conversions like
                            <span className="font-semibold text-gray-800 dark:text-neutral-200"> CGPA to Percentage </span>
                            using the CGPA calculator or advanced math with a
                            <span className="font-semibold text-gray-800 dark:text-neutral-200"> Scientific Calculator </span> ?
                            <Link
                                href="/"
                                className="text-blue-500 dark:text-blue-400 underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                            >
                                &nbsp; Lord Calculator &nbsp;
                            </Link>
                            will help you tackle tedious and,<br/> daunting calculations with ease. Let the finest technology supercharge your<br/> educational journey—because you deserve nothing but the
                            <span className="font-semibold text-gray-800 dark:text-neutral-200"> BEST</span>.
                        </p>
                    </div>

                </div>

                <div className="relative mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-transparent max-w-6xl z-10 mt-4 mb-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-neutral-400 mb-8">
                    Why Choose Lord Calculator?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg text-indigo-600">Blinking Fast & Super Reliable</h3>
                            <p className="text-gray-700 mt-2">
                            Yes, we have ensured both! Solve even the most complex calculations accurately within a blink of an eye. No room for errors!
                            </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg text-indigo-600">Simple & Easy</h3>
                            <p className="text-gray-700 mt-2">
                            The only complex part will be your equations. With intuitive buttons and meters, navigation here is super-easy.
                            </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg text-indigo-600">Download, Save, or Share</h3>
                            <p className="text-gray-700 mt-2">
                            Need to save solved equation? Worry not, solve once then share or save your calculations for life-long offline use.
                            </p>
                        </div>
                    </div>
                </div>

                <TimelineItem />
            </div>
            <Footer />
        </div>
    );
}
