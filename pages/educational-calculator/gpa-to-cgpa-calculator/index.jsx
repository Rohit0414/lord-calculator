import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Meter from '@/components/Meter';
import Nav from '@/components/Nav';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';
import Router, { useRouter } from 'next/router';
import { PDFDocument, rgb } from 'pdf-lib';
import GpaContent from '@/components/GpaContent';

const Gpatocgpa = () => {
    const { theme } = useTheme();
    const [gradingScale, setGradingScale] = useState('');
    const [cgpaPointScale, setCgpaPointScale] = useState('');
    const [gpa, setGpa] = useState('');
    const [cgpa, setCgpa] = useState('');
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

    const convertGPAtoCGPA = () => {
        setError('');
        setCgpa('');
        const gpaValue = parseFloat(gpa);

        if (isNaN(gpaValue) || gpaValue < 0) {
            setError('Enter a valid GPA');
            return;
        }
        if (gpaValue > gradingScale) {
            setError(`GPA cannot be greater than the selected GPA scale (${gradingScale})`);
            return;
        }

        const cgpaValue = (gpaValue / gradingScale) * cgpaPointScale;
        setCgpa(cgpaValue.toFixed(2));
        setHistory((prevHistory) => [...prevHistory, { gpa: gpaValue, cgpa: cgpaValue }]);

        router.push({
            pathname: router.pathname,
            query: { gpa: gpaValue, gradingscale: gradingScale, cgpascale: cgpaPointScale },
        }, undefined, { shallow: true });

        if (isDownloading) return;
        setIsDownloading(true);
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const resetFields = () => {
        setGpa('');
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
                if (query.gpa && query.gradingscale && query.cgpascale) {
                    setGpa(query.gpa);
                    setGradingScale(query.gradingscale);
                    setCgpaPointScale(query.cgpascale);

                    const cgpaValue = (query.gpa / query.gradingscale) * query.cgpascale;
                    const cgpaFormatted = `${cgpaValue.toFixed(2)}`;
                    const his = [...history, { gpa: query.gpa, cgpa: cgpaFormatted }];
                    page.drawText('Calculation History', { x: 50, y: 350, size: 24, color: rgb(0, 0.53, 0.71) });
                    page.drawText(`${1}: GPA: ${query.gpa}, CGPA: ${cgpaFormatted}`, { x: 50, y: 330 });

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
            .catch((err) => console.error('Failed to copy link: ', err));
    };

    const downloadHistoryAsPDF = async () => {
        try {
            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage([600, 400]);
            page.drawText('Calculation History', { x: 50, y: 350, size: 24, color: rgb(0, 0.53, 0.71) });
            history.forEach((entry, index) => {
                page.drawText(`${index + 1}. GPA: ${entry.gpa}, CGPA: ${entry.cgpa}`, { x: 50, y: 330 - index * 20 });
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'calculation_history.pdf';
            link.click();
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    const shareOnWhatsApp = () => {
        const currentURL = window.location.href;
        const message = `Check out my CGPA calculation: GPA: ${gpa}, CGPA: ${cgpa}. You can view it here: ${currentURL}`;
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
                            <h2 className="text-4xl font-bold mb-4 text-center text-[#105045] drop-shadow-lg">GPA to CGPA Calculator</h2>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg mt-2">Enter GPA</h3>
                                <input
                                    type="number"
                                    value={gpa}
                                    onChange={(e) => setGpa(e.target.value)}
                                    placeholder="Enter Your GPA"
                                    className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center"
                                />
                            </div>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <label className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg">Choose GPA Scale</label>
                                <div className="flex justify-center w-1/2 mb-4 p-2">
                                    <button
                                        onClick={() => setGradingScale(4.0)}
                                        className={`${gradingScale === 4.0 ? 'bg-[#29582b]' : 'bg-[#105045]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b]`}
                                    >
                                        4.0 Scale
                                    </button>
                                    <button
                                        onClick={() => setGradingScale(5.0)}
                                        className={`${gradingScale === 5.0 ? 'bg-[#29582b]' : 'bg-[#105045]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b]`}
                                    >
                                        5.0 Scale
                                    </button>
                                    <button
                                        onClick={() => setGradingScale(10.0)}
                                        className={`${gradingScale === 10.0 ? 'bg-[#29582b]' : 'bg-[#105045]'} text-white w-3/4 py-2 rounded hover:bg-[#29582b]`}
                                    >
                                        10.0 Scale
                                    </button>
                                </div>
                                <input
                                    type="number"
                                    value={gradingScale}
                                    onChange={handleCustomScaleChange}
                                    placeholder="Enter Custom GPA Scale"
                                    className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center"
                                />
                            </div>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <label className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg mt-2">CGPA Point Scale</label>
                                <input
                                    type="number"
                                    value={cgpaPointScale}
                                    onChange={(e) => setCgpaPointScale(parseFloat(e.target.value))}
                                    placeholder="Enter CGPA Point Scale"
                                    className="w-3/4 p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center"
                                />
                            </div>

                            {error && <div className="text-red-500 mb-2 text-center">{error}</div>}

                            <div className="flex justify-center space-x-32 mb-4">
                                <button onClick={convertGPAtoCGPA} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">Calculate</button>
                                <button onClick={resetFields} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">Reset</button>
                            </div>

                            <div ref={resultRef}>
                                <Meter percentage={cgpa ? parseFloat(cgpa) : 0} />
                                <div className="flex flex-col justify-center items-center mb-4">
                                    <label className="text-3xl font-bold mb-2 text-[#105045] drop-shadow-lg">Your Calculated CGPA </label>
                                    <input type="text" value={cgpa} placeholder="CGPA:" readOnly className="w-3/4 p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center ml-2" />
                                </div>
                            </div>


                            <div className="mt-4 flex justify-center space-x-32 mb-4">
                                <button onClick={downloadHistoryAsPDF} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">Download</button>
                                <button onClick={shareOnWhatsApp} className="bg-green-500 text-white w-32 py-2 rounded">WhatsApp</button>
                            </div>

                            <div className="flex justify-center">
                                <div className="history-container mb-4 text-center w-60">
                                    <b>Calculation History</b>
                                    <table className="min-w-full border border-gray-300 mt-2 mx-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-gray-300 p-2">S.NO</th>
                                                <th className="border border-gray-300 p-2">GPA</th>
                                                <th className="border border-gray-300 p-2">CGPA</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {history.map((entry, index) => (
                                                <tr key={index}>
                                                    <td className="border border-gray-300 p-2 font-semibold">{index + 1}</td>
                                                    <td className="border border-gray-300 p-2">{entry.gpa}</td>
                                                    <td className="border border-gray-300 p-2">{entry.cgpa.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="w-full min-h-screen flex  justify-center p-5">
                                <div className="max-w-4xl w-full text-justify mx-auto ">
                                    <GpaContent/>
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
                                        href="/educational-calculator/gpa-to-cgpa-calculator?filter=GPA+to+CGPA"
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
                <Footer />
            </div>
        </div>
    );
};

export default Gpatocgpa;
