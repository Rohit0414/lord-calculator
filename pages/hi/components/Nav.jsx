import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';



function Nav() {
    
    const router = useRouter();
    const { filter } = router.query; 
    const [filters, SetFilters] = useState(''); 

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
        <div className="flex flex-col items-center w-full mt-12 dark:bg-gray-900 px-5">
            <div className="w-full border-b mb-5"></div>

            <div className="flex justify-center">
                <div
                    onClick={() => handleNavigation('CGPA to percentage', '/educational-calculator/cgpa-to-percentage-calculator')}
                    className={`border px-4 py-2 cursor-pointer font-semibold text-center transition-all duration-300 ease-in-out ${
                        filters === 'CGPA to percentage'
                            ? 'rounded-t-sm text-[#009688] border-b-0'
                            : 'rounded-sm dark:text-white border-t-0 border-l-0 border-r-0 hover:border-[#009688] hover:text-[#009688]'
                    }`}
                >
                    CGPA to Percentage
                </div>

               
                <div
                    onClick={() => handleNavigation('Percentage to CGPA', '/educational-calculator/cgpa-to-percentage-calculator/percentage-to-cgpa-calculator')}
                    className={`border px-4 py-2 cursor-pointer font-semibold text-center transition-all duration-300 ease-in-out ${
                        filters === 'Percentage to CGPA'
                            ? 'rounded-t-sm text-[#009688] border-b-0'
                            : 'rounded-sm dark:text-white border-t-0 border-l-0 border-r-0 hover:border-[#009688] hover:text-[#009688]'
                    }`}
                >
                    Percentage To CGPA
                </div>

               
                <div
                    onClick={() => handleNavigation('GPA to CGPA', '/educational-calculator/cgpa-to-percentage-calculator/gpa-to-cgpa-calculator')}
                    className={`border px-4 py-2 cursor-pointer font-semibold text-center transition-all duration-300 ease-in-out ${
                        filters === 'GPA to CGPA'
                            ? 'rounded-t-sm text-[#009688] border-b-0'
                            : 'rounded-sm dark:text-white border-t-0 border-l-0 border-r-0 hover:border-[#009688] hover:text-[#009688]'
                    }`}
                >
                    GPA To CGPA
                </div>

               
                <div
                    onClick={() => handleNavigation('CGPA to GPA', '/educational-calculator/cgpa-to-percentage-calculator/cgpa-to-gpa-calculator')}
                    className={`border px-4 py-2 cursor-pointer font-semibold text-center transition-all duration-300 ease-in-out ${
                        filters === 'CGPA to GPA'
                            ? 'rounded-t-sm text-[#009688] border-b-0'
                            : 'rounded-sm dark:text-white border-t-0 border-l-0 border-r-0 hover:border-[#009688] hover:text-[#009688]'
                    }`}
                >
                    CGPA to GPA
                </div>
            </div>

            <div className="w-full border-b mt-5"></div>
        </div>
    );
}

export default Nav;
