import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TimelineItem from '@/components/TimelineItem';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function EducationalCalculator() {
    const { t, i18n } = useTranslation();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return <div>Loading...</div>;


    return (
        <div>
            <Head>
                <title>Lord Calculator – Free Educational Calculator</title>
                <meta name="description" content="Lord Calculator is free educational calculators which offers speed, easy interface for use. Calculate CGPA, Grade, Percentage and use scientific calculator and more for free." />
            </Head>
            <Navbar />
            <div className="relative overflow-hidden bg-[#fafafc] dark:bg-gray-800">

                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                            {t('header.title')}{' '}
                            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                                {t('header.calculator')}
                            </span>
                        </h1>
                    </div>
                    <div className="mt-5 max-w-3xl mx-auto text-center">
                        <p className="text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
                            {t('header.subtitle')}{' '}
                            <span className="font-semibold text-gray-800 dark:text-neutral-200">
                                {t('header.cgpa_to_percentage')}
                            </span>
                            {t('link.description')}{' '}
                            <Link
                                href="/"
                                className="text-blue-500 dark:text-blue-400 underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                            >
                                {t('link.text')}
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="relative mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-transparent max-w-6xl z-10 mt-4  mb-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-neutral-400 mb-8">
                        {t('choose_lord_calculator.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mb-4">
                        <div className="p-6 bg-blue-50 rounded-lg  dark:bg-gray-800  shadow-md">
                            <h3 className="font-semibold text-lg text-indigo-600">
                                {t('choose_lord_calculator.feature_1.title')}
                            </h3>
                            <p className="text-gray-700 dark:text-white mt-2">
                                {t('choose_lord_calculator.feature_1.description')}
                            </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg dark:bg-gray-800  shadow-md">
                            <h3 className="font-semibold text-lg text-indigo-600">
                                {t('choose_lord_calculator.feature_2.title')}
                            </h3>
                            <p className="text-gray-700 dark:text-white mt-2">
                                {t('choose_lord_calculator.feature_2.description')}
                            </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg dark:bg-gray-800  shadow-md">
                            <h3 className="font-semibold text-lg text-indigo-600">
                                {t('choose_lord_calculator.feature_3.title')}
                            </h3>
                            <p className="text-gray-700 dark:text-white mt-2">
                                {t('choose_lord_calculator.feature_3.description')}
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
