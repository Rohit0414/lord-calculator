import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Meter from '@/components/Meter';
import Nav from '@/components/Nav';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';

const PercentageToCGPA = () => {
    const { theme } = useTheme();
    const [gradingScale, setGradingScale] = useState();
    const [multiplicationFactor, setMultiplicationFactor] = useState(); // Default factor for 10.0 scale
    const [percentage, setPercentage] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [error, setError] = useState('');
    const [history, setHistory] = useState([]);
    const resultRef = useRef(null);

    const handleScaleChange = (scale) => {
        setGradingScale(scale);
        const defaultFactors = { 10.0: 9.5, 5.0: 20.0, 4.0: 25.0 };
        setMultiplicationFactor(defaultFactors[scale]);
    };

    const convertPercentageToCGPA = () => {
        setError('');
        setCgpa('');
        const percentageValue = parseFloat(percentage);
        if (!percentageValue || isNaN(percentageValue) || percentageValue < 0 || percentageValue > 100) {
            setError('Enter a valid percentage between 0 and 100');
            return;
        }
        if (!gradingScale) {
            setError('Please select a grading scale');
            return;
        }
        const cgpaValue = (percentageValue / multiplicationFactor).toFixed(2);
        setCgpa(cgpaValue);
        setHistory((prevHistory) => [...prevHistory, { percentage: percentageValue, cgpa: cgpaValue }]);

        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const resetFields = () => {
        setPercentage('');
        setCgpa('');
        setError('');
    };

    return (
        <div className={`transition-all duration-300  bg-[#fafafc] ease-in-out ${theme === "dark" ? "dark" : "light"}`}>
            <Navbar />
            <div className="container flex-col w-full p-2 border-r-8 justify-center dark:bg-gray-800 py-4 mt-8">
                <div className="max-w-full p-5 mx-auto   text-black shadow-md rounded-lg  mt-8">
                    <h2 className="text-4xl font-bold mb-4 text-center text-[#105045] drop-shadow-lg">Percentage to CGPA Calculator</h2>

                    <div className="flex mb-4 justify-center items-center flex-col">
                        <h3 className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg mt-2">Enter Percentage</h3>
                        <input
                            type="number"
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                            placeholder="Enter Your Percentage"
                            className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center"
                        />
                    </div>

                    <div className="flex mb-4 justify-center items-center flex-col">
                        <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg">Choose Grade Scale </label>
                        <div className="flex justify-center w-1/2 mb-4 p-2">
                            <button
                                onClick={() => handleScaleChange(4.0)}
                                className={`${gradingScale === 4.0 ? 'bg-[#29582b]' : 'bg-[#105045]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b]`}
                            >
                                4.0 Scale
                            </button>
                            <button
                                onClick={() => handleScaleChange(5.0)}
                                className={`${gradingScale === 5.0 ? 'bg-[#29582b]' : 'bg-[#105045]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b]`}
                            >
                                5.0 Scale
                            </button>
                            <button
                                onClick={() => handleScaleChange(10.0)}
                                className={`${gradingScale === 10.0 ? 'bg-[#29582b]' : 'bg-[#105045]'} text-white w-3/4 py-2 rounded hover:bg-[#29582b]`}
                            >
                                10.0 Scale
                            </button>
                        </div>
                    </div>

                    <div className="flex mb-4 justify-center items-center flex-col">
                        <label className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg mt-2">Multiplication Factor</label>
                        <input
                            type="number"
                            value={multiplicationFactor}
                            onChange={(e) => setMultiplicationFactor(parseFloat(e.target.value))}
                            placeholder="Enter Multiplication Factor"
                            className="w-3/4 p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center"
                        />
                    </div>

                    {error && <div className="text-red-500 mb-2 text-center">{error}</div>}

                    <div className="flex justify-center space-x-32 mb-4">
                        <button onClick={convertPercentageToCGPA} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">Calculate</button>
                        <button onClick={resetFields} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">Reset</button>
                    </div>

                    <div ref={resultRef}>
                        <Meter percentage={cgpa ? parseFloat(cgpa) * 10 : 0} />
                        <div className="flex justify-center items-center mb-4">
                            <label className="text-3xl font-bold mb-2 text-[#105045] drop-shadow-lg mt-2">Your Calculated CGPA = </label>
                            <input type="text" value={cgpa} placeholder="CGPA:" readOnly className="w-2/5 p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center ml-2" />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="history-container mb-4 text-center w-60">
                            <b>Calculation History</b>
                            <table className="min-w-full border border-gray-300 mt-2 mx-auto">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-2">S.NO</th>
                                        <th className="border border-gray-300 p-2">Percentage</th>
                                        <th className="border border-gray-300 p-2">CGPA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history.map((entry, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 p-2 font-semibold">{index + 1}</td>
                                            <td className="border border-gray-300 p-2">{entry.percentage}</td>
                                            <td className="border border-gray-300 p-2">{entry.cgpa}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PercentageToCGPA;
