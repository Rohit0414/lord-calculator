import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Translation, useTranslation } from "react-i18next";



function Nav() {

    const router = useRouter();
    const { filter } = router.query;
    const [filters, SetFilters] = useState('');
    const { t } = useTranslation();

    useEffect(() => {

        if (filter) {
            SetFilters(filter);
        }
    }, [filter]);

    const handleNavigation = (filter, path) => {
        SetFilters(filter);
        router.push({
            pathname: path,
            query: { filter },
        });
    };

    return (
        <div className="flex flex-col items-center w-full mt-8 mb-6 translate-y-6 dark:bg-gray-900 px-5">
            <div className="w-full border-b mb-5"></div>

            <div className="w-full flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div
                    onClick={() => handleNavigation('CGPA to percentage', '/educational-calculator/cgpa-to-percentage-calculator')}
                    className={`border px-4 py-2 cursor-pointer font-semibold text-center transition-all duration-300 ease-in-out w-full sm:w-auto ${filters === 'CGPA to percentage'
                            ? 'rounded-t-sm text-[#009688] border-b-0'
                            : 'rounded-sm dark:text-white border-t-0 border-l-0 border-r-0 hover:border-[#009688] hover:text-[#009688]'
                        }`}
                >
                    {t('cgpa_to_percentage')}
                </div>

                <div
                    onClick={() => handleNavigation('Percentage to CGPA', '/educational-calculator/cgpa-to-percentage-calculator/percentage-to-cgpa-calculator')}
                    className={`border px-4 py-2 cursor-pointer font-semibold text-center transition-all duration-300 ease-in-out w-full sm:w-auto ${filters === 'Percentage to CGPA'
                            ? 'rounded-t-sm text-[#009688] border-b-0'
                            : 'rounded-sm dark:text-white border-t-0 border-l-0 border-r-0 hover:border-[#009688] hover:text-[#009688]'
                        }`}
                >
                    {t('percentage_to_cgpa')}
                </div>

                <div
                    onClick={() => handleNavigation('GPA to CGPA', '/educational-calculator/cgpa-to-percentage-calculator/gpa-to-cgpa-calculator')}
                    className={`border px-4 py-2 cursor-pointer font-semibold text-center transition-all duration-300 ease-in-out w-full sm:w-auto ${filters === 'GPA to CGPA'
                            ? 'rounded-t-sm text-[#009688] border-b-0'
                            : 'rounded-sm dark:text-white border-t-0 border-l-0 border-r-0 hover:border-[#009688] hover:text-[#009688]'
                        }`}
                >
                    {t('gpa_to_cgpa')}
                </div>

                <div
                    onClick={() => handleNavigation('CGPA to GPA', '/educational-calculator/cgpa-to-percentage-calculator/cgpa-to-gpa-calculator')}
                    className={`border px-4 py-2 cursor-pointer font-semibold text-center transition-all duration-300 ease-in-out w-full sm:w-auto ${filters === 'CGPA to GPA'
                            ? 'rounded-t-sm text-[#009688] border-b-0'
                            : 'rounded-sm dark:text-white border-t-0 border-l-0 border-r-0 hover:border-[#009688] hover:text-[#009688]'
                        }`}
                >
                    {t('cgpa_to_gpa')}
                </div>
            </div>

            <div className="w-full border-b mt-5"></div>
        </div>

    );
}

export default Nav;
