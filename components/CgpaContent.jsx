import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';



const CgpaContent = () => {
    const [headings, setHeadings] = useState([]);
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMainExpanded, setIsMainExpanded] = useState(false);
    const theme = useTheme


    const toggleMainExpand = () => {
        setIsMainExpanded(!isMainExpanded);
    };

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll('.heading'));
        const headingData = headingElements.map((heading) => ({
            id: heading.id,
            text: heading.innerText,
            element: heading,
        }));

        setHeadings(headingData);
    }, []);

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
            <div className="">
                <div className='dark:bg-gray-900'>
                    <h1 id='section1' className="text-4xl  font-bold  text-blue-500 drop-shadow-md mt-4 mb-4">
                        CGPA to Percentage Calculator
                    </h1>

                    <p className="text-lg mb-4 text-gray-700 leading-snug  dark:text-gray-300">
                        Welcome fellow learners and academicians! As you all know, CGPAs and Percentages play important roles in the entire educational system. We often get into situations where we need to use them interchangeably, so Lord Calculator presents you with the most reliable and blazing-fast CGPA to Percentage Calculator to help you calculate the grades on the go! Here's a detailed guide on how our CGPA calculator works followed by an explanation of the Grading System used by various universities. We also have listed the CGPA to Percentage formula as per various grading systems followed.
                    </p>
                    <h2 id='section2' className="text-2xl font-bold mb-2 text-blue-500 drop-shadow-sm">
                        CGPA to Percentage Conversion Formula
                    </h2>
                    <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                        <strong>Percentage = CGPA × Multiplication Factor</strong>
                    </p>
                </div>
                <div className="bg-white  rounded-lg shadow-lg max-w-4xl mx-auto border-t-4 mt-8 mb-4 dark:bg-gray-800 dark:border lue-400">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl p-4 font-semibold text-blue-600 dark:text-blue-400">Table of Contents</h3>
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
                        <div className="grid grid-cols-2 gap-x-6">
                            <ol className="space-y-3 p-4">
                                {[
                                    'CGPA to Percentage Calculator',
                                    'CGPA to Percentage Conversion Formula',
                                    'Lord Calculators CGPA to Percentage Calculator',
                                    'How to Use Lord Calculator CGPA to Percentage Calculator',
                                    'What is CGPA and How Is It Calculated?',
                                    'Definition of Important Terms You Need to Know',
                                    'Why Convert CGPA to Percentage or Percentage to CGPA?',
                                    'How to Calculate Percentage from CGPA',
                                    'Common Pitfalls during CGPA to Percentage Conversion',
                                ].map((item, index) => (
                                    <li key={index + 1}>
                                        <button
                                           onClick={() => {
                                            scrollToSection(`section${index + 1}`);
                                            setIsMainExpanded(isMainExpanded === index + 1 ? null : index + 1); 
                                        }}
                                            className="w-full text-left text-blue-600 hover:text-blue-800 focus:outline-none transition-all hover:scale-95  duration-300 dark:text-blue-400 dark:hover:text-blue-600"
                                        >
                                            {index + 1}. {item}
                                        </button>
                                    </li>
                                ))}
                            </ol>
                            <ol className="space-y-3 p-4">
                                {[
                                    'CGPA to Percentage in 10 Grade Points System',
                                    'CGPA to Percentage in 5 Grade Scale',
                                    'CGPA to Percentage in 4 Grade Scale',
                                    'What is a Grading Scale & How do Universities Choose Their Standard Scale?',
                                    'What is a Multiplication Factor and How Does it Work?',
                                    'CGPA to Percentage Conversion for different Boards and Universities.',
                                    'CGPA to Percentage Conversion for different Boards and Universities.',
                                    'FAQs related to CGPA Calculator',
                                ].map((item, index) => (
                                    <li key={index + 10}>
                                        <button
                                            onClick={() => {scrollToSection(`section${index + 10}`)
                                            setIsMainExpanded(isMainExpanded === index + 10 ? null : index + 10); 
                                        }}
                                            className="w-full text-left text-blue-600 hover:text-blue-800 focus:outline-none transition-all hover:scale-95 duration-300 dark:text-blue-400 dark:hover:text-blue-600"
                                        >
                                            {index + 10}. {item}
                                        </button>
                                    </li>
                                ))}
                                {!isMainExpanded && (
                                    <div className="absolute bottom-20 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent"></div>
                                )}
                            </ol>

                        </div>
                    )}

                </div>


                {isMainExpanded && (
                    <>
                        <div className="mx-auto px-2 py-8 bg-white rounded-lg dark:bg-gray-900 dark:text-white">


                            <div className=''>
                                <h2 id='section3' className="text-2xl text-blue-500 drop-shadow-sm mt-6 mb-4">Lord Calculator's CGPA to Percentage Calculator</h2>
                                <p>
                                    <img
                                        src="/Lord-Calculator_s-CGPA-to-Percentage-Calculator.jpg"
                                        alt="CGPA to Percentage Calculator"
                                        className="mx-auto mb-6"
                                    />
                                </p>

                                <p className="text-lg text-gray-700 mb-6 leading-relaxed dark:text-gray-300">
                                    Our CGPA calculator is designed with two main factors in mind: ease of use and lightning-fast calculations.
                                    {!isMainExpanded && (
                                        <span className="text-gray-600 dark:text-gray-400">... </span>
                                    )}
                                    {isMainExpanded && (
                                        <>
                                            While grade calculations involve various factors, we've incorporated all the essential components to calculate your grades or percentages accurately. Different universities use different grading scales and multiplication factors (don’t worry, we'll explain these terms below). For your convenience, we’ve included both the Grade Scale and the manual Multiplication Factor.
                                        </>
                                    )}
                                </p>

                                <div>
                                    <h3 id='section4' className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mt-8 mb-4 dark:text-white">
                                        How to Use Lord Calculator's CGPA to Percentage Calculator
                                    </h3>

                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed dark:text-gray-300">
                                        Simply enter the required fields in our CGPA calculator, hit "Calculate," and voilà! Your percentage will be displayed along with our grade meter. It’s that simple. However, let me quickly explain the fields and data we need from you to calculate your grades and percentages accurately.
                                    </p>

                                    <ol className="list-decimal list-inside pl-6 text-lg text-gray-700 mb-8 space-y-4 dark:text-gray-300">
                                        <li>
                                            Head over to{" "}
                                            <Link href="/" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500">
                                                https://lordcalculator.com/educational-calculator/cgpa-to-percentage-calculator
                                            </Link>
                                        </li>
                                        <li>
                                            In the first field, enter your CGPA. Make sure to input it accurately, including any decimal points.
                                        </li>
                                        <li>
                                            Choose the Grading Scale used by your university. Common grading scales are 4, 5, and 10. Alternatively, you can enter the multiplication factor manually and hit the calculate button. Once you've entered all the values, click "Calculate" to get your percentage. You’ll also be able to check your performance on the grading meter. Additionally, you can get a CGPA to percentage conversion certificate from us (note that this is a representational certificate).
                                        </li>
                                    </ol>
                                </div>
                                <div className=''>
                                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent  mb-4 dark:text-white">
                                        Tip for CGPA to Percentage Calculation
                                    </h3>

                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed dark:text-gray-300">
                                        Different universities may use varying multiplication factors (also known as conversion factors), even under the same grading scale. For instance, University X might use a 1-point grading scale with a standard multiplication factor of 9.5, while another university could use a factor of 9.7 or 9.8. So, it's important to double-check the multiplication factor you enter into the CGPA to percentage calculator before hitting the "Calculate" button.
                                    </p>

                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed dark:text-gray-300">
                                        If you're unsure about your university's Grade Scale or multiplication factor, don’t worry! We’ve listed{" "}
                                        <Link href="#internal-link-to-conversion-section" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500">
                                            CGPA to percentage conversion for different Boards and Universities
                                        </Link>{" "}
                                        for your reference.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
                                        Unsure about your university’s grading scale or multiplication factor? No worries! We've provided CGPA to percentage conversion tables for various boards and universities right here to make your calculation easier.
                                    </p>
                                </div>
                                <h3 id='section5' className="text-2xl font-semibold text-blue-500  dark:text-white">
                                    What is CGPA and How Is It Calculated?
                                </h3>

                                <div className="text-lg text-gray-700 leading-relaxed dark:text-gray-300 ">
                                    <p>
                                        CGPA abbreviated for Cumulative Grade Point Average is an overall assessment of a student's academic performance over a defined academic period.
                                        While some universities and boards consider it as the average of all the semester grade points attained by a student throughout the course, others might include an additional factor which is Credits, in the calculation.
                                    </p>

                                    <div className="mt-4 text-md text-gray-800 dark:text-gray-200">
                                        <p className="text-lg font-semibold mb-2">CGPA Calculation Formula Method 1:</p>
                                        <p className="mb-4">
                                            One method of calculating CGPA is by finding the average. Then, the CGPA calculation formula would be the sum of Grade Points in all the semesters divided by the number of semesters. Mathematically, the CGPA formula can be represented as;
                                        </p>
                                        <div className="text-center mb-6">
                                            <p className="text-xl font-semibold">
                                                CGPA =
                                                <span className="inline-block ml-2 align-middle">
                                                    <div className="border-b  border-gray-500 dark:border-gray-400 pb-1 text-xl">
                                                        SGPA
                                                    </div>
                                                    <span>Number of Semesters</span>
                                                </span>
                                            </p>
                                        </div>
                                        <p className="mb-4">
                                            Example: Ram, our friend from My Best Friend essay, has finally passed from school and joined college. There he achieved an SGPA in 4 semesters: 6+8.5+7+9.5, then his CGPA would be:
                                        </p>
                                        <div className="text-center mb-6">
                                            <p className="text-xl font-semibold">
                                                CGPA =
                                                <div className="inline-block ml-2 align-middle">
                                                    <div className="border-b border-gray-500 dark:border-gray-400 pb-1 text-xl">
                                                        (6 + 8.5 + 7 + 9.5)
                                                    </div>
                                                    <spans> 4 </spans>
                                                </div>
                                                <span className='ml-2'>
                                                    = 7.75
                                                </span>
                                            </p>
                                        </div>
                                        <p className="text-lg font-semibold mb-2">CGPA Calculation Formula Method 2:</p>
                                        <p className="mb-4">
                                            Now another CGPA formula, which is also in practice, is to find the sum of the product of SGPA and credits earned divided by the number of credits earned. Mathematically, this CGPA calculation formula can be represented as;
                                        </p>
                                        <div className="text-center mb-6">
                                            <p className="text-xl font-semibold">
                                                CGPA =
                                                <span className="inline-block ml-2 align-middle">
                                                    <div className="border-b border-gray-500 dark:border-gray-400 pb-1 text-xl">
                                                        (SGPA × Credits)
                                                    </div>
                                                    <span>  Credits</span>
                                                </span>
                                            </p>
                                        </div>
                                        <p className="mb-4">
                                            Example: Shyam, another friend from the My Best Friend essay, also joined a different college. And there he achieved SGPA in 4 semesters: 7.2+6.5+8.9+9.6 with credits earned 4+3+3+5, then his CGPA would be:
                                        </p>
                                        <div className="text-center ">
                                            <p className="text-xl font-semibold mr-2">
                                                CGPA =
                                                <div className="inline-block ml-2 align-middle">
                                                    <div className="border-b border-gray-500 dark:border-gray-400 pb-1 text-xl">
                                                        (7.2×4 + 6.5×3 + 8.9×3 + 9.6×5)
                                                    </div>
                                                    <span>(4 + 3 + 3 + 5)</span>
                                                </div>
                                                <span className='ml-4'>
                                                    = 8.2
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className=''>
                            <h2 id='section6' className="text-2xl font-semibold bg-gradient-to-r from-blue-700 to-purple-950 bg-clip-text text-transparent mb-4">Definition of Important Terms You Need to Know</h2>
                            <p className="text-lg mb-4">
                                While going through an official document, form, or even your certificate you see certain terms and abbreviations that are repeatedly used. Let us go over them quickly before proceeding to how different boards/universities set their conversion formula.

                            </p>
                            <ul className="list-disc pl-6 ">
                                <li><strong>Grade Points:</strong>Grade Points are the corresponding numerical values assigned to a particular Letter Grade. Different universities adjust the range of Grade Points as per their Letter Grades. For example, a certain university might have 10 Grade Points for an A grade while another might use an O (Outstanding) for 10 Grade Points.
                                </li>
                                <li><strong>GPA:</strong> Abbreviated for Grade Point Average. It represents the average of grade points attained by a student in one semester or academic session.
                                </li>
                                <li><strong>CGPA:</strong>CGPA represents the cumulative average of grade points attained in all the subjects or semesters in a specified academic session. CGPA scale varies between 0 to 4, 0 to 5, or 0 to 10. However, to get a CGPA in other formats institutions let students to convert CGPA  to percentage or in any desired format.
                                </li>
                                <li><strong>SGPA:</strong> - SGPA is abbreviated for Semester Grade Point Average. It denominates the average grade points of all subjects in a particular semester. Credits earned and Credit hours play a significant role in calculating SGPA.
                                </li>
                                <li><strong>Letter Grade:</strong>- These are the grade Letters assigned to the corresponding numerical value of a percentage or marks scored, or CGPA. The different educational system follows various letter grade formats. For example, the USA follows traditional A-F letter grading while Scottish, and even certain Indian educational systems follow other depictions such as "O" for outstanding, "S" for Superior, and so on!
                                </li>
                                <li><strong>Credit Hours:</strong>- Credit Hours are the number of hours a student spends in a particular class per week/semester. These hours might vary depending on the subjects. Primary subjects may have more credit hours while optional may have fewer hours.</li>
                                <li><strong>Credit Points:</strong>- Credit Points are calculated by multiplying Grade Points with the Credit Hours i.e. Credit Points = Grade Points x Credit History.
                                </li>
                                <li><strong>Weighted Average:</strong>- Weighted Average depicts the overall academic performance of a student. In the weighted average, all the assessments are assigned values as per their weightage, and then weighted grades are used to calculate the final grade.
                                </li>
                                <li><strong>Normalization:</strong>Normalization is the process of adjusting scores to counter the difference in difficulty among various exams or subjects. The impact of normalization can be seen while comparing GPA or CGPA between different universities.
                                </li>
                                <li><strong>Cumulative Average:</strong>It is the average of all grade points or GPAs earned over the academic sessions till now.
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h2 id='section7' className="text-2xl font-semibold text-blue-400 mt-6 mb-4">Why Convert CGPA to Percentage or Percentage to CGPA?</h2>
                            <img
                                src="/CGPA-to-Percentage-Conversion-for-different-Boards-and-Universities.jpg"
                                alt="CGPA to Percentage Calculator"
                                className="mx-auto mb-6"
                            />
                            <p className="text-lg text-gray-700  dark:text-gray-300">
                                Now that you know all the related terms, the question arises: why do we need conversions or calculations like CGPA to percentage, or even percentage to CGPA? Well, the reasons might vary from person to person.
                            </p>
                        </div>

                        <div className=" ">
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-purple-950 bg-clip-text text-transparent mb-2 dark:text-white">
                                Boards/Universities Requirement
                            </h4>
                            <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                                Certain academic forms and procedures require students to submit percentages along with their CGPA. In that case, you have no option but to quickly head over to websites like Lord Calculator that can give your grades in any required format within fractions of a second. You can convert CGPA to percentage with just a few clicks.
                            </p>
                            <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                                Additionally, when changing your board/university, you may be required to fill in your previous grades as per the new board/university format.
                            </p>
                            <p className="text-lg text-gray-700  dark:text-gray-300">
                                Another reason is while filling out forms for competitive exams such as GATE, CAT, or UPSC, candidates are required to submit their grades in a universal format, such as a percentage. And we all know that one minor mistake can lead to the rejection of your form. In such cases, a credible tool that can accurately convert your CGPA into the requested format comes in handy and saves you time and effort.
                            </p>
                        </div>

                        <div className="">
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-purple-950 bg-clip-text text-transparent mb-2 dark:text-white">
                                International Relevance
                            </h4>
                            <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                                Another common real-life situation for using a CGPA calculator is when you are applying for overseas courses. For example, if you are an Indian student planning to study abroad, grading systems within India vary widely. The grade calculation at Delhi University differs from that at IIT. Different universities/boards use different multiplication factors. In such scenarios, overseas universities set up a universal parameter, such as percentage, to have a fair and unbiased view of an applicant's academic performance. Thus, you are required to convert your grades, such as percentage to CGPA or CGPA to percentage, using the established method by your university.
                            </p>
                            <p className="text-lg text-gray-700  dark:text-gray-300">
                                The same applies to schooling boards like CBSE, ICSE, state boards, and the standards followed in the US or European Union.
                            </p>
                        </div>

                        <div className=''>
                            <h2 id='section8' className="text-2xl font-semibold text-blue-500 mt-6 mb-4 dark:text-white">
                                How to Calculate Percentage from CGPA
                            </h2>
                            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                                Now that you understand the importance and relevance of converting CGPA to percentage, let’s explore how you can accurately determine your percentage from CGPA.
                                There are two methods to do this: the manual method or using an online CGPA calculator. The manual method involves writing out an equation and calculating step by step, while an online calculator can instantly convert your grades with minimal effort!
                                Don't worry, we’ll discuss both methods so you can choose the one that suits you best.
                            </p>

                            <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">Manual Method</h3>
                            <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                                To convert CGPA to percentage (or vice versa), you’ll need to understand the grading scale, credit scores, and multiplication factor used by your board/university.
                                Once you have this information, you can apply the following formula:
                            </p>
                            <p className="text-lg mb-4 dark:text-white">
                                <strong>Percentage = CGPA × Multiplication Factor</strong>
                            </p>
                            <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                                After applying the formula, you're one-fourth of the way done. If you have a knack for calculations or are familiar with Vedic math, it should be easy to divide and multiply with accurate decimal points to get the correct conversion. However, to avoid mistakes, using a calculator is highly recommended.
                            </p>
                            <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                                But why not save yourself some time and effort by using an automatic method, especially if you're already using a calculator? It’ll make the whole process quicker and more accurate.
                            </p>

                            <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">Automatic Method</h3>
                            <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                                The automatic method is simple and error-free. To convert CGPA to percentage (or vice versa) using the automatic method, just enter the required values in the appropriate fields of the CGPA calculator.
                                Select your grading scale or manually enter the multiplication factor, then hit the "Calculate" button. That’s it! Your conversion is done in an instant.
                            </p>
                            <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                                If you're using LordCalculator’s CGPA calculator, you can even export your conversion history as a PDF and save it for future reference. We also offer a customized CGPA to Percentage conversion certificate.
                            </p>
                            <p className="text-lg text-gray-700  dark:text-gray-300">
                                By using the automatic method, you eliminate the possibility of errors, like accidentally entering incorrect values during manual calculation. This is especially helpful when using basic calculators, which can sometimes lead to mistakes in multiplication and division.
                            </p>
                        </div>

                        <div className=''>
                            <h2 id='section9' className="text-2xl font-semibold bg-gradient-to-r from-blue-700 to-purple-950 bg-clip-text text-transparent mt-6 mb-4 dark:text-white">
                                Common Pitfalls during CGPA to Percentage Conversion
                            </h2>
                            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                                Now that you know how to convert CGPA to percentage, there are a few things you should carefully consider to ensure accurate results. Below are the most common errors that students make while calculating their percentage from CGPA (or vice-versa). Make sure you avoid these common mistakes.
                            </p>
                            <ul className="list-decimal pl-6 mb-6">
                                <li className='text-gray-700 dark:text-gray-300'>
                                    <strong>Misinterpreting the Formula:</strong> Some students mistakenly interpret the formula by using the wrong multiplier, for example, using 10 instead of 9.5. It’s crucial to understand that even though various universities may use the same grading scale, they might apply different multiplication factors for CGPA to percentage or percentage to CGPA conversion. For example, CBSE, ICSE, Jawaharlal Nehru Technological University (JNTU), and Savitribai Phule University (SPPU) all use a 10-point grading scale, but each has its own multiplication factor. CBSE uses 9.5, ICSE uses 9.8, JNTU uses 10, and SPPU uses 6.3. So, it's important to know the exact multiplication factor for your board or university to avoid errors, even when using online CGPA calculators.
                                </li>
                                <li className='text-gray-700 dark:text-gray-300'>
                                    <strong>Not Knowing the Board's Formula:</strong> Another common pitfall is being unaware that different universities use different formulas. As mentioned earlier, JNTU or SPPU apply multiplication factors directly to convert CGPA to percentage. However, universities like the University of Mumbai or Gujarat Technological University (GTU) use a different approach. They first multiply the CGPA by a specific multiplication factor (7.25 for Mumbai University or 7.1 for GTU) and then add a fixed value (11 for Mumbai University or 12 for GTU) to the product to determine the percentage. We will discuss these conversion factors for different universities and boards in a later section of this article.
                                </li>
                                <li className='text-gray-700 dark:text-gray-300'>
                                    <strong>Over-reliance on Online CGPA Calculators:</strong> While online calculators offer a quick and reliable solution for grade conversion, they are not always 100% accurate. Online calculators may not account for all the special cases we discussed, such as those for Mumbai University or GTU. While LordCalculator strives to include all possible parameters, it’s not recommended to rely solely on online calculators for conversions. It’s always a good idea to double-check your values and the method used by your university or board.
                                </li>
                            </ul>
                        </div>

                        <div class="container mx-auto p-4">
                            <h2 id='section10' className="text-2xl font-semibold text-blue-400 mt-6 mb-4">CGPA to Percentage in 10 Grade Points System</h2>
                            <div class="grid grid-cols-1 sm:grid-cols-3 border border-blue-400">
                                <span className='border p-2 rounded'>3 CGPA to Percentage 28.5%</span>

                                <span className='border p-2 rounded'>4 CGPA to Percentage 38%</span>

                                <span className='border p-2 rounded'>5 CGPA to Percentage 47.5%</span>

                                <span className='border p-2 rounded'>5.01 CGPA to Percentage 47.59%</span>

                                <span className='border p-2 rounded'>5.02 CGPA to Percentage 47.68%</span>

                                <span className='border p-2 rounded'>5.03 CGPA to Percentage 47.77%</span>

                                <span className='border p-2 rounded'>5.04 CGPA to Percentage 47.86%</span>

                                <span className='border p-2 rounded'>5.05 CGPA to Percentage 47.95%</span>

                                <span className='border p-2 rounded'>5.06 CGPA to Percentage 48.04%</span>

                                <span className='border p-2 rounded'>5.07 CGPA to Percentage 48.13%</span>

                                <span className='border p-2 rounded'>5.08 CGPA to Percentage 48.22%</span>

                                <span className='border p-2 rounded'>5.09 CGPA to Percentage 48.31%</span>

                                <span className='border p-2 rounded'>5.10 CGPA to Percentage 48.4%</span>

                                <span className='border p-2 rounded'>5.11 CGPA to Percentage 48.49%</span>

                                <span className='border p-2 rounded'>5.12 CGPA to Percentage 48.58%</span>

                                <span className='border p-2 rounded'>5.13 CGPA to Percentage 48.67%</span>

                                <span className='border p-2 rounded'>5.14 CGPA to Percentage 48.76%</span>

                                <span className='border p-2 rounded'>5.15 CGPA to Percentage 48.85%</span>

                                <span className='border p-2 rounded'>5.16 CGPA to Percentage 48.94%</span>

                                <span className='border p-2 rounded'>5.17 CGPA to Percentage 49.03%</span>

                                <span className='border p-2 rounded'>5.18 CGPA to Percentage 49.12%</span>

                                <span className='border p-2 rounded'>5.19 CGPA to Percentage 49.21%</span>

                                <span className='border p-2 rounded'>5.20 CGPA to Percentage 49.3%</span>

                                <span className='border p-2 rounded'>5.21 CGPA to Percentage 49.39%</span>

                                <span className='border p-2 rounded'>5.22 CGPA to Percentage 49.48%</span>

                                <span className='border p-2 rounded'>5.23 CGPA to Percentage 49.57%</span>

                                <span className='border p-2 rounded'>5.24 CGPA to Percentage 49.66%</span>

                                <span className='border p-2 rounded'>5.25 CGPA to Percentage 49.75%</span>

                                <span className='border p-2 rounded'>5.26 CGPA to Percentage 49.84%</span>

                                <span className='border p-2 rounded'>5.27 CGPA to Percentage 49.93%</span>

                                <span className='border p-2 rounded'>5.28 CGPA to Percentage 50.02%</span>

                                <span className='border p-2 rounded'>5.29 CGPA to Percentage 50.11%</span>

                                <span className='border p-2 rounded'>5.30 CGPA to Percentage 50.2%</span>

                                <span className='border p-2 rounded'>5.31 CGPA to Percentage 50.29%</span>

                                <span className='border p-2 rounded'>5.32 CGPA to Percentage 50.38%</span>

                                <span className='border p-2 rounded'>5.33 CGPA to Percentage 50.47%</span>

                                <span className='border p-2 rounded'>5.34 CGPA to Percentage 50.56%</span>

                                <span className='border p-2 rounded'>5.35 CGPA to Percentage 50.65%</span>

                                <span className='border p-2 rounded'>5.36 CGPA to Percentage 50.74%</span>

                                <span className='border p-2 rounded'>5.37 CGPA to Percentage 50.83%</span>

                                <span className='border p-2 rounded'>5.38 CGPA to Percentage 50.92%</span>

                                <span className='border p-2 rounded'>5.39 CGPA to Percentage 51.01%</span>

                                <span className='border p-2 rounded'>5.40 CGPA to Percentage 51.1%</span>

                                <span className='border p-2 rounded'>5.41 CGPA to Percentage 51.19%</span>

                                <span className='border p-2 rounded'>5.42 CGPA to Percentage 51.28%</span>

                                <span className='border p-2 rounded'>5.43 CGPA to Percentage 51.37%</span>

                                <span className='border p-2 rounded'>5.44 CGPA to Percentage 51.46%</span>

                                <span className='border p-2 rounded'>5.45 CGPA to Percentage 51.55%</span>

                                <span className='border p-2 rounded'>5.46 CGPA to Percentage 51.64%</span>

                                <span className='border p-2 rounded'>5.47 CGPA to Percentage 51.73%</span>

                                <span className='border p-2 rounded'>5.48 CGPA to Percentage 51.82%</span>

                                <span className='border p-2 rounded'>5.49 CGPA to Percentage 51.91%</span>

                                <span className='border p-2 rounded'>5.50 CGPA to Percentage 52%</span>

                                <span className='border p-2 rounded'>CGPA: 5.51 in Percentage 52.32%</span>

                                <span className='border p-2 rounded'>CGPA: 5.52 in Percentage 52.41%</span>

                                <span className='border p-2 rounded'>CGPA: 5.53 in Percentage 52.51%</span>

                                <span className='border p-2 rounded'>CGPA: 5.54 in Percentage 52.60%</span>

                                <span className='border p-2 rounded'>CGPA: 5.55 in Percentage 52.70%</span>

                                <span className='border p-2 rounded'>CGPA: 5.56 in Percentage 52.79%</span>

                                <span className='border p-2 rounded'>CGPA: 5.57 in Percentage 52.89%</span>

                                <span className='border p-2 rounded'>CGPA: 5.58 in Percentage 52.98%</span>

                                <span className='border p-2 rounded'>CGPA: 5.59 in Percentage 53.08%</span>

                                <span className='border p-2 rounded'>CGPA: 5.60 in Percentage 53.17%</span>

                                <span className='border p-2 rounded'>CGPA: 5.61 in Percentage 53.27%</span>

                                <span className='border p-2 rounded'>CGPA: 5.62 in Percentage 53.36%</span>

                                <span className='border p-2 rounded'>CGPA: 5.63 in Percentage 53.46%</span>

                                <span className='border p-2 rounded'>CGPA: 5.64 in Percentage 53.55%</span>

                                <span className='border p-2 rounded'>CGPA: 5.65 in Percentage 53.65%</span>

                                <span className='border p-2 rounded'>CGPA: 5.66 in Percentage 53.74%</span>

                                <span className='border p-2 rounded'>CGPA: 5.67 in Percentage 53.84%</span>

                                <span className='border p-2 rounded'>CGPA: 5.68 in Percentage 53.93%</span>

                                <span className='border p-2 rounded'>CGPA: 5.69 in Percentage 54.03%</span>

                                <span className='border p-2 rounded'>CGPA: 5.70 in Percentage 54.12%</span>

                                <span className='border p-2 rounded'>CGPA: 5.71 in Percentage 54.22%</span>

                                <span className='border p-2 rounded'>CGPA: 5.72 in Percentage 54.31%</span>

                                <span className='border p-2 rounded'>CGPA: 5.73 in Percentage 54.41%</span>

                                <span className='border p-2 rounded'>CGPA: 5.74 in Percentage 54.50%</span>

                                <span className='border p-2 rounded'>CGPA: 5.75 in Percentage 54.60%</span>

                                <span className='border p-2 rounded'>CGPA: 5.76 in Percentage 54.69%</span>

                                <span className='border p-2 rounded'>CGPA: 5.77 in Percentage 54.79%</span>

                                <span className='border p-2 rounded'>CGPA: 5.78 in Percentage 54.88%</span>

                                <span className='border p-2 rounded'>CGPA: 5.79 in Percentage 54.98%</span>

                                <span className='border p-2 rounded'>CGPA: 5.80 in Percentage 55.07%</span>

                                <span className='border p-2 rounded'>CGPA: 5.81 in Percentage 55.17%</span>

                                <span className='border p-2 rounded'>CGPA: 5.82 in Percentage 55.26%</span>

                                <span className='border p-2 rounded'>CGPA: 5.83 in Percentage 55.36%</span>

                                <span className='border p-2 rounded'>CGPA: 5.84 in Percentage 55.45%</span>

                                <span className='border p-2 rounded'>CGPA: 5.85 in Percentage 55.55%</span>

                                <span className='border p-2 rounded'>CGPA: 5.86 in Percentage 55.64%</span>

                                <span className='border p-2 rounded'>CGPA: 5.87 in Percentage 55.74%</span>

                                <span className='border p-2 rounded'>CGPA: 5.88 in Percentage 55.83%</span>

                                <span className='border p-2 rounded'>CGPA: 5.89 in Percentage 55.93%</span>

                                <span className='border p-2 rounded'>CGPA: 5.90 in Percentage 56.02%</span>

                                <span className='border p-2 rounded'>CGPA: 5.91 in Percentage 56.12%</span>

                                <span className='border p-2 rounded'>CGPA: 5.92 in Percentage 56.21%</span>

                                <span className='border p-2 rounded'>CGPA: 5.93 in Percentage 56.31%</span>

                                <span className='border p-2 rounded'>CGPA: 5.94 in Percentage 56.40%</span>

                                <span className='border p-2 rounded'>CGPA: 5.95 in Percentage 56.50%</span>

                                <span className='border p-2 rounded'>CGPA: 5.96 in Percentage 56.59%</span>

                                <span className='border p-2 rounded'>CGPA: 5.97 in Percentage 56.69%</span>

                                <span className='border p-2 rounded'>CGPA: 5.98 in Percentage 56.78%</span>

                                <span className='border p-2 rounded'>CGPA: 5.99 in Percentage 56.88%</span>

                                <span className='border p-2 rounded'>CGPA: 6.00 in Percentage 56.97%</span>

                                <span className='border p-2 rounded'>6.01 CGPA in Percentage 57.07%</span>

                                <span className='border p-2 rounded'>6.02 CGPA in Percentage 57.16%</span>

                                <span className='border p-2 rounded'>6.03 CGPA in Percentage 57.26%</span>

                                <span className='border p-2 rounded'>6.04 CGPA in Percentage 57.35%</span>

                                <span className='border p-2 rounded'>6.05 CGPA in Percentage 57.45%</span>

                                <span className='border p-2 rounded'>6.06 CGPA in Percentage 57.54%</span>

                                <span className='border p-2 rounded'>6.07 CGPA in Percentage 57.64%</span>

                                <span className='border p-2 rounded'>6.08 CGPA in Percentage 57.73%</span>

                                <span className='border p-2 rounded'>6.09 CGPA in Percentage 57.83%</span>

                                <span className='border p-2 rounded'>6.10 CGPA in Percentage 57.92%</span>

                                <span className='border p-2 rounded'>6.11 CGPA in Percentage 58.02%</span>

                                <span className='border p-2 rounded'>6.12 CGPA in Percentage 58.11%</span>

                                <span className='border p-2 rounded'>6.13 CGPA in Percentage 58.21%</span>

                                <span className='border p-2 rounded'>6.14 CGPA in Percentage 58.30%</span>

                                <span className='border p-2 rounded'>6.15 CGPA in Percentage 58.40%</span>

                                <span className='border p-2 rounded'>6.16 CGPA in Percentage 58.49%</span>

                                <span className='border p-2 rounded'>6.17 CGPA in Percentage 58.59%</span>

                                <span className='border p-2 rounded'>6.18 CGPA in Percentage 58.68%</span>

                                <span className='border p-2 rounded'>6.19 CGPA in Percentage 58.78%</span>

                                <span className='border p-2 rounded'>6.20 CGPA in Percentage 58.87%</span>

                                <span className='border p-2 rounded'>6.21 CGPA in Percentage 58.97%</span>

                                <span className='border p-2 rounded'>6.22 CGPA in Percentage 59.06%</span>

                                <span className='border p-2 rounded'>6.23 CGPA in Percentage 59.16%</span>

                                <span className='border p-2 rounded'>6.24 CGPA in Percentage 59.25%</span>

                                <span className='border p-2 rounded'>6.25 CGPA in Percentage 59.35%</span>

                                <span className='border p-2 rounded'>6.26 CGPA in Percentage 59.44%</span>

                                <span className='border p-2 rounded'>6.27 CGPA in Percentage 59.54%</span>

                                <span className='border p-2 rounded'>6.28 CGPA in Percentage 59.63%</span>

                                <span className='border p-2 rounded'>6.29 CGPA in Percentage 59.73%</span>

                                <span className='border p-2 rounded'>6.30 CGPA in Percentage 59.82%</span>

                                <span className='border p-2 rounded'>6.31 CGPA in Percentage 59.92%</span>

                                <span className='border p-2 rounded'>6.32 CGPA in Percentage 60.01%</span>

                                <span className='border p-2 rounded'>6.33 CGPA in Percentage 60.11%</span>

                                <span className='border p-2 rounded'>6.34 CGPA in Percentage 60.20%</span>

                                <span className='border p-2 rounded'>6.35 CGPA in Percentage 60.30%</span>

                                <span className='border p-2 rounded'>6.36 CGPA in Percentage 60.39%</span>

                                <span className='border p-2 rounded'>6.37 CGPA in Percentage 60.49%</span>

                                <span className='border p-2 rounded'>6.38 CGPA in Percentage 60.58%</span>

                                <span className='border p-2 rounded'>6.39 CGPA in Percentage 60.68%</span>

                                <span className='border p-2 rounded'>6.40 CGPA in Percentage 60.77%</span>

                                <span className='border p-2 rounded'>6.41 CGPA in Percentage 60.87%</span>

                                <span className='border p-2 rounded'>6.42 CGPA in Percentage 60.96%</span>

                                <span className='border p-2 rounded'>6.43 CGPA in Percentage 61.06%</span>

                                <span className='border p-2 rounded'>6.44 CGPA in Percentage 61.15%</span>

                                <span className='border p-2 rounded'>6.45 CGPA in Percentage 61.25%</span>

                                <span className='border p-2 rounded'>6.46 CGPA in Percentage 61.34%</span>

                                <span className='border p-2 rounded'>6.47 CGPA in Percentage 61.44%</span>

                                <span className='border p-2 rounded'>6.48 CGPA in Percentage 61.53%</span>

                                <span className='border p-2 rounded'>6.49 CGPA in Percentage 61.63%</span>

                                <span className='border p-2 rounded'>6.50 CGPA in Percentage 61.72%</span>

                                <span className='border p-2 rounded'>6.51 CGPA in Percentage 61.82%</span>

                                <span className='border p-2 rounded'>6.52 CGPA in Percentage 61.91%</span>

                                <span className='border p-2 rounded'>6.53 CGPA in Percentage 62.01%</span>

                                <span className='border p-2 rounded'>6.54 CGPA in Percentage 62.10%</span>

                                <span className='border p-2 rounded'>6.55 CGPA in Percentage 62.20%</span>

                                <span className='border p-2 rounded'>6.56 CGPA in Percentage 62.29%</span>

                                <span className='border p-2 rounded'>6.57 CGPA in Percentage 62.39%</span>

                                <span className='border p-2 rounded'>6.58 CGPA in Percentage 62.48%</span>

                                <span className='border p-2 rounded'>6.59 CGPA in Percentage 62.58%</span>

                                <span className='border p-2 rounded'>6.60 CGPA in Percentage 62.67%</span>

                                <span className='border p-2 rounded'>6.61 CGPA in Percentage 62.77%</span>

                                <span className='border p-2 rounded'>6.62 CGPA in Percentage 62.86%</span>

                                <span className='border p-2 rounded'>6.63 CGPA in Percentage 62.96%</span>

                                <span className='border p-2 rounded'>6.64 CGPA in Percentage 63.05%</span>

                                <span className='border p-2 rounded'>6.65 CGPA in Percentage 63.15%</span>

                                <span className='border p-2 rounded'>6.66 CGPA in Percentage 63.24%</span>

                                <span className='border p-2 rounded'>6.67 CGPA in Percentage 63.34%</span>

                                <span className='border p-2 rounded'>6.68 CGPA in Percentage 63.43%</span>

                                <span className='border p-2 rounded'>6.69 CGPA in Percentage 63.53%</span>

                                <span className='border p-2 rounded'>6.70 CGPA in Percentage 63.62%</span>

                                <span className='border p-2 rounded'>6.71 CGPA in Percentage 63.72%</span>

                                <span className='border p-2 rounded'>6.72 CGPA in Percentage 63.81%</span>

                                <span className='border p-2 rounded'>6.73 CGPA in Percentage 63.91%</span>

                                <span className='border p-2 rounded'>6.74 CGPA in Percentage 64.00%</span>

                                <span className='border p-2 rounded'>6.75 CGPA in Percentage 64.10%</span>

                                <span className='border p-2 rounded'>6.76 CGPA in Percentage 64.19%</span>

                                <span className='border p-2 rounded'>6.77 CGPA in Percentage 64.29%</span>

                                <span className='border p-2 rounded'>6.78 CGPA in Percentage 64.38%</span>

                                <span className='border p-2 rounded'>6.79 CGPA in Percentage 64.48%</span>

                                <span className='border p-2 rounded'>6.80 CGPA in Percentage 64.57%</span>

                                <span className='border p-2 rounded'>6.81 CGPA in Percentage 64.67%</span>

                                <span className='border p-2 rounded'>6.82 CGPA in Percentage 64.76%</span>

                                <span className='border p-2 rounded'>6.83 CGPA in Percentage 64.86%</span>

                                <span className='border p-2 rounded'>6.84 CGPA in Percentage 64.95%</span>

                                <span className='border p-2 rounded'>6.85 CGPA in Percentage 65.05%</span>

                                <span className='border p-2 rounded'>6.86 CGPA in Percentage 65.14%</span>

                                <span className='border p-2 rounded'>6.87 CGPA in Percentage 65.24%</span>

                                <span className='border p-2 rounded'>6.88 CGPA in Percentage 65.34%</span>

                                <span className='border p-2 rounded'>6.89 CGPA in Percentage 65.43%</span>

                                <span className='border p-2 rounded'>6.90 CGPA in Percentage 65.53%</span>

                                <span className='border p-2 rounded'>6.91 CGPA in Percentage 65.62%</span>

                                <span className='border p-2 rounded'>6.92 CGPA in Percentage 65.72%</span>

                                <span className='border p-2 rounded'>6.93 CGPA in Percentage 65.81%</span>

                                <span className='border p-2 rounded'>6.94 CGPA in Percentage 65.91%</span>

                                <span className='border p-2 rounded'>6.95 CGPA in Percentage 66.00%</span>

                                <span className='border p-2 rounded'>6.96 CGPA in Percentage 66.10%</span>

                                <span className='border p-2 rounded'>6.97 CGPA in Percentage 66.19%</span>

                                <span className='border p-2 rounded'>6.98 CGPA in Percentage 66.29%</span>

                                <span className='border p-2 rounded'>6.99 CGPA in Percentage 66.38%</span>

                                <span className='border p-2 rounded'>7.00 CGPA in Percentage 66.48%</span>

                                <span className='border p-2 rounded'>7.01 CGPA in Percentage 66.57%</span>

                                <span className='border p-2 rounded'>7.02 CGPA in Percentage 66.67%</span>

                                <span className='border p-2 rounded'>7.03 CGPA in Percentage 66.76%</span>

                                <span className='border p-2 rounded'>7.04 CGPA in Percentage 66.86%</span>

                                <span className='border p-2 rounded'>7.05 CGPA in Percentage 66.95%</span>

                                <span className='border p-2 rounded'>7.06 CGPA in Percentage 67.05%</span>

                                <span className='border p-2 rounded'>7.07 CGPA in Percentage 67.14%</span>

                                <span className='border p-2 rounded'>7.08 CGPA in Percentage 67.24%</span>

                                <span className='border p-2 rounded'>7.09 CGPA in Percentage 67.33%</span>

                                <span className='border p-2 rounded'>7.10 CGPA in Percentage 67.43%</span>

                                <span className='border p-2 rounded'>7.11 CGPA in Percentage 67.52%</span>

                                <span className='border p-2 rounded'>7.12 CGPA in Percentage 67.62%</span>

                                <span className='border p-2 rounded'>7.13 CGPA in Percentage 67.71%</span>

                                <span className='border p-2 rounded'>7.14 CGPA in Percentage 67.81%</span>

                                <span className='border p-2 rounded'>7.15 CGPA in Percentage 67.90%</span>

                                <span className='border p-2 rounded'>7.16 CGPA in Percentage 68.00%</span>

                                <span className='border p-2 rounded'>7.17 CGPA in Percentage 68.09%</span>

                                <span className='border p-2 rounded'>7.18 CGPA in Percentage 68.19%</span>

                                <span className='border p-2 rounded'>7.19 CGPA in Percentage 68.28%</span>

                                <span className='border p-2 rounded'>7.20 CGPA in Percentage 68.38%</span>

                                <span className='border p-2 rounded'>7.21 CGPA in Percentage 68.47%</span>

                                <span className='border p-2 rounded'>7.22 CGPA in Percentage 68.57%</span>

                                <span className='border p-2 rounded'>7.23 CGPA in Percentage 68.66%</span>

                                <span className='border p-2 rounded'>7.24 CGPA in Percentage 68.76%</span>

                                <span className='border p-2 rounded'>7.25 CGPA in Percentage 68.86%</span>

                                <span className='border p-2 rounded'>7.26 CGPA in Percentage 68.95%</span>

                                <span className='border p-2 rounded'>7.27 CGPA in Percentage 69.05%</span>

                                <span className='border p-2 rounded'>7.28 CGPA in Percentage 69.14%</span>

                                <span className='border p-2 rounded'>7.29 CGPA in Percentage 69.24%</span>

                                <span className='border p-2 rounded'>7.30 CGPA in Percentage 69.34%</span>

                                <span className='border p-2 rounded'>7.31 CGPA in Percentage 69.44%</span>

                                <span className='border p-2 rounded'>7.32 CGPA in Percentage 69.54%</span>

                                <span className='border p-2 rounded'>7.33 CGPA in Percentage 69.64%</span>

                                <span className='border p-2 rounded'>7.34 CGPA in Percentage 69.74%</span>

                                <span className='border p-2 rounded'>7.35 CGPA in Percentage 69.84%</span>

                                <span className='border p-2 rounded'>7.36 CGPA in Percentage 69.94%</span>

                                <span className='border p-2 rounded'>7.37 CGPA in Percentage 70.04%</span>

                                <span className='border p-2 rounded'>7.38 CGPA in Percentage 70.14%</span>

                                <span className='border p-2 rounded'>7.39 CGPA in Percentage 70.24%</span>

                                <span className='border p-2 rounded'>7.40 CGPA in Percentage 70.34%</span>

                                <span className='border p-2 rounded'>7.41 CGPA in Percentage 70.44%</span>

                                <span className='border p-2 rounded'>7.42 CGPA in Percentage 70.54%</span>

                                <span className='border p-2 rounded'>7.43 CGPA in Percentage 70.64%</span>

                                <span className='border p-2 rounded'>7.44 CGPA in Percentage 70.74%</span>

                                <span className='border p-2 rounded'>7.45 CGPA in Percentage 70.84%</span>

                                <span className='border p-2 rounded'>7.46 CGPA in Percentage 70.94%</span>

                                <span className='border p-2 rounded'>7.47 CGPA in Percentage 71.04%</span>

                                <span className='border p-2 rounded'>7.48 CGPA in Percentage 71.14%</span>

                                <span className='border p-2 rounded'>7.49 CGPA in Percentage 71.24%</span>

                                <span className='border p-2 rounded'>7.50 CGPA in Percentage 71.34%</span>

                                <span className='border p-2 rounded'>7.51 CGPA in Percentage 71.44%</span>

                                <span className='border p-2 rounded'>7.52 CGPA in Percentage 71.54%</span>

                                <span className='border p-2 rounded'>7.53 CGPA in Percentage 71.64%</span>

                                <span className='border p-2 rounded'>7.54 CGPA in Percentage 71.74%</span>

                                <span className='border p-2 rounded'>7.55 CGPA in Percentage 71.84%</span>

                                <span className='border p-2 rounded'>7.56 CGPA in Percentage 71.94%</span>

                                <span className='border p-2 rounded'>7.57 CGPA in Percentage 72.04%</span>

                                <span className='border p-2 rounded'>7.58 CGPA in Percentage 72.14%</span>

                                <span className='border p-2 rounded'>7.59 CGPA in Percentage 72.24%</span>

                                <span className='border p-2 rounded'>7.60 CGPA in Percentage 72.34%</span>

                                <span className='border p-2 rounded'>7.61 CGPA in Percentage 72.44%</span>

                                <span className='border p-2 rounded'>7.62 CGPA in Percentage 72.54%</span>

                                <span className='border p-2 rounded'>7.63 CGPA in Percentage 72.64%</span>

                                <span className='border p-2 rounded'>7.64 CGPA in Percentage 72.74%</span>

                                <span className='border p-2 rounded'>7.65 CGPA in Percentage 72.84%</span>

                                <span className='border p-2 rounded'>7.66 CGPA in Percentage 72.94%</span>

                                <span className='border p-2 rounded'>7.67 CGPA in Percentage 73.04%</span>

                                <span className='border p-2 rounded'>7.68 CGPA in Percentage 73.14%</span>

                                <span className='border p-2 rounded'>7.69 CGPA in Percentage 73.24%</span>

                                <span className='border p-2 rounded'>7.70 CGPA in Percentage 73.34%</span>

                                <span className='border p-2 rounded'>7.71 CGPA in Percentage 73.44%</span>

                                <span className='border p-2 rounded'>7.72 CGPA in Percentage 73.54%</span>

                                <span className='border p-2 rounded'>7.73 CGPA in Percentage 73.64%</span>

                                <span className='border p-2 rounded'>7.74 CGPA in Percentage 73.74%</span>

                                <span className='border p-2 rounded'>7.75 CGPA in Percentage 73.84%</span>

                                <span className='border p-2 rounded'>7.76 CGPA in Percentage 73.94%</span>

                                <span className='border p-2 rounded'>7.77 CGPA in Percentage 74.04%</span>

                                <span className='border p-2 rounded'>7.78 CGPA in Percentage 74.14%</span>

                                <span className='border p-2 rounded'>7.79 CGPA in Percentage 74.24%</span>

                                <span className='border p-2 rounded'>7.80 CGPA in Percentage 74.34%</span>

                                <span className='border p-2 rounded'>7.81 CGPA in Percentage 74.44%</span>

                                <span className='border p-2 rounded'>7.82 CGPA in Percentage 74.54%</span>

                                <span className='border p-2 rounded'>7.83 CGPA in Percentage 74.64%</span>

                                <span className='border p-2 rounded'>7.84 CGPA in Percentage 74.74%</span>

                                <span className='border p-2 rounded'>7.85 CGPA in Percentage 74.84%</span>

                                <span className='border p-2 rounded'>7.86 CGPA in Percentage 74.94%</span>

                                <span className='border p-2 rounded'>7.87 CGPA in Percentage 75.04%</span>

                                <span className='border p-2 rounded'>7.88 CGPA in Percentage 75.14%</span>

                                <span className='border p-2 rounded'>7.89 CGPA in Percentage 75.24%</span>

                                <span className='border p-2 rounded'>7.90 CGPA in Percentage 75.34%</span>

                                <span className='border p-2 rounded'>7.91 CGPA in Percentage 75.44%</span>

                                <span className='border p-2 rounded'>7.92 CGPA in Percentage 75.54%</span>

                                <span className='border p-2 rounded'>7.93 CGPA in Percentage 75.64%</span>

                                <span className='border p-2 rounded'>7.94 CGPA in Percentage 75.74%</span>

                                <span className='border p-2 rounded'>7.95 CGPA in Percentage 75.84%</span>

                                <span className='border p-2 rounded'>7.96 CGPA in Percentage 75.94%</span>

                                <span className='border p-2 rounded'>7.97 CGPA in Percentage 76.04%</span>

                                <span className='border p-2 rounded'>7.98 CGPA in Percentage 76.14%</span>

                                <span className='border p-2 rounded'>7.99 CGPA in Percentage 76.24%</span>

                                <span className='border p-2 rounded'>8.00 CGPA in Percentage 76.34%</span>

                                <span className='border p-2 rounded'>8.01 CGPA in Percentage 76.44%</span>

                                <span className='border p-2 rounded'>8.02 CGPA in Percentage 76.54%</span>

                                <span className='border p-2 rounded'>8.03 CGPA in Percentage 76.64%</span>

                                <span className='border p-2 rounded'>8.04 CGPA in Percentage 76.74%</span>

                                <span className='border p-2 rounded'>8.05 CGPA in Percentage 76.84%</span>

                                <span className='border p-2 rounded'>8.06 CGPA in Percentage 76.94%</span>

                                <span className='border p-2 rounded'>8.07 CGPA in Percentage 77.04%</span>

                                <span className='border p-2 rounded'>8.08 CGPA in Percentage 77.14%</span>

                                <span className='border p-2 rounded'>8.09 CGPA in Percentage 77.24%</span>

                                <span className='border p-2 rounded'>8.10 CGPA in Percentage 77.34%</span>

                                <span className='border p-2 rounded'>8.11 CGPA in Percentage 77.44%</span>

                                <span className='border p-2 rounded'>8.12 CGPA in Percentage 77.54%</span>

                                <span className='border p-2 rounded'>8.13 CGPA in Percentage 77.64%</span>

                                <span className='border p-2 rounded'>8.14 CGPA in Percentage 77.74%</span>

                                <span className='border p-2 rounded'>8.15 CGPA in Percentage 77.84%</span>

                                <span className='border p-2 rounded'>8.16 CGPA in Percentage 77.94%</span>

                                <span className='border p-2 rounded'>8.17 CGPA in Percentage 78.04%</span>

                                <span className='border p-2 rounded'>8.18 CGPA in Percentage 78.14%</span>

                                <span className='border p-2 rounded'>8.19 CGPA in Percentage 78.24%</span>

                                <span className='border p-2 rounded'>8.20 CGPA in Percentage 78.34%</span>

                                <span className='border p-2 rounded'>8.21 CGPA in Percentage 78.44%</span>

                                <span className='border p-2 rounded'>8.22 CGPA in Percentage 78.54%</span>

                                <span className='border p-2 rounded'>8.23 CGPA in Percentage 78.64%</span>

                                <span className='border p-2 rounded'>8.24 CGPA in Percentage 78.74%</span>

                                <span className='border p-2 rounded'>8.25 CGPA in Percentage 78.84%</span>

                                <span className='border p-2 rounded'>8.26 CGPA in Percentage 78.94%</span>

                                <span className='border p-2 rounded'>8.27 CGPA in Percentage 79.04%</span>

                                <span className='border p-2 rounded'>8.28 CGPA in Percentage 79.14%</span>

                                <span className='border p-2 rounded'>8.29 CGPA in Percentage 79.24%</span>

                                <span className='border p-2 rounded'>8.30 CGPA in Percentage 79.34%</span>

                                <span className='border p-2 rounded'>8.31 CGPA in Percentage 79.44%</span>

                                <span className='border p-2 rounded'>8.32 CGPA in Percentage 79.54%</span>

                                <span className='border p-2 rounded'>8.33 CGPA in Percentage 79.64%</span>

                                <span className='border p-2 rounded'>8.34 CGPA in Percentage 79.74%</span>

                                <span className='border p-2 rounded'>8.35 CGPA in Percentage 79.84%</span>

                                <span className='border p-2 rounded'>8.36 CGPA in Percentage 79.94%</span>

                                <span className='border p-2 rounded'>8.37 CGPA in Percentage 80.04%</span>

                                <span className='border p-2 rounded'>8.38 CGPA in Percentage 80.14%</span>

                                <span className='border p-2 rounded'>8.39 CGPA in Percentage 80.24%</span>

                                <span className='border p-2 rounded'>8.40 CGPA in Percentage 80.34%</span>

                                <span className='border p-2 rounded'>8.41 CGPA in Percentage 80.44%</span>

                                <span className='border p-2 rounded'>8.42 CGPA in Percentage 80.54%</span>

                                <span className='border p-2 rounded'>8.43 CGPA in Percentage 80.64%</span>

                                <span className='border p-2 rounded'>8.44 CGPA in Percentage 80.74%</span>

                                <span className='border p-2 rounded'>8.45 CGPA in Percentage 80.84%</span>

                                <span className='border p-2 rounded'>8.46 CGPA in Percentage 80.94%</span>

                                <span className='border p-2 rounded'>8.47 CGPA in Percentage 81.04%</span>

                                <span className='border p-2 rounded'>8.48 CGPA in Percentage 81.14%</span>

                                <span className='border p-2 rounded'>8.49 CGPA in Percentage 81.24%</span>

                                <span className='border p-2 rounded'>8.50 CGPA in Percentage 81.34%</span>

                                <span className='border p-2 rounded'>8.51 CGPA in Percentage 81.44%</span>

                                <span className='border p-2 rounded'>8.52 CGPA in Percentage 81.54%</span>

                                <span className='border p-2 rounded'>8.53 CGPA in Percentage 81.64%</span>

                                <span className='border p-2 rounded'>8.54 CGPA in Percentage 81.74%</span>

                                <span className='border p-2 rounded'>8.55 CGPA in Percentage 81.84%</span>

                                <span className='border p-2 rounded'>8.56 CGPA in Percentage 81.94%</span>

                                <span className='border p-2 rounded'>8.57 CGPA in Percentage 82.04%</span>

                                <span className='border p-2 rounded'>8.58 CGPA in Percentage 82.14%</span>

                                <span className='border p-2 rounded'>8.59 CGPA in Percentage 82.24%</span>

                                <span className='border p-2 rounded'>8.60 CGPA in Percentage 82.34%</span>

                                <span className='border p-2 rounded'>8.61 CGPA in Percentage 82.44%</span>

                                <span className='border p-2 rounded'>8.62 CGPA in Percentage 82.54%</span>

                                <span className='border p-2 rounded'>8.63 CGPA in Percentage 82.64%</span>

                                <span className='border p-2 rounded'>8.64 CGPA in Percentage 82.74%</span>

                                <span className='border p-2 rounded'>8.65 CGPA in Percentage 82.84%</span>

                                <span className='border p-2 rounded'>8.66 CGPA in Percentage 82.94%</span>

                                <span className='border p-2 rounded'>8.67 CGPA in Percentage 83.04%</span>

                                <span className='border p-2 rounded'>8.68 CGPA in Percentage 83.14%</span>

                                <span className='border p-2 rounded'>8.69 CGPA in Percentage 83.24%</span>

                                <span className='border p-2 rounded'>8.70 CGPA in Percentage 83.34%</span>

                                <span className='border p-2 rounded'>8.71 CGPA in Percentage 83.44%</span>

                                <span className='border p-2 rounded'>8.72 CGPA in Percentage 83.54%</span>

                                <span className='border p-2 rounded'>8.73 CGPA in Percentage 83.64%</span>

                                <span className='border p-2 rounded'>8.74 CGPA in Percentage 83.74%</span>

                                <span className='border p-2 rounded'>8.75 CGPA in Percentage 83.84%</span>

                                <span className='border p-2 rounded'>8.76 CGPA in Percentage 83.94%</span>

                                <span className='border p-2 rounded'>8.77 CGPA in Percentage 84.04%</span>

                                <span className='border p-2 rounded'>8.78 CGPA in Percentage 84.14%</span>

                                <span className='border p-2 rounded'>8.79 CGPA in Percentage 84.24%</span>

                                <span className='border p-2 rounded'>8.80 CGPA in Percentage 84.34%</span>

                                <span className='border p-2 rounded'>8.81 CGPA in Percentage 84.44%</span>

                                <span className='border p-2 rounded'>8.82 CGPA in Percentage 84.54%</span>

                                <span className='border p-2 rounded'>8.83 CGPA in Percentage 84.64%</span>

                                <span className='border p-2 rounded'>8.84 CGPA in Percentage 84.74%</span>

                                <span className='border p-2 rounded'>8.85 CGPA in Percentage 84.84%</span>

                                <span className='border p-2 rounded'>8.86 CGPA in Percentage 84.94%</span>

                                <span className='border p-2 rounded'>8.87 CGPA in Percentage 85.04%</span>

                                <span className='border p-2 rounded'>8.88 CGPA in Percentage 85.14%</span>

                                <span className='border p-2 rounded'>8.89 CGPA in Percentage 85.24%</span>

                                <span className='border p-2 rounded'>8.90 CGPA in Percentage 85.34%</span>

                                <span className='border p-2 rounded'>8.91 CGPA in Percentage 85.44%</span>

                                <span className='border p-2 rounded'>8.92 CGPA in Percentage 85.54%</span>

                                <span className='border p-2 rounded'>8.93 CGPA in Percentage 85.64%</span>

                                <span className='border p-2 rounded'>8.94 CGPA in Percentage 85.74%</span>

                                <span className='border p-2 rounded'>8.95 CGPA in Percentage 85.84%</span>

                                <span className='border p-2 rounded'>8.96 CGPA in Percentage 85.94%</span>

                                <span className='border p-2 rounded'>8.97 CGPA in Percentage 86.04%</span>

                                <span className='border p-2 rounded'>8.98 CGPA in Percentage 86.14%</span>

                                <span className='border p-2 rounded'>8.99 CGPA in Percentage 86.24%</span>

                                <span className='border p-2 rounded'>9.00 CGPA in Percentage 86.34%</span>

                                <span className='border p-2 rounded'>9.01 CGPA in Percentage 86.44%</span>

                                <span className='border p-2 rounded'>9.02 CGPA in Percentage 86.54%</span>

                                <span className='border p-2 rounded'>9.03 CGPA in Percentage 86.64%</span>

                                <span className='border p-2 rounded'>9.04 CGPA in Percentage 86.74%</span>

                                <span className='border p-2 rounded'>9.05 CGPA in Percentage 86.84%</span>

                                <span className='border p-2 rounded'>9.06 CGPA in Percentage 86.94%</span>

                                <span className='border p-2 rounded'>9.07 CGPA in Percentage 87.04%</span>

                                <span className='border p-2 rounded'>9.08 CGPA in Percentage 87.14%</span>

                                <span className='border p-2 rounded'>9.09 CGPA in Percentage 87.24%</span>

                                <span className='border p-2 rounded'>9.10 CGPA in Percentage 87.34%</span>

                                <span className='border p-2 rounded'>9.11 CGPA in Percentage 87.44%</span>

                                <span className='border p-2 rounded'>9.12 CGPA in Percentage 87.54%</span>

                                <span className='border p-2 rounded'>9.13 CGPA in Percentage 87.64%</span>

                                <span className='border p-2 rounded'>9.14 CGPA in Percentage 87.74%</span>

                                <span className='border p-2 rounded'>9.15 CGPA in Percentage 87.84%</span>

                                <span className='border p-2 rounded'>9.16 CGPA in Percentage 87.94%</span>

                                <span className='border p-2 rounded'>9.17 CGPA in Percentage 88.04%</span>

                                <span className='border p-2 rounded'>9.18 CGPA in Percentage 88.14%</span>

                                <span className='border p-2 rounded'>9.19 CGPA in Percentage 88.24%</span>

                                <span className='border p-2 rounded'>9.20 CGPA in Percentage 88.34%</span>

                                <span className='border p-2 rounded'>9.21 CGPA in Percentage 88.44%</span>

                                <span className='border p-2 rounded'>9.22 CGPA in Percentage 88.54%</span>

                                <span className='border p-2 rounded'>9.23 CGPA in Percentage 88.64%</span>

                                <span className='border p-2 rounded'>9.24 CGPA in Percentage 88.74%</span>

                                <span className='border p-2 rounded'>9.25 CGPA in Percentage 88.84%</span>

                                <span className='border p-2 rounded'>9.26 CGPA in Percentage 88.94%</span>

                                <span className='border p-2 rounded'>9.27 CGPA in Percentage 89.04%</span>

                                <span className='border p-2 rounded'>9.28 CGPA in Percentage 89.14%</span>

                                <span className='border p-2 rounded'>9.29 CGPA in Percentage 89.24%</span>

                                <span className='border p-2 rounded'>9.30 CGPA in Percentage 89.34%</span>

                                <span className='border p-2 rounded'>9.31 CGPA in Percentage 89.44%</span>

                                <span className='border p-2 rounded'>9.32 CGPA in Percentage 89.54%</span>

                                <span className='border p-2 rounded'>9.33 CGPA in Percentage 89.64%</span>

                                <span className='border p-2 rounded'>9.34 CGPA in Percentage 89.74%</span>

                                <span className='border p-2 rounded'>9.35 CGPA in Percentage 89.84%</span>

                                <span className='border p-2 rounded'>9.36 CGPA in Percentage 89.94%</span>

                                <span className='border p-2 rounded'>9.37 CGPA in Percentage 90.04%</span>

                                <span className='border p-2 rounded'>9.38 CGPA in Percentage 90.14%</span>

                                <span className='border p-2 rounded'>9.39 CGPA in Percentage 90.24%</span>

                                <span className='border p-2 rounded'>9.40 CGPA in Percentage 90.34%</span>

                                <span className='border p-2 rounded'>9.41 CGPA in Percentage 90.44%</span>

                                <span className='border p-2 rounded'>9.42 CGPA in Percentage 90.54%</span>

                                <span className='border p-2 rounded'>9.43 CGPA in Percentage 90.64%</span>

                                <span className='border p-2 rounded'>9.44 CGPA in Percentage 90.74%</span>

                                <span className='border p-2 rounded'>9.45 CGPA in Percentage 90.84%</span>

                                <span className='border p-2 rounded'>9.46 CGPA in Percentage 90.94%</span>

                                <span className='border p-2 rounded'>9.47 CGPA in Percentage 91.04%</span>

                                <span className='border p-2 rounded'>9.48 CGPA in Percentage 91.14%</span>

                                <span className='border p-2 rounded'>9.49 CGPA in Percentage 91.24%</span>

                                <span className='border p-2 rounded'>9.50 CGPA in Percentage 91.34%</span>

                                <span className='border p-2 rounded'>9.51 CGPA in Percentage 91.44%</span>

                                <span className='border p-2 rounded'>9.52 CGPA in Percentage 91.54%</span>

                                <span className='border p-2 rounded'>9.53 CGPA in Percentage 91.64%</span>

                                <span className='border p-2 rounded'>9.54 CGPA in Percentage 91.74%</span>

                                <span className='border p-2 rounded'>9.55 CGPA in Percentage 91.84%</span>

                                <span className='border p-2 rounded'>9.56 CGPA in Percentage 91.94%</span>

                                <span className='border p-2 rounded'>9.57 CGPA in Percentage 92.04%</span>

                                <span className='border p-2 rounded'>9.58 CGPA in Percentage 92.14%</span>

                                <span className='border p-2 rounded'>9.59 CGPA in Percentage 92.24%</span>

                                <span className='border p-2 rounded'>9.60 CGPA in Percentage 92.34%</span>

                                <span className='border p-2 rounded'>9.61 CGPA in Percentage 92.44%</span>

                                <span className='border p-2 rounded'>9.62 CGPA in Percentage 92.54%</span>

                                <span className='border p-2 rounded'>9.63 CGPA in Percentage 92.64%</span>

                                <span className='border p-2 rounded'>9.64 CGPA in Percentage 92.74%</span>

                                <span className='border p-2 rounded'>9.65 CGPA in Percentage 92.84%</span>

                                <span className='border p-2 rounded'>9.66 CGPA in Percentage 92.94%</span>

                                <span className='border p-2 rounded'>9.67 CGPA in Percentage 93.04%</span>

                                <span className='border p-2 rounded'>9.68 CGPA in Percentage 93.14%</span>

                                <span className='border p-2 rounded'>9.69 CGPA in Percentage 93.24%</span>

                                <span className='border p-2 rounded'>9.70 CGPA in Percentage 93.34%</span>

                                <span className='border p-2 rounded'>9.71 CGPA in Percentage 93.44%</span>

                                <span className='border p-2 rounded'>9.72 CGPA in Percentage 93.54%</span>

                                <span className='border p-2 rounded'>9.73 CGPA in Percentage 93.64%</span>

                                <span className='border p-2 rounded'>9.74 CGPA in Percentage 93.74%</span>

                                <span className='border p-2 rounded'>9.75 CGPA in Percentage 93.84%</span>

                                <span className='border p-2 rounded'>9.76 CGPA in Percentage 93.94%</span>

                                <span className='border p-2 rounded'>9.77 CGPA in Percentage 94.04%</span>

                                <span className='border p-2 rounded'>9.78 CGPA in Percentage 94.14%</span>

                                <span className='border p-2 rounded'>9.79 CGPA in Percentage 94.24%</span>


                                <span className='border p-2 rounded'>9.80 CGPA in Percentage 94.34%</span>

                                <span className='border p-2 rounded'>9.81 CGPA in Percentage 94.44%</span>

                                <span className='border p-2 rounded'>9.82 CGPA in Percentage 94.54%</span>

                                <span className='border p-2 rounded'>9.83 CGPA in Percentage 94.64%</span>

                                <span className='border p-2 rounded'>9.84 CGPA in Percentage 94.74%</span>

                                <span className='border p-2 rounded'>9.85 CGPA in Percentage 94.84%</span>

                                <span className='border p-2 rounded'>9.86 CGPA in Percentage 94.94%</span>

                                <span className='border p-2 rounded'>9.87 CGPA in Percentage 95.04%</span>

                                <span className='border p-2 rounded'>9.88 CGPA in Percentage 95.14%</span>

                                <span className='border p-2 rounded'>9.89 CGPA in Percentage 95.24%</span>

                                <span className='border p-2 rounded'>9.90 CGPA in Percentage 95.34%</span>

                                <span className='border p-2 rounded'>9.91 CGPA in Percentage 95.44%</span>

                                <span className='border p-2 rounded'>9.92 CGPA in Percentage 95.54%</span>

                                <span className='border p-2 rounded'>9.93 CGPA in Percentage 95.64%</span>

                                <span className='border p-2 rounded'>9.94 CGPA in Percentage 95.74%</span>

                                <span className='border p-2 rounded'>9.95 CGPA in Percentage 95.84%</span>

                                <span className='border p-2 rounded'>9.96 CGPA in Percentage 95.94%</span>

                                <span className='border p-2 rounded'>9.97 CGPA in Percentage 96.04%</span>

                                <span className='border p-2 rounded'>9.98 CGPA in Percentage 96.14%</span>

                                <span className='border p-2 rounded'>9.99 CGPA in Percentage 96.24%</span>


                                <span className='border p-2 rounded'>10.00 CGPA in Percentage 96.34%</span>

                            </div>
                        </div>



                        <div class="container mx-auto p-4">
                            <h1 id='section11' class="text-xl font-bold text-left text-blue-400 mb-4">
                                CGPA to Percentage in 5 Grade Scale
                            </h1>
                            <div class="grid grid-cols-1 sm:grid-cols-3 border border-blue-400">
                                <div class="border p-2 rounded">1.00 CGPA in Percentage 20.00%</div>
                                <div class="border p-2 rounded">1.01 CGPA in Percentage 20.25%</div>
                                <div class="border p-2 rounded">1.02 CGPA in Percentage 20.50%</div>
                                <div class="border p-2 rounded">1.03 CGPA in Percentage 20.75%</div>
                                <div class="border p-2 rounded">1.04 CGPA in Percentage 21.00%</div>
                                <div class="border p-2 rounded">1.05 CGPA in Percentage 21.25%</div>
                                <div class="border p-2 rounded">1.06 CGPA in Percentage 21.50%</div>
                                <div class="border p-2 rounded">1.07 CGPA in Percentage 21.75%</div>
                                <div class="border p-2 rounded">1.08 CGPA in Percentage 22.00%</div>
                                <div class="border p-2 rounded">1.09 CGPA in Percentage 22.25%</div>
                                <div class="border p-2 rounded">1.10 CGPA in Percentage 22.50%</div>
                                <div class="border p-2 rounded">1.11 CGPA in Percentage 22.75%</div>
                                <div class="border p-2 rounded">1.12 CGPA in Percentage 23.00%</div>
                                <div class="border p-2 rounded">1.13 CGPA in Percentage 23.25%</div>
                                <div class="border p-2 rounded">1.14 CGPA in Percentage 23.50%</div>
                                <div class="border p-2 rounded">1.15 CGPA in Percentage 23.75%</div>
                                <div class="border p-2 rounded">1.16 CGPA in Percentage 24.00%</div>
                                <div class="border p-2 rounded">1.17 CGPA in Percentage 24.25%</div>
                                <div class="border p-2 rounded">1.18 CGPA in Percentage 24.50%</div>
                                <div class="border p-2 rounded">1.19 CGPA in Percentage 24.75%</div>
                                <div class="border p-2 rounded">1.20 CGPA in Percentage 25.00%</div>
                                <div class="border p-2 rounded">1.21 CGPA in Percentage 25.25%</div>
                                <div class="border p-2 rounded">1.22 CGPA in Percentage 25.50%</div>
                                <div class="border p-2 rounded">1.23 CGPA in Percentage 25.75%</div>
                                <div class="border p-2 rounded">1.24 CGPA in Percentage 26.00%</div>
                                <div class="border p-2 rounded">1.25 CGPA in Percentage 26.25%</div>
                                <div class="border p-2 rounded">1.26 CGPA in Percentage 26.50%</div>
                                <div class="border p-2 rounded">1.27 CGPA in Percentage 26.75%</div>
                                <div class="border p-2 rounded">1.28 CGPA in Percentage 27.00%</div>
                                <div class="border p-2 rounded">1.29 CGPA in Percentage 27.25%</div>
                                <div class="border p-2 rounded">1.30 CGPA in Percentage 27.50%</div>
                                <div class="border p-2 rounded">1.31 CGPA in Percentage 27.75%</div>
                                <div class="border p-2 rounded">1.32 CGPA in Percentage 28.00%</div>
                                <div class="border p-2 rounded">1.33 CGPA in Percentage 28.25%</div>
                                <div class="border p-2 rounded">1.34 CGPA in Percentage 28.50%</div>
                                <div class="border p-2 rounded">1.35 CGPA in Percentage 28.75%</div>
                                <div class="border p-2 rounded">1.36 CGPA in Percentage 29.00%</div>
                                <div class="border p-2 rounded">1.37 CGPA in Percentage 29.25%</div>
                                <div class="border p-2 rounded">1.38 CGPA in Percentage 29.50%</div>
                                <div class="border p-2 rounded">1.39 CGPA in Percentage 29.75%</div>
                                <div class="border p-2 rounded">1.40 CGPA in Percentage 30.00%</div>
                                <div class="border p-2 rounded">1.41 CGPA in Percentage 30.25%</div>
                                <div class="border p-2 rounded">1.42 CGPA in Percentage 30.50%</div>
                                <div class="border p-2 rounded">1.43 CGPA in Percentage 30.75%</div>
                                <div class="border p-2 rounded">1.44 CGPA in Percentage 31.00%</div>
                                <div class="border p-2 rounded">1.45 CGPA in Percentage 31.25%</div>
                                <div class="border p-2 rounded">1.46 CGPA in Percentage 31.50%</div>
                                <div class="border p-2 rounded">1.47 CGPA in Percentage 31.75%</div>
                                <div class="border p-2 rounded">1.48 CGPA in Percentage 32.00%</div>
                                <div class="border p-2 rounded">1.49 CGPA in Percentage 32.25%</div>
                                <div class="border p-2 rounded">1.50 CGPA in Percentage 32.50%</div>
                                <div class="border p-2 rounded">1.51 CGPA in Percentage 32.75%</div>
                                <div class="border p-2 rounded">1.52 CGPA in Percentage 33.00%</div>
                                <div class="border p-2 rounded">1.53 CGPA in Percentage 33.25%</div>
                                <div class="border p-2 rounded">1.54 CGPA in Percentage 33.50%</div>
                                <div class="border p-2 rounded">1.55 CGPA in Percentage 33.75%</div>
                                <div class="border p-2 rounded">1.56 CGPA in Percentage 34.00%</div>
                                <div class="border p-2 rounded">1.57 CGPA in Percentage 34.25%</div>
                                <div class="border p-2 rounded">1.58 CGPA in Percentage 34.50%</div>
                                <div class="border p-2 rounded">1.59 CGPA in Percentage 34.75%</div>
                                <div class="border p-2 rounded">1.60 CGPA in Percentage 35.00%</div>
                                <div class="border p-2 rounded">1.61 CGPA in Percentage 35.25%</div>
                                <div class="border p-2 rounded">1.62 CGPA in Percentage 35.50%</div>
                                <div class="border p-2 rounded">1.63 CGPA in Percentage 35.75%</div>
                                <div class="border p-2 rounded">1.64 CGPA in Percentage 36.00%</div>
                                <div class="border p-2 rounded">1.65 CGPA in Percentage 36.25%</div>
                                <div class="border p-2 rounded">1.66 CGPA in Percentage 36.50%</div>
                                <div class="border p-2 rounded">1.67 CGPA in Percentage 36.75%</div>
                                <div class="border p-2 rounded">1.68 CGPA in Percentage 37.00%</div>
                                <div class="border p-2 rounded">1.69 CGPA in Percentage 37.25%</div>
                                <div class="border p-2 rounded">1.70 CGPA in Percentage 37.50%</div>
                                <div class="border p-2 rounded">1.71 CGPA in Percentage 37.75%</div>
                                <div class="border p-2 rounded">1.72 CGPA in Percentage 38.00%</div>
                                <div class="border p-2 rounded">1.73 CGPA in Percentage 38.25%</div>
                                <div class="border p-2 rounded">1.74 CGPA in Percentage 38.50%</div>
                                <div class="border p-2 rounded">1.75 CGPA in Percentage 38.75%</div>
                                <div class="border p-2 rounded">1.76 CGPA in Percentage 39.00%</div>
                                <div class="border p-2 rounded">1.77 CGPA in Percentage 39.25%</div>
                                <div class="border p-2 rounded">1.78 CGPA in Percentage 39.50%</div>
                                <div class="border p-2 rounded">1.79 CGPA in Percentage 39.75%</div>
                                <div class="border p-2 rounded">1.80 CGPA in Percentage 40.00%</div>
                                <div class="border p-2 rounded">1.81 CGPA in Percentage 40.25%</div>
                                <div class="border p-2 rounded">1.82 CGPA in Percentage 40.50%</div>
                                <div class="border p-2 rounded">1.83 CGPA in Percentage 40.75%</div>
                                <div class="border p-2 rounded">1.84 CGPA in Percentage 41.00%</div>
                                <div class="border p-2 rounded">1.85 CGPA in Percentage 41.25%</div>
                                <div class="border p-2 rounded">1.86 CGPA in Percentage 41.50%</div>
                                <div class="border p-2 rounded">1.87 CGPA in Percentage 41.75%</div>
                                <div class="border p-2 rounded">1.88 CGPA in Percentage 42.00%</div>
                                <div class="border p-2 rounded">1.89 CGPA in Percentage 42.25%</div>
                                <div class="border p-2 rounded">1.90 CGPA in Percentage 42.50%</div>
                                <div class="border p-2 rounded">1.91 CGPA in Percentage 42.75%</div>
                                <div class="border p-2 rounded">1.92 CGPA in Percentage 43.00%</div>
                                <div class="border p-2 rounded">1.93 CGPA in Percentage 43.25%</div>
                                <div class="border p-2 rounded">1.94 CGPA in Percentage 43.50%</div>
                                <div class="border p-2 rounded">1.95 CGPA in Percentage 43.75%</div>
                                <div class="border p-2 rounded">1.96 CGPA in Percentage 44.00%</div>
                                <div class="border p-2 rounded">1.97 CGPA in Percentage 44.25%</div>
                                <div class="border p-2 rounded">1.98 CGPA in Percentage 44.50%</div>
                                <div class="border p-2 rounded">1.99 CGPA in Percentage 44.75%</div>
                                <div class="border p-2 rounded">2.01 CGPA in Percentage 40.20%</div>
                                <div class="border p-2 rounded">2.02 CGPA in Percentage 40.40%</div>
                                <div class="border p-2 rounded">2.03 CGPA in Percentage 40.60%</div>
                                <div class="border p-2 rounded">2.04 CGPA in Percentage 40.80%</div>
                                <div class="border p-2 rounded">2.05 CGPA in Percentage 41.00%</div>
                                <div class="border p-2 rounded">2.06 CGPA in Percentage 41.20%</div>
                                <div class="border p-2 rounded">2.07 CGPA in Percentage 41.40%</div>
                                <div class="border p-2 rounded">2.08 CGPA in Percentage 41.60%</div>
                                <div class="border p-2 rounded">2.09 CGPA in Percentage 41.80%</div>
                                <div class="border p-2 rounded">2.10 CGPA in Percentage 42.00%</div>
                                <div class="border p-2 rounded">2.11 CGPA in Percentage 42.20%</div>
                                <div class="border p-2 rounded">2.12 CGPA in Percentage 42.40%</div>
                                <div class="border p-2 rounded">2.13 CGPA in Percentage 42.60%</div>
                                <div class="border p-2 rounded">2.14 CGPA in Percentage 42.80%</div>
                                <div class="border p-2 rounded">2.15 CGPA in Percentage 43.00%</div>
                                <div class="border p-2 rounded">2.16 CGPA in Percentage 43.20%</div>
                                <div class="border p-2 rounded">2.17 CGPA in Percentage 43.40%</div>
                                <div class="border p-2 rounded">2.18 CGPA in Percentage 43.60%</div>
                                <div class="border p-2 rounded">2.19 CGPA in Percentage 43.80%</div>
                                <div class="border p-2 rounded">2.20 CGPA in Percentage 44.00%</div>
                                <div class="border p-2 rounded">2.21 CGPA in Percentage 44.20%</div>
                                <div class="border p-2 rounded">2.22 CGPA in Percentage 44.40%</div>
                                <div class="border p-2 rounded">2.23 CGPA in Percentage 44.60%</div>
                                <div class="border p-2 rounded">2.24 CGPA in Percentage 44.80%</div>
                                <div class="border p-2 rounded">2.25 CGPA in Percentage 45.00%</div>
                                <div class="border p-2 rounded">2.26 CGPA in Percentage 45.20%</div>
                                <div class="border p-2 rounded">2.27 CGPA in Percentage 45.40%</div>
                                <div class="border p-2 rounded">2.28 CGPA in Percentage 45.60%</div>
                                <div class="border p-2 rounded">2.29 CGPA in Percentage 45.80%</div>
                                <div class="border p-2 rounded">2.30 CGPA in Percentage 46.00%</div>
                                <div class="border p-2 rounded">2.31 CGPA in Percentage 46.20%</div>
                                <div class="border p-2 rounded">2.32 CGPA in Percentage 46.40%</div>
                                <div class="border p-2 rounded">2.33 CGPA in Percentage 46.60%</div>
                                <div class="border p-2 rounded">2.34 CGPA in Percentage 46.80%</div>
                                <div class="border p-2 rounded">2.35 CGPA in Percentage 47.00%</div>
                                <div class="border p-2 rounded">2.36 CGPA in Percentage 47.20%</div>
                                <div class="border p-2 rounded">2.37 CGPA in Percentage 47.40%</div>
                                <div class="border p-2 rounded">2.38 CGPA in Percentage 47.60%</div>
                                <div class="border p-2 rounded">2.39 CGPA in Percentage 47.80%</div>
                                <div class="border p-2 rounded">2.40 CGPA in Percentage 48.00%</div>
                                <div class="border p-2 rounded">2.41 CGPA in Percentage 48.20%</div>
                                <div class="border p-2 rounded">2.42 CGPA in Percentage 48.40%</div>
                                <div class="border p-2 rounded">2.43 CGPA in Percentage 48.60%</div>
                                <div class="border p-2 rounded">2.44 CGPA in Percentage 48.80%</div>
                                <div class="border p-2 rounded">2.45 CGPA in Percentage 49.00%</div>
                                <div class="border p-2 rounded">2.46 CGPA in Percentage 49.20%</div>
                                <div class="border p-2 rounded">2.47 CGPA in Percentage 49.40%</div>
                                <div class="border p-2 rounded">2.48 CGPA in Percentage 49.60%</div>
                                <div class="border p-2 rounded">2.49 CGPA in Percentage 49.80%</div>
                                <div class="border p-2 rounded">2.50 CGPA in Percentage 50.00%</div>
                                <div class="border p-2 rounded">2.51 CGPA in Percentage 50.20%</div>
                                <div class="border p-2 rounded">2.52 CGPA in Percentage 50.40%</div>
                                <div class="border p-2 rounded">2.53 CGPA in Percentage 50.60%</div>
                                <div class="border p-2 rounded">2.54 CGPA in Percentage 50.80%</div>
                                <div class="border p-2 rounded">2.55 CGPA in Percentage 51.00%</div>
                                <div class="border p-2 rounded">2.56 CGPA in Percentage 51.20%</div>
                                <div class="border p-2 rounded">2.57 CGPA in Percentage 51.40%</div>
                                <div class="border p-2 rounded">2.58 CGPA in Percentage 51.60%</div>
                                <div class="border p-2 rounded">2.59 CGPA in Percentage 51.80%</div>
                                <div class="border p-2 rounded">2.60 CGPA in Percentage 52.00%</div>
                                <div class="border p-2 rounded">2.61 CGPA in Percentage 52.20%</div>
                                <div class="border p-2 rounded">2.62 CGPA in Percentage 52.40%</div>
                                <div class="border p-2 rounded">2.63 CGPA in Percentage 52.60%</div>
                                <div class="border p-2 rounded">2.64 CGPA in Percentage 52.80%</div>
                                <div class="border p-2 rounded">2.65 CGPA in Percentage 53.00%</div>
                                <div class="border p-2 rounded">2.66 CGPA in Percentage 53.20%</div>
                                <div class="border p-2 rounded">2.67 CGPA in Percentage 53.40%</div>
                                <div class="border p-2 rounded">2.68 CGPA in Percentage 53.60%</div>
                                <div class="border p-2 rounded">2.69 CGPA in Percentage 53.80%</div>
                                <div class="border p-2 rounded">2.70 CGPA in Percentage 54.00%</div>
                                <div class="border p-2 rounded">2.71 CGPA in Percentage 54.20%</div>
                                <div class="border p-2 rounded">2.72 CGPA in Percentage 54.40%</div>
                                <div class="border p-2 rounded">2.73 CGPA in Percentage 54.60%</div>
                                <div class="border p-2 rounded">2.74 CGPA in Percentage 54.80%</div>
                                <div class="border p-2 rounded">2.75 CGPA in Percentage 55.00%</div>
                                <div class="border p-2 rounded">2.76 CGPA in Percentage 55.20%</div>
                                <div class="border p-2 rounded">2.77 CGPA in Percentage 55.40%</div>
                                <div class="border p-2 rounded">2.78 CGPA in Percentage 55.60%</div>
                                <div class="border p-2 rounded">2.79 CGPA in Percentage 55.80%</div>
                                <div class="border p-2 rounded">2.80 CGPA in Percentage 56.00%</div>
                                <div class="border p-2 rounded">2.81 CGPA in Percentage 56.20%</div>
                                <div class="border p-2 rounded">2.82 CGPA in Percentage 56.40%</div>
                                <div class="border p-2 rounded">2.83 CGPA in Percentage 56.60%</div>
                                <div class="border p-2 rounded">2.84 CGPA in Percentage 56.80%</div>
                                <div class="border p-2 rounded">2.85 CGPA in Percentage 57.00%</div>
                                <div class="border p-2 rounded">2.86 CGPA in Percentage 57.20%</div>
                                <div class="border p-2 rounded">2.87 CGPA in Percentage 57.40%</div>
                                <div class="border p-2 rounded">2.88 CGPA in Percentage 57.60%</div>
                                <div class="border p-2 rounded">2.89 CGPA in Percentage 57.80%</div>
                                <div class="border p-2 rounded">2.90 CGPA in Percentage 58.00%</div>
                                <div class="border p-2 rounded">2.91 CGPA in Percentage 58.20%</div>
                                <div class="border p-2 rounded">2.92 CGPA in Percentage 58.40%</div>
                                <div class="border p-2 rounded">2.93 CGPA in Percentage 58.60%</div>
                                <div class="border p-2 rounded">2.94 CGPA in Percentage 58.80%</div>
                                <div class="border p-2 rounded">2.95 CGPA in Percentage 59.00%</div>
                                <div class="border p-2 rounded">2.96 CGPA in Percentage 59.20%</div>
                                <div class="border p-2 rounded">2.97 CGPA in Percentage 59.40%</div>
                                <div class="border p-2 rounded">2.98 CGPA in Percentage 59.60%</div>
                                <div class="border p-2 rounded">2.99 CGPA in Percentage 59.80%</div>
                                <div class="border p-2 rounded">3.00 CGPA in Percentage 60.00%</div>
                                <div class="border p-2 rounded">3.01 CGPA in Percentage 60.20%</div>
                                <div class="border p-2 rounded">3.02 CGPA in Percentage 60.40%</div>
                                <div class="border p-2 rounded">3.03 CGPA in Percentage 60.60%</div>
                                <div class="border p-2 rounded">3.04 CGPA in Percentage 60.80%</div>
                                <div class="border p-2 rounded">3.05 CGPA in Percentage 61.00%</div>
                                <div class="border p-2 rounded">3.06 CGPA in Percentage 61.20%</div>
                                <div class="border p-2 rounded">3.07 CGPA in Percentage 61.40%</div>
                                <div class="border p-2 rounded">3.08 CGPA in Percentage 61.60%</div>
                                <div class="border p-2 rounded">3.09 CGPA in Percentage 61.80%</div>
                                <div class="border p-2 rounded">3.10 CGPA in Percentage 62.00%</div>
                                <div class="border p-2 rounded">3.11 CGPA in Percentage 62.20%</div>
                                <div class="border p-2 rounded">3.12 CGPA in Percentage 62.40%</div>
                                <div class="border p-2 rounded">3.13 CGPA in Percentage 62.60%</div>
                                <div class="border p-2 rounded">3.14 CGPA in Percentage 62.80%</div>
                                <div class="border p-2 rounded">3.15 CGPA in Percentage 63.00%</div>
                                <div class="border p-2 rounded">3.16 CGPA in Percentage 63.20%</div>
                                <div class="border p-2 rounded">3.17 CGPA in Percentage 63.40%</div>
                                <div class="border p-2 rounded">3.18 CGPA in Percentage 63.60%</div>
                                <div class="border p-2 rounded">3.19 CGPA in Percentage 63.80%</div>
                                <div class="border p-2 rounded">3.20 CGPA in Percentage 64.00%</div>
                                <div class="border p-2 rounded">3.21 CGPA in Percentage 64.20%</div>
                                <div class="border p-2 rounded">3.22 CGPA in Percentage 64.40%</div>
                                <div class="border p-2 rounded">3.23 CGPA in Percentage 64.60%</div>
                                <div class="border p-2 rounded">3.24 CGPA in Percentage 64.80%</div>
                                <div class="border p-2 rounded">3.25 CGPA in Percentage 65.00%</div>
                                <div class="border p-2 rounded">3.26 CGPA in Percentage 65.20%</div>
                                <div class="border p-2 rounded">3.27 CGPA in Percentage 65.40%</div>
                                <div class="border p-2 rounded">3.28 CGPA in Percentage 65.60%</div>
                                <div class="border p-2 rounded">3.29 CGPA in Percentage 65.80%</div>
                                <div class="border p-2 rounded">3.30 CGPA in Percentage 66.00%</div>
                                <div class="border p-2 rounded">3.31 CGPA in Percentage 66.20%</div>
                                <div class="border p-2 rounded">3.32 CGPA in Percentage 66.40%</div>
                                <div class="border p-2 rounded">3.33 CGPA in Percentage 66.60%</div>
                                <div class="border p-2 rounded">3.34 CGPA in Percentage 66.80%</div>
                                <div class="border p-2 rounded">3.35 CGPA in Percentage 67.00%</div>
                                <div class="border p-2 rounded">3.36 CGPA in Percentage 67.20%</div>
                                <div class="border p-2 rounded">3.37 CGPA in Percentage 67.40%</div>
                                <div class="border p-2 rounded">3.38 CGPA in Percentage 67.60%</div>
                                <div class="border p-2 rounded">3.39 CGPA in Percentage 67.80%</div>
                                <div class="border p-2 rounded">3.40 CGPA in Percentage 68.00%</div>
                                <div class="border p-2 rounded">3.41 CGPA in Percentage 68.20%</div>
                                <div class="border p-2 rounded">3.42 CGPA in Percentage 68.40%</div>
                                <div class="border p-2 rounded">3.43 CGPA in Percentage 68.60%</div>
                                <div class="border p-2 rounded">3.44 CGPA in Percentage 68.80%</div>
                                <div class="border p-2 rounded">3.45 CGPA in Percentage 69.00%</div>
                                <div class="border p-2 rounded">3.46 CGPA in Percentage 69.20%</div>
                                <div class="border p-2 rounded">3.47 CGPA in Percentage 69.40%</div>
                                <div class="border p-2 rounded">3.48 CGPA in Percentage 69.60%</div>
                                <div class="border p-2 rounded">3.49 CGPA in Percentage 69.80%</div>
                                <div class="border p-2 rounded">3.50 CGPA in Percentage 70.00%</div>
                                <div class="border p-2 rounded">3.51 CGPA in Percentage 70.20%</div>
                                <div class="border p-2 rounded">3.52 CGPA in Percentage 70.40%</div>
                                <div class="border p-2 rounded">3.53 CGPA in Percentage 70.60%</div>
                                <div class="border p-2 rounded">3.54 CGPA in Percentage 70.80%</div>
                                <div class="border p-2 rounded">3.55 CGPA in Percentage 71.00%</div>
                                <div class="border p-2 rounded">3.56 CGPA in Percentage 71.20%</div>
                                <div class="border p-2 rounded">3.57 CGPA in Percentage 71.40%</div>
                                <div class="border p-2 rounded">3.58 CGPA in Percentage 71.60%</div>
                                <div class="border p-2 rounded">3.59 CGPA in Percentage 71.80%</div>
                                <div class="border p-2 rounded">3.60 CGPA in Percentage 72.00%</div>
                                <div class="border p-2 rounded">3.61 CGPA in Percentage 72.20%</div>
                                <div class="border p-2 rounded">3.62 CGPA in Percentage 72.40%</div>
                                <div class="border p-2 rounded">3.63 CGPA in Percentage 72.60%</div>
                                <div class="border p-2 rounded">3.64 CGPA in Percentage 72.80%</div>
                                <div class="border p-2 rounded">3.65 CGPA in Percentage 73.00%</div>
                                <div class="border p-2 rounded">3.66 CGPA in Percentage 73.20%</div>
                                <div class="border p-2 rounded">3.67 CGPA in Percentage 73.40%</div>
                                <div class="border p-2 rounded">3.68 CGPA in Percentage 73.60%</div>
                                <div class="border p-2 rounded">3.69 CGPA in Percentage 73.80%</div>
                                <div class="border p-2 rounded">3.70 CGPA in Percentage 74.00%</div>
                                <div class="border p-2 rounded">3.71 CGPA in Percentage 74.20%</div>
                                <div class="border p-2 rounded">3.72 CGPA in Percentage 74.40%</div>
                                <div class="border p-2 rounded">3.73 CGPA in Percentage 74.60%</div>
                                <div class="border p-2 rounded">3.74 CGPA in Percentage 74.80%</div>
                                <div class="border p-2 rounded">3.75 CGPA in Percentage 75.00%</div>
                                <div class="border p-2 rounded">3.76 CGPA in Percentage 75.20%</div>
                                <div class="border p-2 rounded">3.77 CGPA in Percentage 75.40%</div>
                                <div class="border p-2 rounded">3.78 CGPA in Percentage 75.60%</div>
                                <div class="border p-2 rounded">3.79 CGPA in Percentage 75.80%</div>
                                <div class="border p-2 rounded">3.80 CGPA in Percentage 76.00%</div>
                                <div class="border p-2 rounded">3.81 CGPA in Percentage 76.20%</div>
                                <div class="border p-2 rounded">3.82 CGPA in Percentage 76.40%</div>
                                <div class="border p-2 rounded">3.83 CGPA in Percentage 76.60%</div>
                                <div class="border p-2 rounded">3.84 CGPA in Percentage 76.80%</div>
                                <div class="border p-2 rounded">3.85 CGPA in Percentage 77.00%</div>
                                <div class="border p-2 rounded">3.86 CGPA in Percentage 77.20%</div>
                                <div class="border p-2 rounded">3.87 CGPA in Percentage 77.40%</div>
                                <div class="border p-2 rounded">3.88 CGPA in Percentage 77.60%</div>
                                <div class="border p-2 rounded">3.89 CGPA in Percentage 77.80%</div>
                                <div class="border p-2 rounded">3.90 CGPA in Percentage 78.00%</div>
                                <div class="border p-2 rounded">3.91 CGPA in Percentage 78.20%</div>
                                <div class="border p-2 rounded">3.92 CGPA in Percentage 78.40%</div>
                                <div class="border p-2 rounded">3.93 CGPA in Percentage 78.60%</div>
                                <div class="border p-2 rounded">3.94 CGPA in Percentage 78.80%</div>
                                <div class="border p-2 rounded">3.95 CGPA in Percentage 79.00%</div>
                                <div class="border p-2 rounded">3.96 CGPA in Percentage 79.20%</div>
                                <div class="border p-2 rounded">3.97 CGPA in Percentage 79.40%</div>
                                <div class="border p-2 rounded">3.98 CGPA in Percentage 79.60%</div>
                                <div class="border p-2 rounded">3.99 CGPA in Percentage 79.80%</div>
                                <div class="border p-2 rounded">4.00 CGPA in Percentage 80.00%</div>
                                <div class="border p-2 rounded">4.00 CGPA in Percentage 80.00%</div>
                                <div class="border p-2 rounded">4.01 CGPA in Percentage 80.20%</div>
                                <div class="border p-2 rounded">4.02 CGPA in Percentage 80.40%</div>
                                <div class="border p-2 rounded">4.03 CGPA in Percentage 80.60%</div>
                                <div class="border p-2 rounded">4.04 CGPA in Percentage 80.80%</div>
                                <div class="border p-2 rounded">4.05 CGPA in Percentage 81.00%</div>
                                <div class="border p-2 rounded">4.06 CGPA in Percentage 81.20%</div>
                                <div class="border p-2 rounded">4.07 CGPA in Percentage 81.40%</div>
                                <div class="border p-2 rounded">4.08 CGPA in Percentage 81.60%</div>
                                <div class="border p-2 rounded">4.09 CGPA in Percentage 81.80%</div>
                                <div class="border p-2 rounded">4.10 CGPA in Percentage 82.00%</div>
                                <div class="border p-2 rounded">4.11 CGPA in Percentage 82.20%</div>
                                <div class="border p-2 rounded">4.12 CGPA in Percentage 82.40%</div>
                                <div class="border p-2 rounded">4.13 CGPA in Percentage 82.60%</div>
                                <div class="border p-2 rounded">4.14 CGPA in Percentage 82.80%</div>
                                <div class="border p-2 rounded">4.15 CGPA in Percentage 83.00%</div>
                                <div class="border p-2 rounded">4.16 CGPA in Percentage 83.20%</div>
                                <div class="border p-2 rounded">4.17 CGPA in Percentage 83.40%</div>
                                <div class="border p-2 rounded">4.18 CGPA in Percentage 83.60%</div>
                                <div class="border p-2 rounded">4.19 CGPA in Percentage 83.80%</div>
                                <div class="border p-2 rounded">4.20 CGPA in Percentage 84.00%</div>
                                <div class="border p-2 rounded">4.21 CGPA in Percentage 84.20%</div>
                                <div class="border p-2 rounded">4.22 CGPA in Percentage 84.40%</div>
                                <div class="border p-2 rounded">4.23 CGPA in Percentage 84.60%</div>
                                <div class="border p-2 rounded">4.24 CGPA in Percentage 84.80%</div>
                                <div class="border p-2 rounded">4.25 CGPA in Percentage 85.00%</div>
                                <div class="border p-2 rounded">4.26 CGPA in Percentage 85.20%</div>
                                <div class="border p-2 rounded">4.27 CGPA in Percentage 85.40%</div>
                                <div class="border p-2 rounded">4.28 CGPA in Percentage 85.60%</div>
                                <div class="border p-2 rounded">4.29 CGPA in Percentage 85.80%</div>
                                <div class="border p-2 rounded">4.30 CGPA in Percentage 86.00%</div>
                                <div class="border p-2 rounded">4.31 CGPA in Percentage 86.20%</div>
                                <div class="border p-2 rounded">4.32 CGPA in Percentage 86.40%</div>
                                <div class="border p-2 rounded">4.33 CGPA in Percentage 86.60%</div>
                                <div class="border p-2 rounded">4.34 CGPA in Percentage 86.80%</div>
                                <div class="border p-2 rounded">4.35 CGPA in Percentage 87.00%</div>
                                <div class="border p-2 rounded">4.36 CGPA in Percentage 87.20%</div>
                                <div class="border p-2 rounded">4.37 CGPA in Percentage 87.40%</div>
                                <div class="border p-2 rounded">4.38 CGPA in Percentage 87.60%</div>
                                <div class="border p-2 rounded">4.39 CGPA in Percentage 87.80%</div>
                                <div class="border p-2 rounded">4.40 CGPA in Percentage 88.00%</div>
                                <div class="border p-2 rounded">4.41 CGPA in Percentage 88.20%</div>
                                <div class="border p-2 rounded">4.42 CGPA in Percentage 88.40%</div>
                                <div class="border p-2 rounded">4.43 CGPA in Percentage 88.60%</div>
                                <div class="border p-2 rounded">4.44 CGPA in Percentage 88.80%</div>
                                <div class="border p-2 rounded">4.45 CGPA in Percentage 89.00%</div>
                                <div class="border p-2 rounded">4.46 CGPA in Percentage 89.20%</div>
                                <div class="border p-2 rounded">4.47 CGPA in Percentage 89.40%</div>
                                <div class="border p-2 rounded">4.48 CGPA in Percentage 89.60%</div>
                                <div class="border p-2 rounded">4.49 CGPA in Percentage 89.80%</div>
                                <div class="border p-2 rounded">4.50 CGPA in Percentage 90.00%</div>
                                <div class="border p-2 rounded">4.51 CGPA in Percentage 90.20%</div>
                                <div class="border p-2 rounded">4.52 CGPA in Percentage 90.40%</div>
                                <div class="border p-2 rounded">4.53 CGPA in Percentage 90.60%</div>
                                <div class="border p-2 rounded">4.54 CGPA in Percentage 90.80%</div>
                                <div class="border p-2 rounded">4.55 CGPA in Percentage 91.00%</div>
                                <div class="border p-2 rounded">4.56 CGPA in Percentage 91.20%</div>
                                <div class="border p-2 rounded">4.57 CGPA in Percentage 91.40%</div>
                                <div class="border p-2 rounded">4.58 CGPA in Percentage 91.60%</div>
                                <div class="border p-2 rounded">4.59 CGPA in Percentage 91.80%</div>
                                <div class="border p-2 rounded">4.60 CGPA in Percentage 92.00%</div>
                                <div class="border p-2 rounded">4.61 CGPA in Percentage 92.20%</div>
                                <div class="border p-2 rounded">4.62 CGPA in Percentage 92.40%</div>
                                <div class="border p-2 rounded">4.63 CGPA in Percentage 92.60%</div>
                                <div class="border p-2 rounded">4.64 CGPA in Percentage 92.80%</div>
                                <div class="border p-2 rounded">4.65 CGPA in Percentage 93.00%</div>
                                <div class="border p-2 rounded">4.66 CGPA in Percentage 93.20%</div>
                                <div class="border p-2 rounded">4.67 CGPA in Percentage 93.40%</div>
                                <div class="border p-2 rounded">4.68 CGPA in Percentage 93.60%</div>
                                <div class="border p-2 rounded">4.69 CGPA in Percentage 93.80%</div>
                                <div class="border p-2 rounded">4.70 CGPA in Percentage 94.00%</div>
                                <div class="border p-2 rounded">4.71 CGPA in Percentage 94.20%</div>
                                <div class="border p-2 rounded">4.72 CGPA in Percentage 94.40%</div>
                                <div class="border p-2 rounded">4.73 CGPA in Percentage 94.60%</div>
                                <div class="border p-2 rounded">4.74 CGPA in Percentage 94.80%</div>
                                <div class="border p-2 rounded">4.75 CGPA in Percentage 95.00%</div>
                                <div class="border p-2 rounded">4.76 CGPA in Percentage 95.20%</div>
                                <div class="border p-2 rounded">4.77 CGPA in Percentage 95.40%</div>
                                <div class="border p-2 rounded">4.78 CGPA in Percentage 95.60%</div>
                                <div class="border p-2 rounded">4.79 CGPA in Percentage 95.80%</div>
                                <div class="border p-2 rounded">4.80 CGPA in Percentage 96.00%</div>
                                <div class="border p-2 rounded">4.81 CGPA in Percentage 96.20%</div>
                                <div class="border p-2 rounded">4.82 CGPA in Percentage 96.40%</div>
                                <div class="border p-2 rounded">4.83 CGPA in Percentage 96.60%</div>
                                <div class="border p-2 rounded">4.84 CGPA in Percentage 96.80%</div>
                                <div class="border p-2 rounded">4.85 CGPA in Percentage 97.00%</div>
                                <div class="border p-2 rounded">4.86 CGPA in Percentage 97.20%</div>
                                <div class="border p-2 rounded">4.87 CGPA in Percentage 97.40%</div>
                                <div class="border p-2 rounded">4.88 CGPA in Percentage 97.60%</div>
                                <div class="border p-2 rounded">4.89 CGPA in Percentage 97.80%</div>
                                <div class="border p-2 rounded">4.90 CGPA in Percentage 98.00%</div>
                                <div class="border p-2 rounded">4.91 CGPA in Percentage 98.20%</div>
                                <div class="border p-2 rounded">4.92 CGPA in Percentage 98.40%</div>
                                <div class="border p-2 rounded">4.93 CGPA in Percentage 98.60%</div>
                                <div class="border p-2 rounded">4.94 CGPA in Percentage 98.80%</div>
                                <div class="border p-2 rounded">4.95 CGPA in Percentage 99.00%</div>
                                <div class="border p-2 rounded">4.96 CGPA in Percentage 99.20%</div>
                                <div class="border p-2 rounded">4.97 CGPA in Percentage 99.40%</div>
                                <div class="border p-2 rounded">4.98 CGPA in Percentage 99.60%</div>
                                <div class="border p-2 rounded">4.99 CGPA in Percentage 99.80%</div>
                                <div class="border p-2 rounded">5.00 CGPA in Percentage 100.00%</div>
                            </div>
                        </div>


                        <div id='section12' className="container mx-auto p-4">
                            <div>
                                <h1 class="text-xl font-bold text-blue-400 mb-4">
                                    CGPA to Percentage in 4 Grade Scale
                                </h1>
                                <div class="grid grid-cols-1 sm:grid-cols-3 border-blue-400 border">
                                    <div class="border p-2 rounded">1.00 CGPA in Percentage 25.00%</div>
                                    <div class="border p-2 rounded">1.01 CGPA in Percentage 25.25%</div>
                                    <div class="border p-2 rounded">1.02 CGPA in Percentage 25.50%</div>
                                    <div class="border p-2 rounded">1.03 CGPA in Percentage 25.75%</div>
                                    <div class="border p-2 rounded">1.04 CGPA in Percentage 26.00%</div>
                                    <div class="border p-2 rounded">1.05 CGPA in Percentage 26.25%</div>
                                    <div class="border p-2 rounded">1.06 CGPA in Percentage 26.50%</div>
                                    <div class="border p-2 rounded">1.07 CGPA in Percentage 26.75%</div>
                                    <div class="border p-2 rounded">1.08 CGPA in Percentage 27.00%</div>
                                    <div class="border p-2 rounded">1.09 CGPA in Percentage 27.25%</div>
                                    <div class="border p-2 rounded">1.10 CGPA in Percentage 27.50%</div>
                                    <div class="border p-2 rounded">1.11 CGPA in Percentage 27.75%</div>
                                    <div class="border p-2 rounded">1.12 CGPA in Percentage 28.00%</div>
                                    <div class="border p-2 rounded">1.13 CGPA in Percentage 28.25%</div>
                                    <div class="border p-2 rounded">1.14 CGPA in Percentage 28.50%</div>
                                    <div class="border p-2 rounded">1.15 CGPA in Percentage 28.75%</div>
                                    <div class="border p-2 rounded">1.16 CGPA in Percentage 29.00%</div>
                                    <div class="border p-2 rounded">1.17 CGPA in Percentage 29.25%</div>
                                    <div class="border p-2 rounded">1.18 CGPA in Percentage 29.50%</div>
                                    <div class="border p-2 rounded">1.19 CGPA in Percentage 29.75%</div>
                                    <div class="border p-2 rounded">1.20 CGPA in Percentage 30.00%</div>
                                    <div class="border p-2 rounded">1.21 CGPA in Percentage 30.25%</div>
                                    <div class="border p-2 rounded">1.22 CGPA in Percentage 30.50%</div>
                                    <div class="border p-2 rounded">1.23 CGPA in Percentage 30.75%</div>
                                    <div class="border p-2 rounded">1.24 CGPA in Percentage 31.00%</div>
                                    <div class="border p-2 rounded">1.25 CGPA in Percentage 31.25%</div>
                                    <div class="border p-2 rounded">1.26 CGPA in Percentage 31.50%</div>
                                    <div class="border p-2 rounded">1.27 CGPA in Percentage 31.75%</div>
                                    <div class="border p-2 rounded">1.28 CGPA in Percentage 32.00%</div>
                                    <div class="border p-2 rounded">1.29 CGPA in Percentage 32.25%</div>
                                    <div class="border p-2 rounded">1.30 CGPA in Percentage 32.50%</div>
                                    <div class="border p-2 rounded">1.31 CGPA in Percentage 32.75%</div>
                                    <div class="border p-2 rounded">1.32 CGPA in Percentage 33.00%</div>
                                    <div class="border p-2 rounded">1.33 CGPA in Percentage 33.25%</div>
                                    <div class="border p-2 rounded">1.34 CGPA in Percentage 33.50%</div>
                                    <div class="border p-2 rounded">1.35 CGPA in Percentage 33.75%</div>
                                    <div class="border p-2 rounded">1.36 CGPA in Percentage 34.00%</div>
                                    <div class="border p-2 rounded">1.37 CGPA in Percentage 34.25%</div>
                                    <div class="border p-2 rounded">1.38 CGPA in Percentage 34.50%</div>
                                    <div class="border p-2 rounded">1.39 CGPA in Percentage 34.75%</div>
                                    <div class="border p-2 rounded">1.40 CGPA in Percentage 35.00%</div>
                                    <div class="border p-2 rounded">1.41 CGPA in Percentage 35.25%</div>
                                    <div class="border p-2 rounded">1.42 CGPA in Percentage 35.50%</div>
                                    <div class="border p-2 rounded">1.43 CGPA in Percentage 35.75%</div>
                                    <div class="border p-2 rounded">1.44 CGPA in Percentage 36.00%</div>
                                    <div class="border p-2 rounded">1.45 CGPA in Percentage 36.25%</div>
                                    <div class="border p-2 rounded">1.46 CGPA in Percentage 36.50%</div>
                                    <div class="border p-2 rounded">1.47 CGPA in Percentage 36.75%</div>
                                    <div class="border p-2 rounded">1.48 CGPA in Percentage 37.00%</div>
                                    <div class="border p-2 rounded">1.49 CGPA in Percentage 37.25%</div>
                                    <div class="border p-2 rounded">1.50 CGPA in Percentage 37.50%</div>
                                    <div class="border p-2 rounded">1.51 CGPA in Percentage 37.75%</div>
                                    <div class="border p-2 rounded">1.52 CGPA in Percentage 38.00%</div>
                                    <div class="border p-2 rounded">1.53 CGPA in Percentage 38.25%</div>
                                    <div class="border p-2 rounded">1.54 CGPA in Percentage 38.50%</div>
                                    <div class="border p-2 rounded">1.55 CGPA in Percentage 38.75%</div>
                                    <div class="border p-2 rounded">1.56 CGPA in Percentage 39.00%</div>
                                    <div class="border p-2 rounded">1.57 CGPA in Percentage 39.25%</div>
                                    <div class="border p-2 rounded">1.58 CGPA in Percentage 39.50%</div>
                                    <div class="border p-2 rounded">1.59 CGPA in Percentage 39.75%</div>
                                    <div class="border p-2 rounded">1.60 CGPA in Percentage 40.00%</div>
                                    <div class="border p-2 rounded">1.61 CGPA in Percentage 40.25%</div>
                                    <div class="border p-2 rounded">1.62 CGPA in Percentage 40.50%</div>
                                    <div class="border p-2 rounded">1.63 CGPA in Percentage 40.75%</div>
                                    <div class="border p-2 rounded">1.64 CGPA in Percentage 41.00%</div>
                                    <div class="border p-2 rounded">1.65 CGPA in Percentage 41.25%</div>
                                    <div class="border p-2 rounded">1.66 CGPA in Percentage 41.50%</div>
                                    <div class="border p-2 rounded">1.67 CGPA in Percentage 41.75%</div>
                                    <div class="border p-2 rounded">1.68 CGPA in Percentage 42.00%</div>
                                    <div class="border p-2 rounded">1.69 CGPA in Percentage 42.25%</div>
                                    <div class="border p-2 rounded">1.70 CGPA in Percentage 42.50%</div>
                                    <div class="border p-2 rounded">1.06 CGPA in Percentage 26.50%</div>
                                    <div class="border p-2 rounded">1.07 CGPA in Percentage 26.75%</div>
                                    <div class="border p-2 rounded">1.08 CGPA in Percentage 27.00%</div>
                                    <div class="border p-2 rounded">1.09 CGPA in Percentage 27.25%</div>
                                    <div class="border p-2 rounded">1.10 CGPA in Percentage 27.50%</div>
                                    <div class="border p-2 rounded">1.11 CGPA in Percentage 27.75%</div>
                                    <div class="border p-2 rounded">1.12 CGPA in Percentage 28.00%</div>
                                    <div class="border p-2 rounded">1.13 CGPA in Percentage 28.25%</div>
                                    <div class="border p-2 rounded">1.14 CGPA in Percentage 28.50%</div>
                                    <div class="border p-2 rounded">1.15 CGPA in Percentage 28.75%</div>
                                    <div class="border p-2 rounded">1.16 CGPA in Percentage 29.00%</div>
                                    <div class="border p-2 rounded">1.17 CGPA in Percentage 29.25%</div>
                                    <div class="border p-2 rounded">1.18 CGPA in Percentage 29.50%</div>
                                    <div class="border p-2 rounded">1.19 CGPA in Percentage 29.75%</div>
                                    <div class="border p-2 rounded">1.20 CGPA in Percentage 30.00%</div>
                                    <div class="border p-2 rounded">1.21 CGPA in Percentage 30.25%</div>
                                    <div class="border p-2 rounded">1.22 CGPA in Percentage 30.50%</div>
                                    <div class="border p-2 rounded">1.23 CGPA in Percentage 30.75%</div>
                                    <div class="border p-2 rounded">1.24 CGPA in Percentage 31.00%</div>
                                    <div class="border p-2 rounded">1.25 CGPA in Percentage 31.25%</div>
                                    <div class="border p-2 rounded">1.26 CGPA in Percentage 31.50%</div>
                                    <div class="border p-2 rounded">1.27 CGPA in Percentage 31.75%</div>
                                    <div class="border p-2 rounded">1.28 CGPA in Percentage 32.00%</div>
                                    <div class="border p-2 rounded">1.29 CGPA in Percentage 32.25%</div>
                                    <div class="border p-2 rounded">1.30 CGPA in Percentage 32.50%</div>
                                    <div class="border p-2 rounded">1.31 CGPA in Percentage 32.75%</div>
                                    <div class="border p-2 rounded">1.32 CGPA in Percentage 33.00%</div>
                                    <div class="border p-2 rounded">1.33 CGPA in Percentage 33.25%</div>
                                    <div class="border p-2 rounded">1.34 CGPA in Percentage 33.50%</div>
                                    <div class="border p-2 rounded">1.35 CGPA in Percentage 33.75%</div>
                                    <div class="border p-2 rounded">1.36 CGPA in Percentage 34.00%</div>
                                    <div class="border p-2 rounded">1.37 CGPA in Percentage 34.25%</div>
                                    <div class="border p-2 rounded">1.38 CGPA in Percentage 34.50%</div>
                                    <div class="border p-2 rounded">1.39 CGPA in Percentage 34.75%</div>
                                    <div class="border p-2 rounded">1.40 CGPA in Percentage 35.00%</div>
                                    <div class="border p-2 rounded">1.41 CGPA in Percentage 35.25%</div>
                                    <div class="border p-2 rounded">1.42 CGPA in Percentage 35.50%</div>
                                    <div class="border p-2 rounded">1.43 CGPA in Percentage 35.75%</div>
                                    <div class="border p-2 rounded">1.44 CGPA in Percentage 36.00%</div>
                                    <div class="border p-2 rounded">1.45 CGPA in Percentage 36.25%</div>
                                    <div class="border p-2 rounded">1.46 CGPA in Percentage 36.50%</div>
                                    <div class="border p-2 rounded">1.47 CGPA in Percentage 36.75%</div>
                                    <div class="border p-2 rounded">1.48 CGPA in Percentage 37.00%</div>
                                    <div class="border p-2 rounded">1.49 CGPA in Percentage 37.25%</div>
                                    <div class="border p-2 rounded">1.50 CGPA in Percentage 37.50%</div>
                                    <div class="border p-2 rounded">1.51 CGPA in Percentage 37.75%</div>
                                    <div class="border p-2 rounded">1.52 CGPA in Percentage 38.00%</div>
                                    <div class="border p-2 rounded">1.53 CGPA in Percentage 38.25%</div>
                                    <div class="border p-2 rounded">1.54 CGPA in Percentage 38.50%</div>
                                    <div class="border p-2 rounded">1.55 CGPA in Percentage 38.75%</div>
                                    <div class="border p-2 rounded">1.56 CGPA in Percentage 39.00%</div>
                                    <div class="border p-2 rounded">1.57 CGPA in Percentage 39.25%</div>
                                    <div class="border p-2 rounded">1.58 CGPA in Percentage 39.50%</div>
                                    <div class="border p-2 rounded">1.59 CGPA in Percentage 39.75%</div>
                                    <div class="border p-2 rounded">1.60 CGPA in Percentage 40.00%</div>
                                    <div class="border p-2 rounded">1.61 CGPA in Percentage 40.25%</div>
                                    <div class="border p-2 rounded">1.62 CGPA in Percentage 40.50%</div>
                                    <div class="border p-2 rounded">1.63 CGPA in Percentage 40.75%</div>
                                    <div class="border p-2 rounded">1.64 CGPA in Percentage 41.00%</div>
                                    <div class="border p-2 rounded">1.65 CGPA in Percentage 41.25%</div>
                                    <div class="border p-2 rounded">1.66 CGPA in Percentage 41.50%</div>
                                    <div class="border p-2 rounded">1.67 CGPA in Percentage 41.75%</div>
                                    <div class="border p-2 rounded">1.68 CGPA in Percentage 42.00%</div>
                                    <div class="border p-2 rounded">1.69 CGPA in Percentage 42.25%</div>
                                    <div class="border p-2 rounded">1.70 CGPA in Percentage 42.50%</div>
                                    <div class="border p-2 rounded">1.71 CGPA in Percentage 42.75%</div>
                                    <div class="border p-2 rounded">1.72 CGPA in Percentage 43.00%</div>
                                    <div class="border p-2 rounded">1.73 CGPA in Percentage 43.25%</div>
                                    <div class="border p-2 rounded">1.74 CGPA in Percentage 43.50%</div>
                                    <div class="border p-2 rounded">1.75 CGPA in Percentage 43.75%</div>
                                    <div class="border p-2 rounded">1.76 CGPA in Percentage 44.00%</div>
                                    <div class="border p-2 rounded">1.77 CGPA in Percentage 44.25%</div>
                                    <div class="border p-2 rounded">1.78 CGPA in Percentage 44.50%</div>
                                    <div class="border p-2 rounded">1.79 CGPA in Percentage 44.75%</div>
                                    <div class="border p-2 rounded">1.80 CGPA in Percentage 45.00%</div>
                                    <div class="border p-2 rounded">1.81 CGPA in Percentage 45.25%</div>
                                    <div class="border p-2 rounded">1.82 CGPA in Percentage 45.50%</div>
                                    <div class="border p-2 rounded">1.83 CGPA in Percentage 45.75%</div>
                                    <div class="border p-2 rounded">1.84 CGPA in Percentage 46.00%</div>
                                    <div class="border p-2 rounded">1.85 CGPA in Percentage 46.25%</div>
                                    <div class="border p-2 rounded">1.86 CGPA in Percentage 46.50%</div>
                                    <div class="border p-2 rounded">1.87 CGPA in Percentage 46.75%</div>
                                    <div class="border p-2 rounded">1.88 CGPA in Percentage 47.00%</div>
                                    <div class="border p-2 rounded">1.89 CGPA in Percentage 47.25%</div>
                                    <div class="border p-2 rounded">1.90 CGPA in Percentage 47.50%</div>
                                    <div class="border p-2 rounded">1.91 CGPA in Percentage 47.75%</div>
                                    <div class="border p-2 rounded">1.92 CGPA in Percentage 48.00%</div>
                                    <div class="border p-2 rounded">1.93 CGPA in Percentage 48.25%</div>
                                    <div class="border p-2 rounded">1.94 CGPA in Percentage 48.50%</div>
                                    <div class="border p-2 rounded">1.95 CGPA in Percentage 48.75%</div>
                                    <div class="border p-2 rounded">1.96 CGPA in Percentage 49.00%</div>
                                    <div class="border p-2 rounded">1.97 CGPA in Percentage 49.25%</div>
                                    <div class="border p-2 rounded">1.98 CGPA in Percentage 49.50%</div>
                                    <div class="border p-2 rounded">1.99 CGPA in Percentage 49.75%</div>
                                    <div class="border p-2 rounded">2.00 CGPA in Percentage 50.00%</div>
                                    <div class="border p-2 rounded">2.01 CGPA in Percentage 50.25%</div>
                                    <div class="border p-2 rounded">2.02 CGPA in Percentage 50.50%</div>
                                    <div class="border p-2 rounded">2.03 CGPA in Percentage 50.75%</div>
                                    <div class="border p-2 rounded">2.04 CGPA in Percentage 51.00%</div>
                                    <div class="border p-2 rounded">2.05 CGPA in Percentage 51.25%</div>
                                    <div class="border p-2 rounded">2.06 CGPA in Percentage 51.50%</div>
                                    <div class="border p-2 rounded">2.07 CGPA in Percentage 51.75%</div>
                                    <div class="border p-2 rounded">2.08 CGPA in Percentage 52.00%</div>
                                    <div class="border p-2 rounded">2.09 CGPA in Percentage 52.25%</div>
                                    <div class="border p-2 rounded">2.10 CGPA in Percentage 52.50%</div>
                                    <div class="border p-2 rounded">2.11 CGPA in Percentage 52.75%</div>
                                    <div class="border p-2 rounded">2.12 CGPA in Percentage 53.00%</div>
                                    <div class="border p-2 rounded">2.13 CGPA in Percentage 53.25%</div>
                                    <div class="border p-2 rounded">2.14 CGPA in Percentage 53.50%</div>
                                    <div class="border p-2 rounded">2.15 CGPA in Percentage 53.75%</div>
                                    <div class="border p-2 rounded">2.16 CGPA in Percentage 54.00%</div>
                                    <div class="border p-2 rounded">2.17 CGPA in Percentage 54.25%</div>
                                    <div class="border p-2 rounded">2.18 CGPA in Percentage 54.50%</div>
                                    <div class="border p-2 rounded">2.19 CGPA in Percentage 54.75%</div>
                                    <div class="border p-2 rounded">2.20 CGPA in Percentage 55.00%</div>
                                    <div class="border p-2 rounded">2.21 CGPA in Percentage 55.25%</div>
                                    <div class="border p-2 rounded">2.22 CGPA in Percentage 55.50%</div>
                                    <div class="border p-2 rounded">2.23 CGPA in Percentage 55.75%</div>
                                    <div class="border p-2 rounded">2.24 CGPA in Percentage 56.00%</div>
                                    <div class="border p-2 rounded">2.25 CGPA in Percentage 56.25%</div>
                                    <div class="border p-2 rounded">2.26 CGPA in Percentage 56.50%</div>
                                    <div class="border p-2 rounded">2.27 CGPA in Percentage 56.75%</div>
                                    <div class="border p-2 rounded">2.28 CGPA in Percentage 57.00%</div>
                                    <div class="border p-2 rounded">2.29 CGPA in Percentage 57.25%</div>
                                    <div class="border p-2 rounded">2.30 CGPA in Percentage 57.50%</div>
                                    <div class="border p-2 rounded">2.31 CGPA in Percentage 57.75%</div>
                                    <div class="border p-2 rounded">2.32 CGPA in Percentage 58.00%</div>
                                    <div class="border p-2 rounded">2.33 CGPA in Percentage 58.25%</div>
                                    <div class="border p-2 rounded">2.34 CGPA in Percentage 58.50%</div>
                                    <div class="border p-2 rounded">2.35 CGPA in Percentage 58.75%</div>
                                    <div class="border p-2 rounded">2.36 CGPA in Percentage 59.00%</div>
                                    <div class="border p-2 rounded">2.37 CGPA in Percentage 59.25%</div>
                                    <div class="border p-2 rounded">2.38 CGPA in Percentage 59.50%</div>
                                    <div class="border p-2 rounded">2.39 CGPA in Percentage 59.75%</div>
                                    <div class="border p-2 rounded">2.40 CGPA in Percentage 60.00%</div>
                                    <div class="border p-2 rounded">2.41 CGPA in Percentage 60.25%</div>
                                    <div class="border p-2 rounded">2.42 CGPA in Percentage 60.50%</div>
                                    <div class="border p-2 rounded">2.43 CGPA in Percentage 60.75%</div>
                                    <div class="border p-2 rounded">2.44 CGPA in Percentage 61.00%</div>
                                    <div class="border p-2 rounded">2.45 CGPA in Percentage 61.25%</div>
                                    <div class="border p-2 rounded">2.46 CGPA in Percentage 61.50%</div>
                                    <div class="border p-2 rounded">2.47 CGPA in Percentage 61.75%</div>
                                    <div class="border p-2 rounded">2.48 CGPA in Percentage 62.00%</div>
                                    <div class="border p-2 rounded">2.49 CGPA in Percentage 62.25%</div>
                                    <div class="border p-2 rounded">2.50 CGPA in Percentage 62.50%</div>
                                    <div class="border p-2 rounded">2.51 CGPA in Percentage 62.75%</div>
                                    <div class="border p-2 rounded">2.52 CGPA in Percentage 63.00%</div>
                                    <div class="border p-2 rounded">2.53 CGPA in Percentage 63.25%</div>
                                    <div class="border p-2 rounded">2.54 CGPA in Percentage 63.50%</div>
                                    <div class="border p-2 rounded">2.55 CGPA in Percentage 63.75%</div>
                                    <div class="border p-2 rounded">2.56 CGPA in Percentage 64.00%</div>
                                    <div class="border p-2 rounded">2.57 CGPA in Percentage 64.25%</div>
                                    <div class="border p-2 rounded">2.58 CGPA in Percentage 64.50%</div>
                                    <div class="border p-2 rounded">2.59 CGPA in Percentage 64.75%</div>
                                    <div class="border p-2 rounded">2.60 CGPA in Percentage 65.00%</div>
                                    <div class="border p-2 rounded">2.61 CGPA in Percentage 65.25%</div>
                                    <div class="border p-2 rounded">2.62 CGPA in Percentage 65.50%</div>
                                    <div class="border p-2 rounded">2.63 CGPA in Percentage 65.75%</div>
                                    <div class="border p-2 rounded">2.64 CGPA in Percentage 66.00%</div>
                                    <div class="border p-2 rounded">2.65 CGPA in Percentage 66.25%</div>
                                    <div class="border p-2 rounded">2.66 CGPA in Percentage 66.50%</div>
                                    <div class="border p-2 rounded">2.67 CGPA in Percentage 66.75%</div>
                                    <div class="border p-2 rounded">2.68 CGPA in Percentage 67.00%</div>
                                    <div class="border p-2 rounded">2.69 CGPA in Percentage 67.25%</div>
                                    <div class="border p-2 rounded">2.70 CGPA in Percentage 67.50%</div>
                                    <div class="border p-2 rounded">2.71 CGPA in Percentage 67.75%</div>
                                    <div class="border p-2 rounded">2.72 CGPA in Percentage 68.00%</div>
                                    <div class="border p-2 rounded">2.73 CGPA in Percentage 68.25%</div>
                                    <div class="border p-2 rounded">2.74 CGPA in Percentage 68.50%</div>
                                    <div class="border p-2 rounded">2.75 CGPA in Percentage 68.75%</div>
                                    <div class="border p-2 rounded">2.76 CGPA in Percentage 69.00%</div>
                                    <div class="border p-2 rounded">2.77 CGPA in Percentage 69.25%</div>
                                    <div class="border p-2 rounded">2.78 CGPA in Percentage 69.50%</div>
                                    <div class="border p-2 rounded">2.79 CGPA in Percentage 69.75%</div>
                                    <div class="border p-2 rounded">2.80 CGPA in Percentage 70.00%</div>
                                    <div class="border p-2 rounded">2.81 CGPA in Percentage 70.25%</div>
                                    <div class="border p-2 rounded">2.82 CGPA in Percentage 70.50%</div>
                                    <div class="border p-2 rounded">2.83 CGPA in Percentage 70.75%</div>
                                    <div class="border p-2 rounded">2.84 CGPA in Percentage 71.00%</div>
                                    <div class="border p-2 rounded">2.85 CGPA in Percentage 71.25%</div>
                                    <div class="border p-2 rounded">2.86 CGPA in Percentage 71.50%</div>
                                    <div class="border p-2 rounded">2.87 CGPA in Percentage 71.75%</div>
                                    <div class="border p-2 rounded">2.88 CGPA in Percentage 72.00%</div>
                                    <div class="border p-2 rounded">2.89 CGPA in Percentage 72.25%</div>
                                    <div class="border p-2 rounded">2.90 CGPA in Percentage 72.50%</div>
                                    <div class="border p-2 rounded">2.91 CGPA in Percentage 72.75%</div>
                                    <div class="border p-2 rounded">2.92 CGPA in Percentage 73.00%</div>
                                    <div class="border p-2 rounded">2.93 CGPA in Percentage 73.25%</div>
                                    <div class="border p-2 rounded">2.94 CGPA in Percentage 73.50%</div>
                                    <div class="border p-2 rounded">2.95 CGPA in Percentage 73.75%</div>
                                    <div class="border p-2 rounded">2.96 CGPA in Percentage 74.00%</div>
                                    <div class="border p-2 rounded">2.97 CGPA in Percentage 74.25%</div>
                                    <div class="border p-2 rounded">2.98 CGPA in Percentage 74.50%</div>
                                    <div class="border p-2 rounded">2.99 CGPA in Percentage 74.75%</div>
                                    <div class="border p-2 rounded">3.00 CGPA in Percentage 75.00%</div>
                                    <div class="border p-2 rounded">3.01 CGPA in Percentage 75.25%</div>
                                    <div class="border p-2 rounded">3.02 CGPA in Percentage 75.50%</div>
                                    <div class="border p-2 rounded">3.03 CGPA in Percentage 75.75%</div>
                                    <div class="border p-2 rounded">3.04 CGPA in Percentage 76.00%</div>
                                    <div class="border p-2 rounded">3.05 CGPA in Percentage 76.25%</div>
                                    <div class="border p-2 rounded">3.06 CGPA in Percentage 76.50%</div>
                                    <div class="border p-2 rounded">3.07 CGPA in Percentage 76.75%</div>
                                    <div class="border p-2 rounded">3.08 CGPA in Percentage 77.00%</div>
                                    <div class="border p-2 rounded">3.09 CGPA in Percentage 77.25%</div>
                                    <div class="border p-2 rounded">3.10 CGPA in Percentage 77.50%</div>
                                    <div class="border p-2 rounded">3.11 CGPA in Percentage 77.75%</div>
                                    <div class="border p-2 rounded">3.12 CGPA in Percentage 78.00%</div>
                                    <div class="border p-2 rounded">3.13 CGPA in Percentage 78.25%</div>
                                    <div class="border p-2 rounded">3.14 CGPA in Percentage 78.50%</div>
                                    <div class="border p-2 rounded">3.15 CGPA in Percentage 78.75%</div>
                                    <div class="border p-2 rounded">3.16 CGPA in Percentage 79.00%</div>
                                    <div class="border p-2 rounded">3.17 CGPA in Percentage 79.25%</div>
                                    <div class="border p-2 rounded">3.18 CGPA in Percentage 79.50%</div>
                                    <div class="border p-2 rounded">3.19 CGPA in Percentage 79.75%</div>
                                    <div class="border p-2 rounded">3.20 CGPA in Percentage 80.00%</div>
                                    <div class="border p-2 rounded">3.21 CGPA in Percentage 80.25%</div>
                                    <div class="border p-2 rounded">3.22 CGPA in Percentage 80.50%</div>
                                    <div class="border p-2 rounded">3.23 CGPA in Percentage 80.75%</div>
                                    <div class="border p-2 rounded">3.24 CGPA in Percentage 81.00%</div>
                                    <div class="border p-2 rounded">3.25 CGPA in Percentage 81.25%</div>
                                    <div class="border p-2 rounded">3.26 CGPA in Percentage 81.50%</div>
                                    <div class="border p-2 rounded">3.27 CGPA in Percentage 81.75%</div>
                                    <div class="border p-2 rounded">3.28 CGPA in Percentage 82.00%</div>
                                    <div class="border p-2 rounded">3.29 CGPA in Percentage 82.25%</div>
                                    <div class="border p-2 rounded">3.30 CGPA in Percentage 82.50%</div>
                                    <div class="border p-2 rounded">3.31 CGPA in Percentage 82.75%</div>
                                    <div class="border p-2 rounded">3.32 CGPA in Percentage 83.00%</div>
                                    <div class="border p-2 rounded">3.33 CGPA in Percentage 83.25%</div>
                                    <div class="border p-2 rounded">3.34 CGPA in Percentage 83.50%</div>
                                    <div class="border p-2 rounded">3.35 CGPA in Percentage 83.75%</div>
                                    <div class="border p-2 rounded">3.36 CGPA in Percentage 84.00%</div>
                                    <div class="border p-2 rounded">3.37 CGPA in Percentage 84.25%</div>
                                    <div class="border p-2 rounded">3.38 CGPA in Percentage 84.50%</div>
                                    <div class="border p-2 rounded">3.39 CGPA in Percentage 84.75%</div>
                                    <div class="border p-2 rounded">3.40 CGPA in Percentage 85.00%</div>
                                    <div class="border p-2 rounded">3.41 CGPA in Percentage 85.25%</div>
                                    <div class="border p-2 rounded">3.42 CGPA in Percentage 85.50%</div>
                                    <div class="border p-2 rounded">3.43 CGPA in Percentage 85.75%</div>
                                    <div class="border p-2 rounded">3.44 CGPA in Percentage 86.00%</div>
                                    <div class="border p-2 rounded">3.45 CGPA in Percentage 86.25%</div>
                                    <div class="border p-2 rounded">3.46 CGPA in Percentage 86.50%</div>
                                    <div class="border p-2 rounded">3.47 CGPA in Percentage 86.75%</div>
                                    <div class="border p-2 rounded">3.48 CGPA in Percentage 87.00%</div>
                                    <div class="border p-2 rounded">3.49 CGPA in Percentage 87.25%</div>
                                    <div class="border p-2 rounded">3.50 CGPA in Percentage 87.50%</div>
                                    <div class="border p-2 rounded">3.51 CGPA in Percentage 87.75%</div>
                                    <div class="border p-2 rounded">3.52 CGPA in Percentage 88.00%</div>
                                    <div class="border p-2 rounded">3.53 CGPA in Percentage 88.25%</div>
                                    <div class="border p-2 rounded">3.54 CGPA in Percentage 88.50%</div>
                                    <div class="border p-2 rounded">3.55 CGPA in Percentage 88.75%</div>
                                    <div class="border p-2 rounded">3.56 CGPA in Percentage 89.00%</div>
                                    <div class="border p-2 rounded">3.57 CGPA in Percentage 89.25%</div>
                                    <div class="border p-2 rounded">3.58 CGPA in Percentage 89.50%</div>
                                    <div class="border p-2 rounded">3.59 CGPA in Percentage 89.75%</div>
                                    <div class="border p-2 rounded">3.60 CGPA in Percentage 90.00%</div>
                                    <div class="border p-2 rounded">3.61 CGPA in Percentage 90.25%</div>
                                    <div class="border p-2 rounded">3.62 CGPA in Percentage 90.50%</div>
                                    <div class="border p-2 rounded">3.63 CGPA in Percentage 90.75%</div>
                                    <div class="border p-2 rounded">3.64 CGPA in Percentage 91.00%</div>
                                    <div class="border p-2 rounded">3.65 CGPA in Percentage 91.25%</div>
                                    <div class="border p-2 rounded">3.66 CGPA in Percentage 91.50%</div>
                                    <div class="border p-2 rounded">3.67 CGPA in Percentage 91.75%</div>
                                    <div class="border p-2 rounded">3.68 CGPA in Percentage 92.00%</div>
                                    <div class="border p-2 rounded">3.69 CGPA in Percentage 92.25%</div>
                                    <div class="border p-2 rounded">3.70 CGPA in Percentage 92.50%</div>
                                    <div class="border p-2 rounded">3.71 CGPA in Percentage 92.75%</div>
                                    <div class="border p-2 rounded">3.72 CGPA in Percentage 93.00%</div>
                                    <div class="border p-2 rounded">3.73 CGPA in Percentage 93.25%</div>
                                    <div class="border p-2 rounded">3.74 CGPA in Percentage 93.50%</div>
                                    <div class="border p-2 rounded">3.75 CGPA in Percentage 93.75%</div>
                                    <div class="border p-2 rounded">3.76 CGPA in Percentage 94.00%</div>
                                    <div class="border p-2 rounded">3.77 CGPA in Percentage 94.25%</div>
                                    <div class="border p-2 rounded">3.78 CGPA in Percentage 94.50%</div>
                                    <div class="border p-2 rounded">3.79 CGPA in Percentage 94.75%</div>
                                    <div class="border p-2 rounded">3.80 CGPA in Percentage 95.00%</div>
                                    <div class="border p-2 rounded">3.81 CGPA in Percentage 95.25%</div>
                                    <div class="border p-2 rounded">3.82 CGPA in Percentage 95.50%</div>
                                    <div class="border p-2 rounded">3.83 CGPA in Percentage 95.75%</div>
                                    <div class="border p-2 rounded">3.84 CGPA in Percentage 96.00%</div>
                                    <div class="border p-2 rounded">3.85 CGPA in Percentage 96.25%</div>
                                    <div class="border p-2 rounded">3.86 CGPA in Percentage 96.50%</div>
                                    <div class="border p-2 rounded">3.87 CGPA in Percentage 96.75%</div>
                                    <div class="border p-2 rounded">3.88 CGPA in Percentage 97.00%</div>
                                    <div class="border p-2 rounded">3.89 CGPA in Percentage 97.25%</div>
                                    <div class="border p-2 rounded">3.90 CGPA in Percentage 97.50%</div>
                                    <div class="border p-2 rounded">3.91 CGPA in Percentage 97.75%</div>
                                    <div class="border p-2 rounded">3.92 CGPA in Percentage 98.00%</div>
                                    <div class="border p-2 rounded">3.93 CGPA in Percentage 98.25%</div>
                                    <div class="border p-2 rounded">3.94 CGPA in Percentage 98.50%</div>
                                    <div class="border p-2 rounded">3.95 CGPA in Percentage 98.75%</div>
                                    <div class="border p-2 rounded">3.96 CGPA in Percentage 99.00%</div>
                                    <div class="border p-2 rounded">3.97 CGPA in Percentage 99.25%</div>
                                    <div class="border p-2 rounded">3.98 CGPA in Percentage 99.50%</div>
                                    <div class="border p-2 rounded">3.99 CGPA in Percentage 99.75%</div>
                                    <div class="border py-2 pl-2 rounded">4.00 CGPA in Percentage 100.00%</div>
                                </div>
                            </div>
                        </div>

                        <section id='section13' className="grading-scale-info p-6 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                            <div>
                                <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                    What is a Grading Scale & How do Universities Choose Their Standard Scale?
                                </h2>
                                <p className="mb-4">
                                    A grading scale is an evaluative factor of a student's academic performance. Think of it like a percentage—it gives a general understanding of academic performance. Grading scales categorize students' achievements in an easy-to-understand format, like letter grades (A, B, C…), GPA, or percentage.
                                </p>

                                <p className="mb-4">
                                    Some of the most common grading scales include:
                                </p>

                                <ul className="list-disc pl-6 mb-4">
                                    <li><strong>Percentage:</strong> Used worldwide, ranging from 0 to 100%.</li>
                                    <li><strong>GPA (Grade Point Average):</strong> Primarily used in the USA, ranging from 0 to 4.0, 5.0, or 10.0.</li>
                                    <li><strong>CGPA (Cumulative Grade Point Average):</strong> Used in India, Singapore, and CBSE boards; provides a holistic evaluation.</li>
                                    <li><strong>Letter Grades:</strong> Used in the USA and Canada, based on percentage ranges.</li>
                                    <li><strong>Numerical Scale:</strong> Used in parts of Russia and Latin America, ranging from 1 to 10 or 1 to 5.</li>
                                </ul>

                                <p className="mb-4">
                                    Grading scales are standardized evaluations to categorize academic performance in symbols or numbers, such as letter grades or GPA scores. This helps compare students' academic reports consistently. Some of the most common grading scales are:
                                </p>

                                <ul className="list-disc pl-6 mb-4">
                                    <li><strong>Percentage:</strong> Widely used globally, ranging from 0 to 100%, providing precise academic performance insights.</li>
                                    <li><strong>GPA:</strong> Used in the USA and other countries, ranging from 0 to 4.0, 5.0, or 10.0, showing cumulative performance.</li>
                                    <li><strong>CGPA:</strong> Mostly in India, Singapore, and CBSE boards, offering a holistic view including factors like credit scores.</li>
                                    <li><strong>Letter Grades:</strong> Practiced in the USA and Canada, with each letter representing a percentage range.</li>
                                    <li><strong>Numerical Scale:</strong> Used in Russia and Latin America, with scales like 1-10 or 1-5 to fragment academic performance evaluations.</li>
                                </ul>

                                <p className="mb-4">
                                    Universities choose grading scales based on factors like regional norms, historical significance, and globalization. The UK honors system or US GPA system, for instance, gained momentum in the early 20th century as standardized systems.
                                </p>

                                <p className="mb-4">
                                    Modern grading systems often include aspects like relative achievement, mastery, or personal growth. Examples are the dual grading system, the Bologna process, and the International Baccalaureate. This approach facilitates international compatibility.
                                </p>

                                <p className="mb-4">
                                    It's essential to understand your university's grading pattern and consider services like World Education Services (WES) or NARIC (UK) for accurate international conversions, as these evaluators use detailed equivalency tables.
                                </p>

                                <h3 id='section14' className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-purple-950 bg-clip-text text-transparent mt-6 mb-4">
                                    What is a Multiplication Factor and How Does it Work?
                                </h3>

                                <p className="mb-4">
                                    A multiplication factor is a parameter for converting grading scales, such as CGPA or GPA to percentages. This factor is essential for adapting grades to different formats when applying to institutions with different grading systems or for jobs and exams.
                                </p>

                                <p className="mb-4">
                                    For example, a factor of 9.5 is widely used in some universities to convert CGPA to percentage, developed to reflect students' academic performance accurately.
                                </p>

                                <p className="mb-4">
                                    To understand grading conversions better, international students should refer to official services like WES or NARIC.
                                </p>
                            </div>

                            <div>
                                <h3
                                    id="section15"
                                    className="text-xl font-semibold text-blue-400 mt-6 mb-4"
                                >
                                    CGPA to Percentage Conversion for Different Boards and Universities
                                </h3>
                                <table className="table-auto w-full border-collapse border-blue-400 border p-2 text-left mb-6">
                                    <thead>
                                        <tr className="bg-blue-100 dark:bg-blue-800">
                                            <th className="border border-blue-400 p-2">Board/University</th>
                                            <th className="border border-blue-400 p-2">Conversion Formula</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-blue-400 p-2">CBSE (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 9.5</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">ICSE (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 9.8 (may vary by school)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Maharashtra State Board (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 9.5</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Anna University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 10</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Jawaharlal Nehru Technological University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 10</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Visvesvaraya Technological University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 9.1 (may vary by department)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Gujarat Technological University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = (CGPA * 7.1) + 12</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">University of Mumbai (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = (CGPA * 7.25) + 11</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Manipal Academy of Higher Education (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 10</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Amity University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 9</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Vellore Institute of Technology (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 9.5 (varies by program)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Savitribai Phule Pune University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 6.3</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">IITs (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 10</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">NITs (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 10</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">BITS Pilani (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 10</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Delhi University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 9.5 (may vary by program)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Banaras Hindu University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 10</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Osmania University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 10</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Punjab University (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 9.5</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">SRM Institute of Science and Technology (India)</td>
                                            <td className="border border-blue-400 p-2">Percentage = CGPA * 10</td>
                                        </tr>
                                        <tr className="bg-blue-100 dark:bg-blue-800">
                                            <th colSpan="2" className="text-center p-2">International Institutions</th>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">University of Toronto (Canada)</td>
                                            <td className="border border-blue-400 p-2">GPA scale (4.0), no direct conversion</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">University of British Columbia (Canada)</td>
                                            <td className="border border-blue-400 p-2">GPA scale: 4.33; conversion guidance available</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Australian National University (Australia)</td>
                                            <td className="border border-blue-400 p-2">Conversion: CGPA * 7.1 for equivalency</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">University of Sydney (Australia)</td>
                                            <td className="border border-blue-400 p-2">
                                                Typically requires credential evaluation
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">University of California (USA)</td>
                                            <td className="border border-blue-400 p-2">
                                                GPA scale: 4.0; use WES conversion guidance
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Harvard University (USA)</td>
                                            <td className="border border-blue-400 p-2">
                                                Uses WES for CGPA/GPA conversion
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">University of Oxford (UK)</td>
                                            <td className="border border-blue-400 p-2">
                                                UK Honours classification; conversion through GPA bands
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">ETH Zurich (Switzerland)</td>
                                            <td className="border border-blue-400 p-2">
                                                Swiss 6-point scale; CGPA = 8.5 is competitive
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Auckland University of Technology (AUT), New Zealand</td>
                                            <td className="border border-blue-400 p-2">
                                                4.3-point scale; GPA = : Requires international CGPA evaluation; typically expects
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">National Taiwan University (NTU), Taiwan</td>
                                            <td className="border border-blue-400 p-2">
                                                9-point scale; CGPA = : For Indian CGPA, often uses the conversion factor of 7.1 to align with local standards.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">Peking University, China</td>
                                            <td className="border border-blue-400 p-2">
                                                4.0-point scale; GPA = : May request CGPA conversion through services like
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">McGill University, Canada</td>
                                            <td className="border border-blue-400 p-2">
                                                4.0-point scale; GPA = : McGill uses WES or similar services for CGPA conversions and generally considers 80%+ as competitive.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2">University of Cape Town, South Africa</td>
                                            <td className="border border-blue-400 p-2">
                                                Percentage and GPA = :Uses a 4-point GPA scale for international students and may request CGPA conversion to align with South African standards.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-400 p-2"> University of Tokyo, Japan</td>
                                            <td className="border border-blue-400 p-2">
                                                Japanese 4.0 GPA scale = :Converts CGPA to Japanese GPA with guidance from the admissions department. Often expects a CGPA above 8.0 for competitive programs.
                                            </td>
                                        </tr>
                                        {/* Add more rows for additional institutions as needed */}
                                    </tbody>
                                </table>
                            </div >
                            <div>
                                <h3 id='section16' className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-purple-950 bg-clip-text text-transparent mt-6 mb-4">
                                    What are the Impacts of Different Grading Scales on Students?
                                </h3>
                                <p className="mb-4">
                                    Having different grading scales can have varying impacts on students. It can affect students' academic mindset, career prospects, and even social dynamics.
                                </p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>
                                        <strong>Increased Peer/Social Pressure:</strong> Precise scales such as percentages can increase peer or social pressure among students, while broader scales such as Letter Grading can result in reduced pressure. This is also one of many reasons that several institutions follow broader scales, especially for lower classes.
                                    </li>
                                    <li>
                                        <strong>Career Opportunities:</strong> Career opportunities might also be affected. Varying grading scales can increase difficulties for students to get their applications passed for scholarships, admissions, and even jobs. Recently, there was a case with a friend of mine where his job application was put on hold because the board from which he had done matriculation did not provide any additional certificate mentioning the percentage. Instead, they only provide a marksheet with precise marks. However, the candidate was alleged to have the passing certificate lost even though he didn't have any in the first case.
                                    </li>
                                    <li>
                                        <strong>Academic Prospect:</strong> Varying grading scales can also impact the prospects of students in academic life. One student studying under a precise grading system will have a different mindset about the examinations than a student studying under a broader grading system. Former students might focus more on exams, while later students might prioritize working on practical projects over exams, thus having better practical knowledge. Such variations can fuel unnecessary pressure on the students.
                                    </li>
                                    <li>
                                        <strong>Closing Remarks:</strong> We have tried to cover all the essential information that you should know about the grading system, grade conversion, CGPA to percentage calculation, percentage to CGPA, and CGPA calculator. Also, we have designed our CGPA calculator to work accurately for any grading scale or multiplication factor. However, if you feel you need clarification regarding any of the topics or want to give suggestions about this particular calculator, then please contact us.
                                    </li>
                                </ul>
                            </div>


                            <div>
                                <h3 id='section17' className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-purple-950 bg-clip-text text-transparent mt-6 mb-4">FAQs related to CGPA Calculator</h3>
                                <div className="mb-4">
                                    <strong>Q1. Is there a difference between CGPA & GPA?</strong>
                                    <p className="ml-4">
                                        Yes, CGPA and GPA differ in scope. While GPA represents your performance in a single semester, CGPA averages the GPA scores across multiple semesters, showing an overall academic performance. Use a CGPA calculator to see the difference in values, and try converting GPA to CGPA if your institution supports that.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q2. Does the CGPA conversion formula vary by institution?</strong>
                                    <p className="ml-4">
                                        Absolutely. Many institutions have unique CGPA conversion formulas. For instance, some use a factor of 9.5 to convert CGPA to percentage, while others apply different multipliers. Checking the formula used by your institution is important for an accurate CGPA to percentage conversion. A CGPA calculator can be tailored to specific university requirements.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q3. Why am I not getting an accurate percentage from CGPA?</strong>
                                    <p className="ml-4">
                                        An inaccurate CGPA to percentage result could stem from using the wrong conversion factor or formula. Different institutions have different methods, so it’s essential to use a CGPA to percentage calculator designed for your institution or verify the multiplier applied. Calculating the percentage accurately may require a specialized CGPA calculator.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q4. How to convert CGPA into percentage?</strong>
                                    <p className="ml-4">
                                        To convert CGPA into percentage, multiply your CGPA by the institution-specific factor (often 9.5). This straightforward method works for many, but a CGPA to percentage calculator simplifies it. If you need to reverse the process, try a percentage to CGPA calculator.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q5. How do you convert a 7.6 CGPA to percentage?</strong>
                                    <p className="ml-4">
                                        To convert a 7.6 CGPA to percentage, multiply 7.6 by the conversion factor (typically 9.5). This gives a result of 72.2%. A CGPA to percentage calculator automates this and ensures accuracy.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q6. What is 7.8 CGPA in Percentage?</strong>
                                    <p className="ml-4">
                                        Using the common factor of 9.5, 7.8 CGPA translates to 74.1% in percentage. You can double-check with a CGPA to percentage calculator for quick results.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q7. What is CGPA to Percentage Calculator out of 4?</strong>
                                    <p className="ml-4">
                                        Some universities operate on a 4-point scale. To convert CGPA to percentage out of 4, find your GPA on a scale of 4, then use an appropriate conversion factor. Specialized calculators, such as a CGPA to percentage calculator out of 4, can handle this conversion for you.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q8. What is VTU CGPA to percentage formula?</strong>
                                    <p className="ml-4">
                                        CGPA to percentage VTU formula is Percentage = CGPA * 9.1 (may vary by department).
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q9. How to convert CGPA into percentage for Engineering?</strong>
                                    <p className="ml-4">
                                        Engineering colleges may use different formulas or conversion factors. Engineering students should verify their college’s method or use an engineering-specific CGPA calculator to convert CGPA to percentage accurately.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q10. Is CGPA to Percentage Calculator DU different?</strong>
                                    <p className="ml-4">
                                        Yes, Delhi University (DU) uses its own formula. DU students should use a DU-specific CGPA to percentage calculator for accurate results and align with DU's grading standards.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q11. How to calculate percentage from CGPA?</strong>
                                    <p className="ml-4">
                                        To calculate the percentage from CGPA, multiply the CGPA by a conversion factor (often 9.5). A CGPA calculator simplifies this, or you can try a percentage to CGPA calculator if you need the reverse.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q12. What is SPPU CGPA to Percentage calculation formula?</strong>
                                    <p className="ml-4">
                                        Savitribai Phule Pune University (SPPU) has a unique CGPA to percentage calculation method. You can use an SPPU-specific CGPA calculator or consult their guidelines for accurate conversion.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q13. What is Makaut CGPA to Percentage calculator formula?</strong>
                                    <p className="ml-4"> Makaut is an online platform.
                                        Makaut CGPA to Percentage calculator’s formula is Percentage = (CGPA – 0.75) * 10.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <strong>Q14. What is CGPA to Percentage GTU Formula?</strong>
                                    <p className="ml-4">
                                        CGPA to Percentage GTU formula is Percentage = (CGPA * 7.1) + 12.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <strong>Q15. How to find percentage from CGPA?</strong>
                                    <p className="ml-4">
                                        You can either manually calculate using the formula given above or use this calculator to find your percentage.
                                    </p>
                                </div>
                            </div>

                        </section >
                    </>
                )}
            </div>

            <div className="text-center translate-y-[-250px] translate-x-[-5px]">
                <button
                    onClick={toggleMainExpand}
                    className="text-blue-600 hover:text-blue-800   mt-4  dark:text-gray-400 text-4xl dark:hover:text-blue-600 animate-bounce transition-all duration-300 focus:outline-none"
                >
                    {isMainExpanded ? (
                        <div className="flex justify-center items-center w-8 h-14 rounded-full bg-gradient-to-b from-indigo-600 to-blue-500 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white transform rotate-180"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 17V7" /> 
                                <path d="M9 10L12 7L15 10" /> 
                            </svg>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center w-8 h-14  rounded-full bg-gradient-to-b from-indigo-600 to-blue-500 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 7V17" /> 
                                <path d="M9 14L12 17L15 14" />
                            </svg>
                        </div>
                    )}

                </button>
            </div>
        </div >
    );
};
export default CgpaContent;
