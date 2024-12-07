import { useState, useEffect } from "react";
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from "react-i18next";


const CgpaToGpaContent = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const theme = useTheme();
    const [isMainExpanded, setIsMainExpanded] = useState(false);
    const { t } = useTranslation();

    const toggleMainExpand = () => {
        setIsMainExpanded(!isMainExpanded);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    useEffect(() => {
        if (isMainExpanded !== null) {
            scrollToSection(`section${isMainExpanded}`);
        }
    }, [isMainExpanded]);

    return (
        <div className={`mx-auto relative bg-white text-justify p-6  leading-relaxed ${theme === "dark" ? "dark" : "light"} dark:bg-gray-900 dark:text-white  `}>
            <div className="space-y-6 mb-4 p-4">
                <h2 id="section1" className="text-3xl font-bold  dark:text-white mb-6 text-blue-500">{t("Heading")}</h2>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    {t("Paragraph1")}
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    {t("Paragraph2")}
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    {t("Paragraph3")}
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    {t("Paragraph4")}
                </p>

                <h2 id="section2" className="text-2xl font-semibold text-blue-500 dark:text-white mt-8 mb-6">{t("section2")}</h2>
                <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                    <span className="font-semibold"> {t("title")} =</span>
                    <span className="inline-block ml-2 translate-y-2">
                        <div className="border-b border-gray-600 dark:border-gray-400 pb-2"> {t("numerator")}</div>
                        <span className="block text-sm text-gray-600 dark:text-gray-400">{t("denominator")}</span>
                    </span>
                    <span className="inline-block ml-4">× {t("multiplier")}</span>
                </p>
            </div>

            <div className="bg-white  rounded-lg shadow-lg max-w-4xl mx-auto border-t-4 mt-8 mb-4 dark:bg-gray-800 dark:border lue-400">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl p-4 font-semibold text-blue-600 dark:text-blue-400">{t("tableOfContents")}</h2>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none transition-all duration-300 dark:text-blue-400"
                    >
                        {isExpanded ? (
                            <span className="mr-4">&#9650;</span>
                        ) : (
                            <span className="mr-4">&#9660;</span>
                        )}
                    </button>
                </div>
                {isExpanded && (
                    <div className="grid grid-cols-2 gap-x-6 mb-4">
                        <ol className="space-y-3 p-4">
                            {[
                                t("1"),
                                t("2"),
                                t("3"),
                                t("4"),
                                t("5"),
                                t("6"),
                            ].map((item, index) => (
                                <li key={index + 1}>
                                    <button
                                        onClick={() => {
                                            scrollToSection(`section${index + 1}`);
                                            setIsMainExpanded(isMainExpanded === index + 1 ? null : index + 1);
                                        }}
                                        className="w-full text-left text-blue-600 hover:text-blue-800 focus:outline-none transition-all hover:scale-[102%] duration-300 dark:text-blue-400 dark:hover:text-blue-600"
                                    >
                                        {index + 1}. {item}
                                    </button>
                                </li>
                            ))}
                        </ol>
                        <ol className="space-y-3 p-4">
                            {[
                                t("7"),
                                t("8"),
                                t("9"),
                                t("10"),
                                t("11"),
                                t("12"),
                                t("13"),
                                t("14"),

                            ].map((item, index) => (
                                <li key={index + 7}>
                                    <button
                                        onClick={() => {
                                            scrollToSection(`section${index + 7}`)
                                            setIsMainExpanded(isMainExpanded === index + 7 ? null : index + 7);
                                        }}
                                        className="w-full text-left text-blue-600 hover:text-blue-800 focus:outline-none transition-all hover:scale-[102%] duration-300 dark:text-blue-400 dark:hover:text-blue-600"
                                    >
                                        {index + 7}. {item}
                                    </button>
                                </li>
                            ))}
                            {!isMainExpanded && (
                                <div className="absolute bottom-20 left-0 right-0 h-60 bg-gradient-to-t from-white to-transparent"></div>
                            )}
                        </ol>

                    </div>
                )}

            </div>

            {isMainExpanded && (
                <>

                    <div className="space-y-6 mb-4 p-4">
                        <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
                            {t('cgpaToGpaNote')}
                        </p>

                        <h2
                            id="section3"
                            className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-6"
                        >
                            {t('section3Title')}
                        </h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('section3Content')}
                        </p>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-4">
                            {t('understandingCGPAGPA')}
                        </h4>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('cgpaDefinition')}
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('gpaDefinition')}
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('regionalUsage')}
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
                            {t('learnMoreGradingSystems')}
                            <a href="/grading-systems" className="text-blue-600 hover:text-blue-800 transition duration-300">
                                {t('clickHere')}
                            </a>.
                        </p>

                    </div>
                    <div className="space-y-6 m-4 ">
                        <h2 id="section4" className="text-3xl font-bold text-blue-500 dark:text-white mb-6">
                            {t('whyNeedConversion')}
                        </h2>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('conversionReason1')}
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('conversionReason2')}
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('conversionReason3')}
                        </p>

                        <table className="min-w-full text-center table-auto border ">
                            <thead className="border-b border-blue-500 dark:border-blue-600 bg-blue-500 text-white">
                                <tr>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white"> {t("cgpaScale")}</th>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white">{t("usGpaScale")}</th>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white">{t("usLetterGrade")}</th>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white">{t("percentageScale")}</th>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white">{t("ukGrade")}</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-700 dark:text-gray-300">
                                <tr>
                                    <td className="px-4 border py-2">9.5 - 10</td>
                                    <td className="px-4 border py-2">4.0</td>
                                    <td className="px-4 border py-2">A+</td>
                                    <td className="px-4 border py-2">95-100</td>
                                    <td className="px-4 border py-2">{t("ukGrade1")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">9.0 - 9.4</td>
                                    <td className="px-4 border py-2">3.9</td>
                                    <td className="px-4 border py-2">A</td>
                                    <td className="px-4 border py-2">90-94</td>
                                    <td className="px-4 border py-2">{t("ukGrade2")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">8.5 - 8.9</td>
                                    <td className="px-4 border py-2">3.7</td>
                                    <td className="px-4 border py-2">A-</td>
                                    <td className="px-4 border py-2">85-89</td>
                                    <td className="px-4 border py-2">{t("ukGrade3")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">8.0 - 8.4</td>
                                    <td className="px-4 border py-2">3.5</td>
                                    <td className="px-4 border py-2">B+</td>
                                    <td className="px-4 border py-2">80-84</td>
                                    <td className="px-4 border py-2">{t("ukGrade4")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">7.5 - 7.9</td>
                                    <td className="px-4 border py-2">3.3</td>
                                    <td className="px-4 border py-2">B</td>
                                    <td className="px-4 border py-2">75-79</td>
                                    <td className="px-4 border py-2">{t("ukGrade5")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">7.0 - 7.4</td>
                                    <td className="px-4 border py-2">3.0</td>
                                    <td className="px-4 border py-2">B-</td>
                                    <td className="px-4 border py-2">70-74</td>
                                    <td className="px-4 border py-2">{t("ukGrade6")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">6.5 - 6.9</td>
                                    <td className="px-4 border py-2">2.7</td>
                                    <td className="px-4 border py-2">C+</td>
                                    <td className="px-4 border py-2">65-69</td>
                                    <td className="px-4 border py-2">{t("ukGrade7")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">6.0 - 6.4</td>
                                    <td className="px-4 border py-2">2.5</td>
                                    <td className="px-4 border py-2">C</td>
                                    <td className="px-4 border py-2">60-64</td>
                                    <td className="px-4 border py-2">{t("ukGrade8")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">5.5 - 5.9</td>
                                    <td className="px-4 border py-2">2.0</td>
                                    <td className="px-4 border py-2">D</td>
                                    <td className="px-4 border py-2">55-59</td>
                                    <td className="px-4 border py-2">{t("ukGrade9")}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">{t("below_5_5")}</td>
                                    <td className="px-4 border py-2">{t("below_2_0")}</td>
                                    <td className="px-4 border py-2">F</td>
                                    <td className="px-4 border py-2">{t("below")}</td>
                                    <td className="px-4 border py-2">{t("ukGrade10")}</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 id="section5" className="text-2xl font-semibold dark:text-white mt-8 mb-6 text-blue-500">
                            {t('section5_title')}
                        </h2>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('feature_1')}
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('feature_2')}
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('feature_3')}
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('feature_4')}
                        </p>
                    </div>
                    <div className="space-y-6 p-4">
                        <h2 id="section6" className="text-3xl font-bold dark:text-white mb-6 text-blue-500">
                            {t('section6_title')}
                        </h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('instruction_1')}
                        </p>

                        <ol className="list-decimal list-inside text-lg text-gray-800 dark:text-gray-200 space-y-2">
                            <li>{t('step_1')}</li>
                            <li>{t('step_2')}</li>
                            <li>{t('step_3')}</li>
                            <li>{t('step_4')}</li>
                            <li>{t('step_5')}</li>
                            <li>{t('step_6')}</li>
                        </ol>

                        <h2 id="section7" className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-6">
                            {t('section7_title')}
                        </h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('paragraph_1')}
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('paragraph_2')}
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('paragraph_3')}
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                            <span className="font-semibold">{t('formula_title')}</span>
                            <span className="inline-block ml-2">
                                <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                    {t('formula_1')}
                                </div>
                                <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                    {t('formula_2')}
                                </span>
                            </span>
                            <span className="inline-block ml-4">{t('formula_3')}</span>
                        </p>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                            {t('example_title')}
                        </h3>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('example_description')}
                        </p>

                        <ul className="list-disc pl-6 text-lg text-gray-800 dark:text-gray-200">
                            <li>{t('example_list_item_1')}<b>{t("bold")}</b></li>
                            <li>{t('example_list_item_2')}<b>{t("bold1")}</b></li>
                        </ul>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t('conversion_description')}
                        </p>

                        <div className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                            <span className="font-semibold"> <p className="text-lg text-gray-800 dark:text-gray-200  mb-6">
                                <span className="font-semibold"> GPA =</span>
                                <div className="inline-block ml-2">
                                    <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">CGPA</div>
                                    <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-2">{t("maxcgpa")}</span>
                                </div>
                                <span className="inline-block ml-4">× {t("maxgpa")}</span>
                            </p></span>
                            <span className="font-semibold">GPA =</span>
                            <div className="inline-block ml-2">
                                <div className="border-b border-gray-600 dark:border-gray-400 pb-1 translate-y-2">8.5 × 4.0 </div>
                                <div className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">10</div>
                            </div>
                            <span className="inline-block ml-4"> = 3.4</span>
                        </div>


                        <h2 id="section8" className="text-2xl font-semibold  dark:text-white mt-8 mb-6 text-blue-500">{t("university_specific_conversions")}</h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t("university_specific_paragraph1")}
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t("university_specific_paragraph2")}
                        </p>

                        <h2 id="section9" className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-6"> {t("normalization_factor")}</h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t("normalization_factor_paragraph1")}
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {t("normalization_factor_paragraph2")}
                        </p>
                    </div>
                    <div className=" py-6 px-4 dark:bg-gray-800 rounded-md text-gray-800 dark:text-gray-200">

                        <h2 id="section10" className="text-2xl font-semibold mb-4 text-blue-500">
                            {t("cgpa_to_gpa_table_title")}
                        </h2>
                        <p className="text-lg mb-6">
                            {t("cgpa_to_gpa_table_paragraph")}
                        </p>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border-collapse border text-center dark:border-blue-600">
                                <thead className=" dark:bg-blue-500 bg-blue-500 text-white">
                                    <tr>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            {t("cgpa_column")}
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            {t("us_gpa_column")}
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            {t("gpa_4_3_column")}
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            {t("gpa_5_0_column")}
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            {t("gpa_7_0_column")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            10.0
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            4.0
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            4.3
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            5.0
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            7.0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            9.9
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            4.0
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            4.2
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            4.9
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            6.9
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            9.8
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            4.0
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            4.2
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            4.9
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            6.9
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">9.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.9</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">9.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.9</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">9.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.9</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">9.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.7</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">9.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.7</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">9.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.7</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">9.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.7</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">9.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.7</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">6.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4.0</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.9</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.8</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.7</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.6</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.4</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below-2_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"> {t("below_2_5")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_5")}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below-2_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"> {t("below_2_5")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_5")}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below-2_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"> {t("below_2_5")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_5")}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below-2_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"> {t("below_2_5")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_5")}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below-2_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"> {t("below_2_5")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_0")}</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{t("below_3_5")}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="max-w-4xl mx-auto mt-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            <h2 id="section11" className="text-2xl font-semibold mb-4 text-blue-500">{t("title-")}</h2>
                            <p className="text-lg mb-4">
                                {t("description.")}
                            </p>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2"> {t("title.")}</h3>
                                <p>
                                    {t("description-")}
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">{t(".title")}</h3>
                                <p>
                                    {t("-description")}
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {t("section3.title")}
                                </h3>
                                <p>
                                    {t("section3.description")}
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-2">
                                    {t("keyTakeaways.title")}
                                </h3>
                                <p>
                                    {t("keyTakeaways.description")}
                                </p>
                            </section>

                        </div>
                        <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            <h2 id="section12" className="text-2xl font-semibold mb-4 text-blue-500">
                                {t("section12.title")}
                            </h2>
                            <p className="text-lg mb-4">
                                {t("section12.description")}
                            </p>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {t("section12.subsection1.title")}
                                </h3>
                                <p>
                                    {t("section12.subsection1.description")}
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {t("section12.subsection2.title")}
                                </h3>
                                <p>
                                    {t("section12.subsection2.description")}
                                </p>
                            </section>
                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {t("section13.subsection1.title")}
                                </h3>
                                <p>
                                    {t("section13.subsection1.description")}
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {t("section13.subsection2.title")}
                                </h3>
                                <p>
                                    {t("section13.subsection2.description")}
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {t("section13.subsection3.title")}
                                </h3>
                                <p>
                                    {t("section13.subsection3.description")}
                                </p>
                            </section>

                            <section>
                                <h2 id="section13" className="text-2xl text-blue-600 font-semibold mb-2">
                                    {t("section13.conclusion.title")}
                                </h2>
                                <p>
                                    {t("section13.conclusion.description")}
                                </p>
                            </section>
                        </div>
                        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 ">
                            <h2 id="section14" className="text-2xl font-semibold text-blue-500 mb-6">FAQs for CGPA to GPA Converter</h2>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: How to convert CGPA to GPA?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> To convert CGPA to GPA, the commonly used formula is CGPA obtained by you upon Maximum CGPA value by university, multiplied by Maximum GPA value by university.

                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: Indian CGPA to GPA calculator?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> To convert Indian CGPA to USA GPA, use a multiplication factor of 4/10 with your scored CGPA.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: How to convert CGPA to GPA​?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> The standard formula for converting CGPA to GPA is:
                                </p>
                                <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                                    <span className="font-semibold"> GPA =</span>
                                    <span className="inline-block ml-2">
                                        <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">CGPA Obtained</div>
                                        <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">Max CGPA</span>
                                    </span>
                                    <span className="inline-block ml-4">× Max GPA</span>
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: How to calculate CGPA from GPA?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> For calculating CGPA from GPA formula is:
                                </p>
                                <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                                    <span className="font-semibold"> CGPA =</span>
                                    <span className="inline-block ml-2">
                                        <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">GPA Obtained</div>
                                        <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">Max GPA</span>
                                    </span>
                                    <span className="inline-block ml-4">× Max CGPA</span>
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: How to convert GPA to CGPA?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> Converting GPA to CGPA is inverse process of CGPA to GPA, if you know your GPA and wants to calculate your CGPA then formula is:
                                </p>
                                <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">

                                    <span className="inline-block ml-2">
                                        <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">GPA Obtained</div>
                                        <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">Max GPA</span>
                                    </span>
                                    <span className="inline-block ml-4">× Max CGPA</span>
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: Indian CGPA to US GPA?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> US universities use a 4.0 GPA scale, while Indian universities use a 10-point scale. To convert Indian CGPA to US GPA, use a multiplication factor of 4/10 with your scored CGPA.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: Indian CGPA to German GPA?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> German institutes use the Modified Bavarian Formula for conversion. The formula for calculating German GPA is:
                                </p>
                                <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                                    <span className="inline-block ml-2">
                                        <div className="border-b border-gray-600 dark:border-gray-400 pb-2 ">1 + 3 × (Max Grade - Obtained CGPA) / (Max Grade - Minimum Passing Grade)</div>
                                    </span>
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: GPA to CGPA calculator ANNA University?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> The formula for converting GPA to CGPA is:
                                </p>
                                <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                                    <span className="inline-block ml-2">
                                        <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">GPA Obtained</div>
                                        <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">Max GPA</span>
                                    </span>
                                    <span className="inline-block ml-4">× Max CGPA</span>
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: VIT CGPA to US GPA?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> VIT follows a 10-point grading scale. To convert it into US GPA, use a 2.5 or 4/10 scaling for approximation.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: Indian CGPA to UK GPA?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> To convert Indian CGPA to UK GPA, refer to the specific university’s guidelines, as UK institutions convert Indian CGPA to their Class Honors System (First, Second, Third, and more).
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: SRM GPA to CGPA calculator?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> For calculating SRM GPA to CGPA, you need the total credit hours and total grade points earned. However, you can use the standard formula for conversion:
                                </p>
                                <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">

                                    <span className="inline-block ml-2">
                                        <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">GPA Obtained</div>
                                        <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">Max GPA</span>
                                    </span>
                                    <span className="inline-block ml-4">× Max CGPA</span>
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-blue-500 mb-2">Q: WES CGPA to GPA calculator?</h3>
                                <p className="text-lg mb-4">
                                    <span className="font-semibold">A:</span> WES (World Education Services) evaluates academic transcripts, and GPA is assigned for credential verification by considering the grading scale and absolute scores in individual courses.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className="text-center  ">
                <button
                    onClick={toggleMainExpand}
                    className="text-blue-600 hover:text-blue-800   dark:text-gray-400 text-4xl dark:hover:text-blue-600 animate-bounce transition-all duration-300 focus:outline-none"
                >
                    {isMainExpanded ? (
                        <div className="translate-x-10 translate-y-10">
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: "80px",
                                    right: "20px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "50px",
                                    height: "50px",
                                    color: "#000",
                                    border: "1px solid #ccc",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                                    zIndex: 1000,
                                }}
                                className="animate-bounce bg-blue-200"
                            >
                                <span style={{ fontSize: "20px", fontWeight: "bold" }}>↑</span>
                            </div>
                        </div>
                    ) : (
                        <div className='translate-x-10 translate-y-[-13px]'>
                            <div
                                style={{
                                    display: "flex",
                                    position: "fixed",
                                    bottom: "20px",
                                    right: "20px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "50px",
                                    height: "50px",
                                    color: "#000",
                                    border: "1px solid #ccc",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                                    zIndex: 1000,
                                }}
                                className="animate-bounce bg-blue-200"
                            >
                                <span style={{ fontSize: "20px", fontWeight: "bold" }}>↓</span>
                            </div>
                        </div>
                    )}

                </button>
            </div>
        </div>
    );
}

export default CgpaToGpaContent;
