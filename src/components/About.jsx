import { about, aboutLinks } from '../constants';
import styles from '../style';

const About = () => (
  <section id="gpt" className={`bg-blue-800 about-card ${styles.innerPadding}`}>
    <div className="sm:p-4 flex md:flex-row flex-col">
      <div className="absolute header-gradient"></div>
      <h3 className={`${styles.heading3} text-white`}>{about.heading}</h3>

      <p className={`${styles.paragraph} text-lightBlue`}>{about.text}</p>
    </div>
    <div className="md:flex sm:p-4 py-4 justify-between items-center md:my-20">
      <h3 className={`${styles.heading2} font-[34px] header-text-gradient`}>
        The possibilities are beyond
        <br className="sm:block hidden" /> your imagination
      </h3>
      <p className="header-text-gradient">Explore The Library</p>
    </div>
    <div className="flex md:flex-row flex-col">
      {aboutLinks.map((link, index) => (
        <div className="sm:p-4 flex flex-col mt-4" key={index}>
          <div className="absolute header-gradient"></div>
          <h3 className={`${styles.heading3} text-white`}>{link.heading}</h3>
          <p className={`${styles.paragraph} text-lightBlue sm:mt-4`}>
            {link.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default About;
