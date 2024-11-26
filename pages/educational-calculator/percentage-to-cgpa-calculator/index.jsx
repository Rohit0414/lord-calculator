
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Meter from '@/components/Meter';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Router, { useRouter } from 'next/router';
import { PDFDocument, rgb } from 'pdf-lib';
import Link from 'next/link';
import PercentageContent from '@/components/PercentageContent';


const Percentagetocgpa = () => {
    const { theme } = useTheme();
    const [gradingScale, setGradingScale] = useState();
    const [multiplicationFactor, setMultiplicationFactor] = useState();
    const [percentage, setPercentage] = useState();
    const [cgpa, setCgpa] = useState();
    const [error, setError] = useState('');
    const [history, setHistory] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const resultRef = useRef(null);
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleScaleChange = (scale) => {
        setGradingScale(scale);
        const defaultFactors = { 10.0: 9.5, 5.0: 20.0, 4.0: 25.0 };
        setMultiplicationFactor(defaultFactors[scale]);
    };

    const convertPercentageToCGPA = () => {
        const percentageValue = parseFloat(percentage);
        if (isNaN(percentageValue) || percentageValue < 0 || percentageValue > 100) {
            setError('Enter a valid percentage');
            return;
        }
        const cgpaValue = percentageValue / multiplicationFactor;
        setCgpa(`${cgpaValue.toFixed(2)}`);
        setHistory((prevHistory) => [...prevHistory, { percentage: percentageValue, cgpa: cgpaValue }]);
        setError('');

        router.push({
            pathname: router.pathname,
            query: {
                percentage: percentageValue,
                gradingscale: gradingScale,
                factor: multiplicationFactor,
            },
        }, undefined, { shallow: true });

        if (isDownloading) return;
        setIsDownloading(true);
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const resetFields = () => {
        setPercentage('');
        setCgpa('');
        setError('');
    };

    useEffect(() => {
        if (!isClient) return;
        const { query } = router;
        const generateAndDownloadPDF = async () => {
            if (isDownloading) return;
            setIsDownloading(true);
            try {
                const pdfDoc = await PDFDocument.create();
                const page = pdfDoc.addPage([600, 400]);
                if (query.percentage && query.gradingscale && query.factor) {
                    setPercentage(query.percentage);
                    document.getElementById('percentage').value = parseFloat(query.percentage);
                    handleScaleChange(query.gradingscale);
                    setMultiplicationFactor(query.factor);

                    const cgpaValue = query.percentage / query.factor;
                    const cgpaFormatted = `${cgpaValue.toFixed(2)}`;
                    const his = [...history, { percentage: query.percentage, cgpa: cgpaFormatted }];
                    page.drawText('Calculation History', { x: 50, y: 350, size: 24, color: rgb(0, 0.53, 0.71) });
                    page.drawText(`${1}: Percentage: ${query.percentage}, CGPA: ${cgpaFormatted}`, { x: 50, y: 330 });

                    const pdfBytes = await pdfDoc.save();
                    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'calculation_history.pdf';
                    link.click();
                    URL.revokeObjectURL(link.href);
                }
            } catch (error) {
                console.error('Error creating or downloading the PDF:', error);
            } finally {
                setIsDownloading(false);
            }
        };

        if (Object.keys(query).length > 0) {
            generateAndDownloadPDF();
        }
    }, [isClient, router.query, history]);

    const handleCopyLink = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((err) => {
                console.error('Failed to copy link: ', err);
            });
    };

    const downloadHistoryAsPDF = async () => {
        try {
            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage([600, 400]);
            page.drawText('Calculation History', { x: 50, y: 350, size: 24, color: rgb(0, 0.53, 0.71) });
            history.forEach((entry, index) => {
                page.drawText(
                    `${index + 1}. Percentage: ${entry.percentage.toFixed(2)}%, CGPA: ${entry.cgpa}`,
                    { x: 50, y: 330 - index * 20 }
                );
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'calculation_history.pdf';
            link.click();
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    const shareOnWhatsApp = () => {
        const currentURL = window.location.href;
        const message = `Check out my CGPA calculation: CGPA: ${cgpa}, Percentage: ${percentage}. You can view it here: ${currentURL}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (!isClient) return null;


    return (
        <div className={`transition-all duration-300 bg-[#fafafc] ease-in-out ${theme === "dark" ? "dark" : "light"}`}>
            <Navbar />
            <Nav />
            <div className="container  max-h-full flex-col w-full border-r-8 justify-center dark:bg-gray-800 ">
                <div className="w-full flex flex-col items-center p-4 bg-white dark:bg-gray-800 dark:text-white">
                    <div className="flex  w-full">

                        <div className=" p-5 mx-auto text-black  w-full">
                            <h2 className="text-4xl font-bold mb-4 text-center text-[#308d46] bg-clip-text bg-transparent dark:bg-teal-950 drop-shadow-lg">Percentage to CGPA Calculator</h2>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg mt-2 dark:text-[#b3e0e6]">Enter Percentage</h3>
                                <input
                                    id="percentage"
                                    type="number"
                                    value={percentage}
                                    onChange={(e) => setPercentage(e.target.value)}
                                    placeholder="Enter Your Percentage"
                                    className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] dark:bg-[#3a4a52] dark:border-[#7d8d95] rounded text-center"
                                />
                            </div>

                            <div className="flex justify-center items-center flex-col mb-4">
                                <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">Choose Grade Scale</label>
                                <div className="flex justify-center w-1/2 mb-4 p-2">
                                    <button
                                        onClick={() => handleScaleChange(4.0)}
                                        className={`${gradingScale === 4.0 ? 'bg-[#29582b]' : 'bg-[#105045] dark:bg-[#4f5b56]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]`}
                                    >
                                        4.0 Scale
                                    </button>
                                    <button
                                        onClick={() => handleScaleChange(5.0)}
                                        className={`${gradingScale === 5.0 ? 'bg-[#29582b]' : 'bg-[#105045] dark:bg-[#4f5b56]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]`}
                                    >
                                        5.0 Scale
                                    </button>
                                    <button
                                        onClick={() => handleScaleChange(10.0)}
                                        className={`${gradingScale === 10.0 ? 'bg-[#29582b]' : 'bg-[#105045] dark:bg-[#4f5b56]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]`}
                                    >
                                        10.0 Scale
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center items-center flex-col mb-4">
                                <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">Set Multiplication Factor</label>
                                <input
                                    type="number"
                                    value={multiplicationFactor}
                                    onChange={(e) => setMultiplicationFactor(e.target.value)}
                                    placeholder="Enter a factor"
                                    className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center dark:bg-[#3a4a52] dark:border-[#7d8d95]"
                                />
                            </div>

                            <div className="flex justify-center space-x-32 mb-4">
                                <button onClick={convertPercentageToCGPA} className="bg-[#105045] dark:bg-[#4f5b56] text-white w-32 py-2 rounded hover:bg-[#29582b]  dark:hover:bg-[#29582b]">Calculate</button>
                                <button onClick={resetFields} className="bg-[#105045] dark:bg-[#4f5b56] text-white w-32 py-2 rounded hover:bg-[#29582b]  dark:hover:bg-[#29582b]">Reset</button>
                            </div>

                            {error && <div className="text-red-500 mb-2 text-center">{error}</div>}

                            <div ref={resultRef}>
                                <Meter percentage={cgpa ? parseFloat(cgpa) : 0} />
                                <div className="flex flex-col justify-center items-center mb-4 ">
                                    <label className="text-3xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">Your Calculated CGPA</label>
                                    <input type="text" value={cgpa} placeholder="Percentage:" readOnly className="w-3/4 p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center ml-2" />
                                </div>
                            </div>

                            <div className="mt-4 flex justify-center space-x-32 mb-4">
                                <button onClick={downloadHistoryAsPDF} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">Download</button>
                                <button onClick={shareOnWhatsApp} className="bg-green-500 text-white w-32 py-2 rounded">WhatsApp</button>
                                <button
                                    onClick={handleCopyLink}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    {copied ? "Link Copied!" : "Copy Link"}
                                </button>
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
                                                    <td className="border border-gray-300 p-2">{entry.percentage.toFixed()}%</td>
                                                    <td className="border border-gray-300 p-2">{entry.cgpa}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="w-full min-h-screen flex  justify-center p-5">
                                <div className="max-w-4xl w-full text-justify mx-auto ">
                                    <PercentageContent />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 bg-gradient-to-b h-[60vh] from-teal-50 to-white rounded-lg shadow-lg p-6 sticky top-28 translate-x-[-50px] dark:bg-teal-900 dark:from-teal-800 dark:to-teal-900">
                            <h1 className="text-2xl font-bold mb-6 text-center text-blue-700 drop-shadow-lg border-b-4 border-blue-500 pb-2 dark:text-white dark:border-blue-300">
                                Educational Related Calculators
                            </h1>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-percentage-calculator?filter=CGPA+to+percentage"
                                        className="block text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors duration-200"
                                    >
                                        CGPA to Percentage Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/educational-calculator/percentage-to-cgpa-calculator?filter=Percentage+to+CGPA"
                                        className="block text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors duration-200"
                                    >
                                        Percentage to CGPA Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/educational-calculator/gpa-to-cgpa-calculator/"
                                        className="block text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors duration-200"
                                    >
                                        GPA to CGPA Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-gpa-calculator/"
                                        className="block text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors duration-200"
                                    >
                                        CGPA to GPA Calculator
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Percentagetocgpa;
