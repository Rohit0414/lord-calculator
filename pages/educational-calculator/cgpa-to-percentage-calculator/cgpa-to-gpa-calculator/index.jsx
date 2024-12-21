import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Meter from '@/components/Meter';
import Nav from '@/components/Nav';
import { useTheme } from '@/context/ThemeContext';
import Footer from '@/components/Footer';
import Router, { useRouter } from 'next/router';
import { PDFDocument, rgb } from 'pdf-lib';
import Link from 'next/link';
import CgpaToGpaContent from '@/components/CgpaToGpaContent';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Cgpatogpa = () => {
    const { theme } = useTheme();
    const [cgpaPointScale, setCgpaPointScale] = useState('');
    const [gpaScale, setGpaScale] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [gpa, setGpa] = useState('');
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

        router.push({
            pathname: router.pathname,
            query: {
                cgpa: cgpaValue,
                cgpascale: cgpaPointScale,
                gpascale: gpaScale
            },
        }, undefined, { shallow: true });

        if (isDownloading) return;
        setIsDownloading(true);
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };


    const resetFields = () => {
        setCgpa('');
        setGpa('');
        setError('');
    };

    useEffect(() => {
        if (!isClient) return;

        const { query } = router;
        const generateAndDownloadPDF = async () => {
            if (isDownloading) return;
            setIsDownloading(true);
            try {

                console.log('Query:', query);

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
                page.drawText("CGPA", { x: 250, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                page.drawText("GPA", { x: 400, y: yPosition, size: 14, color: rgb(0, 0, 0) });


                page.drawLine({
                    start: { x: margin, y: yPosition - 10 },
                    end: { x: 600 - margin, y: yPosition - 10 },
                    thickness: 0.5,
                    color: rgb(0.8, 0.8, 0.8),
                });

                yPosition -= 30;


                if (query.cgpa && query.gpascale && query.cgpascale) {
                    console.log('CGPA:', query.cgpa, 'GPA Scale:', query.gpascale, 'CGPA Scale:', query.cgpascale);
                    setCgpa(query.cgpa);
                    setCgpaPointScale(query.cgpascale);
                    setGpaScale(query.gpascale);

                    const gpaValue = (query.cgpa / query.cgpascale) * query.gpascale;
                    const gpaFormatted = `${gpaValue.toFixed(2)}`;


                    const his = [...history, { cgpa: query.cgpa, gpa: gpaFormatted }];
                    console.log('Updated History:', his);


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
                            page.drawText("CGPA", { x: 250, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                            page.drawText("GPA", { x: 400, y: yPosition, size: 14, color: rgb(0, 0, 0) });

                            page.drawLine({
                                start: { x: margin, y: yPosition - 10 },
                                end: { x: 600 - margin, y: yPosition - 10 },
                                thickness: 0.5,
                                color: rgb(0.8, 0.8, 0.8),
                            });

                            yPosition -= 30;
                        }


                        page.drawText(`${index + 1}`, { x: margin, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                        page.drawText(`${entry.cgpa}`, { x: 250, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                        page.drawText(`${entry.gpa}`, { x: 400, y: yPosition, size: 12, color: rgb(0, 0, 0) });

                        yPosition -= lineHeight;
                    });
                }

                page.drawText("Generated by CGPA to GPA Calculator", {
                    x: margin,
                    y: 30,
                    size: 10,
                    color: rgb(0.5, 0.5, 0.5),
                });

                const pdfBytes = await pdfDoc.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'calculation_history.pdf';
                link.click();
                URL.revokeObjectURL(link.href);
            }
            catch (error) {
                console.error('Error creating or downloading the PDF:', error);
            }
            finally {
                setIsDownloading(false);
            }
        };

        if (Object.keys(query).length > 0 && query.cgpa && query.gpascale && query.cgpascale) {
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
            let page = pdfDoc.addPage([600, 500]);
            const margin = 50;
            const headerText = "Calculation History";
            const headerFontSize = 24;
            const textWidth = headerFontSize * 0.6 * headerText.length;
            const centerX = (600 - textWidth) / 2;

            // Draw the header
            page.drawText(headerText, {
                x: centerX,
                y: 450,
                size: headerFontSize,
                color: rgb(0, 0.53, 0.71),
            });

            // Draw line below header
            page.drawLine({
                start: { x: margin, y: 440 },
                end: { x: 600 - margin, y: 440 },
                thickness: 1,
                color: rgb(0.8, 0.8, 0.8),
            });

            let yPosition = 420;
            const lineHeight = 20;

            // Draw column headers
            page.drawText("No.", { x: margin, y: yPosition, size: 14, color: rgb(0, 0, 0) });
            page.drawText("CGPA", { x: 250, y: yPosition, size: 14, color: rgb(0, 0, 0) });  // Centered for CGPA
            page.drawText("GPA", { x: 400, y: yPosition, size: 14, color: rgb(0, 0, 0) });  // For GPA

            // Draw line below headers
            page.drawLine({
                start: { x: margin, y: yPosition - 10 },
                end: { x: 600 - margin, y: yPosition - 10 },
                thickness: 0.5,
                color: rgb(0.8, 0.8, 0.8),
            });

            yPosition -= 30;

            // Loop through history entries and add them to the PDF
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
                    page.drawText("CGPA", { x: 250, y: yPosition, size: 14, color: rgb(0, 0, 0) });
                    page.drawText("GPA", { x: 400, y: yPosition, size: 14, color: rgb(0, 0, 0) });

                    page.drawLine({
                        start: { x: margin, y: yPosition - 10 },
                        end: { x: 600 - margin, y: yPosition - 10 },
                        thickness: 0.5,
                        color: rgb(0.8, 0.8, 0.8),
                    });

                    yPosition -= 30;
                }

                const roundedCgpa = entry.cgpa.toFixed(2);
                const roundedGpa = entry.gpa.toFixed(2);

                page.drawText(`${index + 1}`, { x: margin, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                page.drawText(`${roundedCgpa}`, { x: 250, y: yPosition, size: 12, color: rgb(0, 0, 0) });
                page.drawText(`${roundedGpa}`, { x: 400, y: yPosition, size: 12, color: rgb(0, 0, 0) });

                yPosition -= lineHeight;
            });

            page.drawText("Generated by CGPA to GPA Calculator", {
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



    const handleCustomGpaScaleChange = (e) => {
        const value = e.target.value;
        setGpaScale(value);
    };



    const shareOnWhatsApp = () => {
        const currentURL = window.location.href;
        const message = `Check out my CGPA to GPA calculation: CGPA: ${cgpa}, GPA: ${gpa}. You can view it here: ${currentURL}`;
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

                        <div className="p-5 mx-auto text-black w-full  dark:text-white">
                            <h1 className="text-4xl font-bold mb-4 text-center text-[#308d46] drop-shadow-lg dark:bg-teal-950  bg-transparent bg-clip-text">{t("-title")}</h1>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-[#105045] drop-shadow-lg mt-2 dark:text-[#b3e0e6]">{t("enterCGPA")}</h3>
                                <input
                                    type="number"
                                    value={cgpa}
                                    onChange={(e) => setCgpa(e.target.value)}
                                    placeholder={t("cgpaPlaceholder")}
                                    className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white"
                                />
                            </div>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">{t("chooseGPAScale")}</label>
                                <div className="flex justify-center w-1/2 mb-4 p-2">
                                    <button
                                        onClick={() => setGpaScale(4.0)}
                                        className={`${gpaScale === 4.0 ? 'bg-[#29582b]' : 'bg-[#105045] dark:bg-[#4f5b56]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]`}
                                    >
                                        {t("gpaScale4")}
                                    </button>
                                    <button
                                        onClick={() => setGpaScale(5.0)}
                                        className={`${gpaScale === 5.0 ? 'bg-[#29582b]' : 'bg-[#105045] dark:bg-[#4f5b56]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]`}
                                    >
                                        {t("gpaScale5")}
                                    </button>
                                    <button
                                        onClick={() => setGpaScale(10.0)}
                                        className={`${gpaScale === 10.0 ? 'bg-[#29582b]' : 'bg-[#105045] dark:bg-[#4f5b56]'} text-white w-3/4 py-2 mr-2 rounded hover:bg-[#29582b] dark:hover:bg-[#29582b]`}
                                    >
                                        {t("gpaScale10")}
                                    </button>
                                </div>
                                <input
                                    type="number"
                                    value={gpaScale}
                                    onChange={handleCustomGpaScaleChange}
                                    placeholder={t("customGpaScalePlaceholder")}
                                    className="w-3/4 p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white"
                                />
                            </div>

                            <div className="flex mb-4 justify-center items-center flex-col">
                                <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">{t("cgpaPointScale")}</label>
                                <input
                                    type="number"
                                    value={cgpaPointScale}
                                    onChange={(e) => setCgpaPointScale(parseFloat(e.target.value))}
                                    placeholder={t("cgpaPointScalePlaceholder")}
                                    className="w-3/4 p-2 border border-[#94d197] bg-[#e8f8f5] rounded text-center dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white"
                                />
                            </div>

                            {error && <div className="text-red-500 mb-2 text-center">{error}</div>}

                            <div className="flex justify-center space-x-32 mb-4">
                                <button onClick={convertCGPAtoGPA} className="bg-[#105045] dark:bg-[#4f5b56] text-white w-32 py-2 rounded hover:bg-[#29582b]  dark:hover:bg-[#29582b]">{t("calculateButton")}</button>
                                <button onClick={resetFields} className="bg-[#105045] dark:bg-[#4f5b56] text-white w-32 py-2 rounded hover:bg-[#29582b]  dark:hover:bg-[#29582b]">{t("resetButton")}</button>
                            </div>

                            <div ref={resultRef}>
                                <Meter percentage={gpa ? parseFloat(gpa) : 0} />
                                <div className=" flex flex-col justify-center items-center mb-4">
                                    <label className="text-2xl font-bold mb-2 text-[#105045] drop-shadow-lg dark:text-[#b3e0e6]">{t("yourGPA")}</label>
                                    <input type="text" value={gpa} placeholder={t("gpaPlaceholder")} readOnly className="w-3/4 p-2 mb-4 border border-[#94d197] bg-[#e8f8f5] rounded text-center dark:bg-[#3a4a52] dark:border-[#7d8d95] dark:text-white" />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center space-x-32 mb-4">
                                <button onClick={downloadHistoryAsPDF} className="bg-[#105045] text-white w-32 py-2 rounded hover:bg-[#29582b]">{t("downloadButton")}</button>
                                <button onClick={shareOnWhatsApp} className="bg-green-500 text-white w-32 py-2 rounded">{t("whatsappButton")}</button> <button
                                    onClick={handleCopyLink}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    {copied ? "Link Copied!" : "Copy link"}
                                </button>

                            </div>
                            <div className="flex justify-center">
                                <div className="history-container mb-4 text-center w-60">
                                    <b className=''>{t('calculationHistory')}</b>
                                    <table className="min-w-full border text-black  border-gray-300 mt-2 mx-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border dark:border-black border-gray-300 p-2">{t("sNo")}</th>
                                                <th className="border dark:border-black border-gray-300 p-2">{t("cgpa1")}</th>
                                                <th className="border dark:border-black border-gray-300 p-2">{t('gpa1')}</th>
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

                            <div className="w-full min-h-screen  blur-[px] flex justify-center p-5">
                                <div className="max-w-4xl w-full text-justify mx-auto">
                                    <CgpaToGpaContent />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 h-[64vh] w-[64vh] rounded-xl shadow-xl translate-x-[-60px] p-6 sticky top-28 dark:bg-gray-900">
                            <div className=''>
                                <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700 border-b-2 border-gray-300 pb-3 dark:text-gray-200 dark:border-gray-700">
                                    {t('educational_calculators_title')}
                                </h1>
                            </div>
                            <ul className="space-y-5 ">
                                <div className='h-18 overflow-y-auto'>
                                    <li>
                                        <Link
                                            href="/educational-calculator/cgpa-to-percentage-calculator?filter=CGPA+to+percentage"
                                            className="flex items-center text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-4 py-3 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >

                                            <Image
                                                src={image3.src}
                                                height={image3.height}
                                                width={image3.width}
                                                alt="image description"
                                            />
                                            <span className="ml-3">{t('cgpa_to_percentage')}</span>
                                        </Link>
                                    </li>
                                </div>
                                <div className='h-18 overflow-y-auto'>
                                    <li>
                                        <Link
                                            href="/educational-calculator/cgpa-to-percentage-calculator/percentage-to-cgpa-calculator?filter=Percentage+to+CGPA"
                                            className="flex items-center text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-4 py-3 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            <Image
                                                src={image2.src}
                                                height={image2.height}
                                                width={image2.width}
                                                alt="image description"
                                            /><span className="ml-3">{t('percentage_to_cgpa')}</span>
                                        </Link>
                                    </li>
                                </div>
                                <div className='h-16 overflow-y-auto'>
                                    <li>
                                        <Link
                                            href="/educational-calculator/cgpa-to-percentage-calculator/gpa-to-cgpa-calculator?filter=GPA+to+CGPA"
                                            className="flex items-center text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-4 py-3 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            <Image
                                                src={image1.src}
                                                height={image1.height}
                                                width={image1.width}
                                                alt="image description"
                                            /> <span className="ml-3">{t('gpa_to_cgpa')}</span>
                                        </Link>
                                    </li>
                                </div>
                                <div className='h-16 overflow-y-auto'>
                                    <li>
                                        <Link
                                            href="/educational-calculator/cgpa-to-percentage-calculator/cgpa-to-gpa-calculator?filter=CGPA+to+GPA"
                                            className="flex items-center text-base font-medium text-gray-800 bg-gray-100 rounded-lg px-4 py-3 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            <Image
                                                src={image.src}
                                                height={image.height}
                                                width={image.width}
                                                alt="image description"
                                            /> <span className="ml-3">{t('cgpa_to_gpa')}</span>
                                        </Link>
                                    </li>
                                </div>
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
        </div>
    );
};

export default Cgpatogpa;
