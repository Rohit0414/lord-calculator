import Link from 'next/link';
import { WhatsappIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'next-share';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#F6F5F2] dark:bg-gray-900 p-5 text-gray-600 dark:text-white py-4 justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 xl:w-1/2 mb-4 md:mb-0">
            <div className="flex flex-col p-2">
              <h2 className=" font-bold mb-4 text-3xl">
                {t('footer.title')}
              </h2>
              <div>
                <div>
                  <h5 className="uppercase font-bold">{t('footer.location')}</h5>
                </div>
                <div>
                  <h5 className="font-light">{t('footer.contact')}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 md:mb-0">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 xl:w-1/3 mb-4 md:mb-0 p-2">
                <h5 className="uppercase font-bold mb-2">
                  {t('footer.categories')}
                </h5>
                <ul className="list-none">
                  <li>
                    <Link href="/educational-calculator">
                      <i className="fas fa-calculator mr-2" />
                      {t('footer.educational_calculators')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/scientific-calculator">
                      <i className="fas fa-flask mr-2" />
                      {t('footer.scientific_calculators')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/womens-calculator">
                      <i className="fas fa-dollar-sign mr-2" />
                      {t('footer.womens_calculators')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 xl:w-1/3 mb-4 md:mb-0">
                <h5 className="uppercase font-bold mb-2 p-2 ">
                  {t('footer.pages')}
                </h5>
                <ul className="list-none">
                  <li>
                    <Link href="/privacy-policy">
                      <i className="fas fa-lock mr-2" />
                      {t('footer.privacy_policy')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use">
                      <i className="fas fa-balance-scale mr-2" />
                      {t('footer.terms_of_use')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <i className="fas fa-lock mr-2" />
                      {t('footer.about_us')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer className='flex justify-center bg-[#F6F5F2] dark:bg-gray-900 text-gray-700 dark:text-white mt-8 p-4'>
          <p className='mr-4'>{t('footer.copyright')}</p>
          <ul className='flex flex-row'>
            <li className='p-1'>
              <Link href="/" target="_blank">
                <FacebookIcon size={15} round />
              </Link>
            </li>
            <li className='p-1'>
              <Link href="#" target="_blank">
                <InstagramIcon size={16} round />
              </Link>
            </li>
            <li className='p-1'>
              <Link href="#" target="_blank">
                <TwitterIcon size={16} round />
              </Link>
            </li>
            <li className='p-1'>
              <Link href="#" target="_blank">
                <WhatsappIcon size={15} round />
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;