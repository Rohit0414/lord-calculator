import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    const { t, i18n } = useTranslation(); 
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) {
            setIsReady(true);
        } else {
            i18n.on('initialized', () => setIsReady(true));
        }
    }, [i18n]); 

    if (!isReady) {
        return null; 
    }

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
                                {t('privacyPolicy.title')}
                            </h1>
                        </div>
                        <div className="space-y-6 p-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>{t('privacyPolicy.welcomeMessage')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('privacyPolicy.section1.title')}</h2>
                            <p>{t('privacyPolicy.section1.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('privacyPolicy.section2.title')}</h2>
                            <p>{t('privacyPolicy.section2.content')}</p>
                            <ul className="list-disc list-inside">
                                <li>{t('privacyPolicy.section2.list.deviceType')}</li>
                                <li>{t('privacyPolicy.section2.list.operatingSystem')}</li>
                                <li>{t('privacyPolicy.section2.list.visitDate')}</li>
                                <li>{t('privacyPolicy.section2.list.pagesVisited')}</li>
                            </ul>
                            <p>{t('privacyPolicy.section2.note')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('privacyPolicy.section3.title')}</h2>
                            <p>{t('privacyPolicy.section3.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('privacyPolicy.section4.title')}</h2>
                            <p>{t('privacyPolicy.section4.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('privacyPolicy.section5.title')}</h2>
                            <p>{t('privacyPolicy.section5.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('privacyPolicy.section6.title')}</h2>
                            <p>{t('privacyPolicy.section6.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('privacyPolicy.section7.title')}</h2>
                            <p>{t('privacyPolicy.section7.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('privacyPolicy.section8.title')}</h2>
                            <p>{t('privacyPolicy.section8.content')}</p>
                            <p>
                                <Link href="/">
                                    <strong>{t('privacyPolicy.section8.contactDetails.name')}</strong><br />
                                    Email: bhuvibhai786@gmail.com
                                </Link>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
