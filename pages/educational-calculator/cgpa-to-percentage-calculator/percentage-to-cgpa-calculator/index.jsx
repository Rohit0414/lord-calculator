
import { useState, useRef, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Meter from '@/components/Meter';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Router, { useRouter } from 'next/router';
import { PDFDocument, rgb } from 'pdf-lib';
import Link from 'next/link';
import PercentageContent from '@/components/PercentageContent';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Head from 'next/head';


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
    const [showScroll, setShowScroll] = useState(false);
    const { t } = useTranslation();

    const image = {
        src: "/book-svgrepo-com.svg",
        width: 30,
        height: 30,
    };
    const image1 = {
        src: "/bulb.svg",
        width: 30,
        height: 30,
    };
    const image2 = {
        src: "/calculator.svg",
        width: 30,
        height: 30,
    };
    const image3 = {
        src: "/divide.svg",
        width: 30,
        height: 30,
    };

    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    }, [showScroll]);


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };
    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, [checkScrollTop]);


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

        if (isDownloading) return;
        setIsDownloading(true);
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const resetFields = () => {
        setPercentage('');
        setCgpa('');
        setError('');
        setMultiplicationFactor('');
    };


    useEffect(() => {
        if (!isClient) return;

        const { query } = router;

        const generateAndDownloadPDF = async () => {
            if (isDownloading) return;
            setIsDownloading(true);

            try {
                const pdfDoc = await PDFDocument.create();
                let page = pdfDoc.addPage([600, 500]);
                const margin = 50;

                if (query.percentage && query.gradingscale && query.factor) {
                    setPercentage(query.percentage);
                    document.getElementById('percentage').value = parseFloat(query.percentage);
                    handleScaleChange(query.gradingscale);
                    setMultiplicationFactor(query.factor);

                    const cgpaValue = query.percentage / query.factor;
                    const cgpaFormatted = `${cgpaValue.toFixed(2)}`;
                    const his = [...history, { percentage: query.percentage, cgpa: cgpaFormatted }];

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
                    page.drawText("Percentage", { x: 200, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                    page.drawText("CGPA", { x: 300, y: yPosition, size: 14, color: rgb(0, 0, 0) });

                    page.drawLine({
                        start: { x: margin, y: yPosition - 10 },
                        end: { x: 600 - margin, y: yPosition - 10 },
                        thickness: 0.5,
                        color: rgb(0.8, 0.8, 0.8),
                    });

                    yPosition -= 30;

                    his.forEach((entry, index) => {
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
                            page.drawText("Percentage", { x: 200, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                            page.drawText("CGPA", { x: 300, y: yPosition, size: 14, color: rgb(0, 0, 0) });

                            page.drawLine({
                                start: { x: margin, y: yPosition - 10 },
                                end: { x: 600 - margin, y: yPosition - 10 },
                                thickness: 0.5,
                                color: rgb(0.8, 0.8, 0.8),
                            });

                            yPosition -= 30;
                        }

                        const roundedCgpa = !isNaN(entry.cgpa) ? parseFloat(entry.cgpa).toFixed(2) : 'N/A';
                        const roundedPercentage = !isNaN(entry.percentage) ? parseFloat(entry.percentage).toFixed(2) : 'N/A';

                        page.drawText(`${index + 1}`, { x: margin, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                        page.drawText(`${roundedPercentage}%`, { x: 200, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                        page.drawText(`${roundedCgpa}`, { x: 300, y: yPosition, size: 12, color: rgb(0, 0, 0) });

                        yPosition -= lineHeight;
                    });

                    page.drawText("Generated by Lord Calculator", {
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
                }
            } catch (error) {
                console.error("Error creating or downloading the PDF:", error);
            } finally {
                setIsDownloading(false);
            }
        };

        if (Object.keys(query).length > 0) {
            generateAndDownloadPDF();
        }
    }, [isClient, router, isDownloading, history]);





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
            page.drawText("Percentage", { x: 250, y: yPosition, size: 14, color: rgb(0, 0, 0) });
            page.drawText("CGPA", { x: 400, y: yPosition, size: 14, color: rgb(0, 0, 0) });

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
                    page.drawText("Percentage", { x: 250, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                    page.drawText("CGPA", { x: 400, y: yPosition, size: 14, color: rgb(0, 0, 0) });

                    page.drawLine({
                        start: { x: margin, y: yPosition - 10 },
                        end: { x: 600 - margin, y: yPosition - 10 },
                        thickness: 0.5,
                        color: rgb(0.8, 0.8, 0.8),
                    });

                    yPosition -= 30;
                }

                const roundedPercentage = entry.percentage.toFixed(2);
                const roundedCgpa = entry.cgpa.toFixed(2);

                page.drawText(`${index + 1}`, { x: margin, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                page.drawText(`${roundedPercentage}%`, { x: 250, y: yPosition, size: 12, color: rgb(0, 0, 0) }); // Centered for Percentage
                page.drawText(`${roundedCgpa}`, { x: 400, y: yPosition, size: 12, color: rgb(0, 0, 0) });

                yPosition -= lineHeight;
            });

            page.drawText("Generated by Lord Calculator", {
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
``
    const shareOnWhatsApp = () => {
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
        const currentURL = window.location.href;
        const message = `Check out my CGPA calculation: CGPA: ${cgpa}, Percentage: ${percentage}. You can view it here: ${currentURL}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (!isClient) return null;


    return (
        <div className={`transition-all duration-300 bg-[#fafafc] ease-in-out ${theme === "dark" ? "dark" : "light"}`}>
            <Head>
                <title>Lord Calculator – Percentage to CGPA Calculator</title>
                <meta name="description" content="Percentage to CGPA converter is essential for many students. Lord Calculator offers you the best percentage to CGPA calculator with high precision and error-free calculations." />
            </Head>
            <Navbar />
            <Nav />
            <div className="container  max-h-full flex-col max-w-full border-r-8 justify-center dark:bg-gray-800 ">
                <div className="w-full flex flex-col items-center p-4 bg-white dark:bg-gray-800 dark:text-white">
                    <div className="flex  w-full">

                        <div className="p-5 mx-auto text-black w-full">
                            <h2 className="text-4xl font-bold mb-4 text-center text-[#308d46] bg-clip-text bg-transparent dark:bg-teal-950 drop-shadow-lg">{t("--title")}</h2>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg mt-2 dark:text-[#b3e0e6]">{t("enterPercentage")}</h3>
                                <input
                                    id="percentage"
                                    type="number"
                                    value={percentage}
                                    onChange={(e) => setPercentage(e.target.value)}
                                    placeholder={t("placeholderPercentage")}
                                    className="w-full sm:w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] dark:bg-[#3a4a52] dark:border-[#7d8d95] rounded text-center"
                                />
                            </div>

                            <div className="flex justify-center items-center flex-col mb-4">
                                <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">{t("chooseGradeScale")}</label>
                                <div className="flex justify-center w-full sm:w-1/2 mb-4 p-2">
                                    <button
                                        onClick={() => handleScaleChange(4.0)}
                                        className={`${gradingScale === 4.0 ? 'bg-[#29582b]' : 'bg-[#105045] dark:bg-[#4f5b56]'} text-white sm:w-3/4 py-2 mr-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]`}
                                    >
                                        {t("scale4")}
                                    </button>
                                    <button
                                        onClick={() => handleScaleChange(5.0)}
                                        className={`${gradingScale === 5.0 ? 'bg-[#29582b]' : 'bg-[#105045] dark:bg-[#4f5b56]'} text-white sm:w-3/4 py-2 mr-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]`}
                                    >
                                        {t("scale5")}
                                    </button>
                                    <button
                                        onClick={() => handleScaleChange(10.0)}
                                        className={`${gradingScale === 10.0 ? 'bg-[#29582b]' : 'bg-[#105045] dark:bg-[#4f5b56]'} text-white sm:w-3/4 py-2 mr-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]`}
                                    >
                                        {t("scale10")}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center items-center flex-col mb-4">
                                <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">{t("setMultiplicationFactor")}</label>
                                <input
                                    type="number"
                                    value={multiplicationFactor}
                                    onChange={(e) => setMultiplicationFactor(e.target.value)}
                                    placeholder={t("placeholderFactor")}
                                    className="w-full sm:w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center dark:bg-[#3a4a52] dark:border-[#7d8d95]"
                                />
                            </div>

                            <div className="flex justify-center space-x-10 sm:space-x-32 mb-4">
                                <button onClick={convertPercentageToCGPA} className="bg-[#105045] dark:bg-[#4f5b56] text-white w-32 py-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]">{t("-calculateButton")}</button>
                                <button onClick={resetFields} className="bg-red-500 dark:bg-[#4f5b56] text-white w-32 py-2 rounded hover:bg-red-600 dark:hover:bg-[#29582b]">{t("-resetButton")}</button>
                            </div>

                            {error && <div className="text-red-500 mb-2 text-center">{t("errorMessage")}</div>}

                            <div ref={resultRef}>
                                <div className="flex justify-center items-center w-full">
                                    <Meter
                                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto"
                                        percentage={cgpa ? parseFloat(cgpa) : 0}
                                    />
                                </div>

                                <div className="flex flex-col justify-center items-center mb-4 ">
                                    <label className="text-3xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">{t("calculatedCGPATitle")}</label>
                                    <input type="text" value={cgpa} placeholder={t("placeholderCGPA")} readOnly className="w-full sm:w-3/4 p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center ml-2" />
                                </div>
                            </div>

                            <div className="mt-4 flex justify-center space-x-10 sm:space-x-32 mb-4">
                                <button onClick={downloadHistoryAsPDF} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">{t("-downloadButton")}</button>
                                <button onClick={shareOnWhatsApp} className="bg-green-500 text-white w-32 py-2 rounded">WhatsApp</button>
                                <button
                                    onClick={handleCopyLink}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    {copied ? "Link Copied!" : "Copy Link"}
                                </button>
                            </div>

                            <div className="flex justify-center">
                                <div className="history-container mb-4 text-center w-full sm:w-60">
                                    <b className='dark:text-white'>{t("historyTitle")}</b>
                                    <table className="min-w-full border border-gray-300 mt-2 mx-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-gray-300 p-2">{t("tableSNo")}</th>
                                                <th className="border border-gray-300 p-2">{t("tablePercentage")}</th>
                                                <th className="border border-gray-300 p-2">{t("tableCGPA")}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {history.map((entry, index) => (
                                                <tr key={index}>
                                                    <td className="border border-gray-300 p-2 font-semibold">{index + 1}</td>
                                                    <td className="border border-gray-300 p-2">{entry.percentage.toFixed(2)}%</td>
                                                    <td className="border border-gray-300 p-2">{entry.cgpa.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="w-full min-h-screen flex justify-center ">
                                <div className="max-w-4xl w-full text-justify mx-auto ">
                                    <PercentageContent />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 max-h-[calc(80vh-4rem)] md:max-h-[calc(70vh-4rem)] lg:max-h-[calc(50vh-4rem)] xl:max-h-[calc(70vh-4rem)] w-full xl:w-[64vh] rounded-xl shadow-xl p-6 sticky top-24 xl:right-16 dark:bg-gray-900 hidden md:block overflow-y-auto custom-height">
                            <div>
                                <h1 className="text-lg md:text-2xl font-semibold mb-4 text-center text-gray-700 border-b border-gray-300 pb-2 dark:text-gray-200 dark:border-gray-700">
                                    {t('educational_calculators_title')}
                                </h1>
                            </div>
                            <ul className="space-y-8">
                                {/* CGPA to Percentage */}
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-percentage-calculator?filter=CGPA+to+percentage"
                                        className="flex items-center text-sm md:text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-3 py-2 shadow-sm hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        <Image
                                            src={image3.src}
                                            height={24}
                                            width={24}
                                            alt="CGPA to Percentage"
                                        />
                                        <span className="ml-3">{t('cgpa_to_percentage')}</span>
                                    </Link>
                                </li>

                                {/* Percentage to CGPA */}
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-percentage-calculator/percentage-to-cgpa-calculator?filter=Percentage+to+CGPA"
                                        className="flex items-center text-sm md:text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-3 py-2 shadow-sm hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        <Image
                                            src={image2.src}
                                            height={24}
                                            width={24}
                                            alt="Percentage to CGPA"
                                        />
                                        <span className="ml-3">{t('percentage_to_cgpa')}</span>
                                    </Link>
                                </li>

                                {/* GPA to CGPA */}
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-percentage-calculator/gpa-to-cgpa-calculator?filter=GPA+to+CGPA"
                                        className="flex items-center text-sm md:text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-3 py-2 shadow-sm hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        <Image
                                            src={image1.src}
                                            height={24}
                                            width={24}
                                            alt="GPA to CGPA"
                                        />
                                        <span className="ml-3">{t('gpa_to_cgpa')}</span>
                                    </Link>
                                </li>

                                {/* CGPA to GPA */}
                                <li>
                                    <Link
                                        href="/educational-calculator/cgpa-to-percentage-calculator/cgpa-to-gpa-calculator?filter=CGPA+to+GPA"
                                        className="flex items-center text-sm md:text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-3 py-2 shadow-sm hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                        <Image
                                            src={image.src}
                                            height={24}
                                            width={24}
                                            alt="CGPA to GPA"
                                        />
                                        <span className="ml-3">{t('cgpa_to_gpa')}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

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
            <style jsx>{`
      @media (max-width: 1024px) and (max-height: 600px) {
        .custom-height {
          max-height: calc(80vh - 4rem); 
        }
      }
    `}</style>
        </div>
    );
};

export default Percentagetocgpa;
