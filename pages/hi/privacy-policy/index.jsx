import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <div className="flex-grow flex flex-col justify-center bg-gradient-to-b from-[#f0f4fc] to-[#e2e8f0] dark:from-gray-900 dark:to-gray-800 py-4 relative overflow-hidden">
               
                <svg
                    className="absolute inset-0 h-full w-full -z-51 dark:hidden"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    fill="currentColor"
                >
                    <circle cx="10" cy="30" r="20" opacity="0.2" />
                    <circle cx="80" cy="80" r="30" opacity="0.1" />
                </svg>

                <main className="relative p-5 w-full max-w-3xl mx-auto z-10">
                    <div className="text-center py-4">
                        <div className="mb-2 p-5 mt-4">
                            <h1 className="text-5xl cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 drop-shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                                Privacy Policy
                            </h1>
                        </div>
                        <div className="space-y-6 p-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>Welcome to Lord Calculator! We respect your privacy and are committed to protecting any personal information you may provide while using our website. This Privacy Policy outlines the types of information we may collect from you and how we use and safeguard it.</p>

                            <h2 className="text-xl font-semibold mt-4">1. Information We Do Not Collect</h2>
                            <p>Our website is a static calculator site, and we do not actively collect, store, or require any personal information from our users. You may use our calculators without sharing any identifiable information with us.</p>

                            <h2 className="text-xl font-semibold mt-4">2. Automatically Collected Information</h2>
                            <p>Like many websites, we may use basic analytics tools (such as Google Analytics) to help us understand user interactions with our site. This information is anonymized and includes non-identifiable data such as:</p>
                            <ul className="list-disc list-inside">
                                <li>Device type and browser type</li>
                                <li>Operating system</li>
                                <li>Date and time of visit</li>
                                <li>Pages visited and time spent on each page</li>
                            </ul>
                            <p>This data helps us improve our website’s functionality and user experience but does not allow us to identify individual users.</p>

                            <h2 className="text-xl font-semibold mt-4">3. Cookies</h2>
                            <p>Our website does not use cookies to track or store personal data. However, if any third-party analytics are integrated, they may use cookies to gather anonymized usage statistics. You can manage or disable cookies through your browser settings if desired.</p>

                            <h2 className="text-xl font-semibold mt-4">4. Third-Party Links</h2>
                            <p>Our website may include links to external sites. These third-party sites have their own privacy policies, and we are not responsible for their content or practices. We encourage users to review the privacy policies of any sites they visit through our links.</p>

                            <h2 className="text-xl font-semibold mt-4">5. Data Security</h2>
                            <p>Although we do not collect personal information, we prioritize maintaining a secure environment for our users. We use secure hosting and regularly update our website to protect against vulnerabilities.</p>

                            <h2 className="text-xl font-semibold mt-4">6. Children's Privacy</h2>
                            <p>Our website is suitable for users of all ages, but it is not directed towards children under the age of 13. Since we do not collect personal data, we comply with the Children’s Online Privacy Protection Act (COPPA).</p>

                            <h2 className="text-xl font-semibold mt-4">7. Changes to This Privacy Policy</h2>
                            <p>We may update our Privacy Policy occasionally. Changes will be posted on this page, and the "Last updated" date at the top will reflect the latest revision. We encourage users to review this page periodically to stay informed about any updates.</p>

                            <h2 className="text-xl font-semibold mt-4">8. Contact Us</h2>
                            <p>If you have questions about this Privacy Policy, please contact us at:</p>
                            <p><Link href='/'><strong>Lord Calculator</strong><br />Email: bhushanthakur04@gmail.com</Link></p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
