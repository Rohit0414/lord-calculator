import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Meter from '@/components/Meter';
import Nav from '@/components/Nav';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';
import Router, { useRouter } from 'next/router';
import { PDFDocument, rgb } from 'pdf-lib';

const Gpatocgpa = () => {
    const { theme } = useTheme();
    const [gradingScale, setGradingScale] = useState('');
    const [cgpaPointScale, setCgpaPointScale] = useState('');
    const [gpa, setGpa] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [error, setError] = useState('');
    const [history, setHistory] = useState([]);
    const resultRef = useRef(null);
    const router = useRouter();

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

        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const resetFields = () => {
        setGpa('');
        setCgpa('');
        setError('');
    };

   
    const handleCustomScaleChange = (event) => {
        setGradingScale(event.target.value); 
    };


    const downloadHistoryAsPDF = async () => {
        if (router.query) {
            router.push({
                pathname: router.pathname,
                query: {
                    gpa: gpa,
                    gradingscale: gradingScale,
                    cgpascale: cgpaPointScale
                }
            }, undefined, { shallow: true });

            await new Promise((resolve) => setTimeout(resolve, 500));

            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage([600, 400]);
            page.drawText('Calculation History', { x: 50, y: 350, size: 24, color: rgb(0, 0.53, 0.71) });

            history.forEach((entry, index) => {
                page.drawText(`${index + 1}: GPA: ${entry.gpa}, CGPA: ${entry.cgpa}`, { x: 50, y: 330 - index * 20 });
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'calculation_history.pdf';
            link.click();
        }
    };

    const shareOnWhatsApp = () => {
        const currentURL = window.location.href;
        const message = `Check out my CGPA calculation: GPA: ${gpa}, CGPA: ${cgpa}. You can view it here: ${currentURL}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };

    useEffect(() => {
        if (router.query) {
            const { query } = router;
            const generateAndDownloadPDF = async () => {
                try {
                    const pdfDoc = await PDFDocument.create();
                    const page = pdfDoc.addPage([600, 400]);
                    setGpa(query.gpa);
                    setGradingScale(query.gradingscale);
                    setCgpaPointScale(query.cgpascale);

                    const cgpaValue = (query.gpa / query.gradingscale) * query.cgpascale;
                    page.drawText('Calculation History', { x: 50, y: 350, size: 24, color: rgb(0, 0.53, 0.71) });
                    page.drawText(`GPA: ${query.gpa}, CGPA: ${cgpaValue.toFixed(2)}`, { x: 50, y: 330 });

                    const pdfBytes = await pdfDoc.save();
                    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'calculation_history.pdf';
                    link.click();
                    URL.revokeObjectURL(link.href);
                } catch (error) {
                    console.error("Error creating or downloading the PDF:", error);
                }
            };

            if (Object.keys(query).length > 0 && query.gpa && query.gradingscale && query.cgpascale) {
                generateAndDownloadPDF();
            }
        }
    }, [router.query]);

    return (
        <div className={`transition-all duration-300 bg-[#fafafc] ease-in-out ${theme === "dark" ? "dark" : "light"}`}>
            <Navbar />
            <Nav />
            <div className="container flex-col w-full p-2 border-r-8 justify-center dark:bg-gray-800">
                <div className="max-w-full p-5 mx-auto text-black shadow-md rounded-lg">
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
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Gpatocgpa;
