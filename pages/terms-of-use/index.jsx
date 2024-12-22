import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfUse() {
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
                                {t('termsOfUse.title')}
                            </h1>
                        </div>
                        <div className="space-y-6 p-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>{t('termsOfUse.welcomeMessage')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('termsOfUse.sections.acceptanceOfTerms.title')}</h2>
                            <p>{t('termsOfUse.sections.acceptanceOfTerms.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('termsOfUse.sections.useOfWebsite.title')}</h2>
                            <p>{t('termsOfUse.sections.useOfWebsite.content')}</p>
                            <ul className="list-disc list-inside">
                                {t('termsOfUse.sections.useOfWebsite.list', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h2 className="text-xl font-semibold mt-4">{t('termsOfUse.sections.intellectualProperty.title')}</h2>
                            <p>{t('termsOfUse.sections.intellectualProperty.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('termsOfUse.sections.disclaimerOfWarranties.title')}</h2>
                            <p>{t('termsOfUse.sections.disclaimerOfWarranties.content')}</p>
                            <ul className="list-disc list-inside">
                                {t('termsOfUse.sections.disclaimerOfWarranties.list', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h2 className="text-xl font-semibold mt-4">{t('termsOfUse.sections.limitationOfLiability.title')}</h2>
                            <p>{t('termsOfUse.sections.limitationOfLiability.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('termsOfUse.sections.thirdPartyLinks.title')}</h2>
                            <p>{t('termsOfUse.sections.thirdPartyLinks.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('termsOfUse.sections.modificationsToTerms.title')}</h2>
                            <p>{t('termsOfUse.sections.modificationsToTerms.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('termsOfUse.sections.governingLaw.title')}</h2>
                            <p>{t('termsOfUse.sections.governingLaw.content')}</p>

                            <h2 className="text-xl font-semibold mt-4">{t('termsOfUse.sections.contactUs.title')}</h2>
                            <p>{t('termsOfUse.sections.contactUs.content')} <br />
                                Email: <a href="mailto:bhuvibhai786@gmail.com" className="text-blue-600 underline">bhuvibhai786@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
