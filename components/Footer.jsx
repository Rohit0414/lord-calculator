import Link from 'next/link';
import { MdOutlineFacebook } from 'react-icons/md';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F6F5F2] dark:bg-gray-900 p-5 text-gray-600 dark:text-white py-4 justify-center text-center ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full md:w-1/2 xl:w-1/2 mb-4 md:mb-0">
            <div className="flex flex-col p-2">
              <h2 className="uppercase font-bold mb-4 text-3xl">
                Lord Calculator
              </h2>
              <div className=''>
                <div className="">
                  <h5 className="uppercase  font-bold ">
                    Location:
                  </h5>
                </div>
                <div className=" ">
                  <h5 className="uppercase  font-bold ">
                    Contact Us:
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 md:mb-0">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 xl:w-1/3 mb-4 md:mb-0 p-2">
                <h5 className="uppercase  font-bold mb-2">
                  Categories
                </h5>
                <ul className="list-none ">
                  <li className="">
                    <Link href="/calculators/math">
                      <i className="fas fa-calculator mr-2" /> Math Calculators
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/calculators/science">
                      <i className="fas fa-flask mr-2" /> Science Calculators
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/calculators/finance">
                      <i className="fas fa-dollar-sign mr-2" /> Finance Calculators
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 xl:w-1/3 mb-4  md:mb-0">
                <h5 className="uppercase  font-bold mb-2 p-2 ">
                  Pages
                </h5>
                <ul className="list-none ">
                  <li className="">
                    <Link href="/privacy-policy">
                      <i className="fas fa-lock mr-2" /> Privacy Policy
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/terms-of-use">
                      <i className="fas fa-balance-scale mr-2" /> Terms of Use
                    </Link>
                  </li>
                  <li>
                  <Link href="/about-us">
                      <i className="fas fa-lock mr-2" /> About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer className='flex justify-center bg-[#F6F5F2] dark:bg-gray-900 text-gray-700 dark:text-white mt-8 p-4 '>
          <p className='mr-4'>&copy; 2024 Your Company Name. All rights reserved.</p>
          <ul className='flex flex-row '>
            <li className='p-1'>
              <Link href="#" target="_blank">
                <MdOutlineFacebook />
              </Link>
            </li>
            <li className='p-1'>
              <Link href="#" target="_blank">
                <FaInstagram />
              </Link>
            </li>
            <li className='p-1'>
              <Link href="#" target="_blank">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;