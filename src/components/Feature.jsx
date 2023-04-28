import { possibility } from '../assets';
import { feature, feature2, featureLinks } from '../constants';
import styles from '../style';

const Feature = () => (
  <section>
    <div className="feature__gradient absolute z-[-1] left-[-10%]"></div>
    <div className="flex md:flex-row flex-col">
      <div className="flex-1 md:pr-28 mb-4">
        <h3 className={`${styles.heading2} header-text-gradient py-4`}>
          {feature.heading}
        </h3>
        <p className="header-text-gradient">{feature.text}</p>
      </div>

      <div className="flex flex-1 flex-col">
        {featureLinks.map((feature, index) => (
          <div className="sm:p-4 flex md:flex-row flex-col mt-4" key={index}>
            <div className="absolute header-gradient"></div>
            <h4 className={`${styles.heading3} text-white`}>
              {feature.heading}
            </h4>
            <p className={`${styles.paragraph} text-lightBlue sm:mt-4`}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className="flex-auto md:max-w-[60%] max-w-[100%]">
        <img src={possibility} alt="people" />
      </div>
      <div className="flex-1 mb-4 justify-center self-center">
        <p className="text-lightBlue md:flex hidden">{feature2.text}</p>
        <h3 className={`${styles.heading2} header-text-gradient py-4`}>
          {feature2.heading}
        </h3>
        <p className="text-lightBlue sm:py-8 py-2">{feature2.paragraph}</p>
        <p className="text-[#FF8A71]">{feature2.text}</p>
      </div>
    </div>
  </section>
);

export default Feature;
