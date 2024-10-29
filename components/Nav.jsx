import Link from "next/link";
import React from "react";

function Nav({ setCgpa, setPercentage, setError }) {
    const changeCalculator = (calculatorName) => {
        // Reset CGPA input and percentage output
        setCgpa(''); 
        setPercentage(''); 
        setError(''); 

        // Logic to switch calculator states can be added here if needed
        console.log(`Switched to calculator: ${calculatorName}`);
    };

    return (
        <nav className="bg-white shadow-sm">
            <div className="w-full mt-2 ">
                {/* Upper border that touches the edges */}
                <div className="border-t-4 border-[#105045] w-full"></div>
                <ul className="flex justify-center mt-0">
                    {/** Loop through calculator options */}
                    {[
                        { name: 'percentagetocgpa', label: 'Percentage to CGPA' },
                        { name: 'cgpatopercentage', label: 'CGPA to Percentage' },
                        { name: 'gpatocgpa', label: 'GPA to CGPA' },
                        { name: 'cgpatogpa', label: 'CGPA to GPA' },
                    ].map((calc, index) => (
                        <li key={calc.name} className="flex items-center">
                            <Link href={`/educational-calculator/cgpatopercentage/${calc.name}`}>
                                <button 
                                    onClick={() => changeCalculator(calc.name)}
                                    className="relative py-2 px-4 text-[#105045] font-bold rounded-md drop-shadow-lg transition duration-300 ease-in-out hover:bg-[#eef1f0]"
                                >
                                    {calc.label}
                                </button>
                            </Link>
                            {/* Add vertical lines between buttons */}
                            {index < 3 && (
                                <div className="h-10 w-1 bg-[#105045]"></div> // Vertical line
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
