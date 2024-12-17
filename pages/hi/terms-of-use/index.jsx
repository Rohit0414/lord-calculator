import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function TermsOfUse() {
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
                                Terms of Use
                            </h1>
                        </div>
                        <div className="space-y-6 p-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>Welcome to Lord Calculator! By accessing and using Lord Calculator, you agree to comply with these Terms of Use. Please read these terms carefully as they outline the rules and regulations for using our website. If you do not agree to these terms, please refrain from using our site.</p>

                            <h2 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h2>
                            <p>By accessing Lord Calculator, you accept and agree to be bound by these Terms of Use and our Privacy Policy. These terms apply to all visitors, users, and others who access or use the site.</p>

                            <h2 className="text-xl font-semibold mt-4">2. Use of Our Website</h2>
                            <p>You are granted a limited, non-exclusive, non-transferable, and revocable license to use our website solely for personal and non-commercial purposes. You agree not to use the site for any unlawful purposes, including but not limited to:</p>
                            <ul className="list-disc list-inside">
                                <li>Attempting to hack or disrupt the website’s functionality</li>
                                <li>Uploading or distributing viruses or harmful code</li>
                                <li>Attempting to gain unauthorized access to any part of the site</li>
                                <li>Using our calculators for any illegal activities</li>
                            </ul>

                            <h2 className="text-xl font-semibold mt-4">3. Intellectual Property</h2>
                            <p>All content on this website, including but not limited to text, graphics, logos, and calculators, is the intellectual property of Lord Calculator or its licensors. You may not reproduce, distribute, or exploit any part of our content for commercial purposes without our explicit written permission.</p>

                            <h2 className="text-xl font-semibold mt-4">4. Disclaimer of Warranties</h2>
                            <p>Our website and its content are provided on an "as-is" and "as available" basis without any warranties of any kind, either express or implied. While we strive to ensure accuracy, Lord Calculator makes no warranty that:</p>
                            <ul className="list-disc list-inside">
                                <li>The calculators are error-free or complete</li>
                                <li>The site will be free from interruptions or technical issues</li>
                            </ul>

                            <h2 className="text-xl font-semibold mt-4">5. Limitation of Liability</h2>
                            <p>To the fullest extent permitted by law, Lord Calculator shall not be liable for any damages resulting from the use or inability to use our site, including but not limited to indirect, incidental, punitive, or consequential damages.</p>

                            <h2 className="text-xl font-semibold mt-4">6. Third-Party Links</h2>
                            <p>Our website may include links to third-party websites for your convenience. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. Accessing these links is at your own risk, and we recommend reviewing the terms and privacy policies of any third-party websites you visit.</p>

                            <h2 className="text-xl font-semibold mt-4">7. Modifications to Terms</h2>
                            <p>Lord Calculator reserves the right to modify these Terms of Use at any time. Changes will be posted on this page, with the "Last updated" date indicating the most recent revision. Continued use of the website after changes are posted signifies your acceptance of the new terms.</p>

                            <h2 className="text-xl font-semibold mt-4">8. Governing Law</h2>
                            <p>These Terms of Use shall be governed by and construed in accordance with the laws of Your Jurisdiction/State/Country, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved exclusively in the courts.</p>

                            <h2 className="text-xl font-semibold mt-4">9. Contact Us</h2>
                            <p>If you have questions regarding these Terms of Use, please contact us at:</p>
                            <p><Link href='/'><strong>Lord Calculator</strong><br />Email: bhushanthakur04@gmail.com</Link></p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
