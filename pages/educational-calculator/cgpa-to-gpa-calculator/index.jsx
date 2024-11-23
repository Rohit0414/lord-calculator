import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Meter from '@/components/Meter';
import Nav from '@/components/Nav';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';
import Router, { useRouter } from 'next/router';
import { PDFDocument, rgb } from 'pdf-lib';
import CgpaContent from '@/components/CgpaContent';

const Cgpatogpa = () => {
    const { theme } = useTheme();
    const [cgpaPointScale, setCgpaPointScale] = useState('');
    const [gpaScale, setGpaScale] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [gpa, setGpa] = useState('');
    const [error, setError] = useState('');
    const [history, setHistory] = useState([]);
    const resultRef = useRef(null);
    const router = useRouter();

    const convertCGPAtoGPA = () => {
        setError('');
        setGpa('');

        const cgpaValue = parseFloat(cgpa);

        if (isNaN(cgpaValue) || cgpaValue < 0) {
            setError('Enter a valid CGPA');
            return;
        }
        if (cgpaValue > cgpaPointScale) {
            setError(`CGPA cannot be greater than the selected CGPA point scale (${cgpaPointScale})`);
            return;
        }

        const gpaValue = (cgpaValue / cgpaPointScale) * gpaScale;
        setGpa(gpaValue.toFixed(2));
        setHistory((prevHistory) => [...prevHistory, { cgpa: cgpaValue, gpa: gpaValue }]);

        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const resetFields = () => {
        setCgpa('');
        setGpa('');
        setError('');
    };

    const handleCustomGpaScaleChange = (e) => {
        setGpaScale(parseFloat(e.target.value) || 0);
    };

    const downloadHistoryAsPDF = async () => {
        if (router.query) {
            router.push({
                pathname: router.pathname,
                query: {
                    cgpa: cgpa,
                    cgpapointscale: cgpaPointScale,
                    gpascale: gpaScale
                }
            }, undefined, { shallow: true });

            await new Promise((resolve) => setTimeout(resolve, 500));

            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage([600, 400]);
            page.drawText('Calculation History', { x: 50, y: 350, size: 24, color: rgb(0, 0.53, 0.71) });

            history.forEach((entry, index) => {
                page.drawText(`${index + 1}: CGPA: ${entry.cgpa}, GPA: ${entry.gpa}`, { x: 50, y: 330 - index * 20 });
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
        const message = `Check out my GPA calculation: CGPA: ${cgpa}, GPA: ${gpa}. You can view it here: ${currentURL}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };

    useEffect(() => {
        if (router.query) {
            const { query } = router;
            const generateAndDownloadPDF = async () => {
                try {
                    const pdfDoc = await PDFDocument.create();
                    const page = pdfDoc.addPage([600, 400]);
                    setCgpa(query.cgpa);
                    setCgpaPointScale(query.cgpapointscale);
                    setGpaScale(query.gpascale);

                    const gpaValue = (query.cgpa / query.cgpapointscale) * query.gpascale;
                    page.drawText('Calculation History', { x: 50, y: 350, size: 24, color: rgb(0, 0.53, 0.71) });
                    page.drawText(`CGPA: ${query.cgpa}, GPA: ${gpaValue.toFixed(2)}`, { x: 50, y: 330 });

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

            if (Object.keys(query).length > 0 && query.cgpa && query.cgpapointscale && query.gpascale) {
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
                    <h2 className="text-4xl font-bold mb-4 text-center text-[#105045] drop-shadow-lg">CGPA to GPA Calculator</h2>

                    <div className="flex mb-4 justify-center items-center flex-col">
                        <h3 className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg mt-2">Enter CGPA</h3>
                        <input
                            type="number"
                            value={cgpa}
                            onChange={(e) => setCgpa(e.target.value)}
                            placeholder="Enter Your CGPA"
                            className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center"
                        />
                    </div>

                    <div className="flex mb-4 justify-center items-center flex-col">
                        <label className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg">Choose GPA Scale</label>
                        <div className="flex justify-center w-1/2 mb-4 p-2">
                            <button
                                onClick={() => setGpaScale(4.0)}
                                className={`${gpaScale === 4.0 ? 'bg-[#29582b]' : 'bg-[#105045]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b]`}
                            >
                                4.0 Scale
                            </button>
                            <button
                                onClick={() => setGpaScale(5.0)}
                                className={`${gpaScale === 5.0 ? 'bg-[#29582b]' : 'bg-[#105045]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b]`}
                            >
                                5.0 Scale
                            </button>
                            <button
                                onClick={() => setGpaScale(10.0)}
                                className={`${gpaScale === 10.0 ? 'bg-[#29582b]' : 'bg-[#105045]'} text-white w-3/4 py-2 rounded hover:bg-[#29582b]`}
                            >
                                10.0 Scale
                            </button>
                        </div>
                        <input
                            type="number"
                            value={gpaScale}
                            onChange={handleCustomGpaScaleChange}
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
                        <button onClick={convertCGPAtoGPA} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">Calculate</button>
                        <button onClick={resetFields} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">Reset</button>
                    </div>

                    <div ref={resultRef}>
                        <Meter percentage={gpa ? parseFloat(gpa) : 0} />
                        <div className=" flex flex-col justify-center items-center mb-4">
                            <label className="text-3xl font-bold mb-2 text-[#105045] drop-shadow-lg ">Your Calculated GPA </label>
                            <input type="text" value={gpa} placeholder="GPA:" readOnly className="w-3/4 p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center ml-2" />
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
                                        <th className="border border-gray-300 p-2">CGPA</th>
                                        <th className="border border-gray-300 p-2">GPA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history.map((entry, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 p-2 font-semibold">{index + 1}</td>
                                            <td className="border border-gray-300 p-2">{entry.cgpa}</td>
                                            <td className="border border-gray-300 p-2">{entry.gpa.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <CgpaContent/>
            </div>
            <Footer />
        </div>
    );
};

export default Cgpatogpa;
