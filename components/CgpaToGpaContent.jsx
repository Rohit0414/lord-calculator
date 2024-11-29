import { useState,useEffect } from "react";
import { useTheme } from '../context/ThemeContext';


const CgpaToGpaContent = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const theme = useTheme();
    const [isMainExpanded, setIsMainExpanded] = useState(false);

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
                <h2 id="section1" className="text-3xl font-bold  dark:text-white mb-6 text-blue-500">CGPA to GPA Calculator</h2>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    We often encounter situations where we need to convert our grades into a different format. Whether you're dealing with student grade databases or need to convert your grades to meet specific requirements, having a reliable tool makes the process much easier.
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    Lord Calculator’s CGPA to GPA calculator is designed to help you quickly and accurately convert your CGPA grades into the GPA format, so you can focus on what truly matters—your performance!
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    Our calculator is optimized for speed and precision, ensuring zero errors in your results. You can also use the custom Grade Scale option to convert your grades to any target grading scale of your choice.
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200">
                    In this guide, we'll cover the key factors you need to know about CGPA to GPA conversion, including basic concepts and international standards.
                </p>

                <h2 id="section2" className="text-2xl font-semibold text-blue-500 dark:text-white mt-8 mb-6">CGPA to GPA Converter Formula</h2>
                <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                    <span className="font-semibold">Equivalent GPA =</span>
                    <span className="inline-block ml-2">
                        <div className="border-b border-gray-600 dark:border-gray-400 pb-2">CGPA Obtained</div>
                        <span className="block text-sm text-gray-600 dark:text-gray-400">Max CGPA</span>
                    </span>
                    <span className="inline-block ml-4">× Max GPA</span>
                </p>
            </div>

            <div className="bg-white  rounded-lg shadow-lg max-w-4xl mx-auto border-t-4 mt-8 mb-4 dark:bg-gray-800 dark:border lue-400">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl p-4 font-semibold text-blue-600 dark:text-blue-400">Table of Contents</h2>
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
                                'CGPA to GPA Calculator',
                                'CGPA to GPA Converter Formula',
                                'How CGPA Differs from GPA & Why Do We Need Conversion?',
                                'Why Do We Need CGPA to GPA Conversions?',
                                'How Does Lord Calculator’s CGPA to GPA Calculator Stand Out?',
                                'How to Use CGPA to GPA Calculator',
                               
                                

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
                                'Methods of Converting CGPA to GPA',
                                'University Specific Conversions',
                                'Normalization Factor',
                                'CGPA To GPA Detailed Conversion Table',
                                'Limitations of CGPA to GPA Converter',
                                'Tips to Get Accurate CGPA to GPA Calculation',
                                'Conclusion',
                                'FAQs for CGPA to GPA Converter',

                            ].map((item, index) => (
                                <li key={index + 7}>
                                    <button
                                        onClick={() => {
                                            scrollToSection(`section${index + 7}`)
                                            setIsMainExpanded(isMainExpanded === index + 7 ? null : index + 7);
                                        }}
                                        className="w-full text-left text-blue-600 hover:text-blue-800 focus:outline-none transition-all hover:scale-95 duration-300 dark:text-blue-400 dark:hover:text-blue-600"
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
                            Please note that this formula is the most commonly used for CGPA to GPA conversion. However, some institutions may follow a different formula, so it’s always a good idea to check the official guidelines provided by your institution or board.
                        </p>

                        <h2 id="section3" className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-6">How CGPA Differs from GPA & Why Do We Need Conversion?</h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Before diving deeper into the conversion process, let's first understand the difference between CGPA and GPA, and why conversion might be necessary even if both grading scales are widely recognized.
                        </p>

                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-4">Understanding CGPA & GPA</h4>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            CGPA (Cumulative Grade Point Average) is a comprehensive reflection of a student’s academic performance across all semesters and subjects over a specific period. It provides a holistic view of the student’s consistent performance throughout their course.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            On the other hand, GPA (Grade Point Average) is a more concise metric that evaluates a student’s performance in individual courses or subjects, often focusing on semester-specific achievements. GPA helps institutions track performance on a per-term basis.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            While CGPA is more commonly used in Asian countries, GPA is widely practiced in Western countries such as the United States and Europe. This difference in grading systems is why the CGPA to GPA conversion is often required, especially for international students or academic transfers.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200 mt-4 ">
                            If you'd like to learn more about the terminology used in various grading systems,
                            <a href="/grading-systems" className="text-blue-600 hover:text-blue-800 transition duration-300"> click here</a>.
                        </p>
                    </div>
                    <div className="space-y-6 m-4 ">
                        <h2 id="section4" className="text-3xl font-bold text-blue-500 dark:text-white mb-6">Why Do We Need CGPA to GPA Conversions?</h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            The simple answer to this question lies in opportunities. Whenever a student plans to study abroad or apply for a job, they often need their grades in a specific format—one that might differ from their own. In such cases, grade conversions are essential.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Imagine this: you've carefully applied the formulas and written out the entire mathematical equation, but due to a small decimal point error or a minor mistake, you end up having to redo the process. This is where online tools become invaluable. You can instantly visit a website and convert your grades on the go—no need to download any third-party apps!
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Another reason conversions are necessary is the differences between grading scales. To help you understand how these grading systems vary, here’s a brief table comparing CGPA, GPA, and other grading systems:
                        </p>

                        <table className="min-w-full text-center table-auto border ">
                            <thead className="border-b border-blue-500 dark:border-blue-600 bg-blue-500 text-white">
                                <tr>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white">CGPA (10-Point Scale)</th>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white">US GPA (4-Point Scale)</th>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white">Letter Grade (US)</th>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white">Percentage (100%)</th>
                                    <th className="px-4 py-2 text-sm font-medium border dark:text-white">Grade (UK)</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-700 dark:text-gray-300">
                                <tr>
                                    <td className="px-4 border py-2">9.5 - 10</td>
                                    <td className="px-4 border py-2">4.0</td>
                                    <td className="px-4 border py-2">A+</td>
                                    <td className="px-4 border py-2">95-100</td>
                                    <td className="px-4 border py-2">First-Class (Distinction)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">9.0 - 9.4</td>
                                    <td className="px-4 border py-2">3.9</td>
                                    <td className="px-4 border py-2">A</td>
                                    <td className="px-4 border py-2">90-94</td>
                                    <td className="px-4 border py-2">First-Class (Upper)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">8.5 - 8.9</td>
                                    <td className="px-4 border py-2">3.7</td>
                                    <td className="px-4 border py-2">A-</td>
                                    <td className="px-4 border py-2">85-89</td>
                                    <td className="px-4 border py-2">First-Class (Upper)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">8.0 - 8.4</td>
                                    <td className="px-4 border py-2">3.5</td>
                                    <td className="px-4 border py-2">B+</td>
                                    <td className="px-4 border py-2">80-84</td>
                                    <td className="px-4 border py-2">Upper Second (2:1)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">7.5 - 7.9</td>
                                    <td className="px-4 border py-2">3.3</td>
                                    <td className="px-4 border py-2">B</td>
                                    <td className="px-4 border py-2">75-79</td>
                                    <td className="px-4 border py-2">Upper Second (2:1)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">7.0 - 7.4</td>
                                    <td className="px-4 border py-2">3.0</td>
                                    <td className="px-4 border py-2">B-</td>
                                    <td className="px-4 border py-2">70-74</td>
                                    <td className="px-4 border py-2">Lower Second (2:2)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">6.5 - 6.9</td>
                                    <td className="px-4 border py-2">2.7</td>
                                    <td className="px-4 border py-2">C+</td>
                                    <td className="px-4 border py-2">65-69</td>
                                    <td className="px-4 border py-2">Lower Second (2:2)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">6.0 - 6.4</td>
                                    <td className="px-4 border py-2">2.5</td>
                                    <td className="px-4 border py-2">C</td>
                                    <td className="px-4 border py-2">60-64</td>
                                    <td className="px-4 border py-2">Third-Class</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">5.5 - 5.9</td>
                                    <td className="px-4 border py-2">2.0</td>
                                    <td className="px-4 border py-2">D</td>
                                    <td className="px-4 border py-2">55-59</td>
                                    <td className="px-4 border py-2">Pass</td>
                                </tr>
                                <tr>
                                    <td className="px-4 border py-2">Below 5.5</td>
                                    <td className="px-4 border py-2">Below 2.0</td>
                                    <td className="px-4 border py-2">F</td>
                                    <td className="px-4 border py-2">Below 55</td>
                                    <td className="px-4 border py-2">Fail</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 id="section5" className="text-2xl font-semibold  dark:text-white mt-8 mb-6 text-blue-500">How Does Lord Calculator’s CGPA to GPA Calculator Stand Out?</h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Lord Calculator’s CGPA to GPA calculator stands out for its advanced features and lightning-fast performance. Thanks to the latest web framework, our calculator performs conversions with remarkable speed—even on weaker networks.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            The user interface is designed for easy navigation, ensuring that you can quickly input your values and get results without any hassle. We also offer features like Metric Representation, which helps visualize the converted grades more effectively.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Additionally, you can save your conversion history as a PDF or share it on social media, making it easy to keep track of your results and share them with others.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Our calculator also supports custom formulas. For instance, in the <a href="/cgpa-to-percentage" className="text-blue-600 hover:text-blue-800 transition duration-300">CGPA to Percentage calculator</a>, you can choose a custom <a href="/multiplication-factor" className="text-blue-600 hover:text-blue-800 transition duration-300">Multiplication Factor</a> to match the specific grading scale of your institution.
                        </p>
                    </div>
                    <div className="space-y-6 p-4">
                        <h2 id="section6" className="text-3xl font-bold  dark:text-white mb-6 text-blue-500">How to Use CGPA to GPA Calculator</h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Using our CGPA to GPA Calculator is easier than solving any calculus problem! Just follow these simple steps:
                        </p>

                        <ol className="list-decimal list-inside text-lg text-gray-800 dark:text-gray-200 space-y-2">
                            <li>Head over to <strong>Lord Calculator</strong>  <strong>Educational Calculators</strong>  <strong>CGPA to GPA Calculator</strong>.</li>
                            <li>In the first field, enter your CGPA. Make sure to include accurate numbers, including the decimal points!</li>
                            <li>Select the GPA scale to which you are converting your grades.</li>
                            <li>Enter the maximum CGPA that your grading system allows (this is the CGPA scale value).</li>
                            <li>After filling in all the fields correctly, hit the <strong>Calculate</strong> button, and voilà! Your GPA conversion is done.</li>
                            <li>You can also share your results with friends or save them as a PDF for future reference!</li>
                        </ol>

                        <h2 id="section7" className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-6">Methods of Converting CGPA to GPA</h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Converting CGPA to GPA is not a one-size-fits-all process. Different institutions follow various grading systems, and even those that use the same scale might apply different multiplication factors. Therefore, it’s essential to use the right method for your institution.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            In our calculator, we’ve used the most common formula to convert CGPA to GPA. However, it’s always a good idea to check the official documents provided by your institution for specific conversion guidelines.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            The widely-used CGPA to GPA conversion formula is as follows:
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                            <span className="font-semibold">Equivalent GPA =</span>
                            <span className="inline-block ml-2">
                                <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">CGPA Obtained</div>
                                <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">Max CGPA</span>
                            </span>
                            <span className="inline-block ml-4">× Max GPA</span>
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">Example:</h3>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Let’s say:
                        </p>

                        <ul className="list-disc pl-6 text-lg text-gray-800 dark:text-gray-200">
                            <li>The student’s CGPA is <strong>8.5</strong> (out of 10)</li>
                            <li>The target GPA scale is <strong>4.0</strong></li>
                        </ul>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            The conversion would look like this:
                        </p>

                        <div className="text-lg text-gray-800 dark:text-gray-200 text-center mb-6">
                            <span className="font-semibold"> <p className="text-lg text-gray-800 dark:text-gray-200  mb-6">
                                <span className="font-semibold"> GPA =</span>
                                <div className="inline-block ml-2">
                                    <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">CGPA</div>
                                    <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-2">Maximum CGPA</span>
                                </div>
                                <span className="inline-block ml-4">× Maximum GPA</span>
                            </p></span>
                            <span className="font-semibold">GPA =</span>
                            <div className="inline-block ml-2">
                                <div className="border-b border-gray-600 dark:border-gray-400 pb-1 translate-y-2">8.5 × 4.0 </div>
                                <div className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">10</div>
                            </div>
                            <span className="inline-block ml-4"> = 3.4</span>
                        </div>


                        <h2 id="section8" className="text-2xl font-semibold  dark:text-white mt-8 mb-6 text-blue-500">University Specific Conversions</h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            Your institution may follow a different conversion standard. In that case, you need to refer to your university's specific formula. This scenario usually arises when a particular institution assigns varying weightage for individual subjects. The conversion formula must then be adjusted accordingly.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            A common example is Harvard University, which requests a detailed grade distribution chart along with the converted GPA to account for grading difficulty. As a result, a CGPA of 8.5, as discussed in the above example, may be equal to 3.7 instead of 3.4.
                        </p>

                        <h2 id="section9" className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-6">Normalization Factor</h2>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            When students apply for study programs abroad, their previous performance must be evaluated fairly. To achieve fairness, universities often add a normalization factor to ensure everyone has the same level playing field.
                        </p>

                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            For example, consider a student evaluated based on a percentage while another student’s performance is determined using a 5.0 CGPA grading scale. To eliminate such differences, boards ensure maximum scientific accuracy by adjusting their scales. One common practice is proportional conversion.
                        </p>
                    </div>
                    <div className=" py-6 px-4 dark:bg-gray-800 rounded-md text-gray-800 dark:text-gray-200">

                        <h2 id="section10" className="text-2xl font-semibold mb-4 text-blue-500">
                            CGPA To GPA Detailed Conversion Table
                        </h2>
                        <p className="text-lg mb-6">
                            Here you can find the corresponding values for your CGPA grades on
                            different GPA scales. You can quickly get the converted grades without
                            calculating them.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border-collapse border text-center dark:border-blue-600">
                                <thead className=" dark:bg-blue-500 bg-blue-500 text-white">
                                    <tr>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            CGPA
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            US GPA (4.0 Scale)
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            GPA (4.3 Scale)
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            GPA (5.0 Scale)
                                        </th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                            GPA (7.0 Scale)
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
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.3</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.5</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 2.5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.0</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Below 3.5</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="max-w-4xl mx-auto mt-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            <h2 id="section11" className="text-2xl font-semibold mb-4 text-blue-500">Limitations of CGPA to GPA Converter</h2>
                            <p className="text-lg mb-4">
                                While online grade conversion calculators are convenient tools, they come with certain limitations. Let’s explore these limitations and the factors you should consider when using such calculators.
                            </p>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">1. Weighted GPA Systems</h3>
                                <p>
                                    Many universities use a weighted GPA system where extra points are awarded for honors and advanced placement courses. In such cases, a more detailed conversion formula is necessary to maintain proportional conversions across all subjects.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">2. Grade Caps</h3>
                                <p>
                                    Some institutions impose a grade cap. For example, on a 10 CGPA scale, a student can only achieve a maximum CGPA of 9.5. In such cases, online calculators might not be accurate or applicable, as they don't account for these limitations.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">3. Assumptions of Universality</h3>
                                <p>
                                    Online calculators often generate results that users assume are universally accepted. However, it's important to note that different institutions may have their own conversion standards. Always consult official documents or your academic institution before proceeding with the conversion.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-2">Key Takeaways</h3>
                                <p>
                                    These are typical constraints when using CGPA to GPA calculators and other similar tools. However, with careful attention to the details, you can ensure more accurate conversions. Remember, online tools are only meant to assist you in the calculation process — human supervision is always necessary.
                                </p>
                            </section>
                        </div>
                        <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            <h2 id="section12" className="text-2xl font-semibold mb-4 text-blue-500">Tips to Get Accurate CGPA to GPA Calculation</h2>
                            <p className="text-lg mb-4">
                                To present academic performance effectively, make sure you are aware of these tips even if you are using online CGPA to GPA calculators:
                            </p>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">1. Understanding Target Grading Scales</h3>
                                <p>
                                    Always cross-check the target grading scale representation from official documents. While some institutions use a 4.0 scale, others may use a 4.3 or 5.0 scale. The CGPA calculation needs to be adjusted accordingly to fit the target grading scale.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">2. Considering Grading Rigor</h3>
                                <p>
                                    If your institution is known for stricter grading standards, make sure to mention it in your application form. Universities, such as Harvard University, often consider this a crucial factor in evaluating academic performance.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">3. Verifying Conversion Formula</h3>
                                <p>
                                    If you cannot find the conversion formula in official documents, do not hesitate to consult academic counselors for further assistance. They can help ensure that the conversion is accurate.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">4. Taking Account of Subject-Specific Performance</h3>
                                <p>
                                    Some institutions differentiate between major and minor subjects, with major subjects often earning extra points. Keep this in mind when filling out application forms where converted grades are required.
                                </p>
                            </section>

                            <section className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">5. Staying Updated with the Evolving Standards</h3>
                                <p>
                                    Universities frequently update grading standards and conversion formulas to improve synchronization with international standards. Ensure you are following the latest guidelines to avoid outdated methods.
                                </p>
                            </section>

                            <section>
                                <h2 id="section13" className="text-2xl text-blue-600 font-semibold mb-2">Conclusion</h2>
                                <p>
                                    As global educational mobility increases, it is essential to be well-versed in both the basics and international standards we've discussed. While the conversion process may seem simple, there are many hidden factors. By following the tips for accurate conversion, we assure you that you'll achieve a reliable CGPA to GPA conversion.
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
