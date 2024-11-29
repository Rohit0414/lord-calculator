import React, { useState, useEffect } from 'react';

const PercentageContent = () => {
    const [isExpanded, setIsExpanded] = useState(true);
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
        <div className=" relative p-6 max-w-screen-lg mx-auto bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
            <h2 id='section1' className="text-3xl font-bold mb-4 text-blue-600">
                Percentage To CGPA Calculator
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
                Welcome fellow learners and academicians! As you all know, CGPAs and Percentages play important roles in the educational system. We often get into situations where we need to use them interchangeably, so{" "}
                <span className="font-bold">Lord Calculator</span> presents you with the most reliable and blazing-fast Percentage to CGPA Calculator to help you calculate your percentage on the go! Here is a detailed guide on how our Percentage to CGPA Calculator works, methods of converting Percentage to CGPA, and various Percentage to CGPA formulae.
            </p>

            <h2 id='section2' className="text-2xl font-semibold mb-4 text-blue-500">
                Percentage to CGPA Formula
            </h2>
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
                                'Percentage to CGPA Calculator',
                                ' Percentage to CGPA Formula',
                                ' Lord Calculator’s Percentage to CGPA Calculator & Why Use It?',
                                ' How to Use Lord Calculator’s Percentage to CGPA Calculator?',
                                ' What is Percentage & How It is Different from CGPA?',
                                'What is CGPA & How It is Calculated?',
                                'When to use Lord Calculator’s Percentage to CGPA Calculator?',

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

                                'Common Mistakes to Avoid While Calculating Percentage to CGPA Accurately',
                                'Why Do Various Institutions Follow Different Grading Scales & Conversion Formulae',
                                'Percentage to CGPA Conversion for different Boards and Universities.',
                                'Pros. & Cons. of Using Percentage to CGPA Online Calculators',
                                'Frequently Asked Questions (FAQs)',

                            ].map((item, index) => (
                                <li key={index + 8}>
                                    <button
                                        onClick={() => {
                                            scrollToSection(`section${index + 8}`)
                                            setIsMainExpanded(isMainExpanded === index + 8 ? null : index + 8);
                                        }}
                                        className="w-full text-left text-blue-600 hover:text-blue-800 focus:outline-none transition-all hover:scale-95 duration-300 dark:text-blue-400 dark:hover:text-blue-600"
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
                        <p className="font-semibold">CGPA = Percentage achieved / Multiplication Factor given by University</p>
                        <p className="italic mt-2">
                            Example: Let’s say you have achieved a handsome percentage of over 92.4%. And, now you want to convert it into CGPA. The Grading Scale that your university follows is the 10-grading scale with a multiplication factor of 9.5. Then your CGPA would be calculated as:
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
                        Lord Calculator’s Percentage to CGPA Calculator & Why Use It?
                    </h2>
                    <p className="mb-6">
                        We have made our calculator suitable for all the grading systems. Whether your institution follows 4 Grading Scale, 5 Grading Scale, or 10 Grading Scale, all you have to do is choose the grading scale and proceed with the calculation. But do keep in mind that, for these default Grading Scales we have used standard multiplication factors. Standard multiplication factors for different Grading systems are given below: </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">
                            <span className="font-bold">Multiplication Factor For 4 Grading Scale:</span> 25
                        </li>
                        <li className="mb-2">
                            <span className="font-bold">Multiplication Factor for 5 Grading Scale:</span> 20
                        </li>
                        <li className="mb-2">
                            <span className="font-bold">Multiplication Factor for 10 Grading Scale:</span> 9.5
                        </li>
                    </ul>
                    <p className="mb-6"><strong className="italic">Please note that </strong>your institution may follow a standard grading scale i.e. 10 Grading Scale but with a different multiplication factor. For example: CBSE, ICSE, and JNTU (Jawahar Lal Nehru Technical University) follow a common 10-grading Scale but use different multiplication factors. CBSE considers 9.5 as the multiplication factor for all the conversion calculations, while ICSE uses 9.8 as their multiplication factor, and JNTU uses 10 as the multiplication factor for their CGPA to percentage or Percentage to CGPA calculations.</p>

                    <h2 id='section4' className="text-2xl font-semibold mb-4 text-blue-500">
                        How to Use Lord Calculator’s Percentage to CGPA Calculator?
                    </h2>
                    <p className="mt-2 mb-4">Before we start digging into key concepts that you should be aware of about the grading system and the grade conversion let me guide you on how to use Lord Calculator’s Percentage to CGPA calculator for accurate results.</p>
                    <ol className="list-decimal pl-6 mb-6">
                        <li className="mb-2">
                            Open the <span className="font-semibold">Percentage to CGPA calculator</span> under Educational Calculators.
                        </li>
                        <li className="mb-2">
                            In the very first field, you are asked to enter your percentage. Please ensure that you are entering your percentage accurately including the decimal points for accurate conversion.
                        </li>
                        <li className="mb-2">
                            Now choose the Grading Scale that is followed by your institution. If it is other than the standard scales i.e. 4, 5, or 10 Grading scale. Then you need to enter the multiplication factor directly.
                        </li>
                        <li className="mb-2">
                            In both cases, whether you have entered the Grading Scale or chosen the multiplication factor, double-check your multiplication factor shown in the next field. As mentioned earlier, it might happen that your institution follows a standard grading scale but uses different multiplication factors. So in those cases, you need to adjust your multiplication factor accordingly otherwise your Percentage to CGPA conversion won’t be accurate.
                        </li>
                    </ol>
                    <p className="mb-4">Once you have all the information filled in, hit the “calculate” button. You will have your percentage converted to CGPA in front of your screen.</p>

                    <h2 id='section5' className="text-2xl font-semibold mb-4 text-blue-500">
                        What is Percentage & How It is Different from CGPA?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Percentage</h3>
                            <p>The percentage is an accurate reflection of grades achieved during exams. It is a standardized representation of grades out of 100.</p>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">CGPA</h3>
                            <p>CGPA is the cumulative average of the SGPAs attained, used as a rounded average for academic performance.</p>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <h2 id='section6' className="font-semibold text-xl text-blue-500">What is CGPA & How It is Calculated?</h2>
                        <p className="italic mt-2">
                            CGPA (Cumulative Grade Point Average) is an overall assessment of a student's academic performance over a defined academic period. Some universities calculate it as the average of all semester grade points, while others also include credits in the calculation.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">CGPA Calculation Formula Method 1</p>
                        <p className="italic mt-2">
                            One method of calculating CGPA is by finding the average of all the SGPA (Semester Grade Points) over the semesters. The formula is:
                        </p>
                        <div className="mt-4 text-center">
                            <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2">CGPA = </div>
                            <div className="inline-block align-middle mb-8">
                                <div className="flex flex-col items-center">
                                    <span className="text-black font-bold"> SGPA of sem.1 + SGPA of sem.2 + SGPA of sem.3 +.........+ SGPA of sem. "N"</span>
                                    <hr className="w-full border-t-2 border-blue-600" />
                                    <span className="text-black font-bold"> Total Number of semesters</span>
                                </div>
                            </div>
                        </div>

                        <p className="italic mt-2">
                            Example: Ram achieved SGPA values of 6, 8.5, 7, and 9.5 in 4 semesters. His CGPA would be:
                        </p>
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

                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">CGPA Calculation Formula Method 2</p>
                        <p className="italic mt-2">
                            Another method is to calculate the sum of the product of SGPA and credits earned and then divide by the total number of credits. The formula is:
                        </p>
                        <div className="mt-4 text-center">
                            <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2 text-md">CGPA = </div>
                            <div className="inline-block align-middle text-[10px]">
                                <div className="flex flex-col items-center">
                                    <span className="text-black font-bold">  (SGPA of sem.1 × Credits Earned in sem.1) +  (SGPA of sem.2 × Credits Earned in sem.2) + ...... +  (SGPA of sem."N" × Credits Earned in sem."N")</span>
                                    <hr className="w-full border-t-2 border-blue-600 mb-8" />
                                    <div className="text-black font-bold translate-y-[-28px] ">Total Credits</div>
                                </div>
                            </div>
                        </div>

                        <p className="italic mt-2">
                            Example: Shyam achieved SGPA values of 7.2, 6.5, 8.9, and 9.6 with corresponding credits of 4, 3, 3, and 5. His CGPA would be:
                        </p>
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

                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">Percentage Calculation Formula</p>
                        <p className="italic mt-2">
                            Percentage is calculated by dividing the sum of marks achieved in various subjects/semesters by the total sum of marks, and then multiplying the result by 100. The formula is:
                        </p>
                        <div className="mt-4 text-center">
                            <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2">Percentage = </div>
                            <div className="inline-block align-middle">
                                <div className=" items-center">

                                    <span className="text-black font-bold">Sum of Marks Achieved in all Subjects/Semesters</span>
                                    <span className="text-black font-bold">* 100</span>


                                    <div className="w-full border-t-2 border-blue-600 mt-2 mb-2"></div>

                                    <div className=" justify-center items-center">
                                        <span className="text-black font-bold">Sum of Total Marks Allotted for all Subjects/Semesters</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="italic mt-2">
                            Example: Ghanshyam achieved 295 out of 300 in semester 1, 265 out of 300 in semester 2, 273 out of 300 in semester 3, and 264 out of 300 in semester 4. His percentage would be:
                        </p>
                        <div className="mt-4 text-center">
                            <div className="text-blue-600 font-bold mb-8 inline-block align-middle mr-2">Percentage = </div>
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
                        <p className="italic mt-2">
                            The conversion from CGPA to percentage varies because each institution uses different grading systems and scales. Factors like the number of semesters, grading scales, and credit systems also play a role in how the CGPA is calculated and converted.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">When Can CGPA & Percentage Calculators Come in Handy?</p>
                        <p className="italic mt-2">
                            These calculators are particularly useful when you need to convert your CGPA to percentage or vice versa quickly, especially when applying for further studies, job opportunities, or preparing academic documents.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <p className="font-semibold">Confused About Terms or Abbreviations?</p>
                        <p className="italic mt-2">
                            If you're unsure about any of the terms or abbreviations mentioned, <a href="#" className="text-blue-600 font-bold">click here</a> to learn more.
                        </p>
                    </div>

                    <p className="mb-4">
                        Lord Calculator’s Percentage to CGPA Calculator is useful in scenarios where you need to convert your grades between formats quickly and accurately. It helps eliminate confusion from complex decimal calculations and ensures precise conversions every time. So, when do you need to use this tool?
                    </p>

                    <h2 id='section7' className="text-2xl font-semibold mb-4 text-[#010A3B]">When to use Lord Calculator’s Percentage to CGPA Calculator?</h2>

                    <p className="mb-4">
                        This tool is perfect for any situation where you need to switch between grades in different formats seamlessly. Let’s explore a few common scenarios:
                    </p>

                    <h3 className="text-xl font-semibold mb-2">While Filling Out the Form for Higher Studies</h3>
                    <p className="mb-4">
                        When applying for higher studies, especially for international institutions, you might be required to enter your grades in a different format. This calculator helps you convert your grades quickly and accurately to the required format, avoiding the risk of making any mistakes that could cancel your application.
                    </p>
                    <p className="mb-4">
                        Whether you need to calculate CGPA from SGPA, CGPA to percentage, or CGPA to GPA, this calculator covers it all, ensuring you have your grades in the right format without any hassle.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">While Filling Forms for Competitive Exams</h3>
                    <p className="mb-4">
                        In many competitive exams, you are required to fill out your percentage. However, some engineering institutions prefer the CGPA system. In such cases, our calculator allows you to convert CGPA to percentage or vice versa quickly and accurately, helping you meet the format requirements for exam applications.
                    </p>

                    <h3 className="text-xl font-semibold mb-2">Comparative Measurement by Educators</h3>
                    <p className="mb-4">
                        Educators often need to compare and streamline the grades of many students. Instead of manually calculating conversions, this online calculator offers a fast and accurate solution, saving significant time and eliminating the chance of errors.
                    </p>

                    <p className="mb-4">
                        In all these cases, using Lord Calculator’s Percentage to CGPA Calculator ensures accuracy and efficiency, whether you’re applying for higher studies, filling out exam forms, or comparing grades for a large number of students.
                    </p>



                    <h2 id='section8' className="text-2xl font-semibold mb-4 text-blue-500">
                        Common Mistakes to Avoid While Calculating Percentage to CGPA Accurately
                    </h2>
                    <p>Although the Percentage to CGPA conversion formula looks pretty simple, still many students get the wrong results. One of the most common mistakes is not knowing the accurate multiplication factor. Well, we will talk about the multiplication factor in detail in the upcoming sub-heading. First, take a look at all the common mistakes that you should avoid while calculating the Percentage to CGPA accurately.
                    </p>
                    <ul className="list-disc pl-6 mb-6 mt-4">
                        <li className="mb-2">We often round up decimal points too soon in the calculations. And such rounded-up figures can lead to slight changes in the results as well. So, it is better advised not to round up decimal figures until the last step of your calculation. However, once you get the result, you can round up figures if you want to</li>
                        <li className="mb-2">Another common mistake is not having knowledge of your institution’s formula. If your institute follows a different grading scale and you are calculating your grades using another grading scale, then the conversion will never be accurate. Also, in the case of the same grading scale, the multiplication factor might vary! So it is advised to double check the multiplication factor.</li>
                        <li className="mb-2">Got your multiplication factor right but still getting inaccurate conversion? In this case, you need to check your institution’s conversion formula. Many universities such as the University of Mumbai have their own conversion formula which are different from the standard conversion formula. For example, the University of Mumbai’s CGPA calculation formula is, Percentage = (CGPA  7.25) + 11
                            Thus you need to ensure these factors especially if you are doing the Percentage to CGPA calculation. There are other pitfalls as well, but those are related to other conversions such as [SGPA to CGPA] and [GPA to CGPA] conversions. We have discussed them in their respective sections.</li>
                    </ul>
                    <h2 id='section9' className="text-2xl font-semibold mb-4 text-blue-500">
                        Why Do Various Institutions Follow Different Grading Scales & Conversion Formulae
                    </h2>
                    <p>We have talked multiple times with the example that several institutions follow different grading scales. But why is it so? The reasons could be many! Let us take a look at each of them one by one:</p>
                    <ul className="list-disc pl-6 mb-6 mt-4">
                        <li className="mb-2"><strong>Historical & Cultural Differences:</strong>Various countries have been following their traditional grading systems. As a result, we get to see different grading scale as per varying geographical location. For example, American institutions follow a 4-grading scale while Indian & Asian institutions follow a 10-grading scale.</li>
                        <li className="mb-2"><strong>Different Approach to Assess Students:</strong>As the modernization of education is picking up pace so does the approaches to assess students. Lately, institutions are focussing more on holistic assessment rather than simple marks assessments for the academic performance of a student. Resultantly, CGPA & GPA systems are spreading widely.</li>
                        <li className="mb-2"><strong>Matching with International Standards: </strong>: Abroad studies are becoming a regular concept these days. That’s why many institutions are opting to match with the international standards so that students do not have to go around with additional formalities. For example, many institutions in Europe are following ECTS (European Credit Transfer and Accumulation System) to gain harmony with other institutions in the European continent.</li>
                        <li className="mb-2"><strong>Difficulty in achieving Universal Grading Standard:</strong>Although following a universal grading standard seems a fair and easy concept it is practically difficult. And since institutions follow different grading scales, they need to have a standard conversion formula to have an unbiased idea of student’s academic performance coming from different universities/schools.</li>
                    </ul>

                    <h2 id='section10' className="text-2xl font-semibold mb-4 text-blue-500">
                        Percentage to CGPA Conversion for different Boards and Universities.
                    </h2>
                    <table className="table-auto w-full border-collapse border border-blue-400 text-left mb-6">
                        <thead>
                            <tr className="bg-blue-100 dark:bg-blue-800">
                                <th className="border border-blue-400 p-2">Institution</th>
                                <th className="border border-blue-400 p-2">Formula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-blue-400 p-2">CBSE (Central Board of Secondary Education), India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 9.5</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">ICSE (Indian Certificate of Secondary Education), India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 9.8 (may vary by school)</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Maharashtra State Board, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 9.5</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Anna University, Tamil Nadu, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 10</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Jawaharlal Nehru Technological University (JNTU), Telangana & Andhra Pradesh, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 10</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Visvesvaraya Technological University (VTU), Karnataka, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 9.1 (may vary by department)</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Gujarat Technological University (GTU), Gujarat, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = (Percentage - 12) / 7.1</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of Mumbai, Maharashtra, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = (Percentage - 11) / 7.25</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Manipal Academy of Higher Education (MAHE), Karnataka, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 10</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Amity University, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 9</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Vellore Institute of Technology (VIT), Tamil Nadu, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 9.5 (varies by program)</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Savitribai Phule Pune University (SPPU), Maharashtra, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 6.3</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">IITs (Indian Institutes of Technology), India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 10 (some IITs may use unique scales for certain courses)</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">NITs (National Institutes of Technology), India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 10</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">BITS Pilani (Birla Institute of Technology and Science), India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 10</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Delhi University (DU), India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 9.5 (DU’s CGPA calculation may vary by program)</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Banaras Hindu University (BHU), India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 10</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Osmania University, Telangana, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 10</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Punjab University, Punjab, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 9.5</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">SRM Institute of Science and Technology (SRMIST), Tamil Nadu, India</td>
                                <td className="border border-blue-400 p-2">Formula: CGPA = Percentage / 10</td>
                            </tr>
                            <tr className="bg-blue-100 dark:bg-blue-800">
                                <th colSpan="2" className="text-center p-2">International Institutions</th>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of Toronto, Canada</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 4.0 GPA scale; Note: No direct conversion formula; applicants use GPA equivalency tables or third-party evaluators.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of British Columbia (UBC), Canada</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 4.33 GPA scale; Note: No specific CGPA conversion; consult UBC for equivalency details.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Australian National University (ANU), Australia</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 7-point scale; Formula (General Guideline): CGPA = Percentage / 7.1 for equivalency on their scale.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of Sydney, Australia</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 7-point GPA system; Formula (General Guideline): CGPA = Percentage / 7.5 (may require credential evaluation for precise conversion).</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of Melbourne, Australia</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 7-point GPA scale; Note: Consult admissions for CGPA equivalency; no direct formula.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of California System (UCLA, UC Berkeley, etc.), USA</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 4.0 GPA scale; Note: No universal CGPA formula; use WES or similar evaluators for conversions.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Harvard University, USA</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 4.0 GPA scale; Note: Uses third-party services (e.g., WES) for CGPA to GPA conversions.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of Oxford, United Kingdom</td>
                                <td className="border border-blue-400 p-2">Grading Scale: UK Honours classNameification (First, Upper Second, etc.); Note: No direct CGPA formula; CGPA 8.5-10 (out of 10) is often considered First className.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of Cambridge, United Kingdom</td>
                                <td className="border border-blue-400 p-2">Grading Scale: UK Honours; Percentage is mapped to classNameifications; No direct formula for CGPA conversion.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">National University of Singapore (NUS), Singapore</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 5.0 GPA scale; No direct conversion formula; use NUS equivalency tables.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of Hong Kong (HKU), Hong Kong</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 4.3 GPA scale; No specific CGPA conversion formula.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Technical University of Munich (TUM), Germany</td>
                                <td className="border border-blue-400 p-2">Grading Scale: Swiss 6-point scale Note: CGPA of 8.5+ is competitive; no fixed conversion formula.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">ETH Zurich, Switzerland</td>
                                <td className="border border-blue-400 p-2">Grading Scale: Swiss 6-point scale Note: CGPA of 8.5+ is competitive; no fixed conversion formula.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of Tokyo, Japan</td>
                                <td className="border border-blue-400 p-2">Grading Scale: Japanese 4.0 GPA scale Note: Typically expects CGPA 8.0+ for competitive applicants.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">University of Cape Town, South Africa</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 4-point GPA scale and percentage system Note: May require CGPA conversion based on South African standards.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">McGill University, Canada</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 4.0 GPA scale Note: WES or similar services are often required for precise conversion.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Peking University, China</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 4.0 GPA scale Note: Requires official CGPA conversion; generally expects 8.0+ CGPA.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">National Taiwan University (NTU), Taiwan</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 4.3 GPA scale Note: CGPA above 8.0 is usually required for competitive applicants.</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-400 p-2">Auckland University of Technology (AUT), New Zealand</td>
                                <td className="border border-blue-400 p-2">Grading Scale: 9-point GPA scale Formula (General Guideline): CGPA = Percentage / 7.1 to align with New Zealand's GPA scale.</td>
                            </tr>
                        </tbody>
                    </table>
                    <section className="py-8 px-4">
                        <h2 id='section11' className="text-xl font-semibold text-center mb-4">Pros. & Cons. of Using Percentage to CGPA Online Calculators</h2>
                        <div className="pro-con-container">
                            <h3 className="text-lg font-semibold mb-4">Pros. of Percentage to CGPA Calculators</h3>
                            <ul className="list-disc pl-6">
                                <li>Convert your Grades on the go. Online calculators have pre-defined values and equations. Therefore, you don’t have to worry about putting the values in the right place in the equation. Simply enter the values in the indicated field and there you go, you have your results without wasting any time or effort.</li>
                                <li>Online calculators have interactive and simple interfaces. Additionally, visual elements like our grade meter provide better visualization of your grades.</li>
                                <li>In the traditional calculators, you need to record each and every calculated data if you want to have the history of grades calculated. Such scenarios occur when an educator needs to track the grades of students from different universities in a universal format. But on Lord Calculator, you can view the history of all the grades calculated in the tabular format below the “Result” field. Additionally, you can even export the history as a PDF and save it for any future purpose.</li>
                                <li>Online calculators also eliminate the possibilities of human error that may occur, such as while forming equations on default calculators, or while doing the calculations manually on pen and paper.</li>
                            </ul>
                        </div>

                        <div className="pro-con-container mt-6">
                            <h3 className="text-lg font-semibold mb-4">Cons. of Percentage to CGPA Calculators</h3>
                            <ul className="list-disc pl-6">
                                <li>Varying Multiplication Factor: We have noticed that different universities follow different multiplication factors even under the same grading scale. Thus, in such scenarios online calculators cannot meet the requirements of all the universities. You have to manually modify the multiplication factor for accurate conversion.</li>
                                <li>Different Conversion Formulae: We also have seen universities like the University of Mumbai, use altogether different formulas for CGPA to percentage conversions. For instance, the CGPA to percentage formula for the University of Mumbai is, <br />CGPA = (Percentage - 11) / 7.25. In these cases, online calculators cannot add additional operators automatically or manually. During such conversions, you need to refer to traditional methods of calculating grades.</li>
                            </ul>
                        </div>

                        <div className="summary-container mt-8">
                            <h3 className="text-lg font-semibold mb-4">To Sum It Up</h3>
                            <p>So far, we have learned about the Percentage & CGPA concepts, how to convert and use them interchangeably, what the possible situations are when you would be required to change your grades, and how different universities/boards rely on varying grading scales and conversion formulas.</p>
                            <p>We also have listed similar calculators including CGPA to Percentage calculator, GPA to CGPA calculator, CGPA to GPA calculator, and SGPA calculator. If you need to know any specific concept related to these calculators, read the description of the respective calculator. We have covered every essential detail in their description.</p>
                        </div>
                    </section>
                    <section className="py-4 px-4">
                        <h2 id='section12' className="text-2xl font-semibold text-left mb-6 text-blue-500">Frequently Asked Questions (FAQs)</h2>

                        <div className="faq-container">
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q1. What is Percentage to CGPA calculator?</h3>
                                <p className="ml-4">
                                    Ans. Percentage to CGPA calculator allows you to convert your percentage to CGPA effortlessly. All you need to do is enter your Percentage and the multiplication factor.
                                </p>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q2. How to convert percent to CGPA?</h3>
                                <p className="ml-4">
                                    Ans. To convert your percent to CGPA, you can either use an online calculator like Lord Calculator or manually calculate using the formula below:
                                </p>
                                <p className="ml-8">
                                    CGPA = (Percentage - 50) / 10
                                </p>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q3. How do I use Lord Calculator’s Percentage to CGPA calculator?</h3>
                                <p className="ml-4">Ans. To use Lord Calculator’s Percentage to CGPA calculator, follow these steps:</p>
                                <ul className="list-disc pl-8">
                                    <li>Enter your Percentage in the first field.</li>
                                    <li>Choose the Grading Scale or manually enter the Multiplication factor.</li>
                                    <li>Double-check that you have entered the multiplication factor accurately.</li>
                                    <li>Hit the “Calculate” button to see your CGPA in the result field.</li>
                                </ul>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q4. How to convert CGPA as per International Universities?</h3>
                                <p className="ml-4">
                                    Ans. Different international universities use various conversion systems. To learn about a specific one, <a href="#" className="text-blue-500">click here</a>.
                                </p>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q5. What are common mistakes to avoid when calculating my grades?</h3>
                                <p className="ml-4">Ans. Common mistakes include:</p>
                                <ul className="list-disc pl-8">
                                    <li>Avoid rounding up decimal points early in the calculations.</li>
                                    <li>Ensure you have entered your institute’s multiplication factor correctly.</li>
                                    <li>Check that your university follows the standard calculation method.</li>
                                </ul>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q6. Is the Percentage to CGPA calculator for Engineering Different?</h3>
                                <p className="ml-4">
                                    Ans. Many engineering universities use different conversion formulas. While it may not vary between departments, different universities may follow their own standard conversion formulas, which might not match with others.
                                </p>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q7. What is the Percentage to CGPA calculator VTU formula?</h3>
                                <p className="ml-4">
                                    Ans. The Percentage to CGPA calculator formula for VTU (Visvesvaraya Technological University) is different from other formulas. It can be represented as:
                                </p>
                                <p className="ml-8">
                                    CGPA = (Percentage - 50) / 10 <br />
                                    Example: If you scored 80%, your respective CGPA as per VTU would be: <br />
                                    CGPA = 8 + 0.75 = 8.75
                                </p>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q8. What is the Percentage to CGPA calculator CBSE Formula?</h3>
                                <p className="ml-4">
                                    Ans. The formula for the Percentage to CGPA conversion in CBSE is:
                                </p>
                                <p className="ml-8">
                                    CGPA = (Percentage - 50) / 9.5
                                </p>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q9. What is 70% in CGPA?</h3>
                                <p className="ml-4">
                                    Ans. The conversion formula used is:
                                    <br />
                                    70% in CGPA = 7.37 (as per 9.5 Multiplication Factor) <br />
                                    70% in CGPA = 3.5 (as per 5-grading scale) <br />
                                    70% in CGPA = 2.8 (as per 4-grading scale)
                                </p>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q10. What is 75% in CGPA?</h3>
                                <p className="ml-4">
                                    Ans. Using the same formula as given in Q9, 75% in CGPA is:
                                    <br />
                                    75% in CGPA = 7.89 (as per 9.5 Multiplication Factor) <br />
                                    75% in CGPA = 3.75 (as per 5-grading scale) <br />
                                    75% in CGPA = 3 (as per 4-grading scale)
                                </p>
                            </div>
                            <div className="faq-item mb-6">
                                <h3 className="text-lg font-semibold text-blue-500">Q11. What is 80% in CGPA?</h3>
                                <p className="ml-4">
                                    Ans. Using the same formula as given in Q9, 80% in CGPA is:
                                    <br />
                                    80% in CGPA = 8.42 (as per 9.5 Multiplication Factor) <br />
                                    80% in CGPA = 4 (as per 5-grading scale) <br />
                                    80% in CGPA = 3.2 (as per 4-grading scale)
                                </p>
                            </div>
                            <div className="faq-item mb-4">
                                <h3 className="text-lg font-semibold text-blue-500">Q12. What is 95.4% in CGPA?</h3>
                                <p className="ml-4">
                                    Ans. Using the same formula as given in Q9, 95.4% in CGPA is:
                                    <br />
                                    95.4% in CGPA = 10 (as per 9.5 Grading Scale, note that all percentages above 95% are counted as 10 CGPA) <br />
                                    95.4% in CGPA = 4.77 (as per 5-grading scale) <br />
                                    95.4% in CGPA = 3.81 (as per 4-grading scale)
                                </p>
                            </div>
                        </div>
                    </section>

                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                        Note: Conversion formulas vary between institutions.
                    </p>
                </>
            )}
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
        </div>

    );
};

export default PercentageContent;
