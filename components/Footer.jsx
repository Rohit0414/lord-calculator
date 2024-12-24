import Link from 'next/link';
import { WhatsappIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'next-share';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#F6F5F2] dark:bg-gray-900 text-gray-600 dark:text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Footer Left Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex flex-col p-4">
              <h2 className="font-bold text-2xl md:text-3xl mb-4">
                {t('footer.title')}
              </h2>
              <div>
                <h5 className="uppercase font-bold mb-2">
                  {t('footer.location')}
                </h5>
                <h5 className="font-light">
                  Contact Us: bhuvibhai786@gmail.com
                </h5>
              </div>
            </div>
          </div>
         
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap">
              {/* Categories Section */}
              <div className="w-full sm:w-1/2 md:w-1/3 mb-8 sm:mb-0 p-4">
                <h5 className="uppercase font-bold mb-2">
                  {t('footer.categories')}
                </h5>
                <ul className="list-none">
                  <li className="mb-2">
                    <Link href="/educational-calculator">
                      <i className="fas fa-calculator " />
                      {t('footer.educational_calculators')}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/scientific-calculator">
                      <i className="fas fa-flask " />
                      {t('footer.scientific_calculators')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/womens-calculator">
                      <i className="fas fa-dollar-sign" />
                      {t('footer.womens_calculators')}
                    </Link>
                  </li>
                </ul>
              </div>
             
              <div className="w-full sm:w-1/2  md:w-1/3 mb-8 sm:mb-0 p-4">
                <h5 className="uppercase font-bold mb-2">
                  {t('footer.pages')}
                </h5>
                <ul className="list-none">
                  <li className="mb-2">
                    <Link href="/privacy-policy">
                      <i className="fas fa-lock " />
                      {t('footer.privacy_policy')}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/terms-of-use">
                      <i className="fas fa-balance-scale" />
                      {t('footer.terms_of_use')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <i className="fas fa-lock " />
                      {t('footer.about_us')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
       
        <div className="flex flex-col sm:flex-row items-center justify-center mt-8">
          <p className="text-center sm:mr-4 mb-4 sm:mb-0">
            {t('footer.copyright')}
          </p>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" target="_blank">
                <FacebookIcon size={20} round />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <InstagramIcon size={20} round />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <TwitterIcon size={20} round />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <WhatsappIcon size={20} round />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>

  );
};

export default Footer;