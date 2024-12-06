import { useState, useEffect } from "react";
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from "react-i18next";


const GpaContent = () => {
    const [isMainExpanded, setIsMainExpanded] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const theme = useTheme();
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
            <div className="gpa-content p-4">
                <h2 id="section1" className="text-3xl font-bold  mb-4 text-blue-500 dark:text-white">{t("gpa_to_cgpa_calculator")}</h2>

                <p className="text-lg mb-6 text-gray-800 dark:text-gray-200">
                    {t("welcome_message")}
                    <a href="/cgpa-to-percentage" className="text-blue-600 hover:text-blue-800 transition duration-300"> {t("cgpa_to_percentage_link")}</a>
                    {t("gpa_to_cgpa_description")}
                    <a href="/letter-grading" className="text-blue-600 hover:text-blue-800 transition duration-300"> {t("letter_grading_link")}</a>
                </p>

                <p className="text-lg mb-6 text-gray-800 dark:text-gray-200">
                    {t("institution_migration_message")}</p>

                <p className="text-lg mb-6 text-gray-800 dark:text-gray-200">
                    {t("guide_message")}</p>
                <div className="bg-white  rounded-lg shadow-lg max-w-4xl mx-auto border-t-4 mt-8 mb-4 dark:bg-gray-800 dark:border lue-400">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl p-4 font-semibold text-blue-600 dark:text-blue-400">{t("Table of Contents")}</h2>
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
                                    t("GPA to CGPA Calculator"),
                                    t("GPA To CGPA Calculation Formula"),
                                    t("How to Use Lord Calculator’s GPA to CGPA Calculator?"),
                                    t("How CGPA & GPA Are Different?"),


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
                                    t("International Standards and Certifications"),
                                    t("Most Common GPA to CGPA Conversion Scenarios"),
                                    t("Summary"),
                                    t("FAQs (Frequently Asked Questions)"),


                                ].map((item, index) => (
                                    <li key={index + 5}>
                                        <button
                                            onClick={() => {
                                                scrollToSection(`section${index + 5}`)
                                                setIsMainExpanded(isMainExpanded === index + 5 ? null : index + 5);
                                            }}
                                            className="w-full text-left text-blue-600 hover:text-blue-800 focus:outline-none transition-all hover:scale-[102%] duration-300 dark:text-blue-400 dark:hover:text-blue-600"
                                        >
                                            {index + 5}. {item}
                                        </button>
                                    </li>
                                ))}
                                {!isMainExpanded && (
                                    <div className="absolute bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
                                )}
                            </ol>

                        </div>
                    )}

                </div>
                {isMainExpanded && (
                    <>
                        <h2 id="section2" className="text-2xl font-semibold mt-8 mb-6 text-blue-500 dark:text-white">
                            {t("GPA To CGPA Calculation Formulas")}
                        </h2>
                        <div className="text-center mb-8">
                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {t("Equivalent CGPA =")}
                                <span className="inline-block ml-4 align-middle">
                                    <div className="border-b border-gray-600 dark:border-gray-400 pb-2">
                                        {t("GPA obtained")}
                                    </div>
                                    <span className="block text-sm text-gray-600 dark:text-gray-400">{t("Max GPA")}</span>
                                </span>
                                × {t("Max CGPA")}
                            </p>
                        </div>


                        <h3 className="text-xl font-semibold mt-8 mb-6 text-gray-900 dark:text-white">
                            {t("How to Calculate GPA?")}
                        </h3>
                        <div className="text-center mb-8">
                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {t("GPA =")}
                                <span className="inline-block ml-4 align-middle">
                                    <div className="border-b border-gray-600 dark:border-gray-400 pb-2">
                                        {t("Total Quality Points for all terms.")}
                                    </div>
                                    <span className="block text-sm text-gray-600 dark:text-gray-400">
                                        {t("Total Credit Hours for all terms.")}
                                    </span>
                                </span>
                            </p>
                        </div>


                        <p className="text-lg mb-6 text-gray-800 dark:text-gray-200">
                            {t("quality points")}
                        </p>

                        <h2 id="section3" className="text-2xl font-semibold text-blue-500 mt-6 mb-4">
                            {t("How to Use Lord Calculator’s GPA to CGPA Calculator?")}
                        </h2>
                        <p className="text-md mb-4">
                            {t("Although we have made our calculator easy to use, still here is a guide to make the best out of it without losing yourself in the numerators and denominators of the grades calculations. To convert your GPA into an equivalent CGPA, follow below given steps:")}
                        </p>
                        <ol className="list-decimal pl-5 mb-6">
                            <li>{t("Step 1: Open GPA to CGPA calculator on Lord Calculator.")}</li>
                            <li>{t("Step 2: In the very first field, titled Enter GPA, please enter your obtained GPA accurately. Do ensure to include decimal points for accurate conversion.")}</li>
                            <li>{t("Step 3: Now choose your GPA Scale. This scale also indicates what could be the maximum GPA.")}</li>
                            <li>{t("Step 4: Once you have entered all the values correctly, hit the “Calculate” button. And, that is all! Now you have an equivalent CGPA in front of view, also visualized by the CGPA meter.")}</li>
                        </ol>
                        <p className="text-md mb-4">
                            {t("Furthermore, you can also view any previous calculations done by you so that you can have a start comparison among them. You can also export the converted CGPA as a PDF and share it with others.")}
                        </p>

                        <h2 id="section4" className="text-2xl font-semibold text-blue-500 mt-6 mb-4">
                            {t("How CGPA & GPA Are Different?")}
                        </h2>
                        <p className="text-md mb-4">
                            {t("CGPA & GPA are different from many perspectives. [Definition of both the terms] itself indicates the basic difference between them. But let us talk about how they are different in their applications and usage.")}
                        </p>

                        <h4 className="text-md font-semibold mt-4 mb-2">
                            {t("Denomination")}
                        </h4>
                        <p className="text-md mb-4">
                            {t("As the name suggests, CGPA (Cumulative Grade Point Average) represents the cumulative or combined performance of a student during his academic session. It usually represents the performance of multiple semesters in a concise manner.")}
                        </p>
                        <p className="text-md mb-4">
                            {t("On the other hand, GPA (Grade Point Average) represents the academic performance of a particular semester, or say, a very specific term/semester. Thus, in a way, CGPA is calculated by averaging the GPA scores from multiple semesters.")}
                        </p>

                        <h4 className="text-md font-semibold mt-4 mb-2">
                            {t("Usage")}
                        </h4>
                        <p className="text-md mb-4">
                            {t("Like denomination, the usage of both scales is also different. CGPA is considered as overall academic performance of a student while GPA is considered for a specific semester or term.")}
                        </p>
                        <p className="text-md mb-4">
                            {t("GPA is mostly used to assess and chart out how a student is performing lately and helps to identify strong points and potential improvement areas. Such grade scales are also used to determine what are the implications of a newly inducted course on the academic performance of the students. But if we talk about applying for a job or higher studies, GPA may not be the ideal grade scale.")}
                        </p>
                        <p className="text-md mb-4">
                            {t("In such scenarios, when a student is applying for higher studies or a job application, he/she is required to fill in his CGPA. Thus, CGPA is shared with external bodies while GPA is mostly used in the internal assessment.")}
                        </p>

                        <h4 className="text-md font-semibold mt-4 mb-2">
                            {t("To summarize, take a look at the below-given table:")}
                        </h4>
                        <table className="table-auto w-full dark:text-white text-center border border-collapse mb-6">
                            <thead>
                                <tr className="dark:bg-blue-500 text-white bg-blue-500">
                                    <th className="border px-4 py-2">{t("Feature")}</th>
                                    <th className="border px-4 py-2">{t("GPA")}</th>
                                    <th className="border px-4 py-2">{t("CGPA")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">{t("Scope")}</td>
                                    <td className="border px-4 py-2">{t("Single Semester / Term")}</td>
                                    <td className="border px-4 py-2">{t("Entire Academic Session")}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">{t("Calculation")}</td>
                                    <td className="border px-4 py-2">{t("Grade Points for a semester.")}</td>
                                    <td className="border px-4 py-2">{t("Cumulative Average of All semesters.")}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">{t("Purpose")}</td>
                                    <td className="border px-4 py-2">{t("Help to track and monitor the performance of a student.")}</td>
                                    <td className="border px-4 py-2">{t("Determines the overall performance of a student.")}</td>
                                </tr>
                            </tbody>
                        </table>


                        <div class="max-w-6xl mx-auto  py-8">
                            <h2 id="section5" className="text-3xl font-bold text-blue-500 mb-6">
                                {t("International Standards and Certifications")}
                            </h2>
                            <p className="text-lg mb-6">
                                {t("As we discussed earlier, grading scales such as GPA are predominantly a part of Western education systems. However, students planning to study abroad need to be aware of various international standards and certifications that are widely recognized across different educational frameworks. Understanding these can help students navigate different grading systems and ensure smooth transitions when applying to schools or universities abroad.")}
                            </p>
                            <section className="mb-8">
                                <h3 className="text-2xl font-semibold mb-4">
                                    {t("1. International Baccalaureate (IB)")}
                                </h3>
                                <p className="text-lg mb-4">
                                    {t("The International Baccalaureate (IB) is an internationally recognized educational framework designed for students aged 3 to 19. Its goal is to foster critical thinking, intercultural understanding, and global compatibility. The IB framework is divided into four main programs:")}
                                </p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>
                                        <strong>{t("Primary Years Programme (PYP)")}: </strong>
                                        {t("For students aged 3 to 12, focusing on developing academic and personal skills.")}
                                    </li>
                                    <li>
                                        <strong>{t("Middle Years Programme (MYP)")}: </strong>
                                        {t("For students aged 11 to 16, preparing them for further study.")}
                                    </li>
                                    <li>
                                        <strong>{t("Diploma Programme (DP)")}: </strong>
                                        {t("For students aged 16 to 19, a rigorous program with a 1-7 grading scale.")}
                                    </li>
                                    <li>
                                        <strong>{t("Career-related Programme (CP)")}: </strong>
                                        {t("Combines academic study with career-related learning for students aged 16 to 19.")}
                                    </li>
                                </ul>
                                <p className="text-lg">
                                    {t("The IB system is recognized globally for its academic rigor and holistic approach to education.")}
                                </p>
                            </section>


                            <h3 className="text-2xl font-semibold mb-4">
                                {t("2. Common Core State Standards (CCSS)")}
                            </h3>
                            <p className="text-lg mb-4">
                                {t("The Common Core State Standards (CCSS) were developed in the United States to standardize K-12 education in English Language Arts and Mathematics. This framework is primarily implemented in U.S. schools and focuses on providing clear and consistent benchmarks for academic achievement. The goal is to ensure students are prepared for college, careers, and global competitiveness by emphasizing critical thinking and problem-solving skills.")}
                            </p>

                            <h3 className="text-2xl font-semibold mb-4">
                                {t("3. Bologna Process and European Credit Transfer and Accumulation System (ECTS)")}
                            </h3>
                            <p className="text-lg mb-4">
                                {t("The Bologna Process is an agreement among European countries to standardize higher education. Its aim is to make academic qualifications and periods of study easily comparable and compatible across Europe. This process facilitates the movement of students between universities in different countries, ensuring that students' qualifications are recognized internationally.")}
                            </p>
                            <p className="text-lg mb-4">
                                {t("The European Credit Transfer and Accumulation System (ECTS) assigns credits to courses based on the amount of work required (usually 25-30 hours of study per credit). ECTS uses a letter grading system ranging from A to F, with F representing failure.")}
                            </p>

                            <h3 className="text-2xl font-semibold mb-4">
                                {t("4. Advanced Placement (AP) Program")}
                            </h3>
                            <p className="text-lg mb-4">
                                {t("The Advanced Placement (AP) Program is a U.S.-based initiative offered by the College Board, enabling high school students to take college-level courses and exams. These courses are equivalent to first-year college courses and are recognized internationally. The grading scale for AP exams ranges from 1 to 5, with a score of 3 being considered passing. AP is widely accepted by universities around the world, giving students the opportunity to earn college credits before completing high school.")}
                            </p>

                            <h3 className="text-2xl font-semibold mb-4">
                                {t("5. International General Certificate of Secondary Education (IGCSE)")}
                            </h3>
                            <p className="text-lg mb-4">
                                {t("The IGCSE is a globally recognized qualification offered by Cambridge Assessment International Education. It uses a grading scale ranging from A to G, with U (ungraded) representing failure. IGCSE is widely used by international schools and is known for its flexibility, allowing students to choose subjects that match their academic interests and career goals.")}
                            </p>

                            <h3 className="text-2xl font-semibold mb-4">
                                {t("6. Tertiary Education Quality and Standards Agency (TEQSA)")}
                            </h3>
                            <p className="text-lg mb-4">
                                {t("The TEQSA framework is primarily followed in Australia. It regulates higher education institutions and ensures that they meet national standards. It aligns with the Australian Qualifications Framework (AQF), which describes the qualifications and courses offered by institutions in Australia. While TEQSA is mainly followed in Australia, its recognition is global, ensuring that Australian degrees are respected internationally and enhancing students' mobility.")}
                            </p>

                            <h3 className="text-2xl font-semibold mb-4">
                                {t("7. Programme for International Student Assessment (PISA)")}
                            </h3>
                            <p className="text-lg mb-4">
                                {t("The Programme for International Student Assessment (PISA) is an international survey conducted by the OECD. Unlike the other frameworks, PISA does not provide a grading scale, but instead evaluates the effectiveness of education systems worldwide by assessing the academic performance of 15-year-old students. The data gathered helps policymakers identify strengths and weaknesses in their education systems and make informed decisions to improve standards and align educational frameworks globally.")}
                            </p>


                        </div>

                        <div class="max-w-6xl mx-auto  py-8">
                            <h2 id="section6" className="text-3xl font-bold text-blue-500 mb-6">
                                {t("Most-Common GPA to CGPA Conversion Scenarios")}
                            </h2>

                            <section className="mb-8">
                                <h3 className="text-2xl font-semibold mb-4">
                                    {t("1. U.S. GPA to CGPA Conversion (4.0 Scale)")}
                                </h3>
                                <p className="text-lg mb-4">{t("The formula used is:")}</p>
                                <p className="text-lg font-medium mb-4">CGPA = GPA × 2.5</p>
                                <p className="text-lg">{t("Thus, the conversions would look like:")}</p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li><strong>{t("4.0 GPA in CGPA is 10.0")}</strong></li>
                                    <li><strong>{t("3.5 GPA in CGPA is 8.75")}</strong></li>
                                    <li><strong>{t("3.0 GPA in CGPA is 7.5")}</strong></li>
                                    <li><strong>{t("2.0 GPA in CGPA is 5.0")}</strong></li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h3 className="text-2xl font-semibold mb-4">
                                    {t("2. U.S. GPA to CGPA (Indian) Conversion")}
                                </h3>
                                <p className="text-lg mb-4">{t("Certain Indian institutions follow a different version of GPA (4.0 scale) to CGPA (10 scale) conversion. The formula used is:")}</p>
                                <p className="text-lg font-medium mb-4">CGPA = GPA × 2 + 1</p>
                                <p className="text-lg">{t("Thus, the conversion would vary as:")}</p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li><strong>{t("4.0 GPA in CGPA is 9.0")}</strong></li>
                                    <li><strong>{t("3.5 GPA in CGPA is 8.0")}</strong></li>
                                    <li><strong>{t("3.0 GPA in CGPA is 7.0")}</strong></li>
                                    <li><strong>{t("2.0 GPA in CGPA is 5.0")}</strong></li>
                                </ul>
                            </section>


                            <section className="mb-8">
                                <h3 className="text-2xl font-semibold mb-4">
                                    {t("3. Indian Percentage to U.S. GPA Conversion (4.0 Scale)")}
                                </h3>
                                <p className="text-lg mb-4">{t("The formula used is:")}</p>
                                <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                    <span className="font-semibold">{t("GPA =")}</span>
                                    <strong className="text-6xl"> ( </strong>
                                    <span className="inline-block ml-2">
                                        <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                            Percentage - 50
                                        </div>
                                        <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3"> 10</span>
                                    </span>
                                    <strong className="text-6xl"> ) </strong>
                                    <span className="inline-block ml-4">×</span>
                                    <span className="inline-block ml-4">
                                        <div className=" border-gray-600 dark:border-gray-400 pb-2 translate-y-[-5px]">2</div>
                                    </span>
                                </p>

                                <p className="text-lg">{t("Therefore, the conversions would look like:")}</p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li><strong>{t("90% to GPA is 4.0")}</strong></li>
                                    <li><strong>{t("75% to GPA is 3.5")}</strong></li>
                                    <li><strong>{t("60% to GPA is 3.0")}</strong></li>
                                    <li><strong>{t("50% to GPA is 2.0")}</strong></li>
                                </ul>
                            </section>


                            <section className="mb-8">
                                <h3 className="text-2xl font-semibold mb-4">
                                    {t("4. ECTS Grading to GPA/CGPA")}
                                </h3>
                                <p className="text-lg mb-4">
                                    {t("Since the ECTS follows a letter grading system, their equivalent conversion looks like this:")}
                                </p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li><strong>{t("A (Top 10%) → 4.0 GPA / 9.0-10.0 CGPA")}</strong></li>
                                    <li><strong>{t("B (Next 25%) → 3.5 GPA / 7.5-8.9 CGPA")}</strong></li>
                                    <li><strong>{t("C (Next 30%) → 3.0 GPA / 6.0-7.4 CGPA")}</strong></li>
                                    <li><strong>{t("D (Next 25%) → 2.5 GPA / 5.0-5.9 CGPA")}</strong></li>
                                    <li><strong>{t("E (Minimum Passing Grade) → 2.0 GPA / 4.0-4.9 CGPA")}</strong></li>
                                </ul>
                            </section>

                            <section>
                                <p className="text-lg font-semibold">{t("Please Note:")}</p>
                                <p className="text-lg">{t("These are general conversion case studies and may not apply universally. Always refer to specific institutional guidelines before using these conversions.")}</p>
                            </section>


                        </div>
                        <div className="max-w-6xl mx-auto py-8">
                            <h2 id="section7" className="text-3xl font-bold text-blue-500 mb-6">
                                {t("Summary")}
                            </h2>

                            <section className="mb-8">
                                <p className="text-lg">
                                    {t("In this section, we discussed GPA and CGPA conversions, how they both differ from each other, and some of the international standards and frameworks followed around the globe. While we have tried to cover all the major frameworks, it is not possible to include the formula and conversion of each and every institution.")}
                                </p>
                                <p className="text-lg mt-4">
                                    {t("Therefore, we always advise you to check the official document of a specific institution before doing the conversion of your grades.")}
                                </p>
                            </section>
                        </div>

                        <div className="max-w-6xl mx-auto  py-8">
                            <h2 id="section8" className="text-3xl font-bold text-blue-500 mb-6">
                                {t("FAQs")}
                            </h2>

                            <section className="space-y-6">
                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q1. How can I convert GPA to CGPA?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. You can convert GPA to CGPA using the formula;")}
                                        <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                            <span className="font-semibold">{t("GPA =")}</span>
                                            <span className="inline-block ml-2">
                                                <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                                    {t("CGPA Obtained")}
                                                </div>
                                                <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                                    {t("Maximum CGPA")}
                                                </span>
                                            </span>
                                            <span className="inline-block ml-4">×{t("Max GPA")}</span>
                                        </p>
                                    </p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q2. What is Indian CGPA to GPA calculator?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. Indian CGPA to GPA calculator includes GPA conversion from CGPA and percentage. Please refer to the below table:")}
                                    </p>
                                    <table className="min-w-full table-auto mt-4 border-collapse border-blue-500 border text-center">
                                        <thead>
                                            <tr>
                                                <th className="py-2 px-4 border border-b text-white border-blue-500 bg-blue-500">
                                                    {t("Conversion Type")}
                                                </th>
                                                <th className="py-2 px-4 border border-b text-white border-blue-500 bg-blue-500">
                                                    {t("Formula")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border border-b border-gray-200">
                                                    {t("CGPA to 4-point GPA")}
                                                </td>
                                                <td className="py-2 px-4 border border-b border-gray-200">
                                                    <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                                        <span className="font-semibold">{t("GPA =")}</span>
                                                        <span className="inline-block ml-2">
                                                            <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                                                {t("CGPA Obtained")}
                                                            </div>
                                                            <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                                                {t("Maximum CGPA")}
                                                            </span>
                                                        </span>
                                                        <span className="inline-block ml-4">× 2.5</span>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border border-b border-gray-200">
                                                    {t("Percentage to 4-point GPA")}
                                                </td>
                                                <td className="py-2 px-4 border border-b border-gray-200">
                                                    <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                                        <span className="font-semibold">{t("GPA =")}</span>
                                                        <span className="inline-block ml-2">
                                                            <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                                                {t("Percentage Obtained")}
                                                            </div>
                                                            <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                                                100
                                                            </span>
                                                        </span>
                                                        <span className="inline-block ml-4">× 4</span>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border border-b border-gray-200">
                                                    {t("Percentage to GPA (4.3)")}
                                                </td>
                                                <td className="py-2 px-4 border border-b border-gray-200">
                                                    <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                                        <span className="font-semibold">{t("GPA =")}</span>
                                                        <span className="inline-block ml-2">
                                                            <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                                                {t("Percentage Obtained")}
                                                            </div>
                                                            <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                                                4.3
                                                            </span>
                                                        </span>
                                                        <span className="inline-block ml-4">× 100</span>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border border-b border-gray-200">
                                                    {t("Percentage to GPA (5.0)")}
                                                </td>
                                                <td className="py-2 px-4 border border-b border-gray-200">
                                                    <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                                        <span className="font-semibold">{t("GPA =")}</span>
                                                        <span className="inline-block ml-2">
                                                            <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                                                {t("Percentage Obtained")}
                                                            </div>
                                                            <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                                                20
                                                            </span>
                                                        </span>
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q3. How to calculate CGPA from GPA?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. To calculate CGPA from GPA, divide the GPA obtained by max. GPA and then multiply by the target CGPA scale. Mathematically,")}
                                    </p>
                                    <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                        <span className="font-semibold">{t("CGPA =")}</span>
                                        <span className="inline-block ml-2">
                                            <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                                {t("GPA Obtained")}
                                            </div>
                                            <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                                {t("Maximum GPA")}
                                            </span>
                                        </span>
                                        <span className="inline-block ml-4">{t("× Target CGPA Scale")}</span>
                                    </p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q4. What is 10 point CGPA to 4 GPA calculator formula?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. As mentioned in Q2 above, you can divide the CGPA by 2.5 factor and you will get an equivalent GPA. A simplified calculation is given below,")}
                                    </p>
                                    <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                        <span className="font-semibold">{t("GPA =")}</span>
                                        <span className="inline-block ml-2">
                                            <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                                {t("Obtained CGPA")}
                                            </div>
                                            <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                                {t("10(for 10-point CGPA)")}
                                            </span>
                                        </span>
                                        <span className="inline-block ml-4">{t("×")}</span>
                                        <span className="inline-block ml-4">
                                            <div className=" border-gray-600 dark:border-gray-400 pb-2 ">
                                                {t("4")}
                                            </div>
                                        </span>
                                        <span className="inline-block ml-4">{t("= ")}</span>
                                        <span className="inline-block ml-4">
                                            <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                                {t("Obtained CGPA")}
                                            </div>
                                            <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                                {t("× 2.5")}
                                            </span>
                                        </span>
                                    </p>
                                </div>


                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q5. What is the GPA to CGPA calculator Anna University Formula?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. GPA to CGPA calculator Anna University formula includes credit scores. The formula can be written as:")}
                                    </p>
                                    <p className="text-sm text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                        <span className="font-semibold">{t("GPA =")}</span>
                                        <div className="inline-block ml-2 mt-4 translate-y-3">
                                            <div className="border-b border-gray-600 dark:border-gray-400 pb-2 ">
                                                {t("Grade in Subject 1 × Credits Earned + Grade in Subject 2 × Credits Earned + Grade in Subject N × Credits Earned")}
                                            </div>
                                            <span className="block text-sm text-gray-600 dark:text-gray-400 ">
                                                {t("Sum of All Credits Earned in Each Subject")}
                                            </span>
                                        </div>
                                    </p>
                                </div>


                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q6. How to calculate CGPA from GPA in Anna University?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. CGPA to GPA calculation for Anna University is done the same as the formula mentioned at the top of this article i.e.")}
                                    </p>
                                    <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                        <span className="font-semibold">{t("CGPA =")}</span>
                                        <span className="inline-block ml-2">
                                            <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">
                                                {t("GPA Obtained")}
                                            </div>
                                            <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">
                                                {t("Maximum GPA")}
                                            </span>
                                        </span>
                                        <span className="inline-block ml-4">{t("×")}</span>
                                        <span className="inline-block ml-4">
                                            <div className="border-gray-600 dark:border-gray-400 pb-2 translate-y-[-5px]">
                                                {t("Target CGPA Scale")}
                                            </div>
                                        </span>
                                    </p>
                                    <p>
                                        {t("However, you can also go for detailed calculations as described in Q5.")}
                                    </p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q7. How SRM GPA to CGPA calculator is different?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. SRM University uses a specific formula that includes a credit-weighted average to calculate GPA. The concept of credit-weighted average is used to assign special weightage to certain subjects, such as major and minor subjects.")}
                                    </p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q8. Is the GPA to CGPA calculator for engineering different?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. Certain engineering colleges assign higher credits to core courses than elective or general courses. Thus, the weighted value for those core subjects might be higher than others.")}
                                    </p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q9. Is CGPA to GPA calculator online reliable?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. Mathematically, YES, our CGPA to GPA calculator online is reliable. However, many universities use a specific conversion method. Since it is not feasible to include all those methods, it is best to check the official guidelines first.")}
                                    </p>
                                </div>


                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q10. Convert GPA to CGPA out of 4.")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. To convert GPA to CGPA out of 4, use the below formula:")}
                                        <p className="text-lg text-gray-800 dark:text-gray-200 text-center mb-4 mt-4">
                                            <span className="font-semibold">{t("CGPA (out of 4) =")}</span>
                                            <span className="inline-block ml-2">
                                                <div className="border-b border-gray-600 dark:border-gray-400 pb-2 translate-y-2">{t("GPA Obtained")}</div>
                                                <span className="block text-sm text-gray-600 dark:text-gray-400 translate-y-3">{t("Maximum GPA on your Scale")}</span>
                                            </span>
                                            <span className="inline-block ml-4">×</span>
                                            <span className="inline-block ml-4">
                                                <div className="border-gray-600 dark:border-gray-400 pb-2 translate-y-[-5px]">4</div>
                                            </span>
                                        </p>
                                    </p>
                                </div>


                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q11. What is 3 GPA to CGPA?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. On a 4-point GPA scale, your CGPA is 3. But on a 10-point GPA scale, your CGPA is 1.2.")}
                                    </p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q12. What is 3.5 GPA to CGPA?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. On a 4-point GPA scale, your CGPA is 3.5.")}
                                        <br />
                                        {t("But on a 10-point GPA scale, your CGPA is 1.4.")}
                                        <br />
                                        {t("On a 7-point GPA scale, your CGPA is 2.")}
                                    </p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q13. What is 3.3 GPA to CGPA?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. If GPA is on a 4-point scale → 3.3 CGPA")}
                                        <br />
                                        {t("If GPA is on a 10-point scale → 1.32 CGPA")}
                                        <br />
                                        {t("If GPA is on a 7-point scale → 1.89 CGPA")}
                                    </p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-500">
                                        {t("Q14. What is a good CGPA?")}
                                    </h2>
                                    <p className="mt-2">
                                        {t("Ans. A CGPA above 8.0 is considered a good CGPA. However, this varies depending on the institution and the course.")}
                                    </p>
                                </div>


                            </section>
                        </div>
                    </>
                )}

            </div>
            <div className="text-center  ">
                <button
                    onClick={toggleMainExpand}
                    className="text-blue-600 hover:text-blue-800   dark:text-gray-400 text-4xl dark:hover:text-blue-600 animate-bounce transition-all duration-300 focus:outline-none"
                >
                    {isMainExpanded ? (
                        <div className="translate-x-10 translate-y-20">
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
                        <div className="translate-x-10 translate-y-[-28px]">
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
        </div >
    );
};

export default GpaContent;
