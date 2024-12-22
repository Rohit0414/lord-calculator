import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutUs() {
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
        return null;  // Wait until translations are loaded
    }

    const story = t('aboutUs.story', { returnObjects: true });

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
                                {t('aboutUs.title')}
                            </h1>
                        </div>
                        <div className="space-y-6 p-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>{t('aboutUs.description')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('aboutUs.storyTitle')}</h2>
                            <ul className="list-disc list-inside">
                                <li>{story[0]}</li>
                                <li>{story[1]}</li>
                                <li>{story[2]}</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
