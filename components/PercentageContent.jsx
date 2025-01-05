import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PercentageContent = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMainExpanded, setIsMainExpanded] = useState(false);
    const { t } = useTranslation();
    const {theme} = useTheme


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
        <div className={`mx-auto relative bg-white text-justify py-4  leading-relaxed ${theme === "dark" ? "dark" : "light"} dark:bg-gray-900 dark:text-white  `}>
            <div className="dark:bg-gray-900  sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <h2 id="section1" className="text-3xl font-bold mb-4 text-blue-600">
                    {t('section1_title')}
                </h2>
                <p className="mb-6 text-lg leading-relaxed">
                    {t('section1_paragraph').split("Lord Calculator")[0]}
                    <span className="font-bold">Lord Calculator</span>
                    {t('section1_paragraph').split("Lord Calculator")[1]}
                </p>

                <h2 id="section2" className="text-2xl font-semibold mb-4 text-blue-500">
                    {t('section2_title')}
                </h2>
            </div>
            <div className="mt-4 text-center">
                <div className="text-blue-600 font-bold inline-block align-middle mr-2">
                    {t('cgpa_title')}
                </div>
                <div className="inline-block align-middle">
                    <span className="text-black font-bold">
                        {t('percentage_achieved')}
                    </span>
                    <hr className="w-full border-t-2 border-blue-600" />
                    <span className="text-black font-bold">
                        {t('multiplication_factor')}
                    </span>
                </div>
            </div>
            <div className="bg-white  rounded-lg shadow-lg max-w-3xl mx-auto border-t-4 mt-8 mb-4 dark:bg-gray-800 dark:border lue-400">
            <div className="flex justify-between items-center">
                    <h2 className="text-xl p-4 font-semibold text-blue-600 dark:text-blue-400">{t('table_of_contents')}</h2>
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
                                t('percentage_to_cgpa_calculator'),
                                t('percentage_to_cgpa_formula'),
                                t('lord_calculator_percentage_to_cgpa'),
                                t('how_to_use_lord_calculator'),
                                t('what_is_percentage'),
                                t('what_is_cgpa'),
                                t('when_to_use_lord_calculator'),
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
                                t('common_mistakes'),
                                t('why_different_grading_scales'),
                                t('percentage_to_cgpa_for_boards'),
                                t('pros_and_cons_of_calculators'),
                                t('frequently_asked_questions'),
                            ].map((item, index) => (
                                <li key={index + 8}>
                                    <button
                                        onClick={() => {
                                            scrollToSection(`section${index + 8}`);
                                            setIsMainExpanded(isMainExpanded === index + 8 ? null : index + 8);
                                        }}
                                        className="w-full text-left text-blue-600 hover:text-blue-800 focus:outline-none transition-all hover:scale-[102%] duration-300 dark:text-blue-400 dark:hover:text-blue-600"
                                    >
                                        {index + 8}. {item}
                                    </button>
                                </li>
                            ))}
                            {!isMainExpanded && (
                                <div className="absolute bottom-20 left-0 right-0 h-72 bg-gradient-to-t from-white to-transparent"></div>
                            )}
                        </ol>
                    </div>
                )}
            </div>

            {isMainExpanded && (
                <>
                    <div className="bg-blue-50 dark:bg-gray-700 p-4 mt-8 rounded-lg mb-6">
                        <p className="font-semibold">{t('cgpa_formula')}</p>
                        <p className="italic mt-2">
                            {t('example_text')}
                        </p>

                        <div className="mt-4 text-center">
                            <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2">CGPA = </div>
                            <div className="inline-block align-middle">
                                <span className="text-black font-bold">92.4</span>
                                <hr className="w-full border-t-2 border-blue-600" />
                                <span className="text-black font-bold">9.5</span>
                                <div className="text-green-600 font-bold mt-2">= 9.72</div>
                            </div>
                        </div>
                    </div>


                    <h2 id='section3' className="text-2xl font-semibold mb-4 text-blue-500">
                        {t('section3_title')}
                    </h2>
                    <p className="mb-6">
                        {t('section3_text1')}
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">
                            <span className="font-bold">{t('multiplication_factors.4_scale')}</span>
                        </li>
                        <li className="mb-2">
                            <span className="font-bold">{t('multiplication_factors.5_scale')}</span>
                        </li>
                        <li className="mb-2">
                            <span className="font-bold">{t('multiplication_factors.10_scale')}</span>
                        </li>
                    </ul>
                    <p className="mb-6">
                        <strong className="italic">{t('section3_text2')}</strong>
                    </p>
                    <h2 id="section4" className="text-2xl font-semibold mb-4 text-blue-500">
                        {t('section4_title')}
                    </h2>
                    <p className="mt-2 mb-4">
                        {t('section4_text1')}
                    </p>
                    <ol className="list-decimal pl-6 mb-6">
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('section4_steps.step1') }} />
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('section4_steps.step2') }} />
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('section4_steps.step3') }} />
                        <li className="mb-2" dangerouslySetInnerHTML={{ __html: t('section4_steps.step4') }} />
                    </ol>
                    <p className="mb-4">{t('section4_text2')}</p>
                    <h2 id="section5" className="text-2xl font-semibold mb-4 text-blue-500">
                        {t('section5_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">
                                {t('section5_percentage_title')}
                            </h3>
                            <p>{t('section5_percentage_text')}</p>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">
                                {t('section5_cgpa_title')}
                            </h3>
                            <p>{t('section5_cgpa_text')}</p>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <h2 id="section6" className="font-semibold text-xl text-blue-500">
                            {t('section6_title')}
                        </h2>
                        <p className="italic mt-2">{t('section6_description')}</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">{t('section6_formula_title')}</p>
                        <p className="italic mt-2">{t('section6_formula_description')}</p>
                        <div className="mt-4 text-center">
                            <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2">CGPA = </div>
                            <div className="inline-block align-middle mb-8">
                                <div className="flex flex-col items-center">
                                    <span className="text-black font-bold">{t('section6_formula_sgpas')}</span>
                                    <hr className="w-full border-t-2 border-blue-600" />
                                    <span className="text-black font-bold">{t('section6_formula_divisor')}</span>
                                </div>
                            </div>
                        </div>
                        <p className="italic mt-2">{t('section6_example_title')}</p>
                        <p>{t('section6_example')}</p>
                    </div>
                    <div className="mt-4 text-center">
                        <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2">CGPA = </div>
                        <div className="inline-block align-middle">
                            <div className="flex flex-col items-center">
                                <span className="text-black font-bold">(6 + 8.5 + 7 + 9.5)</span>
                                <hr className="w-full border-t-2 border-blue-600" />
                                <span className="text-black font-bold">4</span>
                            </div>
                            <div className="text-green-600 font-bold mt-2">= 7.75</div>
                        </div>
                    </div>



                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">{t('section_method2_title')}</p>
                        <p className="italic mt-2">{t('section_method2_description')}</p>
                        <div className="mt-4 text-center">
                            <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2 text-md">CGPA = </div>
                            <div className="inline-block align-middle text-[10px]">
                                <div className="flex flex-col items-center">
                                    <span className="text-black font-bold">{t('section_method2_formula_sgpa')}</span>
                                    <hr className="w-full border-t-2 border-blue-600 mb-8" />
                                    <div className="text-black font-bold translate-y-[-28px]">{t('section_method2_formula_divisor')}</div>
                                </div>
                            </div>
                        </div>
                        <p className="italic mt-2">{t('section_method2_example_title')}</p>
                        <p>{t('section_method2_example')}</p>
                    </div>
                    <div className="mt-4 text-center">
                        <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2">CGPA = </div>
                        <div className="inline-block align-middle">
                            <div className="flex flex-col items-center">
                                <span className="text-black font-bold">(7.2 × 4 + 6.5 × 3 + 8.9 × 3 + 9.6 × 5)</span>
                                <hr className="w-full border-t-2 border-blue-600" />
                                <span className="text-black font-bold">(4 + 3 + 3 + 5)</span>
                            </div>
                            <div className="text-green-600 font-bold mt-2">= 8.2</div>
                        </div>
                    </div>



                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">{t('section_percentage_formula_title')}</p>
                        <p className="italic mt-2">{t('section_percentage_formula_description')}</p>
                        <div className="mt-4 text-center">
                            <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2">{t('section_percentage_formula_equation')}</div>
                            <div className="inline-block align-middle">
                                <div className="items-center">
                                    <span className="text-black font-bold">{t('section_percentage_formula_numerator')}</span>
                                    <span className="text-black font-bold">{t('section_percentage_formula_multiplier')}</span>
                                    <div className="w-full border-t-2 border-blue-600 mt-2 mb-2"></div>
                                    <div className="justify-center items-center">
                                        <span className="text-black font-bold">{t('section_percentage_formula_denominator')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="italic mt-2">
                            <span className="font-semibold">{t('example_percentage_title')}</span> {t('example_percentage_description')}
                        </p>
                        <div className="mt-4 text-center">
                            <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2">{t('example_percentage_equation')}</div>
                            <div className="inline-block align-middle">
                                <div className="flex flex-col items-center">
                                    <span className="text-black font-bold">(295 + 265 + 273 + 264)*100</span>
                                    <hr className="w-full border-t-2 border-blue-600" />
                                    <span className="text-black font-bold">1200</span>
                                </div>
                                <div className="text-green-600 font-bold mt-2">= 91.41%</div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="italic mt-2">{t('cgpa_to_percentage_note')}</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">{t('calculators_usage_title')}</p>
                        <p className="italic mt-2">{t('calculators_usage_description')}</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">{t('confusion_about_terms_title')}</p>
                        <p className="italic mt-2">
                            {t('confusion_about_terms_description')}{' '}
                            <a href="#" className="text-blue-600 font-bold">
                                {t('confusion_about_terms_link_text')}
                            </a>.
                        </p>
                    </div>

                    <p className="mb-4">{t('percentage_to_cgpa_tool_intro')}</p>
                    <h2 id="section7" className="text-2xl font-semibold mb-4 text-[#010A3B]">
                        {t('percentage_to_cgpa_tool_usage_title')}
                    </h2>
                    <p className="mb-4">{t('percentage_to_cgpa_tool_usage_description')}</p>

                    <h3 className="text-xl font-semibold mb-2">{t('usage_higher_studies_title')}</h3>
                    <p className="mb-4">{t('usage_higher_studies_description1')}</p>
                    <p className="mb-4">{t('usage_higher_studies_description2')}</p>

                    <h3 className="text-xl font-semibold mb-2">{t('usage_competitive_exams_title')}</h3>
                    <p className="mb-4">{t('usage_competitive_exams_description')}</p>

                    <h3 className="text-xl font-semibold mb-2">{t('usage_comparative_measurement_title')}</h3>
                    <p className="mb-4">{t('usage_comparative_measurement_description')}</p>

                    <p className="mb-4">{t('usage_conclusion')}</p>

                    <h2 id="section8" className="text-2xl font-semibold mb-4 text-blue-500">
                        {t('common_mistakes_title')}
                    </h2>
                    <p className="mb-4">{t('common_mistakes_intro')}</p>
                    <ul className="list-disc pl-6 mb-6 mt-4">
                        <li className="mb-2">{t('mistake_decimal_points')}</li>
                        <li className="mb-2">{t('mistake_grading_scale')}</li>
                        <li className="mb-2">{t('mistake_conversion_formula')}</li>
                        <li className="mb-2">{t('mistake_other_conversions')}</li>
                    </ul>
                    <h2 id="section9" className="text-2xl font-semibold mb-4 text-blue-500">
                        {t('grading_scales_title')}
                    </h2>
                    <p className="mb-4">{t('grading_scales_intro')}</p>
                    <ul className="list-disc pl-6 mb-6 mt-4">
                        <li className="mb-2">
                            <strong>{t('reason_historical_cultural').split(':')[0]}:</strong> {t('reason_historical_cultural').split(':')[1]}
                        </li>
                        <li className="mb-2">
                            <strong>{t('reason_assessment_approach').split(':')[0]}:</strong> {t('reason_assessment_approach').split(':')[1]}
                        </li>
                        <li className="mb-2">
                            <strong>{t('reason_international_standards').split(':')[0]}:</strong> {t('reason_international_standards').split(':')[1]}
                        </li>
                        <li className="mb-2">
                            <strong>{t('reason_universal_standard').split(':')[0]}:</strong> {t('reason_universal_standard').split(':')[1]}
                        </li>
                    </ul>
                    <h2 id="section10" className="text-2xl font-semibold mb-4 text-blue-500">
                        {t('conversion_title')}
                    </h2>
                    <table className="table-auto w-full border-collapse border border-blue-400 text-left mb-6">
                        <thead className='text-center'>
                            <tr className="bg-blue-100 dark:bg-blue-800">
                                <th className="border border-blue-400 p-2">{t('table_heading_institution')}</th>
                                <th className="border border-blue-400 p-2">{t('table_heading_formula')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("cbse1")}</td>
                                <td className="border border-blue-400 p-2">{t("cbse")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("icse1")}</td>
                                <td className="border border-blue-400 p-2">{t("icse")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("maharashtra1")}</td>
                                <td className="border border-blue-400 p-2">{t("maharashtra")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("anna_university1")}</td>
                                <td className="border border-blue-400 p-2">{t("anna_university")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("jntu1")}</td>
                                <td className="border border-blue-400 p-2">{t("jntu")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("vtu1")}</td>
                                <td className="border border-blue-400 p-2">{t("vtu")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("gtu1")}</td>
                                <td className="border border-blue-400 p-2">{t("gtu")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("mu1")}</td>
                                <td className="border border-blue-400 p-2">{t("mu")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("mahe1")}</td>
                                <td className="border border-blue-400 p-2">{t("mahe")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("amity1")}</td>
                                <td className="border border-blue-400 p-2">{t("amity")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("vit1")}</td>
                                <td className="border border-blue-400 p-2">{t("vit")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("sppu1")}</td>
                                <td className="border border-blue-400 p-2">{t("sppu")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("iit1")}</td>
                                <td className="border border-blue-400 p-2">{t("iit")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("nit1")}</td>
                                <td className="border border-blue-400 p-2">{t("nit")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("bits_pilani1")}</td>
                                <td className="border border-blue-400 p-2">{t("bits_pilani")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("du1")}</td>
                                <td className="border border-blue-400 p-2">{t("du")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("bhu1")}</td>
                                <td className="border border-blue-400 p-2">{t("bhu")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("osmania1")}</td>
                                <td className="border border-blue-400 p-2">{t("osmania")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("pu1")}</td>
                                <td className="border border-blue-400 p-2">{t("pu")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("srm1")}</td>
                                <td className="border border-blue-400 p-2">{t("srm")}</td>
                            </tr>
                            <tr className="bg-blue-100 dark:bg-blue-800">
                                <th colSpan="2" className="text-center p-2">International Institutions</th>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("toronto1")}</td>
                                <td className="border border-blue-400 p-2">{t("toronto")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2"> {t("ubc1")}</td>
                                <td className="border border-blue-400 p-2">{t("ubc")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("anu1")}</td>
                                <td className="border border-blue-400 p-2">{t("anu")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("sydney1")}</td>
                                <td className="border border-blue-400 p-2">{t("sydney")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("melbourne1")}</td>
                                <td className="border border-blue-400 p-2">{t("melbourne")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("uc_system1")}</td>
                                <td className="border border-blue-400 p-2">{t("uc_system")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("harvard1")}</td>
                                <td className="border border-blue-400 p-2">{t("harvard")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("oxford1")}</td>
                                <td className="border border-blue-400 p-2">{t("oxford")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("cambridge1")}</td>
                                <td className="border border-blue-400 p-2">{t("cambridge")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("nus1")}</td>
                                <td className="border border-blue-400 p-2">{t("nus")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("hku1")}</td>
                                <td className="border border-blue-400 p-2">{t("hku")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("tum1")}</td>
                                <td className="border border-blue-400 p-2">{t("tum")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("eth_zurich1")}</td>
                                <td className="border border-blue-400 p-2">{t("eth_zurich")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("tokyo1")}</td>
                                <td className="border border-blue-400 p-2">{t("tokyo")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("cape_town1")}</td>
                                <td className="border border-blue-400 p-2">{t("cape_town")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("mcgill1")}</td>
                                <td className="border border-blue-400 p-2">{t("mcgill")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("peking1")}</td>
                                <td className="border border-blue-400 p-2">{t("peking")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("ntu1")}</td>
                                <td className="border border-blue-400 p-2">{t("ntu")}</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">{t("aut1")}</td>
                                <td className="border border-blue-400 p-2">{t("aut")}</td>
                            </tr>
                        </tbody>
                    </table>
                    <section className="py-8 px-4">
                        <h2 id="section11" className="text-xl font-semibold  mb-4">
                            {t('title--')}
                        </h2>

                        <div className="pro-con-container">
                            <h3 className="text-lg font-semibold mb-4">{t('pros_title')}</h3>
                            <ul className="list-disc pl-6">
                                <li>{t('pros_1')}</li>
                                <li>{t('pros_2')}</li>
                                <li>{t('pros_3')}</li>
                                <li>{t('pros_4')}</li>
                            </ul>
                        </div>

                        <div className="pro-con-container mt-6">
                            <h3 className="text-lg font-semibold mb-4">{t('cons_title')}</h3>
                            <ul className="list-disc pl-6">
                                <li>{t('cons_1')}</li>
                                <li>{t('cons_2')}</li>
                            </ul>
                        </div>

                        <div className="summary-container mt-8">
                            <h3 className="text-lg font-semibold mb-4">{t('summary_title')}</h3>
                            <p>{t('summary_1')}</p>
                            <p>{t('summary_2')}</p>
                        </div>
                    </section>

                    <section className="py-4 px-2">
                        <h2 id="section12" className="text-2xl font-semibold text-left mb-6 text-blue-500">
                            {t('faq_title')} {/* Translated FAQ title */}
                        </h2>

                        <div className="faq-container">
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">
                                    {t('faq_1_question')} {/* Translated Question */}
                                </h3>
                                <p className="ml-4">
                                    {t('faq_1_answer')} {/* Translated Answer */}
                                </p>
                            </div>

                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">
                                    {t('faq_2_question')} {/* Translated Question */}
                                </h3>
                                <p className="ml-4">
                                    {t('faq_2_answer')} {/* Translated Answer */}
                                </p>
                                <p className="ml-8">
                                    {t('faq_2_formula')} {/* Translated Formula */}
                                </p>
                            </div>

                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">
                                    {t('faq_3_question')} {/* Translated Question */}
                                </h3>
                                <p className="ml-4">
                                    {t('faq_3_answer')} {/* Translated Answer */}
                                </p>
                                <ul className="list-disc pl-8">
                                    <li>{t('faq_3_step_1')}</li>
                                    <li>{t('faq_3_step_2')}</li>
                                    <li>{t('faq_3_step_3')}</li>
                                    <li>{t('faq_3_step_4')}</li>
                                </ul>
                            </div>

                            <div id="faq-section" className="faq-section">


                                <div className="faq-container">
                                    <div className="faq-item mb-6">
                                        <h3 className="text-lg font-semibold text-blue-500">
                                            {t('faq_4_question')} {/* Translated Question */}
                                        </h3>
                                        <p className="ml-4">
                                            {t('faq_4_answer')} {/* Translated Answer */}
                                            <a href="#" className="text-blue-500">{t('faq_4_link')}</a> {/* Translated Link */}
                                        </p>
                                    </div>

                                    <div className="faq-item mb-6">
                                        <h3 className="text-lg font-semibold text-blue-500">
                                            {t('faq_5_question')} {/* Translated Question */}
                                        </h3>
                                        <p className="ml-4">
                                            {t('faq_5_answer')} {/* Translated Answer */}
                                        </p>
                                        <ul className="list-disc pl-8">
                                            <li>{t('faq_5_mistake_1')}</li>
                                            <li>{t('faq_5_mistake_2')}</li>
                                            <li>{t('faq_5_mistake_3')}</li>
                                        </ul>
                                    </div>

                                    <div className="faq-item mb-6">
                                        <h3 className="text-lg font-semibold text-blue-500">
                                            {t('faq_6_question')} {/* Translated Question */}
                                        </h3>
                                        <p className="ml-4">
                                            {t('faq_6_answer')} {/* Translated Answer */}
                                        </p>
                                    </div>

                                    <div className="faq-item mb-6">
                                        <h3 className="text-lg font-semibold text-blue-500">
                                            {t('faq_7_question')} {/* Translated Question */}
                                        </h3>
                                        <p className="ml-4">
                                            {t('faq_7_answer')} {/* Translated Answer */}
                                        </p>
                                        <p className="ml-8">{t('faq_7_example')}</p> {/* Translated Example */}
                                    </div>
                                </div>
                            </div>
                            <div className="faqs-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">
                                    {t('faqs.0.question')}
                                </h3>
                                <p className="ml-4">
                                    {t('faqs.0.answer')}
                                </p>
                                <p className="ml-8">
                                    {t('faqs.0.formula')}
                                </p>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">
                                    {t('faqs.1.question')}
                                </h3>
                                <p className="ml-4">
                                    {t('faqs.1.answer')}
                                    <br />
                                    {t('faqs.1.details.0')} <br />
                                    {t('faqs.1.details.1')} <br />
                                    {t('faqs.1.details.2')}
                                </p>
                            </div>

                            <div className="faqa-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">
                                    {t('faqa.0.question')}
                                </h3>
                                <p className="ml-4">
                                    {t('faqa.0.answer')}
                                    <br />
                                    {t('faqa.0.details.0')} <br />
                                    {t('faqa.0.details.1')} <br />
                                    {t('faqa.0.details.2')}
                                </p>
                            </div>
                            <div className="faqa-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">
                                    {t('faqa.1.question')}
                                </h3>
                                <p className="ml-4">
                                    {t('faqa.1.answer')}
                                    <br />
                                    {t('faqa.1.details.0')} <br />
                                    {t('faqa.1.details.1')} <br />
                                    {t('faqa.1.details.2')}
                                </p>
                            </div>
                            <div className="faqa-item mb-4">
                                <h3 className="text-lg font-semibold text-blue-500">
                                    {t('faqa.2.question')}
                                </h3>
                                <p className="ml-4">
                                    {t('faqa.2.answer')}
                                    <br />
                                    {t('faqa.2.details.0')} <br />
                                    {t('faqa.2.details.1')} <br />
                                    {t('faqa.2.details.2')}
                                </p>
                            </div>

                        </div>
                    </section>

                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                        {t('note')}
                    </p>

                </>
            )
            }
            <div className="text-center  ">
                <button
                    onClick={toggleMainExpand}
                    className="text-blue-600 hover:text-blue-800   dark:text-gray-400 text-4xl dark:hover:text-blue-600 animate-bounce transition-all duration-300 focus:outline-none"
                >
                    {isMainExpanded ? (
                        <div className='translate-x-10 mt-4 translate-y-[130px]'>
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
                                className="animate-bounce bg-blue-200 "
                            >
                                <span style={{ fontSize: "20px", fontWeight: "bold" }}>↑</span>
                            </div>
                        </div>
                    ) : (
                        <div className='translate-x-10 translate-y-[-10px]'>
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
                                className="animate-bounce bg-blue-200 "
                            >
                                <span style={{ fontSize: "20px", fontWeight: "bold" }}>↓</span>
                            </div>
                        </div>
                    )}

                </button>
            </div>
        </div >

    );
};

export default PercentageContent;
