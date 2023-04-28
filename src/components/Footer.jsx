import { logo } from '../assets';
import { footerLinks } from '../constants';
import styles from '../style';

const Footer = () => (
  <footer className="bg-[#031B34]">
    <div className={`${styles.pageWidth} ${styles.padding}`}>
      <div className={`${styles.innerPadding}`}>
        <div className="justify-center">
          <h1
            className={`header-text-gradient ${styles.heading1} text-center md:p-6 pb-2`}
          >
            Do you want to step into the future before others?
          </h1>
          <div className="flex justify-center">
            <a
              href="#"
              className="border-2 text-center border-white text-white md:p-6 p-3"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.pageWidth} ${styles.padding}`}>
      <div className="w-full flex sm:flex-row flex-col justify-between">
        <div className="md:flex hidden">
          <img
            src={logo}
            alt="GPT-3"
            className="max-w-[150px] object-contain"
          />
        </div>
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-bold md:text-[18px] text-[16px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none ms:mt-4 mt-0">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={` font-normal md:text-[16px] text-[12px] leading-[24px] text-white hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1
                      ? 'sm:mb-4 mb:0'
                      : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <p className="text-white text-xs text-center sm:mt-12 mt-0">
      &copy;&nbsp;{new Date().getFullYear()} GPT-3. All Rights Reserved.
    </p>
  </footer>
);
export default Footer;
