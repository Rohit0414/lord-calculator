import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Meter from '@/components/Meter';
import Nav from '@/components/Nav';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';
import Router, { useRouter } from 'next/router';
import { PDFDocument, rgb } from 'pdf-lib';
import GpaContent from '@/components/GpaContent';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


const Gpatocgpa = () => {
    const { theme } = useTheme();
    const [gradingScale, setGradingScale] = useState();
    const [cgpaPointScale, setCgpaPointScale] = useState();
    const [gpa, setGpa] = useState();
    const [cgpa, setCgpa] = useState();
    const [error, setError] = useState('');
    const [history, setHistory] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const resultRef = useRef(null);
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const { t } = useTranslation();

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };
    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, [showScroll]);


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
            query: {
                gpa: gpaValue,
                gradingscale: gradingScale,
                cgpascale: cgpaPointScale
            },
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
        if (!isClient || !router.isReady) return;
        console.log("isClient is true, executing useEffect");

        const { query } = router;
        const { gpa: queryGPA, gradingscale: querygradingscale, cgpascale: queryCGPA } = query;

        console.log('query parameters:', query);
        if (!queryGPA || !querygradingscale || !queryCGPA) {
            console.error('Missing query parameters');
            return;
        }
        setGpa(queryGPA);
        setGradingScale(querygradingscale);

        console.log('Generating PDF with GPA:', queryGPA, 'Grading Scale:', querygradingscale, 'CGPA:', queryCGPA);

        const generateAndDownloadPDF = async () => {
            console.log('Generating PDF...');
            if (isDownloading) return;
            setIsDownloading(true);

            try {
                const pdfDoc = await PDFDocument.create();
                let page = pdfDoc.addPage([600, 500]);
                const margin = 50;
                const gpa = queryGPA;
                const gradingscale = querygradingscale;
                const cgpa = queryCGPA;

                const gpaValue = parseFloat(gpa);
                const cgpaScale = parseFloat(cgpa);
                const cgpaValue = (gpaValue / gradingscale) * cgpaScale;
                const cgpaFormatted = cgpaValue.toFixed(2);
                const his = [...history, { gpa: gpaValue, cgpa: cgpaFormatted }];

                const headerText = "Calculation History";
                const headerFontSize = 24;
                const textWidth = headerFontSize * 0.6 * headerText.length;
                const centerX = (600 - textWidth) / 2;
                page.drawText(headerText, {
                    x: centerX,
                    y: 450,
                    size: headerFontSize,
                    color: rgb(0, 0.53, 0.71),
                });

                page.drawLine({
                    start: { x: margin, y: 440 },
                    end: { x: 600 - margin, y: 440 },
                    thickness: 1,
                    color: rgb(0.8, 0.8, 0.8),
                });

                let yPosition = 420;
                const lineHeight = 20;

                page.drawText("No.", { x: margin, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                page.drawText("GPA", { x: 200, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                page.drawText("CGPA", { x: 320, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                page.drawLine({
                    start: { x: margin, y: yPosition - 10 },
                    end: { x: 600 - margin, y: yPosition - 10 },
                    thickness: 0.5,
                    color: rgb(0.8, 0.8, 0.8),
                });

                yPosition -= 30;

                his.forEach((entry, index) => {
                    const roundedGPA = entry.gpa.toFixed(2);
                    const roundedCGPA = entry.cgpa;

                    page.drawText(`${index + 1}`, { x: margin, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                    page.drawText(`${roundedGPA}`, { x: 200, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                    page.drawText(`${roundedCGPA}`, { x: 320, y: yPosition, size: 12, color: rgb(0, 0, 0) });

                    yPosition -= lineHeight;
                });

                page.drawText("Generated by GPA to CGPA Calculator", {
                    x: margin,
                    y: 30,
                    size: 10,
                    color: rgb(0.5, 0.5, 0.5),
                });

                const pdfBytes = await pdfDoc.save();
                const blob = new Blob([pdfBytes], { type: "application/pdf" });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "calculation_history.pdf";
                link.click();  // Directly trigger the click here
            } catch (error) {
                console.error("Error generating PDF:", error);
            }

            setIsDownloading(false);
        };

        generateAndDownloadPDF();

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
            let page = pdfDoc.addPage([600, 500]);
            const margin = 50;
            const headerText = "Calculation History";
            const headerFontSize = 24;
            const textWidth = headerFontSize * 0.6 * headerText.length;
            const centerX = (600 - textWidth) / 2;

            page.drawText(headerText, {
                x: centerX,
                y: 450,
                size: headerFontSize,
                color: rgb(0, 0.53, 0.71),
            });

            page.drawLine({
                start: { x: margin, y: 440 },
                end: { x: 600 - margin, y: 440 },
                thickness: 1,
                color: rgb(0.8, 0.8, 0.8),
            });

            let yPosition = 420;
            const lineHeight = 20;


            page.drawText("No.", { x: margin, y: yPosition, size: 14, color: rgb(0, 0, 0) });
            page.drawText("GPA", { x: 200, y: yPosition, size: 14, color: rgb(0, 0, 0) });
            page.drawText("CGPA", { x: 320, y: yPosition, size: 14, color: rgb(0, 0, 0) });

            page.drawLine({
                start: { x: margin, y: yPosition - 10 },
                end: { x: 600 - margin, y: yPosition - 10 },
                thickness: 0.5,
                color: rgb(0.8, 0.8, 0.8),
            });

            yPosition -= 30;

            history.forEach((entry, index) => {
                if (yPosition < 50) {
                    page = pdfDoc.addPage([600, 500]);
                    yPosition = 450;

                    page.drawText(headerText, {
                        x: centerX,
                        y: yPosition,
                        size: headerFontSize,
                        color: rgb(0, 0.53, 0.71),
                    });

                    page.drawLine({
                        start: { x: margin, y: yPosition - 10 },
                        end: { x: 600 - margin, y: yPosition - 10 },
                        thickness: 1,
                        color: rgb(0.8, 0.8, 0.8),
                    });

                    yPosition -= 40;


                    page.drawText("No.", { x: margin, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                    page.drawText("GPA", { x: 200, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                    page.drawText("CGPA", { x: 320, y: yPosition, size: 14, color: rgb(0, 0, 0) });

                    page.drawLine({
                        start: { x: margin, y: yPosition - 10 },
                        end: { x: 600 - margin, y: yPosition - 10 },
                        thickness: 0.5,
                        color: rgb(0.8, 0.8, 0.8),
                    });

                    yPosition -= 30;
                }

                const roundedGPA = entry.gpa.toFixed(2);
                const roundedCGPA = entry.cgpa.toFixed(2);


                page.drawText(`${index + 1}`, { x: margin, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                page.drawText(`${roundedGPA}`, { x: 200, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                page.drawText(`${roundedCGPA}`, { x: 320, y: yPosition, size: 12, color: rgb(0, 0, 0) });

                yPosition -= lineHeight;
            });

            page.drawText("Generated by GPA to CGPA Calculator", {
                x: margin,
                y: 30,
                size: 10,
                color: rgb(0.5, 0.5, 0.5),
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: "application/pdf" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "calculation_history.pdf";
            link.click();
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error("Error generating PDF:", error);
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
                            <h2 className="text-4xl font-bold mb-4 text-center text-[#308d46] bg-clip-text bg-transparent dark:bg-teal-950 drop-shadow-lg">{t('title')}</h2>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg mt-2 dark:text-[#b3e0e6]">{t('enter_gpa')}</h3>
                                <input
                                    type="number"
                                    value={gpa}
                                    onChange={(e) => setGpa(e.target.value)}
                                    placeholder={t('enter_gpa')}
                                    className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] dark:bg-[#3a4a52] dark:border-[#7d8d95] rounded text-center"
                                />
                            </div>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">{t('choose_gpa_scale')}</label>
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
                                    value={gradingScale || ''}
                                    onChange={(e) => setGradingScale(parseFloat(e.target.value) || 0)}
                                    placeholder={t('choose_gpa_scale')}
                                    className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] dark:bg-[#3a4a52] dark:border-[#7d8d95] rounded text-center"
                                />
                            </div>

                            <div className="flex mb-4 justify-center items-center flex-col">
                            <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">{t('choose_gpa_scale')}</label>
                                <input
                                    type="number"
                                    value={cgpaPointScale}
                                    onChange={(e) => setCgpaPointScale(parseFloat(e.target.value))}
                                    placeholder={t('choose_gpa_scale')}
                                    className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] dark:bg-[#3a4a52] dark:border-[#7d8d95] rounded text-center"
                                />
                            </div>

                            {error && <div className="text-red-500 mb-2 text-center">{error}</div>}

                            <div className="flex justify-center space-x-32 mb-4">
                                <button onClick={convertGPAtoCGPA} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">{t('calculate')}</button>
                                <button onClick={resetFields} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">{t('reset')}</button>
                            </div>

                            <div ref={resultRef}>
                                <Meter percentage={cgpa ? parseFloat(cgpa) : 0} />
                                <div className="flex flex-col justify-center items-center mb-4">
                                <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">
                                {t("calculated_cgpa")}
                                    </label>
                                    <input
                                        type="text"
                                        value={cgpa || ''}
                                        placeholder="CGPA:"
                                        readOnly
                                        className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] dark:bg-[#3a4a52] dark:border-[#7d8d95] rounded text-center"
                                    />
                                </div>

                            </div>


                            <div className="mt-4 flex justify-center space-x-32 mb-4">
                                <button onClick={downloadHistoryAsPDF} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">{t("download")}</button>
                                <button onClick={shareOnWhatsApp} className="bg-green-500 text-white w-32 py-2 rounded">{t("whatsapp")}</button>
                                <button
                                    onClick={handleCopyLink}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    {copied ? "Link Copied!" : "Copy Link"}
                                </button>
                            </div>

                            <div className="flex justify-center">
                                <div className="history-container mb-4 text-center w-60">
                                    <b className='dark:text-white'>{t("calculation_history")}</b>
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
                                                    <td className="border border-gray-300 p-2">{entry.gpa.toFixed(2)}</td>
                                                    <td className="border border-gray-300 p-2">{entry.cgpa.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="w-full min-h-screen flex  justify-center p-5">
                                <div className="max-w-4xl w-full text-justify mx-auto ">
                                    <GpaContent />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 h-[60vh] rounded-xl shadow-xl translate-x-[-60px] p-6 sticky top-28 dark:bg-gray-900">
                            <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700 border-b-2 border-gray-300 pb-3 dark:text-gray-200 dark:border-gray-700">
                                Educational related Calculators
                            </h1>
                            <ul className="space-y-5 ">
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-percentage-calculator?filter=CGPA+to+percentage"
                                        className="flex items-center text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-4 py-3 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        ➗ <span className="ml-3">CGPA to Percentage Calculator</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-percentage-calculator/percentage-to-cgpa-calculator?filter=Percentage+to+CGPA"
                                        className="flex items-center text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-4 py-3 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        🔢 <span className="ml-3">Percentage to CGPA Calculator</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-percentage-calculator/gpa-to-cgpa-calculator?filter=GPA+to+CGPA"
                                        className="flex items-center text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-4 py-3 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        💡 <span className="ml-3">GPA to CGPA Calculator</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-percentage-calculator/cgpa-to-gpa-calculator?filter=CGPA+to+GPA"
                                        className="flex items-center text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-4 py-3 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        📚 <span className="ml-3">CGPA to GPA Calculator</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        onClick={scrollToTop}
                        style={{
                            display: showScroll ? "flex" : "none",
                            position: "fixed",
                            bottom: "80px",
                            right: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#E4E4E4",
                            color: "#000",
                            border: "1px solid #ccc",
                            borderRadius: "50%",
                            cursor: "pointer",
                            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                            zIndex: 1000,
                        }}
                    >
                        <span style={{ fontSize: "20px", fontWeight: "bold" }}>↑</span>
                    </div>


                    <div
                        onClick={scrollToBottom}
                        style={{
                            display: "flex",
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#E4E4E4",
                            color: "#000",
                            border: "1px solid #ccc",
                            borderRadius: "50%",
                            cursor: "pointer",
                            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                            zIndex: 1000,
                        }}
                    >
                        <span style={{ fontSize: "20px", fontWeight: "bold" }}>↓</span>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Gpatocgpa;
